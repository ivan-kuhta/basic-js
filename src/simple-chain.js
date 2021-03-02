const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(String(value));
    return this;
  },
  removeLink(position) {
    if(!this.result.find((item, index) => index == position)) {
      this.result = [];
      throw new Error();
    }
    this.result.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    let tmp = `( ${this.result.join(" )~~( ")} )`;
    this.result = [];
    return  tmp;
  }
};

module.exports = chainMaker;
