module.exports = {
  extends: [
    'eslint-config-react-app-eslint-six',
    'eslint-config-prettier',
  ],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-alert': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 2 }],
    'prettier/prettier': 'error',
    quotes: ['error', 'backtick'],
  },
};
