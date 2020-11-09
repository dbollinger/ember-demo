# status-tracker

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd status-tracker`
* `npm install`

## Running / Development

There are two ways to run the application during development.  Use the Mirage development server for rapid development or to test API changes that may not yet be finalized.  Alternatively, you may proxy the ember server to the Express server back-end for a more integrated development experience.

### Mirage server

The mirage server creates a front end focused environment with support for acceptance tests, allowing contributors to develop without running their code against a "real" server.

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200/transfers).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Express server

The ember server can also be proxied to a live server, including the provided express server, which by default runs on port 3000.

* Start the ember application server and proxy it to whatever port your server is running on: `ember serve --proxy="http://localhost:3000"`
* Visit your app at [http://localhost:4200/transfers](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

## Tests

## Running Tests

* `npm run test` runs ember test suite and linting test suite
* `ember test` runs ember test suite
* `ember test --server`

## Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

