const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const siteData = {
  title: 'Webpack Template',
  description: 'Webpack 5 Template with sensible defaults',
  keywords: 'webpack, template, config',
};

// optionally pass in `isProduction` to apply environment-specific logic
const parts = (/* isProduction */) => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        title: `Home | ${siteData.title}`,
        template: `${paths.src}/index.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: siteData.description,
          keywords: siteData.keywords,
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
      new HtmlWebPackPlugin({
        filename: '404.html',
        title: `404 | ${siteData.title}`,
        template: `${paths.src}/404.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: siteData.description,
          keywords: siteData.keywords,
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });
};

module.exports = parts;
