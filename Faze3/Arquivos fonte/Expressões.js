/*
    x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
    M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
    mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
a  (6 - 2) > 8
b  (6 - 2) * 8 > (12 % 2)
c  2 != 12
d  (6 * 2) != 12
e  (12 % 2) < (2 % 12)
f  8 < 7.5
g  ((4 / 8) + (6 * 2) - 5) >= 7.5
h  ((12 * 4) + 2) == ((8 * 6) + 2)
i  7.5 == (4 + 7.5)
j  (2 * 2) != (7 - 7.5)
----------------------
x = 6
y = 2
z = 4
a = 8
b = 7.5
c = 12

*/

var a = (6 - 2) > 8;;
var b = ((6 - 2) * 8) > (12 % 2);
var c = 2 != 12;
var d = (6 * 2) != 12;
var e = (12 % 2) < (2 % 12);
var f = 8 < 7.5;
var g = ((4 / 8) + (6 * 2) - 5) >= 7.5;
var h = ((12 * 4) + 2) == ((8 * 6) + 2);
var i = 7.5 == (4 + 7.5);
var j = (2 * 2) != (7 - 7.5);

console.log("Aqui está os resultados das expressões:");
console.log("a. " + a);
console.log("b. " + b);
console.log("c. " + c);
console.log("d. " + d);
console.log("e. " + e);
console.log("f. " + f);
console.log("g. " + g);
console.log("h. " + h);
console.log("i. " + i);
console.log("j. " + j);