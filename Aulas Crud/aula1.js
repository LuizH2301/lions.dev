const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let funcionarios = [];

function exibirMenu() {
  console.log(`
Menu:
1. Cadastrar funcionário
2. Listar todos os funcionários
3. Exibir funcionário com maior salário
4. Sair
`);
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        // cadastrarFuncionario()
        break;
      case "2":
        // listarFuncionarios()
        break;
      case "3":
        // exibirMaiorSalario()
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Opção inválida, tente novamente.");
        exibirMenu();
        break;
    }
  });
}

function cadastrarFuncionario() {
  rl.question("Digite o nome do funcionário: ", (nome) => {
    rl.question("Digite o cargo do funcionário: ", (cargo) => {
      rl.question("Digite o salário do funcionário: ", (salario) => {
        funcionarios.push({ nome: nome, cargo: cargo, salario: salario });
        console.log("Funcionário cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function listarFuncionarios() {
  // se funcionarios estiver vazio, exibir mensagem
  // senão, percorrer o vetor funcionarios, e listar cada funcionario
}

function exibirMaiorSalario() {
  // se funcionarios estiver vazio, exibir mensagem
  // senão, percorrer o vetor funcionarios, e encontrar o funcionario com maior salario
}
