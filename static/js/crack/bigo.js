'use strict';

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
}
