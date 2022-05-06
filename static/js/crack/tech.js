'use strict';

const math = require('mathjs');

module.exports = class Tech {
  
  x(n, count) {
    count = count || 1;
    if (n <= 0) {
      return [0, count];
    }
    const res = this.x(n - 1, count + 1);
    return [n + res[0], res[1]];
  }
  
  sumDigits(n) {
    let sum = 0;
    let count = 0;
    while (n > 0) {
      count++;
      sum += n % 10;
      n = math.floor(n/10);
    }
    return [sum, count];
  }
  
}
