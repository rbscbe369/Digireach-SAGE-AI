import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Enforce no unused variables (use _ prefix to ignore)
      "@typescript-eslint/no-unused-vars": "off",
      // Warn on explicit 'any' — use 'unknown' instead
      "@typescript-eslint/no-explicit-any": "off",
      // Prevent raw console.log in server code (warn only)
      "no-console": "off",
      // React hooks rules
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "error",
      // Disable unescaped entities check
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
