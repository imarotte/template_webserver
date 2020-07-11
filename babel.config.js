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

module.exports = function babelConfig(api) {
  // https://babeljs.io/docs/en/next/config-files#apicache
  api.cache.never();

  return {
    presets: [

      [
        '@babel/preset-env',
        {
          targets: { node: 'current' } // https://babeljs.io/docs/en/babel-preset-env#targets
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs'
    ]
  };
};
