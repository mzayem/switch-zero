// Sends mail through Microsoft Graph with an app registration (client
// credentials), so it works with security defaults and MFA on the mailbox.
// Only the Mail.Send application permission is needed.

type Recipient = { address: string; name?: string };
type Attachment = { name: string; contentType: string; bytes: Uint8Array };

export type GraphMail = {
  to: Recipient;
  replyTo?: Recipient;
  subject: string;
  html: string;
  attachments?: Attachment[];
};

// sendMail rejects requests over ~4 MB; base64 adds a third, so keep files to 3 MB.
// Larger files would need an upload session, which requires Mail.ReadWrite.
export const maxAttachmentBytes = 3 * 1024 * 1024;

function config() {
  const tenant = process.env.MS_TENANT_ID;
  const clientId = process.env.MS_CLIENT_ID;
  const secret = process.env.MS_CLIENT_SECRET;
  const from = process.env.MAIL_FROM;
  if (!tenant || !clientId || !secret || !from)
    throw new Error(
      "Mail is not configured. Set MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET and MAIL_FROM.",
    );
  return { tenant, clientId, secret, from };
}

async function accessToken(tenant: string, clientId: string, secret: string) {
  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`,
    {
      method: "POST",
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: secret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );
  const data = (await response.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };
  if (!response.ok || !data.access_token)
    throw new Error(`Graph token request failed: ${data.error} ${data.error_description ?? ""}`);
  return data.access_token;
}

export async function sendGraphMail(mail: GraphMail) {
  const attachments = mail.attachments ?? [];
  if (attachments.reduce((total, file) => total + file.bytes.length, 0) > maxAttachmentBytes)
    throw new Error("Attachments exceed the 3 MB Graph sendMail limit.");

  const { tenant, clientId, secret, from } = config();
  const token = await accessToken(tenant, clientId, secret);
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: {
          subject: mail.subject,
          body: { contentType: "HTML", content: mail.html },
          toRecipients: [{ emailAddress: mail.to }],
          replyTo: mail.replyTo ? [{ emailAddress: mail.replyTo }] : [],
          attachments: attachments.map((file) => ({
            "@odata.type": "#microsoft.graph.fileAttachment",
            name: file.name,
            contentType: file.contentType,
            contentBytes: Buffer.from(file.bytes).toString("base64"),
          })),
        },
        saveToSentItems: true,
      }),
    },
  );
  if (!response.ok)
    throw new Error(`Graph sendMail failed: ${response.status} ${await response.text()}`);
}
