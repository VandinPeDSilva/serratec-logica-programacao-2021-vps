# Faze 3

### 1. O valor de uma variável local, antes que tenha sido feita a primeira atribuição, pode ser aproveitado? Justifique.

- `Não. O valor de uma variável é indefinido até que uma atribuição seja feita.` 

### 2. Podemos atribuir um valor inteiro em uma variável real, e vice versa? Explique.
- `Em Java Script sim, mas em outras linguagens não. E isso não é uma boa prática, deve-se usar sempre o tipo de valor atribuido a primeira vez.`

### 3. Quais são as formas (ou tipos) de atribuição que aprendemos?
- `Literal:`

    var exemplo = "exemplo";

- `Expressão:`

    var numero = 2 + 2;

- `Outra variável:`

    var numero1 = 1
    var numero2 = numero1;

- `Retorno de função:`

    var numero = Math.round(1.575456);

### 4. Qual o símbolo usado para:
1. Terminar instruções:
    - `";"`
1. Separar o valor e as casas decimais:
    - `"."`
1. Separar informações:
    - `","`
1. Obter o resto de uma divisão inteira:
    - `"%"`
1. Delimitar blocos de comandos:
    - `"{}"`

### 5. Em programação, é possível controlar a precedência em operações aritméticas?

- `Sim. Com os "()".`

### 6. Conceitualmente, o que é mais importante: a expressão, ou o resultado que ela produz? Porque?
- `O resultado é mais importante pois ele será usado na variável ou no seletor`

### 7. Posso fazer expressões com tipos de dados diferentes do resultado?
- `Sim.`

### 8. Qual a diferença entre operações unárias e binárias?
- `Unárias apenas dependem de um operando, enquanto binárias dependem de pelo menos 2 operandos.`

### 9. O que é um teste de mesa, ou teste chinês?
- `É como se fosse um debug manual. É como se fosse uma simulação de fluxo do código, anotando o valor das variáveis, para detectar se existe algum erro/bug no código.`

### 10. Onde visualizar os valores de variáveis no VSCode, no momento da depuração do código?
- `Na aba "Run and Debug", no lado esquerdo.`

# Algoritmos

### 11. O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/MaisQueMil.js

### 12. O programa “Tempo de vida” irá imprimir a soma das idades de todos os colegas do seu squad. Pergunte a cada um a idade e não esqueça a sua! Depois faça a atribuição da expressão que você montou em uma variável inteira.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/TempoDeVida.md

### 13. O programa "Ryuju Okada" escreve na tela o resultado das expressões abaixo:
2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66

2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9

- `Arquivo na pasta:`

        Faze3/Arquivos fonte/RyujuOkada.js

### 14. O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/termômetro.js

### 15. A “continha oposta” lê um número e mostra seu valor negativo.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/continhaoposta.js

### 16. Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/TotalDeProdutos.js

### 17. Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/MiniCalculadora.js

### 18. O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/FaçoParte.js

### 19. O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Betmais.js

### 20. Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Dobro.js

### 21. O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Quadrado.js

### 22. Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/PagamentoAlice.js

### 23. É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?
- `Alice ganhou 9 cupons.`

### 24. Jennyffer está preparando as malas para passar o feriado prolongado na casa da sua avó, no interior, sem aglomeração. Colocou na mala 4 calças e 8 camisetas. Quantas combinações, ou, de quantas formas diferentes ela poderá usar essas roupas?
- `Ela pode usar 32 combinações diferentes de roupas.`

### 25. O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/ProgramaDeFidelidade.js

### 26. O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/MultipliqueSeusPontos.js

### 27. O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/AlcoolEmGel.js


