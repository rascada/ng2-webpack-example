module.exports = {
  entry: './src/main',

  output: {
    filename: 'angular2.js',
    path: 'dist',
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel!ts',
      },
      {
        test: /\.jade$/,
        loader: 'html!jade-html',
      },
      {
        test: /\.styl$/,
        loader: 'raw!stylus',
      },
    ],
  },
};
