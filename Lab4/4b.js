function fibonacci(a) {
    var x = 0;
    var y = 1; 
    var z;
    
    while (a >= 0) {
        z = x;
        x = x + y;
        y = z;
        a--;
    }
    
    return y;
}
    
    console.log("97th number in Fibonacci sequence is " + fibonacci(97))