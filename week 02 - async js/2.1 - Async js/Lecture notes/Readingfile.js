// fs stands for file system used to read and write the files in your local system
// import an external fs module

const fs = require("fs");

// reading the file a.txt and store in the contents variable

const contents = fs.readFileSync("a.txt" , "utf-8");

//print the contents of the file

console.log(contents);
