const terminal = require("prompt-sync")();

var recipiente;
var alcoolPercent = 0.70;
var alcool;
var gelPercent = 0.30;
var gel;

console.log("Precisa saber quanto de álcool e de gel precisa? Digite o volume, em minilitros, do recipiente:");
recipiente = terminal();

alcool = recipiente * alcoolPercent;
gel = recipiente * gelPercent;

console.log("Você vai precisar de:");
console.log(alcool.toFixed(1) + " ml de alcool.")
console.log(gel.toFixed(1) + " ml de gel.")