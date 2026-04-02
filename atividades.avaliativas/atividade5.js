const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quantos anos você tem? ", (input1) => {
  let idade = [];
  idade.push = input1;
  if (idade >= 18) {
    console.log(`Você é maior de idade, você tem ${input1} anos!`);
  } else {
    console.log(`Você é menor de idade, você te, ${input1} anos!`);
  }
  rl.close();
});
