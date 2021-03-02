module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: Math.pow(2, disksNumber) - 1,
    get seconds() {
      return Math.floor((this.turns * 3600) / turnsSpeed)
    },
  };
  return result;
};
