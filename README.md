### Tests

* As expected, tests run with `npm test`.
* The test runner is `mocha`, with `chai` providing the assertions.
* Tests are split into unit and integration tests, each with its own
subdirectory.

### Structure

Each part of the domain is isolated in a separate package containing its
corresponding set of resolver functions, data sources and interface definitions.