import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import RequiredPropertiesMixin from 'ember-required-properties/mixins/required-properties';

describe('Unit | Mixin | required params', function() {
  // Replace this with your real tests.
  it('works', function() {
    let RequiredPropertiesObject = Ember.Object.extend(RequiredPropertiesMixin);
    let subject = RequiredPropertiesObject.create();
    expect(subject).to.be.ok;
  });
});
