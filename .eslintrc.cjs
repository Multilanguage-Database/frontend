const config = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:tailwindcss/recommended",
    "standard-with-typescript",
    "prettier", // Has to be set last!
  ],
  /** @type any[] */ overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  plugins: ["import", "promise", "tailwindcss", "simple-import-sort"],
  rules: {
    "tailwindcss/no-custom-classname": "off", // Has to be disabled because the usage of tailwindcss plugins triggers this rule
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

config.overrides.push({
  files: ["*.astro"],
  extends: [...config.extends, "plugin:astro/recommended"],
  parser: "astro-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
  },
  rules: {
    ...config.rules,
  },
});

config.overrides.push({
  files: ["*.jsx", "*.tsx"],
  extends: [
    ...config.extends,
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: [...config.plugins, "react"],
  rules: {
    ...config.rules,
  },
});

module.exports = config;
