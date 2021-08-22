const terminal = require("prompt-sync")();

var numeroA;
var numeroB;

console.log("O programa Maioral precisa de 2 números, e dirá qual é o maior. \n Player 1 Digite abaixo o primeiro número:");
numeroA = terminal("Player 1: ");
numeroB = terminal("Player 2: ");

if(numeroA > numeroB) console.log("O número do Player 1 é maior. \nPlayer 1 é o vencedor!")
else if(numeroA < numeroB) console.log("O número do Player 2 é maior. \nPlayer 2 é o vencedor!");
else if(numeroA == numeroB) console.log("Os números são iguais. \nEmpate!")