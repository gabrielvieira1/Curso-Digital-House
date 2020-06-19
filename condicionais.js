// AULA 2
/*
Que tal se?

Nenhuma introdução a Javascript estaria completa sem mostrar a estrutura de controle condicional, conhecida como if.

O if nos permite executar um código de acordo com uma condição.

Um exemplo da vida real poderia ser: Se o dia está ensolarado, vamos para a praia! Como pode ver, no exemplo anterior estamos dando uma condição, a ida para a praia só acontecerá se o dia estiver ensolarado.

Muito bem, como podemos transcrever o que vimos para código? Primeiro devemos entender que o if se divide em 3 partes :

    A palavra reservada if.
    A condição que queremos validar, ela deve ficar entre parênteses ().
    O bloco de código que é executado quando a condição se cumpre (ou seja quando ela é true -verdadeira-), e deve ficar entre chaves {}.

Vejamos um exemplo:

let numero = 43;

if (numero > 0) {
    console.log('O número é positivo');
}

Agora como poderíamos resolver a condição da praia através do código?

Vamos ver:

if (eDiaEnsolarado == true) {
    console.log('Vamos para praia!');
}

No exemplo anterior, eDiaEnsolarado seria uma variável que armazena um valor booleano, e sempre que esse valor for exatamente igual a true, vamos executar bloco de código que se encontra dentro das chaves {}, nesse caso, o console.log.

Vamos fazer uma pequena prática para ir entendendo o conceito.

    Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".

    Lembre-se que as variáveis e as strings devem ser escritas igual ao enunciado, respeitando os espaços e as exclamações.

Quando comparamos valores utilizamos o sinal de igual duas vezes ==.
*/
var diaDeSemana = "domingo";
if (diaDeSemana == "domingo") {
    console.log('Hoje é dia de futebol! ! !');
}

// AULA 3
/*
E que tal se não?

No exercício anterior analisamos o seguinte código:

if (eDiaEnsolarado == true) {
    console.log('Vamos para praia!');
}

E comentamos que sempre que valor de eDiaEnsolarado seja exatamente igual a true, vamos executar o seguinte bloco de código que se encontra dentro das {}.

Mas e se o dia não está ensolarado? É aí que entra o else, a outra parte do if. Escrevemos assim:

if (eDiaEnsolarado == true) {
    console.log('Vamos para praia!');
} else {
    console.log('Que pena é melhor ficarmos por aqui!');
}

A condicional else nos permite executar um bloco de código, caso a condição do if não se cumpra, porém o else tem apenas duas partes:

    A palavra reservada else.
    O bloco de código que se executa caso a condição do if não se cumpra.

Agora que sabemos como if e o else funciona, vamos ver um exemplo de uma função que nos retorna true se um número é maior que 5, ou false em caso contrário:

function eMaior(umNumero) {
   if (umNumero > 5) {
    return true;
   } else {
    return false;
   }
}

No exemplo anterior, a função se encarregará de receber um número por parâmetro e utilizando if e else, retorna true ou false se o mesmo é maior a 5.

    Define a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar"Hoje é dia de futebol! ! !" se parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia de futebol :(".

    Lembre-se que as variáveis e as strings devem ser escritas igual ao enunciado, respeitando os espaços e as exclamações.

A diferença do exercício anterior para este é que não está pedindo para imprimir (console.log ()) uma string, e sim que a função retorne (return).
*/
function hojeSeJoga(diaDeSemana) {
  if (diaDeSemana == "domingo") {
      return 'Hoje é dia de futebol! ! !';
  } else {
      return 'Hoje não é dia de futebol :(';
  }
}
console.log(hojeSeJoga("domingo"));

// AULA 4
/*
Qual é maior?

Ok, vamos ver outro exercício para reforçar o funcionamento do if eelse.

    Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.

Por exemplo, se passarmos 4 e 5, retornará 5 porque é o maior entre eles, e se passarmos 10 e 4, ele retornará 10.
Lembre-se que quando uma função recebe mais de um parâmetro, eles devem ser separados por vírgulas. E que são dados que não conhecemos, então não vamos colocar valores, vamos torná-los genéricos! Lembrem-se também que aqui vocês vão comparar valores, portanto o > operador certamente aparecerá em seu condicional.
*/
function eMaior(numA, numB) {
  if (numA > numB) {
      return numA;
  } else {
      return numB;
  }
}
console.log(eMaior(9, 10));

// AULA 5
/*
Qual é o seu sinal?

Agora, precisamos de suas ótimas habilidades para definir a função sinal, que, dado um número, retorna apenas um dos seguintes valores:

    1, se o número é positivo
    0 se o número é zero
    -1, se o número é negativo

    Portanto, vamos definir a função sinal que recebe um número para alcançar o objetivo desejado. DICA: Lembre-se que você pode precisar usar mais de um if.

Dentro da função você terá que fazer 3 comparações diferentes, aí novamente os operadores de comparação protagonistas serão < , > e ==.
*/
function sinal(numero) {
  if (numero > 0) {
      return 1;
  } else if (numero == 0) {
      return 0;
  } else {
      return -1;
  }
}
console.log(sinal(-10));

// AULA 6
/*
O número da sorte

Melhor impossível. Agora que vimos como usar o if, é hora de um pequeno segredo: se você usa expressões booleanas corretamente, você não precisa usar essa estrutura de controle! 

Como isso funciona? Suponha que queremos definir a função eMaiorDeIdade, que nos diz se alguém tem 18 anos de idade ou mais. Talvez nossa primeira abordagem seja a seguinte:

function eMaiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

No entanto, se olharmos com mais detalhes, este if eelse são totalmente desnecessários, já que a expressão idade > = 18 já é uma expressão booleana, porque se pensarmos em idade como um número, o que estamos fazendo é perguntar se esse número é maior ou igual a 18. E essa pergunta tem apenas duas respostas possíveis, você adivinha quais são? Exatamente, 'true' ou 'false'. Portanto, poderíamos tornar nosso código mais fácil fazendo isso:

function eMaiorDeIdade(idade) {
  return idade >= 18;
}

Agora, o que aconteceria se quiséssemos ter mais condições para serem avaliadas, querendo que todas fossem atendidas? A única coisa que precisamos é usar o operador && (que é lido como 'e'). Vamos ver um exemplo:

function estaEntre(numero, base, limite) {
  return numero > base && numero < limite;
}

A função anterior retornará true senumero for maior quebase e por sua vez menor que limite. Caso contrário, se estas condições não forem cumpridas, retornaremos false.

Mas e se quiséssemos que uma função retornasse 'true' com apenas uma das condições sendo atendida? Para isso, podemos usar o operador || (que é lido como 'ou'). Vamos ver isso:

function eMaiorOuMenor(numero1, numero2, numero3) {
  return numero2 > numero1 || numero2 < numero3;
}

Neste cenário, a função eMaiorOuMenor retornará true se numero2 for maior que numero1 ou se numero2 for menor que numero3. Com qualquer uma das condições sendo verdadeira, ela retornará true. Logicamente, se nenhuma das duas condições for verdadeira, a função retornará false.

Outro cenário possível é talvez aquele em que queremos perguntar se algo é diferente de outra coisa. Você se lembra do operador !? Isso é chamado de negação. Vamos ver isso um exemplo:

function eDiaDeTrabalho(diaDaSemana) {
  return diaDaSemana!= 'Sábado' && diaDaSemana!= 'Domingo';
}

A função diaDaSemana recebe um dia (string) por parâmetro e retornará true se diaDaSemana não for domingo e não for sábado. Caso contrário, se o dia for domingo ou sábado, ele retornará false.

Perfeito! Agora é a sua vez. Mostre que o texto acima foi completamente claro. Para fazer isso, ajude-nos a resolver o seguinte:

Podemos dizer que é um número da sorte se o número:

    é positivo
    é um múltiplo de 2 ou 3
    não é 15

    Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.

Para descobrir se um número é multiplo de outro o resto da divisão deve resultar em 0. 15/3 = 5 e o resto é 0. Em programação para sabermos o resto de uma divisão, usamos o símbolo de porcentagem (%). Assim: 15%3 == 0, dessa forma sabemos que 15 é múltiplo de 3.
*/
function eNumeroDaSorte(numero) {
  return numero > 0 && numero % 2 == 0 || numero % 3 == 0 && numero != 15;
}
console.log(eNumeroDaSorte(12));

// AULA 7
/*
Posso ir ao banco?

Agora vamos criar uma função que nos diga se o banco está fechado?

Primeiro de tudo precisamos saber que um banco está fechado quando é fim de semana (sábado ou domingo) e não está no horário bancário (9 às 15hs).

    Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

Exemplo:

possoIrAoBanco("segunda-feira", 10);
// true, é um dia da semana e está no horário bancário, 10hs
possoIrAoBanco("terça-feira", 18);
// false, é dia da semana e NÃO está no horário bancário, 18hs
possoIrAoBanco("Sábado", 11);
// false, é fim de semana

Lembre-se que você pode fazer o que é necessário usando o return sem fazer uso de if/else.
*/
function possoIrAoBanco(diaDaSemana, horaAtual) {
  return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" && horaAtual >= 9 && horaAtual <= 15;
}
console.log(possoIrAoBanco("Sábado", 11));

// AULA 8
/*
O filósofo hipster

Vimos em exercícios anteriores, o operador chamado de conjunção lógica && (também chamado de e), que só retorna true quando ambas as expressões são verdadeiras.

Da mesma forma, já sabemos que podemos unir várias expressões para serem avaliadas por este operador e se alguma delas não for verdadeira (false) o resultado final será falso.

Por exemplo, se analisarmos a seguinte função:

function eBomCantor(cdsEditados, 
recitaisRealizados, gravouAlgumCd) {
        return cdsEditados > = 10 && 
        recitaisRealizados > = 20 && gravouAlgumCd;
}

Podemos perceber que é necessário que um cantor não tenha gravado um DVD para ser considerado bem-sucedido 😞 mesmo que tenha editado 10 ou mais CDs e tenha realizado 20 ou mais recitais.

    Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster. Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.

Exemplo:
filosofoHipster ('Músico', 'Brasil', 5) // verdadeiro
filosofoHipster ('Jogador de futebol', 'Alemanha', 12) // false
filosofoHipster ('Músico', 'Argentina', 1) // false


Atenção ao modo de escrever a profissão e o país, letras maiúsculas e minúsculas e acentos fazem a diferença.
*/
function filosofoHipster(profissao, nacionalidade, quilometro) {
  return profissao == "Músico" && nacionalidade == "Brasil" && quilometro > 2;
}
console.log(filosofoHipster("Músico", "Brasil", 5));

// AULA 9
/*
As tabelas verdade

Seguindo as abordagens filosóficas e analisando a seguinte tabela, podemos concluir que, na lógica booleana, o comportamento de uma expressão pode ser definido por meio de uma tabela de verdade. Onde A e B são expressões que avaliam true oufalse e usam o símbolo ^ (que representa a conjunção deles), podemos determinar se a união deles gera True ou False.
A	B	A ^ B
V	V	V
V	F	F
F	V	F
F	F	F

No mundo da lógica, essas expressões são chamadas de proposições. Mas ... o que pode ser uma proposição? Eles só precisam ter um valor de verdade, isto é, qualquer expressão booleana pode ser uma proposição.

filosofoHipster('Músico', 'Brasil', 5) // true
filosofoHipster('Músico', 'Argentina', 1) // false
filosofoHipster('Docente', 'Canadá', 12) // false

    Use a função console.log para mostrar os resultados da execução da função filosofoHipster com parâmetros diferentes, pelo menos 3 vezes. A função filosofoHipster já está definida, mesmo que você não a veja, basta chamá-la como no exemplo acima.

Não se preocupe em escrever a função filosofoHipster, ela já está escrita mesmo que você não a veja.
*/
function filosofoHipster(profissao, nacionalidade, quilometro) {
  return profissao == "Músico" && nacionalidade == "Brasil" && quilometro > 2;
}
console.log(filosofoHipster("Músico", "Brasil", 5));
console.log(filosofoHipster("Músico", "Argentina", 1));
console.log(filosofoHipster("Docente", "Canadá", 12));

// AULA 10
/*
Voltando à escola

Você pode não se lembrar bem disso, mas quando passamos pela escola nós aprendemos que quando uma expressão matemática tem vários operadores, as multiplicações e divisões serão feitas antes que a adição e a subtração sejam feitas após as adições, isso é chamado precedência Vamos ver um exemplo simples:

5 * 3 + 8 / 4 - 3 = 14

Vamos entender melhor o que aconteceu acima:

((5 * 3) + (8 / 4)) - 3 = 14

A primeira coisa que acontece é multiplicação e depois a divisão e depois as somas dos resultados. O resultado seria:

(15 + 2) - 3 = 14

Agora que vimos que Javascript segue a mesma precedência que a matemática.

Vamos ver um exemplo disso em uma função:

function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}

    Teste no console os seguintes exemplos e veja o resultado:

         pagarComCartao(true, 6, 320)
         pagarComCartao(false, 8, 80)
         pagarComCartao(true, 2, 215)
         pagarComCartao(true, 1, 32)

Não se preocupe em anotar a função pagarComCartao, pois ela já está escrita, mesmo que você não a veja. E lembre-se que para mostrar algo no console você deve usar a função console.log() e dentro dos parênteses o que você deseja mostrar.
*/
function pagarComCartao(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}
console.log(pagarComCartao(true, 6, 320));
console.log(pagarComCartao(false, 8, 80));
console.log(pagarComCartao(true, 2, 215));
console.log(pagarComCartao(true, 1, 32));

// AULA 11
/*
Um exercício sem precedentes

Como você viu no exercício anterior, a operação com maior precedência é a negação !, seguida pela conjunção && e depois disjunção || mas o que acontece se eu quiser alterar a ordem na qual essas operações são resolvidas?

Como foi dito no início do exercício anterior, como em matemática, podemos usar os parênteses para agrupar as operações que queremos realizar primeiro.

Agora é a sua vez:

    Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem, exemplo:

     podeSeAposentar(62, "F", 34)
    true

    Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.

Os gêneros que vamos tratar neste exercício são os seguintes: "F" para feminino "M" para masculino
*/
function podeSeAposentar(idade, sexo, anos) {
  return ((idade >= 60 && sexo == "F") || (idade >= 65 && sexo == "M")) && anos >= 30;
}
console.log(podeSeAposentar(65, "M", 34));

// AULA 12
/*
Nós vamos ao parque de diversões

No parque de diversões da cidade, eles instalaram uma nova montanha-russa e nos pediram ajuda para que pudéssemos notificar as pessoas, se poderiam entrar ou não, antes de fazer a fila. Os requisitos para uma pessoa poder entrar no brinquedo são:

    Atingir a altura mínima de 1,5 m (ou 1,2 m, se acompanhada por um adulto)
    Não ter qualquer problema cardíaco

    Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.

     podeSubir(1.7, false, true)
    false // não pode subir
          // porque embora seja maior do que 1.5m,
          // tem um problema cardíaco

Em Javascript, representamos numeros decimais com ponto no lugar da virgula. Exemplo: 1.5
*/
function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
  return (alturaPessoa >= 1.5 || (alturaPessoa >= 1.2 && vemComCompania)) && !temProblemaCardiaco;
}
console.log(podeSubir(1.2, true, false));

// AULA 13
/*
Agora vamos ter dar um prêmio

Você atingiu o nível necessário para ganhar um prêmio pelo seu excelente desempenho. Agora que você conhece bastante JavaScript, o júri de um torneio de programação nos pediu para desenvolver a função medalhaSegundoOPosto, que retorna a medalha correspondente às posições, de acordo com a seguinte lógica:

    primeiro lugar: corresponde "ouro"
    segundo lugar: corresponde "prata"
    terceiro lugar: corresponde "bronze"
    outros lugares: corresponde "Continue participando"

Se executarmos a função com as seguintes posições, o resultado seria assim:

 medalhaSegundoOPosto(1)
"ouro"
 medalhaSegundoOPosto(2)
"prata"
 medalhaSegundoOPosto(3)
"bronze"
medalhaSegundoOPosto(5)
"Continue participando"

    Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.
*/
function medalhaSegundoOPosto(posto) {
  if (posto == 1) {
      return "ouro";
  } else if (posto == 2) {
      return "prata";
  } else if (posto == 3) {
      return "bronze";
  } else {
      return "Continue participando";
  }
}
console.log(medalhaSegundoOPosto(1));

