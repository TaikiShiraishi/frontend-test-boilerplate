import assert from 'power-assert';
import add  from '../src/calc-util.js';

describe('add関数のテスト', function() {
  it('1+2は3である', function() {
    assert(add(1, 2) === 3)
  });
  it('1+2は4である', function() {
    assert.equal(add(1, 2), 4)
  });
});

