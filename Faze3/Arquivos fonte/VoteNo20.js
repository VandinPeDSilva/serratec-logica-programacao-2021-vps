const terminal = require("prompt-sync")();

var idade;

console.log("Você já pode votar? Digite abaixo sua idade e você saberá!")
idade = terminal("Idade:  ");

if(idade >= 16 && idade < 18) console.log("Você já pode votar, mas não é obrigado.");
else if(idade >= 18) console.log("Você já pode votar, e se não votar, pagará multa.");
else if(idade < 16 && idade > 0) console.log("Que pena, você ainda não pode votar.");
else console.log("Idade inválida.");