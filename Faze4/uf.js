const prompt = require("prompt-sync")();

var uf = prompt("Se você mora no centro-oeste, digite sua UF");
var text;

switch (uf) {
  case "sp":
  case "SP":
    text = "Você mora em São Paulo";
    break;
  case "rj":
  case "RJ":
    text = "Você mora no Rio de Janeiro";
    break;
  case "mg":
  case "MG":
    text = "Você mora em Minas Gerais";
  default:
    text = "Resposta inválida.";
}

console.log(text);
