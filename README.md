# bth012-unit-tests
A small node.js project with some code and some jest unit tests.

## Run the program

```bash
$ node index.js
```

## The code

The code is a single function that produces the message and a few lines to determine if the code is being run `node index.js` or imported into tests.

## Linting

Linting has bee adjusted to not warn for undefined functions that is implicitly defined by jest (describe, it, expect, ..) but also to error when tests are focused (`describe.only`, `it.only`) or ignored (`describe.skip`, `it.skip`).

## Editor config
A visual code config has been added to set consistent indentation and handling of file endings according to the style guide.
