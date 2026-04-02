const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//simulador de sorteio entre 1 e 100

const numeroSorteado = Math.floor(Math.random() * 100) + 1;
let tentativas = 0
const maxTentativas = 10

console.log('Bem vindo ao jogo de adivinhação! Você tem 10 tentativas para adivinhar o número sorteado entre 1 e 100.');
function jogar() {
    rl.question('Digite seu palpite: ', (resposta) => {
        const palpite = parseInt(resposta);
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log('Por favor, digite um número válido entre 1 e 100.');
            jogar();
        } else {
            tentativas ++
            switch (true) {
                case palpite === numeroSorteado:
                    console.log(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas!`);
                    rl.close();
                    break;
                case palpite < numeroSorteado:
                    console.log('O número sorteado é maior. Tente novamente.');
                    jogar();
                    break;
                case palpite > numeroSorteado:
                    console.log('O número sorteado é menor. Tente novamente.');
                    jogar();
                    break;
            }
             if (tentativas >= maxTentativas) {
                console.log(`Suas tentativas acabaram! O número sorteado era ${numeroSorteado}.`);
                rl.close();
             }
            }
        })
    }
    jogar()