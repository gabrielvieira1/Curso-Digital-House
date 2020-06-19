/*
Desafio - Produto

Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

    Escreva a função produto

Relembre sobre: como passar arrays, fazendo algo com cada elemento; como acumular cada elemento.
*/
function produto(numeros){
  let prod = 1;
  for(let i = 0; i < numeros.length; i++){
      prod *= numeros[i];
  }
  return prod;
}
console.log(produto([1, 4, 7]));