# js-style

A repo to hold eslint/prettier config for our projects

## Getting Started

This package relies on prettier, eslint, and prettier-eslint as peer dependencies.

``` bash
npm install --save-dev github:mirage-id/js-style

npm i --save-dev prettier prettier-eslint eslint
```

create a file in the root of the directory named `.prettierrc.js` with the following contents:

```js
const config = require('js-style').prettier;

module.exports = config;
```

create a file in the root of the directory named `.eslintrc.js` with the following contents:

```js
const config = require('js-style').eslint;

module.exports = config;
```