module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'turbo',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
  },
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],

    'react/jsx-props-no-spreading': 'off',

    '@next/next/no-html-link-for-pages': 'off',

    'prettier/prettier': ['error'],

    "import/no-extraneous-dependencies": 'off',

    'no-restricted-imports': [
      'error',
      {
        patterns: ['./**', '../**'],
      },
    ],
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
