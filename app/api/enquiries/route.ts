import { maxAttachmentBytes, sendGraphMail } from "./graph-mail";

export const runtime = "nodejs";

const allowedFiles = new Set(["application/pdf", "image/jpeg", "image/png"]);
const maxFileSize = maxAttachmentBytes;

function value(form: FormData, name: string, max = 500) {
  const item = form.get(name);
  return typeof item === "string" ? item.trim().slice(0, max) : "";
}

const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    if (value(form, "website"))
      return Response.json({ message: "Thank you." }, { status: 201 });

    const fullName = value(form, "fullName", 120);
    const company = value(form, "company", 160);
    const email = value(form, "email", 200).toLowerCase();
    const service = value(form, "service", 120);
    const message = value(form, "message", 4000);
    const consent = value(form, "consent", 10);

    if (
      !fullName ||
      !email ||
      !service ||
      !message ||
      consent !== "yes"
    ) {
      return Response.json(
        { error: "Please complete the required fields and privacy consent." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid work email address." },
        { status: 400 },
      );
    }

    const attachments: {
      name: string;
      contentType: string;
      bytes: Uint8Array;
    }[] = [];
    const bill = form.get("bill");
    if (bill instanceof File && bill.size > 0) {
      if (!allowedFiles.has(bill.type))
        return Response.json(
          { error: "Bills must be PDF, JPG or PNG files." },
          { status: 400 },
        );
      if (bill.size > maxFileSize)
        return Response.json(
          { error: "The bill file must be 3 MB or smaller." },
          { status: 400 },
        );
      attachments.push({
        name: bill.name || "utility-bill",
        contentType: bill.type,
        bytes: new Uint8Array(await bill.arrayBuffer()),
      });
    }

    const fields = (
      [
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
      ] as [string, string][]
    ).filter(([, fieldValue]) => fieldValue);

    const html = `
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        ${fields
          .map(
            ([label, fieldValue]) =>
              `<tr><td style="color:#666"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(fieldValue)}</td></tr>`,
          )
          .join("")}
      </table>
      <p><strong>Message</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const toAddress = process.env.CONTACT_TO_EMAIL || process.env.MAIL_FROM;
    if (!toAddress) {
      console.error("Mail is not configured. Set CONTACT_TO_EMAIL or MAIL_FROM.");
      return Response.json(
        { error: "The enquiry could not be sent. Please try again shortly." },
        { status: 500 },
      );
    }

    await sendGraphMail({
      to: { address: toAddress },
      replyTo: { address: email, name: fullName },
      subject: `New enquiry: ${service} — ${company || fullName}`,
      html,
      attachments,
    });

    return Response.json(
      {
        message:
          "Thank you. Your enquiry has been received and will be reviewed by SwitchZero.",
        enquiryId: crypto.randomUUID(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Enquiry submission failed", error);
    return Response.json(
      { error: "The enquiry could not be sent. Please try again shortly." },
      { status: 500 },
    );
  }
}
