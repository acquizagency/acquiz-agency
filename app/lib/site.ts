export const SITE_URL = "https://acquiz.fr";
export const SITE_NAME = "Acquiz Agency";
export const SITE_EMAIL = "contact@acquiz.fr";
export const SITE_PHONE = "+33 7 67 81 79 10";
export const SITE_PHONE_HREF = "tel:+33767817910";
export const MALT_URL = "https://www.malt.fr/profile/amindasilva";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
