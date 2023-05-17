module.exports = {
  root: true,
  env: {
    node: true,
    es2015: true,
  },
  extends: ["prettier"],
  ignorePatterns: ["*.cjs", "*.config.js"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
