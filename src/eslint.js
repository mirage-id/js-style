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
  }
  // rules: {
      // enable additional rules
      // "indent": ["error", 2],
      // "linebreak-style": ["error", "unix"],
      // "quotes": ["error", "single"],
      // "semi": ["error", "always"],

      // override default options for rules from base configurations
      // "comma-dangle": ["error", "always"],
      // "no-cond-assign": ["error", "always"],
  // }
}