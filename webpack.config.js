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

const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CLIENT = 'client';
const SERVER = 'server';

/**
 * @constant
 * @type {string}
 */
const __ROOT__ = process.cwd();

const absPath = (relative) => path.join(__ROOT__, relative);

const outputPathClient = absPath('public/lib');
const outputPathServer = absPath('dist/lib');


/**
 *
 * @param {string} dir - directory to remove
 */
const removeDir = (dir) => {
  if (fs.existsSync(dir)) {
    console.log(`remove directory: ${dir}`);
    fs.rmdirSync(dir, { recursive: true });
  }
};

// remove old output directories
removeDir(outputPathClient);
removeDir(outputPathServer);


module.exports = [CLIENT, SERVER].map((bundle) => {
  const isProduction = process.env.NODE_ENV === 'production';

  /**
   * how do we want to name our css identifiers
   * @type {string}
   */
  const localIdentName = `${!isProduction ? '[name]_' : ''}[local]_[hash:base64:5]`;

  const config = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
      [bundle]: absPath({
        [SERVER]: 'server/index.js',
        [CLIENT]: 'client/index.jsx'
      }[bundle])
    },
    output: {
      path: {
        [SERVER]: outputPathServer,
        [CLIENT]: outputPathClient
      }[bundle],
      filename: '[name].bundle.js',
      publicPath: '/lib/'
    },
    target: {
      [SERVER]: 'node',
      [CLIENT]: 'web'
    }[bundle],
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['web_modules', 'node_modules', absPath('./node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /(node_modules|browser_components)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: []
  };

  if (bundle === CLIENT) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].styles.css',
        chunkFilename: `${bundle}.[id].css`
      })
    );

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName
            },
            sourceMap: true,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            // module: true,
            plugins: [
              require('autoprefixer')() // eslint-disable-line global-require
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('node-sass'), // eslint-disable-line global-require
            sassOptions: {
              // sourceMap: true,
              precision: 8,
              // data: '$ENV: ' + 'PRODUCTION' + ';'
              prependData: '$ENV: PRODUCTION;'
            }
          }
        }
      ]
    });
  }

  return config;
});
