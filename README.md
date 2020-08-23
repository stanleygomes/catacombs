[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
![Lint and test](https://github.com/stanleygomes/bible-app/workflows/Lint%20and%20test/badge.svg)

# A Bíblia Sagrada

This app was built using [Expo CLI](https://expo.io) for react native. ✝️ 📖 📜 🙏

*******
Table of contents
 1. [How to use](#startup)
 2. [Patterns and libs](#patterns)
 3. [Contribute](#contribute)
 4. [Gitflow recommendations](#gitflow)
*******

<div id='startup'/>

## How to use





<div id='patterns'/>

## Patterns

These are some of patterns definitions to help us to keep a default arquitecture.

- Package manager: [npm](https://medium.com/@vincentnewkirk/npm-vs-yarn-2019-e88757b17038), sure
- Node version: [v10.x](https://nodejs.org/ca/blog/release/v10.16.3)
- Component Libray: [React Bootstrap](https://react-bootstrap.github.io)
- Linter: eslint [Airbnb](https://airbnb.io/javascript) style guide
- i18n: take a look [here](https://www.npmjs.com/package/i18n)
- Date and time: [moment](https://momentjs.com)

<div id='contribute'/>

## How to get contribute

Step by step to get this up and running

**Clone repo and go to project folder**

```
git clone https://github.com/stanleygomes/bible-app.git && cd bible-app
```

**Install dependencies**

```bash
npm install
```

**Config enviroment**

Copy enviroment variables template

```bash
cp .env.template .env
```

**Start**

```bash
npm start
```

<div id='gitflow'/>

## Git flow

To file a new a feature

- create a branch from `master` branch. Use the pattern: `feature/description`
- file a pull request on `master` branch
- since your PR is aproved, it will be merged to `master` branch
- in a moment in time we'll create a release, using the pattern: `release/vX.X.X`
