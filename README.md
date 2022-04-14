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
yarn
```

## Getting Started

Run dev environment:

```bash
yarn dev
```

Build and serve on Netlify:

```bash
yarn build
```

Build and serve via Express:

```bash
yarn prod
```

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint `.js` files across packages:

```bash
yarn lint
```

## Shareable Configs Used

- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- [@tsconfig/recommended](https://github.com/tsconfig/bases/blob/main/bases/recommended.json)
- [@waldronmatt/browserslist-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/browserslist-config)
- [@waldronmatt/eslint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/eslint-config)
- [@waldronmatt/postcss-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/postcss-config)
- [@waldronmatt/prettier-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/prettier-config)
- [@waldronmatt/semantic-release-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config)
- [@waldronmatt/stylelint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/stylelint-config)
- [@waldronmatt/webpack-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config)

## License

MIT
