module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:css-modules/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "plugins": ["flowtype", "css-modules", "prettier", "jsdoc", "require-jsdoc"],
  "rules": {
    "no-console": [
      "error",
      {
        "allow": ["warn", "error", "info"]
      }
    ],
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".js", ".jsx"] }
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        "ignorePattern": "pragma|ignored",
        "ignoreInlineComments": true
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "markers": ["/"],
          "exceptions": ["-", "+"]
        },
        "block": {
          "markers": ["!"],
          "exceptions": ["*"],
          "balanced": true
        }
      }
    ],
    "space-before-blocks": ["error", "always"],
    "import/no-extraneous-dependencies": ["error", { "packageDir": "." }],
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true
      }
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        "components": ["Label"],
        "required": {
          "every": ["id"]
        },
        "allowChildren": false
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "react/prefer-stateless-function": "off",
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": 2,
    "jsdoc/check-types": 2,
    "jsdoc/newline-after-description": 2,
    "jsdoc/require-description-complete-sentence": 2,
    "jsdoc/require-example": 0,
    "jsdoc/require-hyphen-before-param-description": 2,
    "jsdoc/require-param": 2,
    "jsdoc/require-param-description": 0,
    "jsdoc/require-param-name": 2,
    "jsdoc/require-param-type": 2,
    "jsdoc/require-returns-description": 0,
    "jsdoc/require-returns-type": 2,
    "require-jsdoc": 2
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src"]
      }
    }
  }
};
