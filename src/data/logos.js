// Brand marks served from public/logos (SVG, from the open svgl.app library).
// `name` is the display label; `file` is the basename in public/logos.
export const LOGOS = [
  { name: "n8n", file: "n8n" },
  { name: "OpenAI", file: "openai" },
  { name: "Claude", file: "anthropic" },
  { name: "Slack", file: "slack" },
  { name: "Notion", file: "notion" },
  { name: "Gmail", file: "gmail" },
  { name: "Google Sheets", file: "google-sheets" },
  { name: "Google Calendar", file: "google-calendar" },
  { name: "Google Drive", file: "google-drive" },
  { name: "Outlook", file: "outlook" },
  { name: "Excel", file: "excel" },
  { name: "Teams", file: "teams" },
  { name: "Shopify", file: "shopify" },
  { name: "Stripe", file: "stripe" },
  { name: "WhatsApp", file: "whatsapp" },
  { name: "Telegram", file: "telegram" },
  { name: "Discord", file: "discord" },
  { name: "Trello", file: "trello" },
  { name: "Asana", file: "asana" },
  { name: "ClickUp", file: "clickup" },
  { name: "Linear", file: "linear" },
  { name: "Supabase", file: "supabase" },
  { name: "PostgreSQL", file: "postgresql" },
  { name: "WordPress", file: "wordpress" },
];

export const logoSrc = (name) => {
  const entry = LOGOS.find((logo) => logo.name === name);
  return entry ? `/logos/${entry.file}.svg` : null;
};
