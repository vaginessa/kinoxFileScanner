import {kinoxFile} from "./file";
import * as fs from "fs";

function printFile(arg : String) {
  console.log(arg);
}

printFile("hallo");
let someTestFile : kinoxFile = new kinoxFile();
someTestFile.name = "randomfilename.mp4";
printFile(someTestFile.name);



