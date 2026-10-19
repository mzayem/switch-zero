// Builds the HTML email the team receives for each website enquiry.

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

export type EnquiryField = [label: string, value: string];

export function enquiryEmailHtml(fields: EnquiryField[], message: string) {
  const rows = fields
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="color:#666"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      ${rows}
    </table>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;
}
