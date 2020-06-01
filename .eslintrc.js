module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "plugin:react/recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "error"
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.13.1"
    }
  }
};
