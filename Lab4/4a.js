function rFactorial(x) {
    return x == 0 ? 1: x * rFactorial(x-1);
}

function iFactorial(x) {
    var i = 1, j = x;
    for (; i < x; ++i) {
        j *= i;
    }
    return i == 1 ? i : j;
}

var x = 7;
var r = rFactorial(x);

console.log("Recursive factorial of " + x + " = " + r);
console.log("Iterative factorial of " + x + " = " + iFactorial(x));