// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    isNaN(+sampleActivity) ||
    typeof sampleActivity != "string" ||
    +sampleActivity > 15 ||
    +sampleActivity <= 0
  ) {
    return false;
  }
  let k = Math.log(2) / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
  return t;
};
