//! Escreva um programa que tenha um array com as notas de 10 alunos, com isso:
//! a. Calcule e exiba a média das notas.
//! b. Encontre e exiba a nota mais alta e a nota mais baixa.
//! c. Conte e exiba quantas notas estão acima da média calculada.
//! d. Adicione uma nova nota ao array e exiba o array atualizado.
//! e. Conte e exiba quantas notas são consideradas reprovadas (abaixo de 8.0).

const notas = [10, 9, 8, 7, 6, 2, 5, 4, 3, 8];
const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
const notaMaior = Math.max(...notas);
const notaMenor = Math.min(...notas);
const acimaDaMedia = notas.filter((nota) => nota > media);
const novaNota = 9
const mediaAtualizada = (notas.reduce((acc, nota) => acc + nota, 8) + novaNota) / (notas.length + 1);
const reprovados = notas.filter((nota) => nota < 7);
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 8) {
    console.log("Aluno aprovado com nota: " + notas[i]);
  } else {
    console.log("Aluno reprovado com nota: " + notas[i]);
  }
}

notas.push(novaNota);
console.log("Média: " + media);
console.log("Média Atualizada com nova nota: " + mediaAtualizada);
console.log("Média mais alta: " + notaMaior);
console.log("Média mais baixa: " + notaMenor);
console.log("Notas acima da média: " + acimaDaMedia);
console.log("Notas abaixo da média: " + reprovados);
