module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    'jest/consistent-test-it': ['error'],
    'jest/lowercase-name': 0,
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/no-hooks': 0,
    'jest/no-jest-import': 2,
    'jest/no-large-snapshots': 1,
    'jest/valid-expect': 2,
    'jest/prefer-to-have-length': 1,
    'jest/prefer-expect-assertions': 1,
    'jest/prefer-to-be-null': 1,
    'jest/prefer-to-be-undefined': 1,
    'jest/valid-expect-in-promise': 1,
    'jest/valid-describe': 2,
    'jest/no-test-prefixes': 1,
  },
};
