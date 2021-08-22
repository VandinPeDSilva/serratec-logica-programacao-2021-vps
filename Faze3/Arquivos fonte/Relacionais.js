const terminal = require("prompt-sync")();

var numA;
var numB;

console.log("Bem-vindos. Iremos mostrar o resultado das operações relacionais possívies com dois numeros.\nDigite o primeiro numero abaixo:");
numA = terminal() * 1;

console.log("Agora digite o segundo numero abaixo:");
numB = terminal() * 1;

console.log("Muito bem, aqui estão: " + numA + ", " + numB);
console.log(numA + " == " + numB + " : " + (numA == numB));
console.log(numA + " != " + numB + " : " + (numA != numB));
console.log(numA + " > " + numB + " : " + (numA > numB));
console.log(numA + " >= " + numB + " : " + (numA >= numB));
console.log(numA + " < " + numB + " : " + (numA < numB));
console.log(numA + " <= " + numB + " : " + (numA <= numB));