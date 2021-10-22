require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

  return {
    entry: {
      'Viewer': ['./lib/Viewer.js'],
      'NavigatedViewer': ['./lib/NavigatedViewer.js'],
      'Modeler': ['./lib/Modeler.js'],
      'odm': ['./assets/odm.css'],
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
    },
    module: {
      rules: [
        {
          test: /\.xml$/,
          use: 'raw-loader',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: ['file-loader'],
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
        chunkFilename: 'assets/[name].css'
      }),
    ],
    mode: 'development',
    devtool: 'source-map',
  };
};
