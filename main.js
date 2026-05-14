import buildModel from "./markovModel.js";
import data from "./ReadFile.js";
import {fs} from "file-system";
//const data = require("./ReadFile");

console.log(buildModel(data));
//Execute only to put the output in a JSON file
const jsonString = JSON.stringify(buildModel(data), null, 4);
fs.writeFileSync('probabilities.json', jsonString, 'utf8');

