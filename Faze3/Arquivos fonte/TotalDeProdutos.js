const terminal = require("prompt-sync")();

var qtde;

console.log("Quantos produtos você deseja comprar ?");

qtde = terminal();

console.log("Parabéns por comprar " + qtde + " produtos.");
