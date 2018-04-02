module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb', 'prettier/react'],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': 2,
    'react/forbid-dom-props': 0,
    'react/destructuring-assignment': 2,
    'react/prefer-stateless-function': 2,
    'react/jsx-child-element-spacing': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-sort-default-props': 2,
    'react/no-access-state-in-setstate': 2,
    'react/jsx-max-depth': [1, { max: 10 }],
    'react/no-this-in-sfc': 2,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
