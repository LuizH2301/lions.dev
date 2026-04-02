const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cadastroFuncionarios = [];

function menu () {
function exibirMenu() {
    console.log('1. Cadastrar funcionário');
    console.log('2. Listar funcionários');
    console.log('3. Maior salário');
    console.log('4. Menor salário');
    console.log('5. Sair');
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionario();
                break;
            case '2':
                listarFuncionarios();
                break;
            case '3':
                rl.close();
                break;
            case '4':
                rl.close();
                break;
            case '5':
                rl.close();
                break;    
            default:
                console.log('Opção inválida!');
                exibirMenu();
        }
    });
}
}
menu ();