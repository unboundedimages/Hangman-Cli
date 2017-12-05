// var hello = "hi there";
// console.log(hello);
var words = require("./words");
var blanksAndSuccesses = [];
var input = require("inquirer");



function startGame(words) {
    var palabra = words[0];
    var kalimah = palabra.length;
    for (var i = 0; i < kalimah; i++) {
        blanksAndSuccesses.push("_");
    }
    input.prompt([{
        type: "input",
        message: "Please enter a letter",
        name: "stored"
    }]);
}
startGame(words);
console.log(blanksAndSuccesses);
