"use server";

import {
  enquiryEmailHtml,
  type EnquiryField,
} from "@/actions/mail/enquiry-email";
import { maxAttachmentBytes, sendMail } from "@/actions/mail/send-mail";

export type EnquiryResult =
  | { ok: true; message: string; enquiryId?: string }
  | { ok: false; error: string };

const allowedFiles = new Set(["application/pdf", "image/jpeg", "image/png"]);

function value(form: FormData, name: string, max = 500) {
  const item = form.get(name);
  return typeof item === "string" ? item.trim().slice(0, max) : "";
}

// Handles both website forms: the homepage / booking energy review and the
// contact form. Only a real, delivered enquiry gets an enquiryId, which the
// client uses to fire the Google Ads conversion.
export async function submitEnquiry(form: FormData): Promise<EnquiryResult> {
  try {
    // Honeypot field: bots fill it, people never see it.
    if (value(form, "website")) return { ok: true, message: "Thank you." };

    const fullName = value(form, "fullName", 120);
    const company = value(form, "company", 160);
    const email = value(form, "email", 200).toLowerCase();
    const service = value(form, "service", 120);
    const message = value(form, "message", 4000);
    const consent = value(form, "consent", 10);

    if (!fullName || !email || !service || !message || consent !== "yes")
      return {
        ok: false,
        error: "Please complete the required fields and privacy consent.",
      };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return { ok: false, error: "Please enter a valid work email address." };

    const attachments: {
      name: string;
      contentType: string;
      bytes: Uint8Array;
    }[] = [];
    const bill = form.get("bill");
    if (bill instanceof File && bill.size > 0) {
      if (!allowedFiles.has(bill.type))
        return { ok: false, error: "Bills must be PDF, JPG or PNG files." };
      if (bill.size > maxAttachmentBytes)
        return { ok: false, error: "The bill file must be 3 MB or smaller." };
      attachments.push({
        name: bill.name || "utility-bill",
        contentType: bill.type,
        bytes: new Uint8Array(await bill.arrayBuffer()),
      });
    }

    const fields: EnquiryField[] = [
      ["Full name", fullName],
      ["Company", company],
      ["Job title", value(form, "jobTitle", 120)],
      ["Work email", email],
      ["Telephone", value(form, "telephone", 60)],
      ["Company number", value(form, "companyNumber", 12)],
      ["Postcode", value(form, "postcode", 20)],
      ["Premises address", value(form, "address", 300)],
      ["Business type", value(form, "businessType", 120)],
      ["Number of sites", value(form, "siteCount", 5)],
      ["Enquiry relates to", service],
      ["Initial interest (from homepage)", value(form, "initialInterest", 120)],
      ["Electricity, gas or both", value(form, "fuel", 40)],
      ["Contract end date", value(form, "contractEnd", 20)],
      ["Estimated annual spend", value(form, "annualSpend", 60)],
      ["Monthly spend", value(form, "monthlySpend", 60)],
      ["Electricity contract ends", value(form, "electricityRenewal", 40)],
      ["Gas contract ends", value(form, "gasRenewal", 40)],
      ["Role in energy decisions", value(form, "role", 60)],
      ["Indicative estimate", value(form, "estimate", 120)],
      ["UTM source", value(form, "utm_source", 200)],
      ["UTM medium", value(form, "utm_medium", 200)],
      ["UTM campaign", value(form, "utm_campaign", 200)],
    ];

    const toAddress = process.env.CONTACT_TO_EMAIL || process.env.MAIL_FROM;
    if (!toAddress) {
      console.error(
        "Mail is not configured. Set CONTACT_TO_EMAIL or MAIL_FROM.",
      );
      return {
        ok: false,
        error: "The enquiry could not be sent. Please try again shortly.",
      };
    }

    await sendMail({
      to: { address: toAddress },
      replyTo: { address: email, name: fullName },
      subject: `New enquiry: ${service} — ${company || fullName}`,
      html: enquiryEmailHtml(fields, message),
      attachments,
    });

    return {
      ok: true,
      message:
        "Thank you. Your enquiry has been received and will be reviewed by SwitchZero.",
      enquiryId: crypto.randomUUID(),
    };
  } catch (error) {
    console.error("Enquiry submission failed", error);
    return {
      ok: false,
      error: "The enquiry could not be sent. Please try again shortly.",
    };
  }
}
