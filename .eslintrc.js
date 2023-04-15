module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    "semi": ["error"]
  },
  files: ["src/**/*.{ts,tsx}", "packages/**/*.{ts,tsx}"]
};
