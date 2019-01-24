function ndMin(arr) {
    let stMin = Math.min.apply(Math, arr);
    let mini = arr.indexOf(stMin);
    arr[mini] = +Infinity;
    secondMin = Math.min.apply(Math, arr);
    arr[mini] = stMin;
    return secondMin;
}

function ndMax(arr) {
    let stMax = Math.max.apply(Math, arr);
    let maxi = arr.indexOf(stMax);
    arr[maxi] = -Infinity;
    secondMax = Math.max.apply(Math, arr);
    arr[maxi] = stMax;
    return secondMax;
  
}
  
function conclusion(arr) {
    let min = ndMin(arr);
    let max = ndMax(arr);
    return "Second min is " + min + ". Second max is: " + max + ".";
}

let array = [13,15,6,7,10,22,29,25,10]
console.log(conclusion(array));