const terminal = require("prompt-sync")();

var sexo;
var idade;

console.log("Vamos checar se você é emancipado(a).");
idade = terminal("Qual  a sua idade ?  ");
sexo = terminal("qual seu sexo? (M ou F) ");

if(sexo == "M" && idade >= 18) console.log("Você é emancipado.")
else if(sexo == "M" && idade < 18) console.log("Você não é emancipado.") 
else if(sexo == "F" && idade >= 21) console.log("Você é emancipada.");
else if(sexo == "F" && idade < 21) console.log("Você não é emancipada.");
else console.log("Sexo inválido.")