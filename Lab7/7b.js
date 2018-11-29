var fs = require('fs');
var path = require('path');
let directory = process.argv[2];
var active = false;

fs.watch(directory, function (event, filename) {
    if (active == false) {
        active = true;
        console.log(filename + ' has been changed: ' + event);
        /*
        let file = path.join(directory, filename.toString());
        fs.readFile(file, "utf-8", (err, data) => {
        if (err) throw err;
            console.log(data);
        });
        */
       setTimeout(() => active = false, 1000)
    }
});

//To run this, input into console node 7b.js /folderpath/
//To get more info remove /* and */