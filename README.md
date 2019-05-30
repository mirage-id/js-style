# js-style

A Github repository to hold eslint/prettier config for our projects

## The Why

Eslint is an extensible linting tool for Javascript.

Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.

Because JS is not a compiled language, eslint helps us catch bugs that would otherwise be caught by a compiler, as well as identify common bug-causing code smells.

Prettier is an opinionated code formatter.
It removes all original styling and ensures that all outputted code conforms to a consistent style.

For example, take the following code:

```js
foo(arg1, arg2, arg3, arg4);
```

It fits in a single line so it's going to stay as is. However, we've all run into this situation:

```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(),isThereSeriouslyAnotherOne());
```

Suddenly our previous format for calling function breaks down because this is too long. Prettier is going to do the painstaking work of reprinting it like that for you:

```js
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

What usually happens once people are using Prettier is that they realize that they actually spend a lot of time and mental energy formatting their code. With Prettier editor integration, you can just press that magic key binding and poof, the code is formatted. This is an eye opening experience if anything else.

> “I want to write code. Not spend cycles on formatting.”

> “It removed 5% that sucks in our daily life - aka formatting”

> “We're in 2017 and it's still painful to break a call into multiple lines when you happen to add an argument that makes it go over the 80 columns limit :(“

## Getting Started

This package relies on `prettier`, `eslint`, and `prettier-eslint` as peer dependencies.

``` bash
npm install --save-dev github:mirage-id/js-style

npm i --save-dev prettier prettier-eslint eslint
```

create a file in the directory containing the `package.json` file named `.prettierrc.js` with the following contents:

```js
const config = require('js-style').prettier;

module.exports = config;
```

create a file in the directory containing the `package.json` file named `.eslintrc.js` with the following contents:

```js
const config = require('js-style').eslint;

module.exports = config;
```

create a file called `.editorconfig` with the following contents:

```yaml
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.json]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

Add the following scripts to your package.json:
```json
"lint": "eslint . --env node",
"lint:fix": "eslint . --fix --env node",
"format": "prettier *.js ./**/*.js",
"format:fix": "prettier *.js ./**/*.js --write"
```

## Setting up your IDE

### Sublime Text

A good article about setting up prettier in sublime text is available here:
https://digitalblake.com/2018/08/30/setting-up-sublime-text-3-with-prettier-on-macos-high-sierra/

Documentation for eslint in sublime text is available here:
https://packagecontrol.io/packages/ESLint

### VScode

These 2 extensions will get you up and running: \
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

It will also be helpful to set `"editor.formatOnSave: true"` in your workplace settings
