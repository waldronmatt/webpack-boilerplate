# Webpack Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/0025207c-743d-4b37-b24e-9b67b3489f48/deploy-status)](https://app.netlify.com/sites/waldronmatt-webpack-template/deploys)

Webpack 5 Template with sensible defaults.

## Features

- Transpile and lint `.js`, `.ts`, `.css`, `.scss`
- Supports server and serverless builds
- Uses shareable configs to reduce boilerplate

## Installation

Install dependencies:

```bash
npm i
```

## Getting Started

Run dev environment:

```bash
npm run dev
```

Build and serve for prod on Netlify (serverless):

```bash
npm run build
```

Build and serve for prod ([http://localhost:8080/](http://localhost:8080/) for testing):

```bash
npm run prod
```

Check for eslint errors in `config/` files:

```bash
npm run lint:check
```

Fix eslint errors in `config/` files:

```bash
npm run lint:fix
```

## Dependencies

### Webpack

- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- webpack-node-externals

### Plugins

- eslint-webpack-plugin
- html-webpack-plugin
- stylelint-webpack-plugin

### Linters / Transformers

- eslint
- postcss
- prettier
- stylelint

### Style Resets

- the-new-css-reset
- sanitize.css

### Server Packages

- compression
- express
- express-rate-limit
- serverless-http

### Shareable Configs

- [@tsconfig/recommended](https://github.com/tsconfig/bases)
- [@waldronmatt/browserslist-config](https://github.com/waldronmatt/browserslist-config)
- [@waldronmatt/eslint-config](https://github.com/waldronmatt/eslint-config)
- [@waldronmatt/postcss-config](https://github.com/waldronmatt/postcss-config)
- [@waldronmatt/prettier-config](https://github.com/waldronmatt/prettier-config)
- [@waldronmatt/stylelint-config](https://github.com/waldronmatt/stylelint-config)
- [@waldronmatt/webpack-config](https://github.com/waldronmatt/webpack-config)

## License

MIT
