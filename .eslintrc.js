process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    'curly': ['error', 'multi-line'],
  },
};
