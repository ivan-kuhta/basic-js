class VigenereCipheringMachine {
  constructor(revers) {
    this.revers = (revers == false ? true : false);
  }
  language = {
    en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  }

  get squareVigenere() {
    let matrix = [];
    for(let i = 0; i <= this.language.en.length; i++) {
      let rowArr = [];
      for(let j = 0; j < this.language.en.length; j++) {
        if(this.language.en[i + j] == undefined) {
          rowArr.push(this.language.en[Math.abs(this.language.en.length - (i + j))]);
        } else {
          rowArr.push(this.language.en[i + j]);
        }
      }
      matrix.push(rowArr)
    }
    return matrix;
  }

  getEncryptLetter(letterMessage, letterKey) {
    if(/^[a-zA-Z]/g.test(letterMessage)){
      return this.squareVigenere[this.language.en.indexOf(letterKey)][this.language.en.indexOf(letterMessage)];
    } else {
      return letterMessage;
    }
  }

  getDecriptLetter(letterEncryptedMessage, letterKey) {
    if(/^[a-zA-Z]/g.test(letterEncryptedMessage)){
      return this.language.en[this.squareVigenere[this.language.en.indexOf(letterKey)].indexOf(letterEncryptedMessage)];
    } else {
      return letterEncryptedMessage;
    }
  }

  getFullKey(message, key) {
    let fullKey = '';
    let tmpIndexKey = 0;
    for(let i = 0; i < message.length; i++) {
      if(/^[a-zA-Z]/g.test(message[i])) {
        if(key[tmpIndexKey] == undefined) {
          tmpIndexKey = 0;
        }
        fullKey += key[tmpIndexKey]
        tmpIndexKey++;
      } else {
        fullKey += message[i];
      }
    }
    return fullKey;
  }

  checkArguments() {
    [...arguments].forEach(arg => {
      if(arg == undefined) {
        throw new Error();
      }
    })
  }
  encrypt(message, key) {
    this.checkArguments(message, key);
    if(this.revers) {
      message = message.split('').reverse().join('');
    }
    let encrypt = '';
    let fullKey = this.getFullKey(message, key);

    for(let i = 0; i < message.length; i++) {
      encrypt += this.getEncryptLetter(message.toUpperCase()[i], fullKey.toUpperCase()[i]);
    }
    return encrypt;
  }    
  decrypt(encryptedMessage, key) {
    this.checkArguments(encryptedMessage, key);
    if(this.revers) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }
    let decrypt = '';
    let fullKey = this.getFullKey(encryptedMessage, key);
    for(let i = 0; i < encryptedMessage.length; i++) {
      decrypt += this.getDecriptLetter(encryptedMessage.toUpperCase()[i], fullKey.toUpperCase()[i]);
    }
    return decrypt;
  }
}

module.exports = VigenereCipheringMachine;
