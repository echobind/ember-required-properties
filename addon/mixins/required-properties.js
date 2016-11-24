import Mixin from 'ember-metal/mixin';
import assertRequiredProperties from '../utils/assert-required-properties';

export default Mixin.create({
  init() {
    this._super(...arguments);
    assertRequiredProperties(this);
  }
});
