const limite = 8;

var quantidade = Math.floor(Math.random() * 9);

console.log("Pessoas na loja: " + quantidade);
if(quantidade >= limite) console.log("Entrada não permitida. Volte mais tarde.")
else console.log("Entrada Permitida.")