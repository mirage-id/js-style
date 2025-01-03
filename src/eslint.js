const js = require("@eslint/js");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    // configs eslint import
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    "import/no-unused-modules": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    // configs prettier
    "prettier/prettier": "error",
    // another configs
    ...js.configs.recommended.rules,
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
