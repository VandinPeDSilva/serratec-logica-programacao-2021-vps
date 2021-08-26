/*
O programa "Número aleatório" mostra no console 6 números aleatórios entre 1 e 100, um embaixo do outro, em sequência.
*/

var numero;
var numero2 = 0;

console.log("Aqui estão seus seis números:");

RandomNumber();
console.log("Número " + numero2 + " :" + numero);
RandomNumber();
console.log("Número " + numero2 + " :" + numero);
RandomNumber();
console.log("Número " + numero2 + " :" + numero);
RandomNumber();
console.log("Número " + numero2 + " :" + numero);
RandomNumber();
console.log("Número " + numero2 + " :" + numero);
RandomNumber();
console.log("Número " + numero2 + " :" + numero);

console.log("Fim.")

function RandomNumber(){
    numero = Math.random() * 100;
    numero = Math.ceil(numero);
    numero2++;
}
