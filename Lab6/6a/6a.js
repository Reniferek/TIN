document.getElementById("button1").addEventListener("click", function () {
    var tempf = document.getElementById("field1").value;
    var tempc = document.getElementById("field2").value;
    convertAll(tempf, tempc);
});
function convertAll(tempf, tempc) {
    tempf = parseFloat(tempf);
    tempc = parseFloat(tempc);
    document.getElementById("result1").innerHTML = ((tempf - 32) / 1.8).toFixed(2);
    document.getElementById("result2").innerHTML = ((tempc * 9 / 5) + 32).toFixed(2);
}