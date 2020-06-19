/*
Desafio - Professora Furiosa

Uma professora de programação, cansada de que os estudantes cheguem tarde, decidiu que vai cancelar a aula se há poucos presentes.

Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. Por exemplo, se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro com 3 minutos de atraso, e outro pontual, poderá representar assim:

var alunosDaSegunda = [10, -5, 3, 0];

Com essa informação e a quantidade mínima de estudantes para que suceda o curso, a professora quer saber se a aula acontecerá. Por exemplo, supondo que a quantidade mínima de estudantes para que a aula aconteça é de 2 alunos, então o curso da segunda-feira se realizará, porque houve um estudante que foi pontual e um estudante que chegou cedo.

 acontece(alunosDaSegunda, 2)
true

Mas se a quantidade mínima fosse 3, a aula não aconteceria:

 acontece(alunosDaSegunda, 3)
false

    Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:

    aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
    [true, false, false]

Lembramos que a seção de desafios foi criada para que você a resolva sem ajuda para testar todos os seus conhecimentos adquiridos.
*/
function acontece(alunos, qtd) {
  for (let i = 0; i < alunos.length; i++) {
    alunos[i] <= 0 && qtd--
  }
  return qtd <= 0
}
function aberturas(arrayEstudantes, qtd) {
  let dias = []
  for (let i = 0; i < arrayEstudantes.length; i++) {
    dias.push(acontece(arrayEstudantes[i], qtd))
  }
  return dias
}
console.log(
  aberturas(
    [
      [10, 5, 3, 0],
      [5, 0, 4, 0],
    ],
    2
  )
)