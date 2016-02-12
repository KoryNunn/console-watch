# console-watch

Track console.log/warn/error/etc...

## Install

```
npm install console-watch
```

## Usage

```javascript

// Require it
var consoleWatch = require('console-watch');

consoleWatch(function(getResults){

    // Log some stuff
    console.log('foo');

    // Get the results (and reset console back to it's original state.
    var results = getResults();
});

```