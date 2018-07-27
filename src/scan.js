"use strict";
exports.__esModule = true;
var file_1 = require("./file");
function printFile(arg) {
    console.log(arg);
}
printFile("hallo");
var someTestFile = new file_1.kinoxFile();
someTestFile.name = "randomfilename.mp4";
printFile(someTestFile.name);
