# Testing Instructions for Reviewers

### Start the express server

- From the express-server directory of this project, run `node app.js`

### Start the ember server

- From the root direcotry of this project, run `ember server --proxy="http://localhost:3000`

### Visit the page

- Visit `http://localhost:4200/transfers` to view the page
- Navigate between test cases using the select menu

### Run the automated tests

- From the root directory of this project, run `npm run test`

# Testing Needs

### Timezones

I would recommend testing that timezones work as expected, both from a technical and user perspective.  Is localization required, or should date times for an application like this be displayed in a universal format?

### API Key

I would recommend some type of BDD test that hits a production or pre-production environment to ensure that both the front end application and server have configured the API key properly.

### Additional unit, integration, and acceptance tests

I was not able to add tests for all functionality due to time constraints.  Some areas I would increase coverage include sorting behavior, as well as adapter and serializer configurations.  Most of the adapter and serializer configuration is implicitly tested through the acceptance test that runs the application against a mirage server, but the configuration that supports the express-server backend remains untested.

# Implementation Choices

### Using ember-data models to isolate certain API Concerns

When presented with an API that requires interpreting enumerable values based on multiple fields, I try to move that interpretation as close to the data request as possible.  The most appropriate place tends to be either a serializer that processes the API response's payload, or in a model definition itself.  In this scenario, using getters in the model definition feels most appropriate, because we do want to preserve the original fields from the API response.

This is still somewhat brittle, as the API could change and break these computed properties, but the benefit stands that the issue is somewhat isolated from rest of the application, particularly in the presentation and templating layer.

### Using aria attributes to accomodate unconventional table layout

"Sub-rows" as presented in the design requirement are somewhat unconventional HTML, and create interaction challenges for assistive technology.  If presented with this requirement in a real world setting, I might work with the product owner and designer in an effort to consider other ways to present the data.

However, this is a fairly simple layout, and some additional aria markup allows us to maintain a layout that is both valid HTML and provides meaningful association and reading order for people using assistive technology.

Having said that, some users may still find challenges with this markup, as there are many ways that different assistive devices consume tabular data.

https://www.w3.org/WAI/tutorials/tables/#why-is-this-important

### Responsive styles

It is often tempting to chase after complex solutions for responsive tables.  However, best practices really stress that the best way to display tabular data is simply to use standard tables.  With this in mind, I generally recommend the following approach for tabular data on smaller viewports:

1. Ensure the table's container is as wide as possible (i.e. 100% of its container)
2. Ensure the table's container allows horizontal scrolling.
3. Minimize text wrapping, especially for column headers.
4. Decrease font size and whitespace like padding and margins using css media queries.
