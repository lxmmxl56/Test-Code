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
    count = count || 0;
    if (input.length <= 1) {
      return [input, count + 1];
    }
    const permutations = [];
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const others = input.slice(0, i) + input.slice(i + 1, input.length);
      const res = this.permute(others);
      const perms = res[0];
      count += res[1];
      for (const perm of perms) {
        permutations.push(char + perm);
        count += 1;
      }
    }
    return [permutations, count];
  }

}
