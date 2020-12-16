module.exports = {
  root: true,
  env: {
    // browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
        paths: ['src'],
      },
    },
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'eslint-plugin-import', 'prettier'],
  rules: {
    'import/order': 'off',
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'no-console': ['error', { allow: ['error', 'warning'] }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'operator-linebreak': ['error', 'after', { overrides: { '=': 'after', '?': 'before', ':': 'before' } }],
    'no-nested-ternary': 'error',
    'template-curly-spacing': ['error', 'never'],
    'comma-dangle': 'off',
    'consistent-return': 'off',

    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'prettier/prettier': 'error',
  },
};
