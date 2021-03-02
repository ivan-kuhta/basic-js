module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter((item) => item instanceof Array == true).length == 0) {
      return 1;
    }
    return 1 + this.calculateDepth(arr.filter(item => item instanceof Array == true).flat());
  }
};