import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEST_CASES = new Map([
  [0, '0 b'],
  [1000, '1000 b'],
  [1024, '1 kB'],
  [1048555, '1023.98 kB'],
  [1048576, '1 MB'],
  [11158576, '10.64 MB'],
  [1073741824, '1 GB'],
  [1231245566, '1.15 GB'], // example from instructions
  [1099511627776, '1 TB']
]);

module('Integration | Helper | byte-notation', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the expected output for all test values', async function (assert) {
    assert.expect(TEST_CASES.size);

    this.keys = TEST_CASES.keys();
    this.values = TEST_CASES.values();
    this.inputValue = this.keys.next().value;

    while (this.inputValue !== undefined) {
      // iterate through all map entries to assert expected output
      await render(hbs`{{byte-notation this.inputValue}}`);
      assert.equal(this.element.textContent.trim(), this.values.next().value);
      this.inputValue = this.keys.next().value;
    }
  });
});
