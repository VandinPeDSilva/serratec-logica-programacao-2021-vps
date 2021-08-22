// Continha Oposta.

const terminal = require("prompt-sync")();

var number;
var numberNeg;

console.log("Bem-vindo(a) ao programa Continha Oposta. Digite um numero para receber o inverso.")

number = terminal();
numberNeg = number * (-1);

console.log("Muito bem. Seu número é: " + numberNeg + ".");