module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    eqeqeq: 2,
    'no-empty-function': 2,
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'space-infix-ops': 2,
    'space-in-parens': 2,
    'no-var': 2,
    'no-unused-vars': 2,
    'react/prop-types': 0

  }
}
