window.onload = function () {
    setTimeout(function () {
        showText();
    }, 5000);
};
function showText() {
    document.getElementById("message").style.visibility = "visible";
}