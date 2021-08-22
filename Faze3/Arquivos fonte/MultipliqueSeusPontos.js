const terminal = require("prompt-sync")();

var cupons;
var cuponsX;

console.log("Digite seus cupons abaixo:");

cupons = terminal();
cuponsX = cupons * 3;

console.log("Seus cupons agora valem " + cuponsX + " pontos!");