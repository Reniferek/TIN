function insertFunction() {
    var table = document.getElementById("table1");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if (document.getElementById("field1").value.length != 0 || document.getElementById("field2").value.length != 0 || document.getElementById("field3").value.length != 0) {
    cell1.innerHTML = document.getElementById("field1").value;
    cell2.innerHTML = document.getElementById("field2").value;
    cell3.innerHTML = document.getElementById("field3").value;
    } else {
    cell1.innerHTML = "ERROR";
    cell2.innerHTML = "ERROR";
    cell3.innerHTML = "ERROR";
    }
}