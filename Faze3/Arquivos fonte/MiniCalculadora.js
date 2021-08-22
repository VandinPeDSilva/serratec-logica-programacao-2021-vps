// Mini-Calculadora

const terminal = require("prompt-sync")();

var n1 = 0;
var n2 = 0;

console.log("Mini-Calculadora \nIremos te mostrar a soma, subtração, multiplicação e divisão dos 2 números que você digitar. \nDigite abaixo o primeiro numero.");

n1 = terminal() * 1;

console.log("Agora digite abaixo o segundo número.");

n2 = terminal() * 1;

// var plus = (n1 + n2);
// var minus = n1 - n2;
// var times = n1 * n2;
// var divided = n1 / n2;

console.log("Muito bem, aqui está: \n" + n1 + " mais " + n2 + " é: " + (n1 + n2)  + ".");
console.log(n1 + " menos " + n2 + " é: " + (n1 - n2) + ".");
console.log(n1 + " vezes " + n2 + " é: " + (n1 * n2) + ".");
console.log(n1 + " dividido por " + n2 + " é: " + (n1 / n2) + ".");
