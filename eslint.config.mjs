import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend from Next.js' ESLint configuration
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Override specific rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable the no-explicit-any rule
    },
  },
];

export default eslintConfig;
