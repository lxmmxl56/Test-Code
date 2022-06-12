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

  permute(input, count) {
    // count = count || 0;
    if (1 === input.length) {
      // return [input, count + 1];
      return input;
    }
    const permutations = [];
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const other = input.slice(0, i) + input.slice(i + 1, input.length);
      console.log(char);
      console.log(other);
      // for (let j = 0; j < other.length; j++) {
        // console.log(other[j])
        permutations.push(char + this.permute(other));
      // }
    }
    // return [permutations, count];
    return permutations
  }

}
