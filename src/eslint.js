module.exports = {
  extends: [
    'airbnb-base',
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
  }
}