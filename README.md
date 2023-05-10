# Imperial stdout

Your essential wrapper for console.log for the browser and node.js

## Installing

### Package manager

Using npm:

```bash
$ npm install imperial-stdout
```

Using yarn:

```bash
$ yarn add imperial-stdout
```

Using pnpm:

```bash
$ pnpm add imperial-stdout
```

## Example

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import imperialStdout from 'imperial-stdout';
imperialStdout('something');
```

If you use `require` for importing:

```js
const imperialStdout = require('imperial-stdout');
imperialStdout('something');
```

For cases where something went wrong when trying to import a module into a custom or legacy environment,
you can try importing the module package directly:

```js
const imperialStdout = require('imperial-stdout/dist/browser/imperial-stdout.cjs'); // browser commonJS bundle (ES2017)
// const imperialStdout = require('imperial-stdout/dist/node/imperial-stdout.cjs'); // node commonJS bundle (ES2017)
```
