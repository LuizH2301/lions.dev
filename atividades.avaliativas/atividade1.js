const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.question("Digite seu nome: ", (input1) => {
    let nome = []
    nome.push = (input1);

 rl.question("Digite sua idade: ", (input2) => {
    let idade = []
    idade.push = (input2);

    console.log(`Seu nome é: ${input1} e sua idade é: ${input2}`);
 rl.close()
})})
