import Mixin from 'ember-metal/mixin';
import assertRequiredProperties from '../utils/assert-required-properties';

export default Mixin.create({
  init() {
    assertRequiredProperties(this);
    this._super(...arguments);
  }
});
