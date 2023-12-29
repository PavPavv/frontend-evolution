const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CreateFilePlugin = require('create-file-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

// setting up automatically in package.json start/build
//  commands via "cross-env" package
const isDevelopment = process.env.NODE_ENV === 'development';
const DEV_PORT = process.env.DEV_PORT || 4000;

// entry, output, mode, plugins, module, resolve, devServer
module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  mode: isDevelopment ? 'development' : 'production',

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
      minify: isDevelopment
        ? undefined
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].chunk.css',
      ignoreOrder: true,
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['!sw.js', '!config/nginx.conf'],
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: './public',
    //       globOptions: {
    //         dot: true,
    //         gitignore: true,
    //         ignore: ['**/index.html'],
    //       },
    //     },
    //     {
    //       from: './src/sw.js',
    //       to: `./sw.js`,
    //     },
    //     // {
    //     //   from: './src/assets',
    //     //   to: './assets/[path]/[name].[contenthash:8][ext]',
    //     //   globOptions: {
    //     //     dot: true,
    //     //     gitignore: true,
    //     //     ignore: ['**/*.svg'],
    //     //   },
    //     // },
    //   ],
    // // }),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    // new CopyWebpackPlugin({
    //   // patterns: [
    //   //   {
    //   //     from: '',
    //   //     to: '',
    //   //   },
    //   // ],
    // }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/src-sw.js',
      swDest: 'sw.js',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|pcss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                mode: 'local',
                localIdentName: isDevelopment
                  ? '[folder]__[local]_[hash:base64:6]'
                  : '[hash:base64:6]',
                exportLocalsConvention: 'camelCase',
              },
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: DEV_PORT,
    hot: true,
    historyApiFallback: true,
    // https: true,
    // writeToDisk: true,
  },
};
