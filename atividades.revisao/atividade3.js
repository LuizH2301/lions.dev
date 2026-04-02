//! Semelhante a atividade anterior. Mas desta vez, o vetor inicial terá os números: [27,
//! 10, 3, 0, 20, 5, 6, 3].
//! Em seguida, adicione mais um número nesse vetor (sua idade por exemplo) usando
//! push(numero).
//! Depois, criar dois vetores para guardar os ímpares e outro para os pares,
//! adicionando da mesma forma que a atividade 2, os pares no vetor dos pares, e
//! ímpares no vetor dos ímpares.

const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});


const numeros = [27, 10, 3, 0, 20, 5, 6, 3];
rl.question("Digite sua idade: ", (input) => {
    const idade = parseInt(input);
    numeros.push(idade);
    const numerosImpares = []
    const numerosPares = []
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 !== 0) {
          numerosImpares.push(numeros[i])
        } else {
            numerosPares.push(numeros[i])
        }
    }
    console.log("Números Ímpares: " + numerosImpares)
    console.log("Números Pares: " + numerosPares)
    rl.close();
})
