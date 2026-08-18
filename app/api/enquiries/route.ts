import { getDb } from "../../../db";
import { enquiries } from "../../../db/schema";

const allowedFiles = new Set(["application/pdf", "image/jpeg", "image/png"]);
const maxFileSize = 8 * 1024 * 1024;

function value(form: FormData, name: string, max = 500) {
  const item = form.get(name);
  return typeof item === "string" ? item.trim().slice(0, max) : "";
}

function safeFilename(name: string) {
  const base = name.split(/[\\/]/).pop() || "utility-bill";
  return base.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 120);
}

export async function POST(request: Request) {
  let uploadKey = "";
  let runtimeEnv: { DB: D1Database; BUCKET: R2Bucket } | null = null;
  try {
    const cloudflare = await import("cloudflare:workers");
    runtimeEnv = cloudflare.env as unknown as {
      DB: D1Database;
      BUCKET: R2Bucket;
    };
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

    const publicId = crypto.randomUUID();
    const bill = form.get("bill");
    let uploadName: string | null = null;
    let uploadType: string | null = null;
    let uploadSize: number | null = null;

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
      uploadName = safeFilename(bill.name);
      uploadType = bill.type;
      uploadSize = bill.size;
      uploadKey = `private-enquiries/${new Date().toISOString().slice(0, 10)}/${publicId}/${uploadName}`;
      await runtimeEnv.BUCKET.put(uploadKey, bill.stream(), {
        httpMetadata: { contentType: bill.type },
        customMetadata: { enquiryId: publicId },
      });
    }

    const siteCountValue = Number(value(form, "siteCount", 5));
    await getDb(runtimeEnv.DB)
      .insert(enquiries)
      .values({
        publicId,
        fullName,
        company,
        jobTitle: value(form, "jobTitle", 120) || null,
        email,
        telephone: value(form, "telephone", 60) || null,
        postcode: value(form, "postcode", 20) || null,
        siteCount:
          Number.isFinite(siteCountValue) && siteCountValue > 0
            ? siteCountValue
            : null,
        service,
        fuel: value(form, "fuel", 40) || null,
        contractEnd: value(form, "contractEnd", 20) || null,
        annualSpend: value(form, "annualSpend", 60) || null,
        message,
        sourcePage: value(form, "sourcePage", 500) || "/contact",
        utmSource: value(form, "utm_source", 200) || null,
        utmMedium: value(form, "utm_medium", 200) || null,
        utmCampaign: value(form, "utm_campaign", 200) || null,
        consentStatus: "enquiry-response",
        uploadKey: uploadKey || null,
        uploadName,
        uploadType,
        uploadSize,
      });

    return Response.json(
      {
        message:
          "Thank you. Your enquiry has been received and will be reviewed by SwitchZero.",
      },
      { status: 201 },
    );
  } catch (error) {
    if (uploadKey && runtimeEnv)
      await runtimeEnv.BUCKET.delete(uploadKey).catch(() => undefined);
    console.error("Enquiry submission failed", error);
    return Response.json(
      { error: "The enquiry could not be sent. Please try again shortly." },
      { status: 500 },
    );
  }
}
