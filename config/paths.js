const path = require('node:path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  publicPath: '/',
  INDEX_PAGE: path.join(__dirname, 'index.html'),
  ERROR_PAGE: path.join(__dirname, '404.html'),
};
