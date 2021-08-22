const terminal = require("prompt-sync")();

var numero;
var numeroDobro;

console.log("Digite abaixo um número que o programa vai te retornar o dobro dele.");
numero = terminal();
numeroDobro = numero * 2;

console.log("O dobro de " + numero + " é: " + numeroDobro + ".");
