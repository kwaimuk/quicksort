/* jshint esversion: 6 */
var quickSort = (arr) => {
    var leftArr = [];
    var rightArr = [];
    var arr2 = null;
    var i = 0;
    var pivot = arr[0];

    if(arr.length<2){
      return arr;
    }

  while(i !== arr.length -1){
    if(pivot <= arr[i+1]){
      rightArr.push(arr[i+1]);
      i++;


    } else if (pivot > arr[i+1]){
      leftArr.push(arr[i+1]);
      i++;

    }

  }
arr2 = quickSort(leftArr).concat(pivot,quickSort(rightArr));

return arr2;
};


module.exports = quickSort;