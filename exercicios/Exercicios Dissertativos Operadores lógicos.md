# Operadores lógicos | unário | binário

Dissertativos

### 1. Qual a diferença entre operadores unários e binários?
- `Operadores unários apenas dependem de um operando, enquanto operadores binários precisam de dois operandos.`

### 2. O que é a tabela verdade?
- `É um dispositivo lógico, utilizado para definir o resultado de uma expressão.`

### 3. Escreva a tabela verdade de cada operador lógico.
- `and (&&)`

    false `&&` false `=` false

    false `&&` true `=` false

    true `&&` false `=` false

    true `&&` true `=` true

- `or (||)`

    false `||` false `=` false

    false `||` true `=` true

    true `||` false `=` true

    true `||` true `=` true

- `not (!)`

    false `=` true

    true `=` false

### 4. Quais os operadores aritméticos equivalentes aos lógicos?
- `Operadores aritméticos q lógicos tem funções diferentes.`

### 5. Das palavras abaixo, informe os sinônimos dos operadores “e” e “ou”:

1. Ambos `<--`
1. Qualquer
1. Tanto quanto
1. Apenas

### 6. O que é um curto circuito?
- `Um loop no sistema. Na programação é um código que roda infinitamente, não tem fim.`

### 7. A negação do sinal de maior é apenas mudá-lo para menor? Justifique.
- `Não. A negação de ">" é "<=", pois o contrario do que é maior, é o menor ou igual, pois maior não inclui igual. `

### 8. Escreva a negação das sentenças abaixo, usando a forma negativa e a forma de substituição de operadores. Troque and e or quando aparecerem.
1. (Nome == ‘Artur’) and (Idade != 23)
1. (Inicio < 5) or (Inicio > 10)
1. (EstadoCivil == ‘S’) and (Idade > 18) or ((Letra >= ‘A’) and (Letra <= ‘E’))
1. ! (aluno1 == ‘feliz’ or aluno2 == ‘feliz’)

Negação:
1. (Nome != ‘Artur’) or (Idade == 23)
1. (Inicio >= 5) and (Inicio <= 10)
1. (EstadoCivil != ‘S’) or (Idade <= 18) and ((Letra < ‘A’) or (Letra > ‘E’))
1. ! (aluno1 != ‘feliz’ and aluno2 != ‘feliz’)

### 9. A negação da proposição “Todo professor de matemática usa óculos” é:
a. Nenhum professor de matemática usa óculos.

b. Ninguém que usa óculos é professor de matemática.

`c. Todos os professores de Matemática não usam óculos.`

d. Existe alguém que usa óculos e não é professor de matemática.

e. Existe algum professor de matemática que não usa óculos.


### 10. Escreva a negação das expressões abaixo, aplicando antônimos nos substantivos ou adjetivos.
1. Somos uma turma comunista, portanto o professor é o nosso supremo marechal e nos manda o que fazer.
- `Não somos uma turma comunista, portanto o professor não é nosso supremo marechal e nos manda o que fazer.`
1. O jovem passeava tranquilamente pelo parque carregando seu violino para a suave sinfonia.
- `O Jovem não passeava tranquilamente pelo parque carregando seu violino para a suave sinfonia.`
1. Antes de escovar os dentes sempre usava o fio dental, mesmo assim ficaram amarelados.
- `Antes de escovar os dentes nunca usava o fio dental, mesmo assim não ficaram amarelados.`


### 11. Com base no conceito da negação, escreva o masculino ou o feminino dos nomes.
1. Flávia
    - `Flávio`
1. André
    - `Andrá`
1. Júlio
    - `Júlia`
1. Sandra
    - `Sandro`
1. Carlos
    - `Carlas`
1. Maria
    - `Mario`
1. Felipe
    - `Felipa`
1. Beatriz
    - `Beator`

### Algoritmos

### 12. O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/PessoasNaLoja.js

### 13. Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

```
Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False
```
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/TemperaturaEMascara.js

### 14. É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.

```
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True
```
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Emancipação.js

### 15. O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Triangulo.js

### 16. O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

```
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!
```

- `Arquivo na pasta:`

        Faze3/Arquivos fonte/Zodiaco.js

### 17. Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.

```
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False
```
- `Arquivo na pasta:`

        Faze3/Arquivos fonte/BancoDeSangue.js
