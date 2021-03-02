module.exports = function repeater(str, options) {
  let tmpOption = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: "|"
  }
  tmpOption = {...tmpOption, ...options};
  
  let arr = [];
  let addArr = [];

  for(let j = 0; j < (tmpOption.additionRepeatTimes); j++) {
    addArr.push(String(tmpOption.addition));
  }
  for(let i = 0; i < (tmpOption.repeatTimes); i++) {
    arr.push(`${String(str)}${addArr.length > 0 ? addArr.join(tmpOption.additionSeparator) : ''}`);
  }
  return arr.join(tmpOption.separator);
};
  