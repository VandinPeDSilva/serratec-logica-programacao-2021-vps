const terminal = require("prompt-sync")();

var temperatura;
var mascara;

console.log("Bem-vindo ao nosso templo.");
mascara = terminal("Está usando mascara ?(S ou N)  ");
temperatura = terminal("Qual a sua temperatura (em celsius)?  ");

if(mascara == "s" || mascara == "S") {
    if(temperatura >= 37.5) console.log("Entrada não permitida. Temperatura muito alta.");
    else if(temperatura < 37.5 && temperatura < 30) console.log("Entrada não permitida. Não aceitamos cadáveres aqui.")
    else console.log("Entrada permitida.")
} else if(mascara == "n" || mascara == "N") console.log("Entrada não permitida. Sem máscara.");