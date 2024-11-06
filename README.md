# React + TypeScript + Vite(Babel) - Template

- [Description](#description)
- [Features](#features)
- [scripts](#scripts)
- [File structure](#file-structure)
- [Dependency](#dependency)

## Description

> This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules

[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
uses [Babel](https://babeljs.io/) for Fast Refresh

## Features

This template setup will include following features.

- [feat/1/starter](https://github.com/BohdanRadchenko/react-template/tree/feat/1/starter) - Generate Vite + React +
  Typescript + ESLint + StyleLint
- [feat/2/vitest](https://github.com/BohdanRadchenko/react-template/tree/feat/2/vitest) Husky + Vitest + RTL
- [feat/3/router](https://github.com/BohdanRadchenko/react-template/tree/feat/3/router) React Router

## Scripts

In the project directory, you can run:

### Vite scripts

```bash
yarn dev dev                  # runs the app in the development mode
npm run build                 # build production bundle to 'dist' directly
npm run preview               # runs the app in the production mode from build out directory
```

### Test scripts

```bash
yarn test             # single test run without watch mode.
yarn test:ui          # run test with code covereage
yarn test:dev         # Run all test suites but watch for changes and rerun tests when they change
yarn test:coverage    # single test run with code coverage
yarn test:prepare     # run test without reported files
```

### ESLint scripts

```bash
yarn lint             # single test run without watch mode.
yarn lint:fix          # run test with code covereage
yarn lint:report       # Run all test suites but watch for changes and rerun tests when they change
```

## File structure

    .
    ├── ...
    ├── .husky                # Husky hooks
    ├── dist                  # Compiled files
    ├── src                   # Source files
    │   ├── api               # api config
    │   │   └── services      # api services
    │   ├── assets            # assets
    │   │   ├── icons         # assets icons *.svg
    │   │   └── ..            #
    │   ├── components        # 
    │   ├── constants         #
    │   ├── helpers           # 
    │   ├── hooks             #
    │   ├── interfaces        #  
    │   ├── modules           # business logic
    │   ├── pages             # router pages
    │   ├── providers         #
    │   ├── router            # router entry point
    │   ├── main.ts           # js app entry point
    │   └── ..                # 
    ├── index.html            # html app entry point
    └── .. 

## Dependency

- [vite](https://vite.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite svgr](https://www.npmjs.com/package/vite-plugin-svgr)
- [Vite static copy](https://www.npmjs.com/package/vite-plugin-static-copy)
- [Vite tsconfig path](https://www.npmjs.com/package/vite-tsconfig-paths)
- [ESLint simple import sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
- [Husky](https://typicode.github.io/husky)
- [Vitest](https://vitest.dev/)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [React testing lib](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest + RTL example](https://www.robinwieruch.de/react-testing-library/)
- [react router dom](https://reactrouter.com/en/main/start/overview)
