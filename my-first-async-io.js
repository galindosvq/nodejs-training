const fs = require("fs");

var path = process.argv[2];

fs.readFile(path, function(err, print) {
  if (err) {
    return console.log("ERROR");
  }

  const lines = print.toString().split("\n").length - 1;
  console.log(lines);
});
