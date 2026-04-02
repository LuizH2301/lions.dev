const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Gerador de senha aleatória (que contenha letras maiúsculas, minúsculas, números e caracteres especiais)
function gerarSenha (tamanho = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres [indice];
    }
    return senha;
}
function solicitarTamanho(){
    rl.question('Digite o tamanho da senha desejada: ', (resposta) => {
        const tamanho = parseInt(resposta);
        if (isNaN(tamanho) || tamanho <= 0) {
            console.log('Por favor, insira um número válido de caracteres.');
            solicitarTamanho();
        } else {
            const senhaGerada = gerarSenha(tamanho);
            console.log('Senha gerada: ' + senhaGerada);
            rl.close();
        }
    })
}
solicitarTamanho()