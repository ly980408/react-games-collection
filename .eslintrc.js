module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    }
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'markdown'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/consistent-type-imports': [2, { disallowTypeAnnotations: false }],
      },
    },
    {
      // In v2, explicitly apply eslint-plugin-markdown's `markdown`
      // processor on any Markdown files you want to lint.
      files: ['games/**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  rules: {
    'semi': 2,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
  },
};
