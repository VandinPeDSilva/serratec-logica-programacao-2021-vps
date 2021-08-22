const lerTerminal = require("prompt-sync")();

var tempC;
var tempF;

console.log("Seja bem-vindo ao programa de conversão de Celsius para Fahrenheit \nDigite abaixo o valor, em Celsius, que deseja converter.");

tempC = lerTerminal();
tempF = ((tempC * 9) + 160) / 5;


console.log("A temperatura equivalente é " + tempF + " F°.");