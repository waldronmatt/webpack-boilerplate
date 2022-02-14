const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  // static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  // page paths for our routes, server configs
  INDEX_PAGE: path.join(__dirname, 'index.html'),
  ERROR_PAGE: path.join(__dirname, '404.html'),
  PORT: process.env.PORT || 8080,
};
