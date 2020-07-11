/*
 * @Copyright © 2019-2020 Isaac Marotte - All Rights Reserved
 *
 * This file is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.7.10
 */

module.exports = {
  extends: [
    'onny'
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    mocha: true,
    es6: true
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      pragma: 'React' // Pragma to use, default to "React"
      // "version": "16.0" // React version, default to the latest React stable release
    }
  },
  globals: {
    __ROOT__: 'readonly'
  },
  rules: {
    /*
     * Enforce consistent usage of destructuring assignment of props, state, and context
     * set by Airbnb styling, I'm not really bothered by it
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': 0,
    /*
     * Enforce a defaultProps definition for every prop that is not a required prop
     *    * enabled: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
     *    * forbidDefaultForRequired: optional boolean to forbid prop default for a required prop. Defaults to false.
     *    * ignoreFunctionalComponents: optional boolean to ignore this rule for functional components. Defaults to false.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': [2, { forbidDefaultForRequired: false }],
    /*
     * One JSX Element Per Line
     *    * single-child - allow a single child under an element eg <App>Hello</App>
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'no-underscore-dangle': [
      2, {
        allow: [
          '__ROOT__'
        ]
      }
    ],
    // Enforces where React component static properties should be positioned
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],

    // https://eslint.org/docs/rules/arrow-body-style
    // it's annoying as fuck
    'arrow-body-style': [0, 'as-needed'],

    // Disallow JSX props spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'ignore',
      exceptions: []
    }],
    /*
     * Normally I'd leave this turned on and use a logging package,
     * but turning off for this project
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': 0
  }
};
