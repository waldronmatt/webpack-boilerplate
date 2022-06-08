# Webpack Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/0025207c-743d-4b37-b24e-9b67b3489f48/deploy-status)](https://app.netlify.com/sites/waldronmatt-webpack-template/deploys)

Comprehensive [Webpack 5 Template](https://waldronmatt-webpack-template.netlify.app/) with `TypeScript`, `Sass`, `Jest`, `Browserslist`, `PostCSS`, `Eslint`, `Stylelint`, `Prettier`, `Husky`, `Lint-Staged`, `Commitizen`, `Commitlint`, `Semantic Release`.

## Features

- Transpile and lint `.js`, `.ts`, `.test`, `.spec`, `.css`, `.scss`
- Supports server and serverless builds with `Netlify` and `Express`
- Automates versioning and GitHub publishing
- Uses my [shareable configs](https://github.com/waldronmatt/shareable-configs) to reduce boilerplate
- ~100% Lighthouse Score

## Installation

Install dependencies:

```bash
yarn
```

Install hooks:

```bash
yarn prepare
```

## Getting Started

Run dev environment:

```bash
yarn dev
```

Build and serve for Netlify:

```bash
yarn build
```

**Note:** Configure script in Netlify to auto-run via push to `main` branch.

Build for Express:

```bash
yarn prod
```

Serve for Express:

```bash
yarn serve
```

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint all `.js`, `.ts`, and `.scss` files:

```bash
yarn lint
```

**Note**: `release.yml` will run this before versioning and publishing.

Run all tests:

```bash
yarn test
```

**Note**: `release.yml` will run this before versioning and publishing.

## License

MIT
