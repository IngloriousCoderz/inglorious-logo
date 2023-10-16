module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": 1,
    "no-console": [1, { allow: ["error"] }],
    "no-magic-numbers": 1,
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  overrides: [
    {
      files: "*.test.js",
      rules: {
        "no-magic-numbers": 0,
      },
    },
  ],
};
