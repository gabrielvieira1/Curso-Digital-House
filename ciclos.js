// AULA 2
/*
O computador repete para nós

Em Javascript existe uma forma de dizer "quero que estes comandos se repitam esta quantidade de vezes".

Então, quando é necessário repetir um comando (como console.log) um certo número de vezes, ao invés de copiar e colar como vinhamos fazendo até agora, podemos utilizar o comando for.

Por exemplo, se queremos imprimir "Olá!" na tela 4 vezes, podemos escrever o seguinte código:

for(var i = 0; i < 4; i++) {
   console.log("Olá!")
}

O for tem um contador de repetições, no exemplo anterior esse contador é a variável i. É necessário indicar onde começa a contar, qual é a condição que deixará de contar, neste caso i < 4 e como se modifica a variável i em cada repetição (neste caso se incrementa 1).

Sabendo isso: Como podemos imprimir 4 vezes na tela a palavra Azul?

    Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.
*/
function imprimirAzul4(){
  for(let i = 0; i < 4; i++){
      console.log("Azul");
  }
}

// AULA 3
/*
Reforçando o que vimos

Vamos fazer mais um exercício para fixar o que aprendemos na seção anterior.

    Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.
*/
function imprimir5vezes5() {
  for(let i = 1; i <= 5; i++)  {
      console.log(5);
  }
}

// AULA 4
/*
Passo a passo

Antes de avançar com o for, vamos tentar analisar bem o que está acontecendo dentro dele. Nós já sabemos que ele executa o código que pedimos desde que uma determinada condição seja atendida.

O for tem uma variável que está mudando, que é a i. É importante entender o comportamento dela. Lembre-se na seção anterior que o valor i está aumentando à medida que você itera (repete).

for(var i = 0; i < 4; i++) {
   console.log("Olá!")
}

    Sabendo disso, escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i. Lembre-se de respeitar a estrutura do for. Por exemplo:

     passoAPasso()
    "01234"

Faça um console.log(valor) para cada iteração.
*/
function passoAPasso() {
  for(let i = 0; i < 5; i++) {
      console.log(i);
  }
}

// AULA 5
/*
Mais um representante

Vamos fazer um exercício semelhante ao anterior para esclarecer alguma dúvida.

    Execute uma função chamada passandoPor que imprime no console "aqui eu tenho o valor de x" onde x será o valor de i em cada iteração, para cada valor de 0 a 3.

Lembre-se de concatenar !
*/
function passandoPor() {
  for(let i = 0; i <= 3; i++) {
      console.log("aqui eu tenho o valor de " + i);
  }
}

// AULA 6
/*
Par ou ímpar

Seguindo os exercícios anteriores, criaremos uma função chamada passandoPelosPares que para cada iteração de i, se o valor de i for par, imprima na tela "aqui eu tenho o valor de x".

    Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.

    Lembre-se que como vamos passar apenas pelos pares a repetição deve ocorrer 4 vezes, pois o objetivo é imprimir apenas os números pares.

Para saber se um número é par, usamos o operador % (módulo) que me retorna o resto da divisão de um número por outro. Por exemplo: 11% 5 -> retorna o resto da divisão 11 por 5. Neste caso retorna 1
*/
function passandoPelosPares(){
  for(let i = 0; i <= 6; i++){
      if(i%2 == 0){
          console.log("aqui eu tenho o valor de " + i);
      }
  }
}

// AULA 7
/*
Repetição

Nos exercícios anteriores, conseguimos ter a palavra “Azul” impressa na tela várias vezes de uma maneira muito mais eficiente e limpa graças ao método for.

Agora, muitas vezes nos deparamos com situações em que não temos um número constante de repetições. Nesses caso é necessário que o valor de repetições possa variar conforme a necessidade.

Por exemplo, poderíamos fazer uma função que imprimisse 5 vezes “Azul” utilizando o for. O que aconteceria se agora precisássemos que imprimisse 4 vezes? Para isso, hoje em dia, precisaríamos criar outra função. Como você pode perceber, isso não viável. No entanto, com algumas coisas que vimos, podemos dar um upgrade e fazer uma função genérica que recebe como parâmetro quantas vezes que algo será executado. Algo como uma impressão repetitiva da palavra “Azul”.

Para isso, teremos de modificar o for. Se quisermos repetir uma instrução 4 vezes, poderíamos escrever o seguinte:

for(var i = 0; i < 4; i++) {
   //Aqui eu coloco as instruções que quero repetir
}

Para que o for seja dinâmico, ao invés de repetir fixamente 4 vezes, pode dizer que irá repetir x vezes

var x = 4
for(var i = 0; i < x; i++) {
   //Aqui eu coloco as instruções que quero repetir
}

Aqui x é uma variável numérica que, no caso anterior, receberia o valor 4. A ideia é que agora podemos atribuir valores diferentes para a variável x. Uma maneira de obter esse valor seria se você passasse para nós como um parâmetro de uma função e dentro dela, usá-lo.

function repetirAlgoXVezes(quantidadeDeVezes) {
  for(var i = 0; i < quantidadeDeVezes; i++) {
   //Aqui dentro escrevo as instruções que quero repetir
  }
}

    Sabendo isso, escreva uma função imprimirAzul que receba como parâmetro um valor numérico “x” e imprima “Azul” “x” vezes. Por exemplo

     imprimirAzul(3)
    "AzulAzulAzul"
*/
function imprimirAzul(x){
  for(let i = 0; i < x; i++){
      console.log("Azul");
  }
}
imprimirAzul(3);

// AULA 8
/*
Repetição variável

Até agora nos concentramos em entender que o for nos serve para repetir um número de ação x vezes. Neste exercício, vamos nos concentrar na ação. Até agora nós só imprimimos a palavra "Azul" na tela, agora vamos fazer algo mais avançado e a idéia seria usar o for para obter o resultado de uma operação realizada várias vezes.

Se quiséssemos contar quantas calorias temos em 3 coxinhas e cada coxinha tem 300 calorias, poderíamos fazer duas coisas, uma seria multiplicar e outra seria adicionar 3 vezes 300 calorias.

Para fazer isso no código, primeiro precisamos fazer um for para rodar 3 vezes:

for(var i = 0; i < 3; i++) {
   //Fazer a somatória
}

Para fazer a soma, pode-se chegar à seguinte conclusão:

for(var i = 0; i < 3; i++) {
   var totalCalorias = totalCalorias + 300;
}

Onde para cada iteração estamos dizendo que o "totalCalorias" é igual ao valor que estava em "totalCalorias" mais 300, dessa forma podemos obter o total dos valores.

Este código, embora pareça que funcionaria se o executássemos, não nos daria o valor que esperamos, por quê?

Isso ocorre porque a variável "totalCalorias" é declarada dentro do for e isso tem duas conseqüências:

*A variável não existe E não pode ser chamada fora do for.

for(var i = 0; i < 3; i++) {
   var totalCalorias = totalCalorias + 300; 
   //a variavel totalCalorias está declarada dentro do for e só pode ser usada lá dentro
}

console.log(totalCalorias) 
//a variavel totalCalorias aqui já não existe e não pode ser consul-tada

    A variável é inicializada cada vez que se executa uma iteração do for

Dentro do for está o código que queremos que seja executado em CADA ITERAÇÃO, para o qual em CADA ITERAÇÃO o mesmo código é executado novamente. Consequentemente, a primeira vez que o for é executado

   var totalCalorias = totalCalorias + 300;
   //totalCalorias podería terminar valendo 300
}

E a segunda vez que se executa dentro do for

   var totalCalorias = totalCalorias + 300; 
   //Estamos retornando para declarar a variável totalCalorias, para a qual não podemos armazenar o valor anterior.
}

Como resolvemos isso?

Isso está relacionado à existência das variáveis, a variável totalCalorias é local para for e, portanto, só podemos usá-la e é redefinida para cada iteração. Se quisermos manter o valor fora de cada iteração, devemos fazer com que essa variável seja global para o for. Conseguimos isso de maneira simples, declarando a variável totalCalorias fora do for.

var totalCalorias = 0; 
//Aqui eu aproveito e inicializo em 0 a variável totalCalorias.

for(var i = 0; i < 5; i++) {
  totalCalorias = totalCalorias + 0.25; 
  //aqui a variável, como já está declarada fora do for, pode ser modificada durante as iterações e não irá "reiniciar"
}

console.log(totalCalorias) 
//a variável totalCalorias já existe e retorna o valor total que estávamos procurando.

    Sabendo disso, escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.

Por exemplo:

     somar5MoedasDe25Centavos()
    1.25

    Isso fez 0.25+0.25+0.25+0.25+0.25

Vamos voltar a utilizar a palavra reservada return ao invés de console.log
*/
function somar5MoedasDe25Centavos(){
  let valor = 0;
  for(let i = 0; i < 5; i++){
      valor = valor + 0.25;
  }
  return valor;
}

// AULA 9
/*
Muitas coxinhas

Com os exercícios anteriores, vimos como usar for para executar uma ação com um número fixo e/ou variável de vezes e como fazer algum processamento dentro dela.

No exercício anterior, aprendemos a calcular a soma de 5 moedas de 25 centavos. A ideia seria que podemos fazer uma função que calcula a soma de qualquer número de moedas.

Para isso vamos ampliar o exemplo do exercício anterior em que calculamos as calorias de 3 coxinhas.

var totalCalorias = 0;  

for(var i = 0; i < 3; i++) {
  totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias)

Para conseguir isso, o que temos que modificar é algo semelhante ao exercício anterior.

Primeiro temos que tirar o número 3 e torná-lo variável, por exemplo, "x" ou "quantidadeDeCoxinhas"

var quantidadeDeCoxinhas = 3;
var totalCalorias = 0;  

for(var i = 0; i < quantidadeDeCoxinhas; i++) {
  totalCalorias = totalCalorias + 300;
}

return totalCalorias;

Depois de fazer essa modificação, a variável quantidadeDeCoxinhas poderia ser um parâmetro de uma função.

function caloriasDeCoxinhas(quantidadeDeCoxinhas){
  var totalCalorias = 0;  

  for(var i = 0; i < quantidadeDeCoxinhas; i++) {
    totalCalorias = totalCalorias + 300;
  }

  return totalCalorias;
}

E assim conseguimos fazer a nossa função, que ao passar a quantidade de coxinhas, imprime na tela a quantidade de calorias totais.

    Sabendo disso, escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos. Por exemplo:

     somarMoedasDe25(7)
    1.75

    Isso fez 0.25+0.25+0.25+0.25+0.25+0.25+0.25
*/
function somarMoedasDe25(quantidadeDeMoedas) {
  let totalCalorias = 0;
  for(let i = 0; i < quantidadeDeMoedas; i++){
      totalCalorias = totalCalorias + 0.25;
  }
  return totalCalorias;
}

// AULA 10
/*
Continuamos mudando

Vamos fazer mais um exercício para fixar o que aprendemos na seção anterior.

    Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X

Sabemos que usamos i++ para incrementar em uma unidade o i a cada iteração. Mas se tentarmos incrementar o i em duas unidades a cada iteração? Experimente utilizar i+=2 e veja o que acontece.
*/
function somaDosPares(x){
  let somaTotal = 0;
  for(let i = 0; i <= x; i+=2){
          somaTotal = somaTotal + i;
  }
  return somaTotal;
}

// AULA 11
/*
Somatória

Com o que aprendemos até o momento, estamos em condições de realizar o seguinte exercício:

Para isso precisamos utilizar todos os conceitos de for vistos até agora:

    repetições
    processar algo utilizando o for
    o valor da variável i

    Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele. Por exemplo:

     somatoria(4)
    6

    A função executa isso através do for 0+1+2+3
*/
function somatoria(x){
  let soma = 0;
  for(let i = 0; i < x; i++){
      soma += i;
  }
  return soma;
}

// AULA 12
/*
Usain Bolt precisa de você!

Para Usain Bolt calcular sua dieta é preciso o uso de um simulador, que de acordo com o número de voltas diga quantas calorias é preciso consumir, para poder realizar um exercício de trote.

As calorias são calculadas da seguinte maneira: calorias (que consome a cada volta), ou seja 5 multiplicado (*) pelo número da volta atual, já que cada vez as voltas consomem mais e mais calorias.

    Sabendo isso, crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.

    Por exemplo:

     caloriasDeTrote(2)

    Deveria devolver 15 onde 5 calorias são da primeira volta (5 * 1) mais 10 calorias da segunda (5 * 2).
*/
function caloriasDeTrote(voltas) {
  let calorias = 0;
      for(let i = 1; i <= voltas; i++){
          calorias += 5 * i;
      }
      return calorias;
}