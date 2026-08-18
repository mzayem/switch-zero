import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const enquiries = sqliteTable("enquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  publicId: text("public_id").notNull().unique(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  fullName: text("full_name").notNull(),
  company: text("company").notNull(),
  jobTitle: text("job_title"),
  email: text("email").notNull(),
  telephone: text("telephone"),
  postcode: text("postcode"),
  siteCount: integer("site_count"),
  service: text("service").notNull(),
  fuel: text("fuel"),
  contractEnd: text("contract_end"),
  annualSpend: text("annual_spend"),
  message: text("message").notNull(),
  sourcePage: text("source_page").notNull(),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  consentStatus: text("consent_status").notNull(),
  uploadKey: text("upload_key"),
  uploadName: text("upload_name"),
  uploadType: text("upload_type"),
  uploadSize: integer("upload_size"),
  status: text("status").notNull().default("new"),
});

