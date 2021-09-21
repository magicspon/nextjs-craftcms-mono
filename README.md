# NextJS, CraftCMS mono

## Features

- Next JS
- Tailwind
- Storybook
- Typescript
- graphql-codegen/typescript
- CraftCMS
- @svgr/webpack
- Hygen generator
- Lerna
- Husky
- Jest
- Cypruss
- eslint
- prettier
- stylelint
- commitlint

## CraftCMS/Next

- GraphQL api
- Blog listing/pagination + entries
- Home page entry
- Pages structure (supports multiple types)
- Global (build time) data
- [SEOMatic](https://github.com/nystudio107/craft-seomatic) component
- [Formie](https://github.com/verbb/formie) helpers, including auto generated graphql mutations

## Installation

- To setup the frontend tooling and nextjs run `yarn install` or `npm install`
- To install CraftCMS please refer to the [CraftCMS Docs](https://craftcms.com/docs/3.x/installation.html)

### Commands

- `yarn dev` : starts the app package nextjs server
- `yarn test` : run all of the tests
- `yarn build` : build the next js app
- `yarn start` : start the production site
- `yarn lint` : lint the frontend code
- `yarn storybook` : runs the ui package storybook server
- `yarn release` : tag a release, update changelog

### Code scaffold

- `yarn new:component` : create a new component
- `yarn new:page` : create a new nextjs page
- `yarn new:context` : create a new context provider

### Packages

- `/packages/cms` : Craft CMS
- `/packages/app` : Next JS codebase
- `/packages/ui` : Design system

### TypeScript GraphQL-Request

See https://www.graphql-code-generator.com/docs/plugins/typescript-graphql-request for docs
