import { t } from "../i18n";
export const categoryNames = [
  "banking",
  "brokerage",
  "payments",
  "company",
  "tax",
] as const;
export type Category = (typeof categoryNames)[number];
export const categoryLabel = (category: string) =>
  categoryNames.includes(category as Category)
    ? t(`category.${category as Category}`)
    : category;
// Preserve frontmatter written with Chinese category labels.
export function normalizeCategory(value: string): string {
  const legacy: Record<string, Category> = {
    银行开户: "banking",
    券商开户: "brokerage",
    跨境收款: "payments",
    离岸公司: "company",
    税务: "tax",
  };
  return (
    legacy[value] ??
    categoryNames.find((category) => categoryLabel(category) === value) ??
    value
  );
}
export const coverNames = [
  "tool",
  "astro",
  "vue",
  "css",
  "notes",
  "life",
  "typescript",
  "git",
  "design",
] as const;
