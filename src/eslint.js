module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 8
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^_" }
    ],
    "import/no-unresolved": [
      "error", 
      { ignore: ['electron'] },
    ]
  },
}