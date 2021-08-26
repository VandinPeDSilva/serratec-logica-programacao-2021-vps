/*
Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para cada cômodo que for da sua escolha.
*/

// Digite "fim" para encerrar o programa

const lerTerminal = require("prompt-sync")();
var respostaTerminal;

// Função para dizer se o cômodo está sujo ou limppo aleatóriamente
var comodos = ["sala", "quarto", "banheiro", "cozinha", "porao"];
var comodosL = [];

function RandomQuartoState() {
    var limpo = Math.floor(Math.random() * 2) == 1;
    return limpo;
}

for(i = 0; i <= (comodos.length - 1); i++) {
    if (RandomQuartoState() == 1) comodosL[i] = "Sim.";
    else comodosL[i] = "Não."
    // console.log(comodos[i] + " " + comodosL[i])
}

do{
    respostaTerminal = lerTerminal("Qual cômodo você deseja checar ? ");

    // Checa a resposta
    switch (respostaTerminal.toLowerCase()) {
    case comodos[0]:
        console.log("Sala está limpa ? " + comodosL[0])
        break;
    case comodos[1]:
        console.log("Quarto está limpo ? " + comodosL[1]);
        break;
    case comodos[2]:
        console.log("Banheiro está limpo ? " + comodosL[2]);
        break;
    case comodos[3]:
        console.log("Cozinha está limpa ? " + comodosL[3]);
        break;
    case comodos[4]:
        console.log("Porão está limpo ? " + comodosL[4]);
        break;
    case "fim":
        console.log("Fim.");
        break;
    default:
        console.log("Cômodo inválido.");
    }
}

// repita enquanto não for digitado "fim" no terminal
while (respostaTerminal != "fim") {}
