const terminal = require("prompt-sync")();

var numero;
var numeroQuadrado;

console.log("Digite abaixo um número que o programa vai te retornar o quadrado dele.");
numero = terminal();
numeroQuadrado = numero ** 2;

console.log("O quadrado de " + numero + " é: " + numeroQuadrado + ".");
