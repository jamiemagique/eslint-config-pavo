module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/standard', 'prettier/react'],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
