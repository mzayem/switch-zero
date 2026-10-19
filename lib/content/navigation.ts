import { industries } from "./industries";
import { services } from "./services";

export const serviceNav = services.map(({ slug, title }) => ({
  href: `/${slug}`,
  label: title,
}));
export const industryNav = industries.map(({ slug, title }) => ({
  href: `/industries/${slug}`,
  label: title,
}));
