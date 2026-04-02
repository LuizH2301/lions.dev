const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//simulador de rolagem de dados que gera os lados que o usuário desejar (exemplo: 6 lados, 20 lados, etc)
function rolarDado (tamanho = 6) {
    const resultado = Math.floor(Math.random() * tamanho) + 1;
    return resultado;
}
function jogar () {
    rl.question('Deseja rolar o dado? (sim/nao): ', (resposta) => {
        if (resposta.toLowerCase() === 'sim') {
            rl.question('Quantos lados tem o dado? (ex: 6, 20): ', (lados) => {
                 const tamanho = parseInt(lados)
                 if (isNaN(tamanho) || tamanho <= 0) {
                    console.log('Por favor, insira um número válido de lados.')
                    jogar()

        } else {
            const resultado = rolarDado(tamanho)
            console.log('Você rolou um: ' + resultado);
                jogar()   
      
        }
    })
} else {
        console.log('Obrigado por jogar!');
        rl.close();
    }
})
}
jogar()
            