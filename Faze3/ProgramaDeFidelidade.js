const terminal = require("prompt-sync")();

var cupons;

console.log("Digite seus cupons abaixo:");
cupons = terminal();

console.log("De acordo com seus cupons, você tem " + cupons + " pontos no programa de fidelidade!");