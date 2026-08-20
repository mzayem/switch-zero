import { WorkerMailer } from "worker-mailer";

const allowedFiles = new Set(["application/pdf", "image/jpeg", "image/png"]);
const maxFileSize = 8 * 1024 * 1024;

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

async function fileToBase64(file: File) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
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
      !company ||
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

    const attachments: { filename: string; content: string; mimeType?: string }[] = [];
    const bill = form.get("bill");
    if (bill instanceof File && bill.size > 0) {
      if (!allowedFiles.has(bill.type))
        return Response.json(
          { error: "Bills must be PDF, JPG or PNG files." },
          { status: 400 },
        );
      if (bill.size > maxFileSize)
        return Response.json(
          { error: "The bill file must be 8 MB or smaller." },
          { status: 400 },
        );
      attachments.push({
        filename: bill.name || "utility-bill",
        content: await fileToBase64(bill),
        mimeType: bill.type,
      });
    }

    const fields: [string, string][] = [
      ["Full name", fullName],
      ["Company", company],
      ["Job title", value(form, "jobTitle", 120)],
      ["Work email", email],
      ["Telephone", value(form, "telephone", 60)],
      ["Postcode", value(form, "postcode", 20)],
      ["Number of sites", value(form, "siteCount", 5)],
      ["Enquiry relates to", service],
      ["Electricity, gas or both", value(form, "fuel", 40)],
      ["Contract end date", value(form, "contractEnd", 20)],
      ["Estimated annual spend", value(form, "annualSpend", 60)],
      ["Source page", value(form, "sourcePage", 500) || "/contact"],
      ["UTM source", value(form, "utm_source", 200)],
      ["UTM medium", value(form, "utm_medium", 200)],
      ["UTM campaign", value(form, "utm_campaign", 200)],
    ].filter(([, fieldValue]) => fieldValue);

    const text = [
      ...fields.map(([label, fieldValue]) => `${label}: ${fieldValue}`),
      "",
      "Message:",
      message,
    ].join("\n");

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

    const smtpHost = process.env.SMTP_HOST || "mail.privateemail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toAddress = process.env.CONTACT_TO_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass || !toAddress) {
      console.error(
        "SMTP is not configured. Set SMTP_USER, SMTP_PASS and (optionally) CONTACT_TO_EMAIL.",
      );
      return Response.json(
        { error: "The enquiry could not be sent. Please try again shortly." },
        { status: 500 },
      );
    }

    await WorkerMailer.send(
      {
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        startTls: smtpPort !== 465,
        credentials: { username: smtpUser, password: smtpPass },
        authType: ["login", "plain"],
      },
      {
        from: { name: "SwitchZero website", email: smtpUser },
        to: toAddress,
        reply: { name: fullName, email },
        subject: `New enquiry: ${service} — ${company}`,
        text,
        html,
        attachments: attachments.length ? attachments : undefined,
      },
    );

    return Response.json(
      {
        message:
          "Thank you. Your enquiry has been received and will be reviewed by SwitchZero.",
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
