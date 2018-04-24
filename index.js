module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/standard',
  ],
  plugins: ['css-modules', 'prettier', 'jsdoc', 'require-jsdoc'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'pragma|ignored',
        ignoreInlineComments: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'space-before-blocks': ['error', 'always'],
    'import/export': 'error',
    'import/exports-last': 0,
    'import/group-exports': 0,
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    'import/no-default-export': 0,
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
    'jsdoc/check-param-names': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/newline-after-description': 2,
    'jsdoc/require-description-complete-sentence': 2,
    'jsdoc/require-example': 0,
    'jsdoc/require-hyphen-before-param-description': 2,
    'jsdoc/require-param': 2,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-returns-type': 2,
    'require-jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
