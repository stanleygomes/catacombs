---
title: Increase code quality with Github Actions
date: '2020-06-20'
spoiler: We are always writing, every day, tons of lines of code…
tags: CI/CD, github actions, code quality
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/increase-code-quality-github-actions%2F0_PxKtXQ9gla_nvBCQ.jpg?alt=media&token=b1d2cee1-b8c6-4fbd-a8a2-cbfde2afe62f)

We are always writing, every day, tons of lines of code. We add new features and change existing ones. We fix bugs and, sometimes, we may create some bugs too.

You can avoid basic bugs by creating some automatic routines such as lint and test your app every push or pull request.

Let me show you a simple example of a bug easily catch by a lint workflow.

You have to implement a new feature on your app that changes a function calculation using parameters.

Take a look at this code below.

```javascript
// your great method
const getCalcResult = (parameterA, parameterB) => {
    return parameterA + parameterB
}

// your method call
function feature1() {
    const result = getCalcResult(1, 2)
    // more great code
}

// ------------------------

// your new feature
function feature2() {
    const result = getCalcResult(1, 2, 2)
    // more great code
}

// now your great method has changed to adapt
const getCalcResult = (parameterA, parameterB, parameterC) => {
    return parameterA + parameterB - parameterC
}

// but you forgot something...
// you didn't update the feature1() call
```

In this example above, someone forgot to take a look at all places where that function is called, causing side effects.

Now, let’s go to check out an Github Workflow file to execute a npm lint and test before our feature actually goes to master and production environment.

```
name: Lint and test
on:
  pull_request:
    branches:
    - master
jobs:
  build:
    name: Lint and Test on Ubuntu
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x]
    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies
      run: npm install
    - name: Lint and test
      run: npm run test
```

Now take a look at a sample of workflow that failed and pull request is now bloqued until the details are fixed.

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/increase-code-quality-github-actions%2F1_ckHE_N8zxRSe8ObdEm0iFg.png?alt=media&token=384f577b-7de8-44b9-be0a-23168c74928f)

Hope this helps you to implement some automatic validations. These types of tips are essential to solve some points that go unnoticed by us developers.

Let me know if there is anything I can help you with. See you soon!
