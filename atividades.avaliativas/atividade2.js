const { channel } = require("diagnostics_channel");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (input1) => {
  let nome = [];
  nome.push = input1;

  rl.question("Digite sua idade: ", (input2) => {
    let idade = [];
    idade.push = input2;

    const cnh = true;
    rl.question("Você possui CNH? ", (input3) => {
      if (input3 == "sim") {
        console.log("Você está apto à dirigir");
      } else {
        console.log("Você não está apto à dirigir");
      }
      rl.close();
    });
  });
});
