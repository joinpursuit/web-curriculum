#ESLint
##Setup
- `npm install -g eslint`
- `npm install -g eslint-config-airbnb eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
- `eslint --init` (choose the airbnb style guide and 'JavaScript' for file type)
- you can override default style guide rules or customize rules however you'd like by adding an extra 'rules' field. You can see a full list of rules on the [ESLint rules docs](http://eslint.org/docs/rules/):
```js
module.exports = {
    "extends": "airbnb",
    "rules": {
        // override default options
        "comma-dangle": ["error", "always"],
        "indent": ["error", 2],
        "no-cond-assign": ["error", "always"],

        // disable now, but enable in the future
        "one-var": "off", // ["error", "never"]

        // disable
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
    }
}
```
- you can see much more information about [customizing your configuration file here](http://eslint.org/docs/user-guide/configuring)
- add an `.eslintignore` file. open up `.eslintignore` and add your bundle folder and/or any build files that are created by webpack (if you don't ignore these you'll get like a million linting errors). The `node_modules` folder is ignored by default.
- run linting for a specific repo or file by running `eslint <path-to-file>`, for example `eslint .`
- install the [Atom ESLint plugin](https://atom.io/packages/linter-eslint) or [Sublime Text ESLint plugin](https://github.com/roadhump/SublimeLinter-eslint) for realtime linting in your text editor

## Resources
- [Get Started With ESLint](http://devnull.guru/get-started-with-eslint/)
- [ESLint docs](http://eslint.org/docs/)
- [ESLint rules docs](http://eslint.org/docs/rules/)
