# Frontend-evolution

## Frontend development journey from old(small) days to modern(npm-fat-frameworked) days

---

<img alt="cover" src="./evo.jpg" width="260" />

---

1. [JS script mode with ES5 syntax](https://github.com/PavPavv/frontend-evolution/tree/main/01_native-web-timer-es5-func) project size/bundle size - 4.1KB

2. [JS script mode with ES6 sytnax](https://github.com/PavPavv/frontend-evolution/tree/main/02_native-web-timer-es6-class) project size/bundle size - 5.5KB

3. [Functional approach in TS compiling into JS script mode with ES3 syntax](https://github.com/PavPavv/frontend-evolution/tree/main/03_native-web-timer-func-with-TS) project size - 15.8 kB, bundle size - 5KB

4. [OO approach in TS compiling into JS script mode with ES3 syntax](https://github.com/PavPavv/frontend-evolution/tree/main/04_native-web-timer-class-with-TS) project size - 21.4 KB, bundle size - 8.4kB

5. [Webpack JS modules bundle (Functional approach)](https://github.com/PavPavv/frontend-evolution/tree/main/05_webpack-js-timer) project size - 22.7 MB, bundle size - 7.8KB

6. [Webpack JS modules bundle (OOP approach)](https://github.com/PavPavv/frontend-evolution/tree/main/06_webpack-js-timer-class) project size - 22.7 MB, bundle size - 8.6KB

7. [Webpack TS modules bundle (Functional approach)](https://github.com/PavPavv/frontend-evolution/tree/main/07_webpack-ts-timer) project size - 62.7 MB, bundle size - 8KB

8. [Webpack TS modules bundle (OOP approach)](https://github.com/PavPavv/frontend-evolution/tree/main/08_webpack-ts-timer-class) project size -  62.7 MB, bundle size - 10.3KB

9. [Webpack with React JS modules bundle (OOP approach)](https://github.com/PavPavv/frontend-evolution/tree/main/09_webpack-react-js-timer-class) project size -  60.8 MB, bundle size - 158.3KB

10. [Webpack with React JS modules bundle (Functional approach)](https://github.com/PavPavv/frontend-evolution/tree/main/10_webpack-react-js-timer-func) project size - 57.6 MB, bundle size - 154.3 KB

11. [Webpack with React and TS modules bundle (OOP approach)](https://github.com/PavPavv/frontend-evolution/tree/main/11_webpack-react-ts-class-timer) project size - 98.9 MB, bundle size - 151.1 KB

12. [Webpack with React and TS modules bundle (Func approach)](https://github.com/PavPavv/frontend-evolution/tree/main/12_webpack-react-ts-func-timer) project size - 98.7 MB, bundle size - 148.8 KB

13. TODO: Docker Nginx Next

14. Vite React TS

---

## How to create a frontend app in 2023 with React as a render library (step by step)

In essence creating modern JS web application is just a deal of installing necessary npm packages (libraries), creating strict project structure and create and write a bunch of config files in the project root directory. As you can see now you need to know JS not to write code, but to understand how to use libraries. 🤡

### NPM packages

Now JS universe is a NPM and it consists of its atoms - packages, which are also known as "libraries". You have to construct your app with some packages you need.
There are vital ones and app specified ones.

The vital ones:

1. Bundler packages. JS is a just a script language, he can't too much at its core. So in order be able to control pretty huge amount of JavaScript code you need to decompose it and
   bundle it in the production for the single JS-bundle for the browser. So there are two huge stages - development and production. Humans can't write production code (binary for machines or optimized and minimized ES5 for browsers) yet. So we need to split up these two stages. For development we need structured decomposed readable JS pieces of code and for production optimized and minimized EcmaScript5. And here we need help of bundlers. There are plenty of 'em, so I will use in this example one of the most popular one - Webpack.
   But at first, let's connect to the NPM universe via initializing empty project with JS package manager tool. For this you can choose between **npm** and **yarn** that are almost similar. I will use **yarn** here.

```bash
cd project-folder
mkdir build public src
touch public/index.html
mkdir src/app src/entities src/features src/pages src/shared src/widgets
touch src/index.tsx src/app/index.tsx src/app/index.css
yarn init
```

Now, let's add packages! Let's add main bundle tool to the project, Webpack!

```bash
yarn add --dev webpack webpack-cli webpack-dev-server
```

Now, you have node_modules folder and all "goods" from there. Also among vital dependencies for our webpack packages graph the ones for compiling TS, transpliling JS, TS glbal types and webpack loaders for all kinds of necessary extensions.

```bash
yarn add --dev @babel/core @babel/plugin-transform-react-jsx @babel/preset-env @babel/preset-react @types/node @types/react @types/react-dom babel-loader cross-env css-loader html-webpack-plugin style-loader ts-loader typescript
```

And it is not even close to start developing 🙄
The last part of crucial and vital packages is to add render library. In this particular case I choose React, but it can be any of render framework or library (Vue, Angular, Next, Preact and etc.)

```bash
yarn add react react-dom
```

### 2. Structure

Historically JS is a messy language which is too flexible in my opinion. That "flexibility" walks through of all of JS history and JS tools. There were an efforts to create a strict frameworks to handle "flexibility" of JavaScript, such as AngularJS or NestJS. But still it is not enough. Especially if you are developing with such a free libs like React or Vue. So you have to set up real hard linters and code checkers in order to fight entropy. Nowadays it is recommended use patterns when you develop with JS. For example, [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/overview).

It is a single way to organize your project structure with FSD 💪. But of course the whole project folder may look different from project to project because of config files and config tools.

- build (autogenerated)
- node_modules
  - index.html
- public
- src
  - app
    - index.ts
    - index.css
  - entities
  - features
  - pages
  - shared
  - widgets
  - index.ts
- .eslintignore
- .eslintrc.js
- .gitignore
- .prettierignore
- .prettierrc
- Dockerfile
- nginx.conf
- package-lock.json
- package.json
- tailwind.config.js
- tsconfig.json
- webpack.config.js
- README.md

### 3. Config

Modern frontend apps need a lot of configs... like a lot!😓

tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es2020" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', 'ES2019', 'ES2020' or 'ESNEXT'. */,
    "module": "esnext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": [
      "esnext",
      "dom",
      "dom.iterable"
    ] /* Specify library files to be included in the compilation. */,
    "jsx": "react" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "outDir": "build" /* Redirect output structure to the directory. */,
    "strict": true /* Enable all strict type-checking options. */,
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    "baseUrl": ".",
    /* Base directory to resolve non-absolute module names. */ "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["src/shared/*"],
      "@app/*": ["src/app/*"],
      "@entities/*": ["src/entities/*"],
      "@features/*": ["src/features/*"],
      "@pages/*": ["src/pages/*"],
      "@processes/*": ["src/processes/*"],
      "@widgets/*": ["src/widgets/*"]
    }
  },
  "exclude": ["coverage"],
  "include": ["src", "@types"]
}
```

webpack.config.js:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// setting up automatically in package.json start/build
//  commands via "cross-env" package
const isDevelopment = process.env.NODE_ENV === 'development';
const DEV_PORT = process.env.DEV_PORT || 4000;

// entry, output, mode, plugins, module, resolve, devServer
module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  mode: isDevelopment ? 'development' : 'production',

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
      minify: isDevelopment
        ? undefined
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: DEV_PORT,
    hot: true,
    historyApiFallback: true,
  },
};
```

Add to _package.json_ scripts in order to run your app in the mode you need:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development webpack serve --open",
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```
