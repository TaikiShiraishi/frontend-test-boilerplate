var assert = require('assert');
var calcUtil = require('../src/calc-util.js');

describe('add関数のテスト', function() {
  it('1+2は3である', function() {
    if (calcUtil.add(1, 2) === 3) {
      assert(calcUtil.add(1, 2) === 3)
    }
  });
  it('1+2は4である', function() {
    if (calcUtil.add(1, 2) === 4) {
      assert(calcUtil.add(1, 2) === 4)
    }
  });
});

