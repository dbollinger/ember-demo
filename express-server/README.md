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
