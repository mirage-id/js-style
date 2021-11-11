module.exports = {
  extends: [
    'airbnb-base',
    "plugin:react-hooks/recommended"
  ],
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
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