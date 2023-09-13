function insertionSortReverse(array) {
    for(var i = array.length - 1; i >= 0; i--) {
        var val = array[i];
        var j;
        for(j = i + 1; j < array.length && array[j] <= val; j++) array[j - 1] = array[j];
        array[j - 1] = val;
    }
    return array;
}

/*
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
*/