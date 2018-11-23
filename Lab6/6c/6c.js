function validateFunction() {
    var email = document.getElementById("form1").value;
    var number = document.getElementById("form2").value;
    if (!validateEmail(email)) displayEmailError();
    else displayEmailConfirmation();
    if (!validateNumber(number)) displayNumberError();
    else displayNumberConfirmation();
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateNumber(number) {
    var re = /^\d+$/;
    return re.test(String(number).toLowerCase());
}
function displayEmailError() {
    
    document.getElementById("form1").style.color = "red";
    document.getElementById("form1").style.borderColor = "red";
}
function displayNumberError() {
    document.getElementById("form2").style.color = "red";
    document.getElementById("form2").style.borderColor = "red";
}
function displayEmailConfirmation() {
    document.getElementById("form1").style.color = "green";
    document.getElementById("form1").style.borderColor = "green";  
}
function displayNumberConfirmation() {
    document.getElementById("form2").style.color = "green";
    document.getElementById("form2").style.borderColor = "green"; 
}
function resetFunction() {
    resetColor();
    document.getElementById("form1").value = "";
    document.getElementById("form2").value = "";
}
function resetColor() {
    document.getElementById("form1").style.color = "black";
    document.getElementById("form2").style.color = "black";
    document.getElementById("form1").style.borderColor = "black";
    document.getElementById("form2").style.borderColor = "black";
}