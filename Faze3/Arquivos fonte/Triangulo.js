const terminal = require("prompt-sync")();

var angulo1;
var angulo2;
var angulo3;

var trianguloValido;

console.log("Digite os 3 angulos do seu triângulo e vamos ver se ele é válido.");
angulo1 = terminal("Angulo 1:  ") * 1;
angulo2 = terminal("Angulo 2:  ") * 1;
angulo3 = terminal("Angulo 3:  ") * 1;

trianguloValido = (angulo1 + angulo2 + angulo3) == 180;

if(trianguloValido) console.log("Seu triângulo é válido.");
else console.log("Seu Triângulo não é válido.");