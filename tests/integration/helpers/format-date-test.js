import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date', function(hooks) {
  setupRenderingTest(hooks);

  test('it formats the date according to a default format string', async function(assert) {
    this.inputValue = new Date('10-15-2020');

    await render(hbs`{{format-date this.inputValue}}`);

    assert.equal(this.element.textContent.trim(), '10/15/2020');
  });

  test('it formats the date according to the supplied format string', async function(assert) {
    this.inputValue = new Date('10-15-2020');

    await render(hbs`{{format-date this.inputValue "MM/dd/yyyy hh:mm a"}}`);

    assert.equal(this.element.textContent.trim(), '10/15/2020 12:00 AM');
  });
});
