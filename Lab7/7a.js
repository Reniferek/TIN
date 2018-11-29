function operationz(url_in, a, b) {
    if (url_in.includes("add")) {
      return a + b;
    }
    if (url_in.includes("sub")) {
      return a - b;
    }
    if (url_in.includes("div")) {
      return a / b;
    }
    if (url_in.includes("mul")) {
      return a * b;
    }
}

function check (el1, el2) {
    if(isNaN(el1) || isNaN(el2)) {
      return false;
    } else {
      return true;
    }
  }

var http = require('http');
var url = require('url');

var server = http.createServer((request, res) => {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  var num1 = parseInt(query.a);
  var num2 = parseInt(query.b);

  if(check(num1, num2) === true) {
    var result = operationz(request.url, num1, num2);
    res.write(result);
    res.end();
  } else {
    res.write('Wrong input! Try again ;)');
    res.end();
  }
});

server.listen(8080);

console.log("The server is running!");