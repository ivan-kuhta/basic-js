module.exports = function countCats(matrix) {
  return [].concat.apply([], matrix).filter(item => item == '^^').length;
};
