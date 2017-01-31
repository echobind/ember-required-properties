import { expect } from 'chai';
import { describe, it } from 'mocha';
import arrayToSentence from '../../../utils/array-to-sentence';

describe('Unit | Utility | array to sentence', function() {
  describe('with defaults', function() {
    let array = ['what', 'the', 'attrs'];
    let result = arrayToSentence(array);

    it('formats things properly', function() {
      expect(result).to.equal('`what`, `the`, and `attrs`');
    });
  });

  describe('providing a separator', function() {
    let array = ['what', 'the', 'attrs'];
    let result = arrayToSentence(array, { separator: '-' });

    it('formats things properly', function() {
      expect(result).to.equal('`what`- `the`- and `attrs`');
    });
  });

  describe('providing a lastSeparator', function() {
    let array = ['what', 'the', 'attrs'];
    let result = arrayToSentence(array, { lastSeparator: '-' });

    it('formats things properly', function() {
      expect(result).to.equal('`what`, `the`, - `attrs`');
    });
  });

  describe('one word sentence', function() {
    let array = ['hi'];
    let result = arrayToSentence(array, { lastSeparator: '-' });

    it('formats things properly', function() {
      expect(result).to.equal('`hi`');
    });
  });

  describe('two word sentence', function() {
    let array = ['hi', 'there'];
    let result = arrayToSentence(array, { separator: '!' });

    it('formats things properly', function() {
      expect(result).to.equal('`hi` and `there`');
    });
  });
});
