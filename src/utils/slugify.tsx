export const slugify = (text: string): string => {
  if (!text) return ""; // Handle null or undefined input

  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "-") // Replace non-word chars with hyphens
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
};
