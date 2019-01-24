function longest(str) {
    let maxWord = 0;
    let arr = str.split(/,\s|,|\s/);
    arr.sort((a,b) => {return a.length - b.length;});
    return arr[arr.length-1];
}
console.log(longest("My name is the Longest"));