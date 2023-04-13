import app from './app';

import './styles/index.css';

// Some main notes on Webpack here:

/*
  The import and export statements have been standardized in ES2015.
  They are supported in most of the browsers at this moment,
  however there are some browsers that don't recognize the new syntax.
  But don't worry, webpack does support them out of the box.

  Behind the scenes, webpack actually "transpiles" the code so that
  older browsers can also run it. If you inspect dist/main.js,
  you might be able to see how webpack does this, it's quite ingenious!
  Besides import and export, webpack supports various 
  other module syntaxes as well, see Module API for more information.

  Note that webpack will not alter any code other than import and
  export statements. If you are using other ES2015 features,
  make sure to use a transpiler such as Babel via webpack's loader
  system.
*/

/*
  As of version 4, webpack doesn't require any configuration, but most
  projects will need a more complex setup, which is why webpack supports
  a configuration file. This is much more efficient than having to manually
  type in a lot of commands in the terminal
*/

/*
  If a webpack.config.js is present, the webpack command picks it up by default.
  You can pass a configuration of any name. This will be useful for more complex
  configurations that need to be split into multiple files.
*/

/*
  tools like webpack will dynamically bundle all dependencies (creating what's 
  known as a dependency graph). This is great because every module now explicitly 
  states its dependencies and we'll avoid bundling modules that aren't in use.
*/

/*
  Module loaders can be chained. Each loader in the chain applies transformations
  to the processed resource. A chain is executed in reverse order. The first loader
  passes its result (resource with applied transformations) to the next one, and so
  forth. Finally, webpack expects JavaScript to be returned by the last loader in
  the chain.
*/

document.body.appendChild(app());
