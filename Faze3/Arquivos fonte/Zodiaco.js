/*
Aquário: de 21 de janeiro a 18 de fevereiro;
*/

const terminal = require("prompt-sync")();

var dia;
var mes;

console.log("Sistema Zodiáco.");
mes = terminal("Qual o mês do seu nascimento (em número) ?  ") * 1;
if(mes > 0 && mes <= 12){
    dia = terminal("Qual o dia do seu nascimento ?  ") * 1;
    if(dia > 0 && dia <=31){
        if((mes == 1 && (dia >= 21 && dia <= 31)) || (mes == 2 && (dia > 0 && dia <= 18)))
        console.log("Você é mais inteligente, aquariano.")
        else console.log("Você não é mais inteligente.")
    }
    else console.log("Dia inválido.")
    
} 
else console.log("Mês inválido.");