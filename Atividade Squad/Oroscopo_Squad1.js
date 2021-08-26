/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Daniel Cesar
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
● Arquivo: signos.js
● Data: 22/08/2021
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade
*/

const terminal = require("prompt-sync")();
var dia;
var diaV;
var mes;
var mesTipo;
var mesV;
var mesTxt;
var texto;
var signo;
var rand;
var caract;

console.log("Oroscopo. \nDigite o mês de seu nascimento abaixo.");
do {
    texto = terminal(": ");
    mes = parseInt(texto);

    if (mes > 0 && mes <= 12) {
        mesV = true;
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                mesTipo = 31; break;
            case 4:
            case 6:
            case 9:
            case 11:
                mesTipo = 30; break;
            case 2:
                mesTipo = 28; break;
        }
    } else {
        mesV = false;
        console.log("Mês inválido. Digite novamente.");
    }
} while (! mesV)

do {
    console.log("Agora digite o dia de seu nascimento abaixo.")
    texto = terminal(": ");
    dia = parseInt(texto);

    if (mesTipo == 31 && (dia > 0 && dia <= 31)) diaV = true;
    else if (mesTipo == 30 && (dia > 0 && dia <= 30)) diaV = true;
    else if (mesTipo == 28 && (dia > 0 && dia <= 28)) diaV = true;
    else {
        diaV = false;
        console.log("Dia inválido. Digite novamente.");
    }
} while (! diaV)

switch (mes) {
    case 1: mesTxt = "Janeiro"; break;
    case 2: mesTxt = "Fevereiro"; break;
    case 3: mesTxt = "Março"; break;
    case 4: mesTxt = "Abril"; break;
    case 5: mesTxt = "Maio"; break;
    case 6: mesTxt = "Julho"; break;
    case 7: mesTxt = "Junho"; break;
    case 8: mesTxt = "Agosto"; break;
    case 9: mesTxt = "Setembro"; break;
    case 10: mesTxt = "Outubro"; break;
    case 11: mesTxt = "Novembro"; break;
    case 12: mesTxt = "Dezembro"; break;
    
}

if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) signo = "Aquário";
else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) signo = "Peixes";
else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) signo = "Áries";
else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) signo = "Touro";
else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) signo = "Gêmeos";
else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) signo = "Câncer";
else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) signo = "Leão";
else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) signo = "Virgem";
else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 2)) signo = "Libra";
else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 2)) signo = "Escorpião";
else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 2)) signo = "Sargitário";
else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) signo = "Capricórnio";
else console.log("Algo de errado não está certo!");

console.log("Data: " + dia + " de " + mesTxt + ". Signo: " + signo);

rand = Math.floor(Math.random() * 12);
switch (rand) {
    case 0: caract = "Você é uma pessoa forte, impulsiva e impetuosa."; break;
    case 1: caract = "Você é uma pessoa forte, teimosa, ciúmenta e protetora."; break;
    case 2: caract = "Você é uma pessoa imprevisível, de pavio curto, aventureira e bem humorada."; break;
    case 3: caract = "Você é uma pessoa emotiva, instável e carinhos.a"; break;
    case 4: caract = "Você é uma pessoa forte, comunicativa, insegura, leal e que gosta de chamar a atenção."; break;
    case 5: caract = "Você é uma pessoa organizada, rígida com si mesma e pessoas à sua volta, tímida, e que terá sucesso, custe o que custar."; break;
    case 6: caract = "Você é uma pessoa imparcial, diplomata nata, indecisa, educada e gentil."; break;
    case 7: caract = "Você é uma pessoa determinada, com personalidade forte e teimosa."; break;
    case 8: caract = "Você é uma pessoa sorridente, que busca o melhor da vida, engraçada e sonhadora."; break;
    case 9: caract = "Você é uma pessoa tímida, determinada, trabalhadora, responsável e confiável."; break;
    case 10: caract = "Você é uma pessoa independente, rebelde por liberdade, inteligente e idealista."; break;
    case 11: caract = "Você é uma pessoa adorável, gentil, carente, bondosa e romântica"; break;
}

console.log(caract);



// Aquário: de 21 de janeiro a 18 de fevereiro;
// Peixes: de 19 de fevereiro a 20 de março;
// Áries: de 21 de março a 20 de abril;
// Touro: de 21 de abril a 20 de maio;
// Gêmeos: de 21 de maio a 20 de junho;
// Câncer: de 21 de junho a 22 de julho;
// Leão: de 23 de julho a 22 de agosto;
// Virgem: de 23 de agosto a 22 de setembro;
// Libra: de 23 de setembro a 22 de outubro;
// Escorpião: de 23 de outubro a 21 de novembro;
// Sagitário: de 22 de novembro a 21 de dezembro;
// Capricórnio: de 22 de dezembro a 20 de janeiro;