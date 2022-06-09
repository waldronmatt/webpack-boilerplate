# Webpack Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/0025207c-743d-4b37-b24e-9b67b3489f48/deploy-status)](https://app.netlify.com/sites/waldronmatt-webpack-template/deploys)

Comprehensive [Webpack 5 Template](https://waldronmatt-webpack-template.netlify.app/) with `TypeScript`, `Sass`, `Jest`, `Browserslist`, `PostCSS`, `Eslint`, `Stylelint`, `Prettier`, `Husky`, `Lint-Staged`, `Commitizen`, `Commitlint`, `Semantic-Release`.

## Features

- Mixed `js`/`ts` template with `Jest` and `Eslint`, `Stylelint`, and `Prettier` linting
- Conventional Commits prompt and commit linting using `Commitizen` and `Commitlint`
- `Husky` hooks to lint and test staged files using `Lint-Staged`
- Server and serverless builds with `Netlify` and `Express`
- Automated releases using `Semantic-Release`
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

Lint all `.js`, `.jsx`, `.ts`, `.tsx`, `.css`, `.scss` files:

```bash
yarn lint
```

**Note**: `release.yml` will run this before versioning and publishing.

Run all tests:

```bash
yarn test
```

**Note**: `release.yml` will run this before versioning and publishing.

## Click and Go!

1. Click `Use this template` to create your own copy.

2. Clone down the newly created repository.

3. Run `yarn` and `yarn prepare` to install dependencies and git hooks.

4. Update your `package.json`:

```json
"name": "my-cool-repo",

...

"repository": {
  "type": "git",
  "url": "git+https://github.com/your_username/my-cool-repo.git"
},
```

5. Delete `CHANGELOG.md`.

6. Customize your repo and commit changes using the `commit` script in `package.json`:

```bash
yarn commit
```

7. Use a commit type like `feat`:

```bash
feat(global): init commit
```

8. Push out your changes. This will trigger a release with a version of `1.0.0`.

## License

MIT
