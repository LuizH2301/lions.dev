const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];
const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
function jogar() {
    rl.question('Escolha pedra, papel, tesoura, lagarto ou spock:', (resposta) => {
        const escolhaUsuario = resposta.toLowerCase();
        console.log('Computador escolheu:' + escolhaComputador);
        if (escolhaUsuario === escolhaComputador) {
            console.log('Empate!');
        } else if ((escolhaUsuario === 'pedra cobre' && escolhaComputador === 'pedra') ||
                     (escolhaUsuario === 'pedra esmaga' && escolhaComputador === 'tesoura') ||
                     (escolhaUsuario=== 'tesoura corta' && escolhaComputador === 'papel') ||
                     (escolhaUsuario === 'lagarto come' && escolhaComputador === 'papel') ||
                     (escolhaUsuario === 'spock vaporiza' && escolhaComputador === 'tesoura') ||
                     (escolhaUsuario === 'papel refuta' && escolhaComputador === 'spock') ||
                     (escolhaUsuario === 'pedra esmaga' && escolhaComputador === 'lagarto') ||
                     (escolhaUsuario === 'tesoura decapita' && escolhaComputador === 'lagarto') ||
                     (escolhaUsuario === 'lagarto envenena' && escolhaComputador === 'spock')) {
                console.log('Você venceu!')
                    jogar()
                } else {
                    console.log('Você perdeu!');
                    jogar()
                
        }
    })
}
jogar();