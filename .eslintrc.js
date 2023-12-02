module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@arcblock/eslint-config', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    logger: true,
  },
  rules: {
    // Add any project-specific rules here
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
