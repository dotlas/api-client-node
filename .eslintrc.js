module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["import"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  rules: {
    // Base
    "no-console": "warn",
    quotes: ["warn", "double"],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],

    // Imports
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },

  ignorePatterns: ["*.cjs", "src/types.ts"],
}
