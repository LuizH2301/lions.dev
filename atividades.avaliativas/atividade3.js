const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome? ", (input1) => {
  let nome = [];
  nome.push = input1;

  rl.question("Digite sua idade? ", (input2) => {
    let idade = [];
    idade.push = input2;
    console.log(`Seu nome é ${nome} e você têm ${idade} anos`);

    rl.question("Você possui cnh? ", (input3) => {
      cnh.push = input3;

      if (input3 === "sim") {
        cnh = true;
      } else {
        cnh = false;
      }

      let informacoes = {
        nome: input1,
        idade: input2,
        CNH: input3,
      };
      console.log(informacoes.nome + informacoes.idade + informacoes.CNH);
      if (idade >= 18 && cnh == true) {
        console.log(`${nome}, você tem permissão para dirigir`);
      } else {
        console.log("Você não tem permissão para dirigir");
      }
      rl.close();
    });
  });
});
