# React + TypeScript + Vite(Babel) - Template

- [Description](#description)
- [Features](#features)
- [Run](#run)
- [File structure](#file-structure)
- [Dependency](#dependency)

## Description

> This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules

[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
uses [Babel](https://babeljs.io/) for Fast Refresh

## Features

This template setup will include following features.

| ✅ | Feature                                                                                                                                                                                 | Branch Name           |
|---|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| ✅ | [Generate Vite](https://vitejs.dev/) + [React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/) + [ESLint](https://eslint.org/) + [StyleLint](https://stylelint.io/) | [feat/1/starter]()    |
| ✅ | [Redux Saga](https://redux-saga.js.org/)                                                                                                                                                | feature/12/react-saga |
| ✅ | [Vitest](https://vitest.dev/) + [RTL](https://testing-library.com/docs/react-testing-library/intro/)                                                                                    | feature/13/vitest     |
| ✅ | [Cypress](https://www.cypress.io/)                                                                                                                                                      | feature/13/vitest     |

## Run

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:5100](http://localhost:5100) to view it in the browser.

### `yarn build`

### `yarn preview`

Runs the app in the prod mode.<br>
Open [http://localhost:4173](http://localhost:4173) to view it in the browser.

## File structure

    .
    ├── ...
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
    │   ├── providers         #
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