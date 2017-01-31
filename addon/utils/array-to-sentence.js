/**
 * Turns an array into a sentence.
 * @param  {Array}  [array]         The array of strings
 * @param  {String} [separator]     The separator between items. Defaults to ','
 * @param  {String} [lastSeparator] The lastSeparator between items. Defaults to 'and'
 * @return {String}                 The sentence with separators
 * @method
 * @public
 */
export default function arrayToSentence(array, { separator = ',', lastSeparator = 'and' } = {}) {
  return _singleItemSentence(array, separator, lastSeparator)
    || _twoItemSentence(array, separator, lastSeparator)
    || _multipleItemSentence(array, separator, lastSeparator);
}

/**
 * Returns a sentence for a single word array.
 * @method
 * @private
 */
function _singleItemSentence(array) {
  if (array.length === 1) {
    return _formatItem(array[0]);
  }
}

/**
 * Returns a formatted string for an item in the array.
 * @method
 * @private
 */
function _formatItem(item) {
  return `\`${item}\``;
}

/**
 * Returns a sentence for two word arrays.
 * @method
 * @private
 */
function _twoItemSentence(array, separator, lastSeparator) {
  if (array.length === 2) {
    return `${_formatItem(array[0])} ${lastSeparator} ${_formatItem(array[1])}`;
  }
}

/**
 * Returns a sentence for arrays with more than two words.
 * @method
 * @private
 */
function _multipleItemSentence(array, separator, lastSeparator) {
  let firstPart = array.slice(0, -1).map(_formatItem).join(`${separator} `);
  let lastPart = _formatItem(array[array.length - 1]);

  return `${firstPart}${separator} ${lastSeparator} ${lastPart}`;
}
