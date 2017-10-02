import path from 'path';
import webpack from 'webpack';

export default  {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/reduxstagram.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot-loader', 'babel-loader']
      },
      // CSS
      {
        test: /\.styl$/,
        loaders: ['style-loader','css-loader', 'stylus-loader']
      }
    ]
  }
};
