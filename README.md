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
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Express server

The ember server can also be proxied to a live server, including the provided express server, which by default runs on port 3000.

* Start the ember application server and proxy it to whatever port your server is running on: `ember serve --proxy="http://localhost:3000"`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

## Tests

## Running Tests

* `ember test`
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


## Choices explained

### Using ember-data models to isolate API Concerns

When presented with an API that requires interpreting enumerable values based on multiple fields, I try to move that interpretation as close to the data request as possible.  The most appropriate place tends to be either a serializer that processes the API response's payload, or in a model definition itself.  In this scenario, using getters in the model definition feels most appropriate, because we do want to preserve the original fields from the API response.

This is still somewhat brittle, as the API could change and break these computed properties, but the benefit stands that the issue is somewhat isolated from rest of the application, particularly in the presentation and templating layer.

### Using aria attributes to accomodate unconventional table layout

"Sub-rows" as presented in the design requirement are somewhat unconventional HTML, and create interaction challenges for assistive technology.  If presented with this requirement in a real world setting, I might work with the product owner and designer in an effort to consider other ways to present the data.

However, this is a fairly simple layout, and some additional aria markup allows us to maintain a layout that is both valid HTML and provides meaningful association and reading order for people using assistive technology.

Having said that, some users may still find challenges with this markup, as there are many ways that different assistive devices consume tabular data.

https://www.w3.org/WAI/tutorials/tables/#why-is-this-important

### Responsive styles

It is often tempting to chase after complex solutions for responsive tables.  However, best practices really stress that the best way to display tabular data using standard tables.  With this in mind, I generally recommend the following approach for tabular data on smaller viewports:

1. Ensure the table's container is as wide as possible (i.e. 100% of its container)
2. Ensure the table's container allows horizontal scrolling.
3. Minimize text wrapping, especially for column headers.
4. Decrease font size and whitespace like padding and margins using css media queries.
