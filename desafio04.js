/*
Desafio - Mais Menos

Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

    na primeira posição, a fração de números que são positivos
    na segunda posição, a fração de números que são zero
    na última posição, a fração de números que são negativos

Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

    Escreva a função maisMenos.

Algumas perguntas que poderiam ajudar: Como poderia passar um array e perguntar a cada elemento se é positivo, negativo ou zero? Como poderia contabilizar os elementos? Como construir o array resultante com estes valores?
*/
function maisMenos(array){
  let numeros = [];
  let cont1 = 0;
  let cont2 = 0;
  let cont3 = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i] > 0){
          cont1++;
      } else if(array[i] < 0){
          cont3++;
      } else {
          cont2++;
      }
  }
  numeros.push(cont1/array.length);
  numeros.push(cont2/array.length);
  numeros.push(cont3/array.length);
  return numeros;
}
console.log(maisMenos([-2, 0, 0, -1, -3]));