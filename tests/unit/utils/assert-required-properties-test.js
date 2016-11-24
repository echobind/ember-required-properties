import { expect } from 'chai';
import { describe, it } from 'mocha';
import assertRequiredProperties from 'ember-required-properties/utils/assert-required-properties';
import Component from 'ember-component';

const EXPECTED_ERROR = 'You must pass name to (subclass of Ember.Component)';
const MyComponent = Component.extend({
  requiredProperties: ['name']
});

describe('Unit | Utility | assert required properties', function() {
  describe('without required properties', function() {
    let componentInstance = MyComponent.create();

    it('throws an error if not provided on the component', function() {
      expect(() => {
        assertRequiredProperties(componentInstance);
      }).to.throw(EXPECTED_ERROR);
    });
  });

  describe('without required properties', function() {
    let componentInstance = MyComponent.create({
      name: 'Dave'
    });

    it('does not throw an error if properties are provided', function() {
      expect(() => {
        assertRequiredProperties(componentInstance);
      }).to.not.throw(EXPECTED_ERROR);
    });
  });
});
