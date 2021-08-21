/*
Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
*/

var precoTotal = 345 + 1545;
var precoParcelado;

console.log("Seu total deu : R$" + precoTotal + ".00 \nVocê poderá pagar em:");

precoParcelado = precoTotal / 3;
console.log("3 vezes sem juros de: R$" + precoParcelado + ".00");

precoParcelado = precoTotal / 5;
console.log("5 vezes sem juros de: R$" + precoParcelado + ".00");

precoParcelado = (precoTotal * 1.015) / 10;
console.log("10 vezes de: R$" + precoParcelado.toFixed(2));