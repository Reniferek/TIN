function binarySearch(arr, value) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== value && start < end) {
        if (value < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return (arr[middle] !== value) ? -1 : middle;
}
  
var lista = [17,12,7,8,3,22,23,51,69,34,1];
console.log(binarySearch(lista, 7));