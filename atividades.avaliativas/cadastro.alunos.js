const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alunos = [];

function cadastroAluno() {
    rl.question('Digite o nome do aluno: ', (nome) => {
        rl.question('Digite a idade do aluno: ', (idade) => {
            rl.question('Digite a turma do aluno: ', (curso) => {
                rl.question('Digite a nota do aluno: ', (nota) => {
                const aluno = { nome, idade, turma, nota, curso };
                alunos.push(aluno);
                console.log('Aluno cadastrado com sucesso!');
                console.log(alunos);
                console.log(nota);
                if (cadastroAluno.length === 0) {
                    console.log('Nenhum aluno cadastrado.');
                } else {
                    console.log('Alunos cadastrados:');
                    alunos.forEach((aluno, index) => {
                        console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Nota: ${aluno.nota}`);
                    });
                }
                rl.close();
            });
        });
    });
})
}

function buscarAlunoPorNome(nome) {
    const busca = nome.toLowerCase();
    const resultados = alunos.filter((aluno) => aluno.nome.toLowerCase().includes(busca));
    return resultados;
}


async function adicionarAluno() {
    console.log("Adicionar novo aluno: ");
    const nome = await perguntar ("Nome");
    const idade = await perguntar ("Idade");
    const curso = await perguntar ("Curso");
    
    if (!nome || Number.isNaN(idade) || idade <= 0 || !curso) {
        console.log("Dados inválidos. Tente novamente.");
        return;
    }

    cadastroAluno.push({nome, idade, curso});
    console.log(`Aluno ${nome} adicionado com sucesso!`);

    async function buscarAluno() {
        const nome = await perguntar("Digite o nome do aluno para buscar: ");
        const resultados = buscarAlunoPorNome(nome);
     if(resultados.length === 0) {
        console.log("Nenhum aluno encontrado com esse nome.");
     } else {
        console.log("Alunos encontrados:");
        resultados.forEach((aluno, index) => {
            console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`);
        });
     }
     console.log("");
    }

    async function menu() {
        while (true){
            console.log('====Cadastro de Alunos ====');
            console.log('1. Listar alunos');
            console.log('2. Adicionar aluno');
            console.log('3. Buscar aluno por nome');
            console.log('4. Sair');
            const opcao = await perguntar("Escolha uma opção: ");

            switch (opcao){
                case '1':
                    listarAlunos();
                    break;
                    case '2':
                        await adicionarAluno();
                        break;
                        case '3':
                            await buscarAluno();
                            break;
                            case '4':
                                console.log("Saindo do programa...");
                                rl.close();
                                break;
                                default:
                                    console.log("Opção inválida. Tente novamente.");
            }
        }
    }
}
menu();
