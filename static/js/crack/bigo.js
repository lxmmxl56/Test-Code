'use strict';
  
// const math = require('mathjs');

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
      }
    }
    return `Length: ${n}, Count: ${count}`
  }
  
  // this also illustrates N^2
  halfMatrix(a) {
    const n = a.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        count++;
      }
    }
    return `Length: ${n}, Count: ${count}`
  }

  // this illustrates 2^N - recursive
  twoN(n) {
    if (n < 1) {
      return 1;
    }
    return this.twoN(n - 1) + this.twoN(n - 1);
  }
  
  product(a, b) {
    let sum = 0;
    let count = 0; 
    for (let i = 0; i < b; i++) {
      sum += a;
      count++;
    }
    return [a,b,sum,count];
  }
  
  power(a, b, count=0) {
    count = count || 0;
    if (b < 0) {
      return [0, count];
    }
    if (0 === b) {
      return [1, count];
    }
    return [a * this.power(a, b - 1, count + 1)[0], this.power(a, b - 1, count + 1)[1]];
  }

}
