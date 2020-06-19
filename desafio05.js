/*
Desafio - Escada

Queremos representar uma escada com altura variável, utilizando um array de strings.

Por exemplo, uma escada com altura 3, representaremos com o seguinte array:

var escada3 = [
 "  #",
 " ##",
 "###"
]

E uma escada com altura 5, da seguinte forma:

var escada5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]

    Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta :)

Em JavaScript você pode repetir um texto usando repeat da seguinte maneira: var degrau = "#".repeat(2); // agora degrau = "##"; Isso servirá para montar nossos degraus; Mas como faço para inserir a quantidade de degraus de acordo com o número indicado pelo meu array resultado? Como inserir um elemento em um array?
*/
function escada(numero){
  let escada = [];
  let degrau = "#";
  for(let i = 1; i <= numero; i++){
      escada.push(" ".repeat(numero - i) + "#".repeat(i));
  }
  return escada;
}
console.log(escada(5));