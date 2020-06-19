/*
Desafio - Fatorial
Escreva uma função fatorial, que calcule o fatorial de um número.
Lembre-se das aulas de matemática, e como realizamos uma operação fatorial. 
*/
function fatorial(numero){
  let cont = 1;
    for(let i = numero; i > 1; i--){
        cont = cont * i;   
    }
    return cont;
}
console.log(fatorial(3));