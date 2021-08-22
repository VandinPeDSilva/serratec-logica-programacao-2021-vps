# Boolean | operadores relacionais | ordinais
 Dissertativos

### 1. Podemos dizer que os valores dos tipos de dados ordinais são como 'elementos de um conjunto’? Qual a característica que eles têm em comum?
- `Sim. Todos são números.`

### 2. Quais são os valores do tipo de dados Lógico?
- `"true" e "false".`

### 3. Quais são os operadores relacionais?
- `==`
- `!=`
- `>`
- `>=`
- `<`
- `<=` 

### 4. Qual é o resultado de uma expressão relacional?
- `"true" ou "false". (sim ou não, verdadeiro ou falso)`

### 5. Os operandos das expressões relacionais devem ser valores lógicos? Justifique.
- `Não. mas o resultado deve ser um resultado lógico.`
- `Ex:`

        var numero = 0;
        var bool = numero == 1;
        // bool é "false", pois 1 não é igual a 0.

### 6. Posso utilizar o operador ‘maior’ com variáveis ‘string’?
- `Sim. Você estaria comparando o valor de cada char.`

### 7. Quais desses tipos de dados são ordinais?
1. Inteiro `<--`
1. Real `<--`
1. Caractere
1. Cadeia
1. Lógico


### 8. Quais são os operadores aritméticos, e quais os operadores relacionais?

- `Aritmeticos:`
    - `+`
    - `-`
    - `*`
    - `/`
    - `%`
- `Relacionais:`
    - `==`
    - `!=`
    - `>`
    - `>=`
    - `<`
    - `<=` 

Algotitmos

### 9. O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Relacionais.js

### 10. Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
    x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
    M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
    mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
-  x - y M a
-  x - y * a M c mod y
-  y <> c
-  x * y <> c
-  c mod y mi y mod c
-  a m b
-  z / a + x * y - 5 MI b
-  c * z + 2 ig a * x + y
-  c ig z + b
-  y * 2 <> 7 - b

- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Expressões.js

### 11. No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
    == Eleições 2020 ==
    Digite sua idade: 17
    Você já pode votar? True

- `Arquivo na pasta:`

        Faze3/Arquivos fonte/VoteNo20.js

### 12. Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Maioral.js