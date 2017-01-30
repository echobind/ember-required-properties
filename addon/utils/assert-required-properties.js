import get from 'ember-metal/get';
import { assert } from 'ember-metal/utils';
import { isEmpty, isNone } from 'ember-utils';
import arrayToSentence from './array-to-sentence';

/**
 * Asserts the required attributes are present on an object.
 * @method
 * @return {undefined}
 * @public
 */
export default function assertRequiredProperties(object) {
  let requiredProperties = get(object, 'requiredProperties');

  if (isEmpty(requiredProperties)) {
    return;
  }

  let propertySentence = arrayToSentence(requiredProperties);
  let className = _getClassName(object);

  let definedProperties = requiredProperties.filter((a) => {
    let providedValue = get(object, a);
    return !isNone(providedValue);
  });

  let hasRequiredProperties = definedProperties.length === requiredProperties.length;

  assert(`You must pass ${propertySentence} to ${className}`, hasRequiredProperties);
}

/**
 * Returns a className from an object. If the object was created manually
 * (constructor.toString does not contain modules), we just return the whole
 * string. In this case, we will get `(subclass of Ember.Object)` or similar.
 * @method
 * @return {String} The class name
 * @private
 */
function _getClassName(object) {
  let constructorString = object.constructor.toString();
  if (constructorString.indexOf(':') > -1) {
    let [, classNameFromModule] = constructorString.split(':');
    return classNameFromModule;
  }

  return constructorString;
}
