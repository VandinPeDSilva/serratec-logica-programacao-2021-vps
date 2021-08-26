// Desenvolva um programa para descobrir a idade da pessoa e se ela é bonita. Com as informações que ela te passar, retorne a idade dela e se ela é bonita

const terminal = require("prompt-sync")();

var nome;
var bonita;

console.log("Qual sua idade ?");
do {
    idade = terminal(": ");
    idade = parseInt(idade);
    if(idade < 1) console.log("Idade iválida. Digite novamente.");
} while (idade < 1)

console.log("Você é uma pessoa bonita? s ou n");
do {
    bonita = terminal(": ");
    bonita = bonita.toLowerCase();
    if (bonita != "s" && bonita != "n") console.log("Resposta inválida. Digite novamente.");
} while (bonita != "s" && bonita != "n")

if(bonita == "s") {
    if(idade == 1) console.log("Você tem " + idade + " ano e é uma pessoa bonita.");
    else console.log("Você tem " + idade + " anos e é uma pessoa bonita.");
} else console.log("Você tem " + idade + " ano e não é uma pessoa bonita.");