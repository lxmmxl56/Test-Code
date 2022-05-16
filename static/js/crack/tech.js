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
  
  allPermut(n) {
    const permutations = [];
    let count = 0;
    console.log(n);
    const string = n.split('');
    while (string.length > 0) {
      count++;
      const last = string.pop();
      permutations.push(this.permute(string, last))
    }
    return [permutations, count];
  }
  
  permute(string, letter) {
    const permutations = [];
    if (string.length > 2) {
      const last = string.pop();
      permutations.append(this.permute(string, last));
    } else {
      permutations.push(string[0] + string[1]);
      permutations.push(string[1] + string[0]);
      for (let i = 0; i < permutations.length; i++) {
        const string = permutations[i];
        let newString = string;
        console.log(newString);
        for (let j = 0; j < string.length; j++) {
          newString.splice(j, 0, letter);
        }
      }
    }
    return permutations;
  }  
}
