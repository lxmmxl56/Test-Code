'use strict';
  
const math = require('mathjs');

module.exports = class BigO {
  
  sum(n) {
    if (n <= 0) {
      return 0;
    }
    return(n + this.sum(n - 1));
  }

  pairSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = this.pairSumRec(sum, i);
    }
    return sum;
  }

  pairSumRec(a, b) {
    return a + b;
  }
  
  // this illustrates N^2
  printPairs(a) {
    const n = a.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        count++;
        // console.log(`${i}:${j}`);
      }
    }
    console.log(`Length: ${n}, Count: ${count}`)
    return (`N^2? ${math.sqrt(count) === n}`);
  }

  // this illustrates 2^N
}