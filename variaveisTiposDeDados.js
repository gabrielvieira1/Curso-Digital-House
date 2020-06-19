// Aula 2 Declaração de variáveis
/*
Declaração de variáveis

Em programação uma variável é um espaço na memória do computador, que podemos 
usar para armazenar valores.

Se quisermos usar uma variável, a primeira coisa que devemos fazer é declará-la, 
isto é, criar essa "caixa" onde armazenaremos os valores.

Em JavaScript, as variáveis são declaradas usando a palavra var seguido do nome 
com o qual iremos identificá-lo.

Por exemplo:

var preco

Temos algumas regras para criar nome de variaveis:

Não pode começar com número
Não pode ter caracteres especiais
Não pode utilizar acentos
Não pode utilizar espaços
Deve começar com letra minuscula e seguir o padrão camelCase, onde cada palavra 
é iniciada com maiúsculas e unidas sem espaços.

Para passar para o próximo exercício, declare duas variáveis, onde uma se 
chamará idade e outra que se chamará peso. Em seguida, execute a sua resposta.

*/
var idade = 24
var peso =  75

// Aula 3 Armazenando dados
/*
Nós já vimos como declarar uma variável. Agora precisamos atribuir um valor à ela.

Para salvar um valor em uma variável, usamos o sinal = e, em seguida, o valor 
que queremos armazenar.

Por exemplo:

var meses = 12
var quantidadeDeAlunos = 30

Para passar para o próximo exercício, declare duas variáveis ​​(idade e peso) e 
atribua a elas um valor numérico. Em seguida, execute a sua resposta.
*/
let idade = 24
let peso = 75

// Aula 4 Sempre falta um ponto e vírgula?
/*
Você pode ter visto em JavaScript alguns comandos, instruções que terminam em ";".

Em Javascript, o sinal ";" é opcional. Mas é importante que você utilize para 
o computador conseguir entender onde termina o comando.

Para começar, no exercício anterior vimos:

var meses = 12
var quantidadeDeAlunos = 30

Também poderia ter sido escrito da seguinte forma, como abaixo:

var meses = 12;
var quantidadeDeAlunos = 30;

A partir dos próximos exercícios, usaremos o ";" como no exemplo anterior.

Agora vamos praticar ! Crie as variáveis meses e quantidadeDeAlunos, igual ao exemplo.

Após criar as variáveis, basta executar a sua resposta. Neste exercício, estamos 
apenas praticando a declaração correta do código.
*/
let meses = 12;
let quantidadeDeAlunos = 30;

// Aula 5 Variáveis e Operações
/*
Vimos como declarar uma variável e atribuir um valor a ela e, provavelmente, 
agora você se pergunta, e qual é a utilidade de armazenar dados em variáveis?

As variáveis nos permitem reutilizar os dados atribuídos, simplesmente invocando
seu nome.

var numero  = 124;
console.log(numero); 
// Podemos usar console.log para imprimir o valor que tem atribuído à variável 
numero. E seu resultado será 124.

Algo muito importante também, é, assim como podemos fazer operações matemáticas 
como adicionar (+) ou subtrair (-) números, podemos fazer o mesmo com as 
variáveis que os referenciam.

Por exemplo:

var numero = 124;
var numeroSeguinte = numero + 1;
console.log(numeroSeguinte); 

O resultado que será impresso na tela será o valor atribuído a variável 
numero somado a 1, portanto, o valor atribuído a numeroSeguinte será 125.

Vamos ver se está entendido: Declare e atribua duas variáveis, numeroA e 
numeroB, e então nas variáveis resultadoSoma,resultadoSubtracao, r
esultadoMultiplicacao eresultadoDivisao armazene os cálculos feitos 
utilizando numeroA e numeroB nas variáveis de resultado, de modo que o cálculo 
matemático se altere de acordo com o título da variável, por exemplo. Exemplo 
var resultadoSoma = (numeroA + numeroB) Como nossa variável resultadoSoma indica 
nós devemos fazer uma soma utilizando as variáveis numeroA e numeroB. Para testar 
a sua resolução, você precisa apenas executar a sua resposta.

Exemplos:
soma: a + b
subtração: a - b
multiplicação: a * b
divisão: a / b
*/


// Aula 6 Outro tipo de dado
/*
Além dos números, há mais um tipo de dados em JavaScript.

Este tipo de dado é:

* String

Os dados do tipo String são conhecidos como cadeia de caracteres e nos permitem 
representar qualquer combinação de letras, números e/ou símbolos.
Para definir uma string, é necessário que o texto em questão esteja entre aspas:

"João"
"Meu nome é João"
"125 + 125 = 250!"

Para gerar uma String, posso simplesmente atribuir o texto a uma variável; 
por exemplo:

var meuPlaneta = "Terra";
console.log(meuPlaneta) //Isto irá imprimir na tela “Terra"

> Para passar para o próximo exercício, declare a variável saudacao e 
atribua o texto "Hello World".  E finalmente imprima o valor da variável 
na tela usando o `console.log`
*/
var saudacao = "Hello World";
console.log(saudacao);

// Aula 7 Mais operações
/*
E o que acontece se eu quiser unir textos?  Neste caso, o símbolo + nos ajudará 
a concatenar, isto é, juntar nossas strings.

FIQUE DE OLHO, NÃO ESQUEÇA OS ESPAÇOS!

Vamos tentar:

var nome = "Ronaldo";
var nacionalidade = "Brasileiro";
console.log(nome + " é " + nacionalidade) 
// O resultado seria: "Ronaldo é Brasileiro"

Declare e atribuia duas variáveis, uma com o seu nome e outra com o seu sobrenome, 
e então na variávelnomeCompleto mantenha tudo junto.
Exemplo: "Cesar Michelin"
Observação: Não esqueça de concatenar um espaço entre as variáveis!

*/
let nome = "Gabriel";
let sobrenome = "Vieira";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Aula 8 Outras operações
/*
E o que acontece se eu adicionar números com textos?

var rua = "Av Paulista";
var numero = 1578;
console.log (rua + " " + numero)
// O resultado seria: "Av Paulista 1578"

Como você viu, se eu adicionar um número e um texto, ele se tornará parte da string.

Declarar e atribuir três variáveis, uma com o seu 'nome', outra com o seu 
'sobrenome' e outra com a sua 'idade'. Então, declare uma variável com nome 
resultado e atribua uma string unindo suas variaveis da seguinte forma: 
" João Silva terá 30 anos" e utilize o console.log pra mostrar o que acontece. 
Respeite os espaços!
*/
var idade = 24;
var nome = " Gabriel";
var sobrenome = "Vieira";
var resultado =
  nome + " " + sobrenome + " " + "terá" + " " + idade + " " + "anos";
console.log(resultado);

// Aula 9 Trocar valores

/*
As variáveis além de armazenar informações, e como seu nome diz, 
podem variar o valor que armazenam. Por exemplo:

vencedor = "Pelé";
vencedor = "Marta";
console.log (vencedor);
//  resultado seria: "Marta"

Como você deve ter notado, chamando a variável e fazendo uma reatribuição a um 
valor eu posso mudar seu conteúdo.

Vamos ver se entendeu: Defina a variável numeroA com um valor de 30 e defina a 
variável numeroB com um valor de 45. Em seguida, faça a variável numeroA armazenar 
o valor da variável numeroB e vice-versa.

Preste atenção na dica para realizar o exercício.
*/
let numeroA = 30;
let numeroB = 45;
let numeroC = 10;
numeroC = numeroA;
numeroA = numeroB;
numeroB = numeroC;
console.log(numeroA + " " + numeroB + " " + numeroC);

// Aula 10 Mais tipos de dados

/*
Já vimos os valores numéricos e as strings, mas em JavaScript há mais um tipo de dado:

  Booleano

O Boolean é conhecido como booleano e permite representar dois valores lógicos, são eles:

true
    Representa o valor de algo ser verdadeiro
false
    Representa o valor de algo sendo falso

Para gerar um booleano, posso simplesmente atribuir o valor true ou false a uma variável.

Por exemplo:

var valorVerdadeiro = true;
console.log (valorVerdadeiro) // Isso irá imprimir "true" na tela

Para continuar, defina uma variável gostoDeSorvete e atribua a ela um valor 
booleano. Então, utilize console.log(gostoDeSorvete) para ver o que acontece!
*/
let gostoDeSorvete = true;
console.log(gostoDeSorvete);

// Aula 11 Mais sobre os booleanos

/*
O poder real dos booleanos é que eles podem surgir ao fazer comparações de 
valores diferentes com alguns operadores matemáticos.

Por exemplo, sabemos que se perguntarmos a alguém "2 é maior que 1?" a pessoa 
nos dirá "Sim é verdade, 2 é maior que 1", o mesmo acontece em JavaScript quando 
escrevemos o seguinte:

console.log(2 > 1) // Isso imprimirá "true" na tela

Isso significa que "2 > 1" tem um valor de true. Nós também poderíamos ter 
escrito o mesmo código da seguinte forma

var valorVerdade  = 2 > 1; 
// Como vimos 2> 1, ele retorna um valor de verdade e o atribuímos a uma variável
console.log (valorVerdade) // Isso imprimirá "true" na tela

E se perguntarmos a alguém "2 é menor que 1?" a pessoa dirá "Isso é falso, 2 
não é menor que 1", o mesmo acontece em JavaScript quando escrevemos o seguinte:

console.log(2 < 1) // Isso imprimirá "false" na tela

Para continuar, defina duas variáveis: umNumeroPequeno e umNumeroGrande, e 
atribua a elas valores numéricos diferentes de acordo com seus nomes. Então 
defina a variável eMenor e atribua o resultado da comparação se umNumeroPequeno 
é menor do que umNumeroGrande; e defina a variável eMaior, com o resultado da 
comparação umNumeroPequeno é maior que umNumeroGrande.
*/
let umNumeroPequeno = 5;
let umNumeroGrande = 10;
let eMenor = umNumeroPequeno < umNumeroGrande;
let eMaior = umNumeroPequeno > umNumeroGrande;
console.log(eMaior + " " + eMenor);
