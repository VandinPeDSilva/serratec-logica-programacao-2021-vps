const terminal = require("prompt-sync")();

var idade;
var peso;
var hepatite;
var malaria;
var fezDoacao;
var podeDoar;

console.log("Digite “S” ou “N” nas restrições a seguir");

if(terminal("Tem entre 16 e 69 anos ?  ") == "S") idade = true;
else idade = false;

if(terminal("Pesa menos de 50kg?  ") == "N") peso = true;
else peso = false;

if(terminal("Portador de Hepatite ?  ") == "N") hepatite = true;
else hepatite = false;

if(terminal("Já teve Malária ?  ") == "N") malaria = true;
else malaria = false;

if(terminal("Fez doação recente ?  ") == "N") fezDoacao = true;
else fezDoacao = false;

podeDoar = idade && peso && hepatite && malaria && fezDoacao;

if(podeDoar) console.log("Você pode doar.");
else console.log("Você não pode doar.");