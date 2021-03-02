module.exports = function transform(arr) {
  let tmpArr = [];

  function checkElementArray(index, array) {
    return array[index] != undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if(checkElementArray(tmpArr.length - 1, tmpArr) && arr[i - 2] != '--discard-next'){
          tmpArr.pop();
        }
        break;
      case "--double-next":
        if(checkElementArray(i + 1, arr)){
          tmpArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if(checkElementArray(tmpArr.length - 1, tmpArr) && arr[i - 2] !='--discard-next'){
          tmpArr.push(arr[i - 1]);
        }
        break;
      default:
        tmpArr.push(arr[i]);
        break;
    }
  }
  return tmpArr;
};
