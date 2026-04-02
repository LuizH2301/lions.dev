//! Vamos praticar a criação e funcionamento de Arrays com uma dinâmica entre vocês... Para facilitar, essa atividade precisa
//! pedir entrada do usuário.
//! Crie unm array chamado minhaMesa, dentro dele, coloque strings com o nome dos alunos que sentam na mesma mesa que você- 
//! incluindo o seu. Depos imprinma uma mensagem no console do tipo:
//! "mMeu nome é NOME, meus colegas são COLEGA, COLEGA, COLEGA."
//! Para criar esta mensagem, use interpolação de string, e coloque o seu nome/nome dos colegas, acessando o nome de cada um 
//! pela posição no array, incluindo você, em ordem da esquerda para a direita.


const minhaMesa = ['Lucas', 'Luiz', ' Miguel']

console.log(`Meu nome é ${minhaMesa[1]} e meus colegas são: ${minhaMesa[0]} e ${minhaMesa[2]}`)



//! Agora vamos desenvolver um programa que peça ao usuário que digite 2 notas (uma de cada vez) referente à duas provas, sendo elas, prova1 e prova2
//!



const readLine = require('readLine');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});
// rl.setPrompt('Digite um número: ');
rl.prompt()
console.log("Digite as notas das provas")
const prova1 = []
const prova2 = []
let nota1 = ''
let nota2 = ''
rl.on('line', (input) => {

    nota1 = parseFloat(input)
    prova1.push(nota1)

  rl.on('line',(input2) => {

    nota2 = parseFloat(input2)
    prova2.push(nota2)

    const media = (prova1[0] + prova2[1]) / 2
    console.log(media)
    rl.close()
})})

  