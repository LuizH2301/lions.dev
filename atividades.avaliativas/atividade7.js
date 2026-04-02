const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Qual número você gostaria de verificar?: `, (usuario) => {
  const numero = parseInt(usuario);
  if (numero % 2 === 0) {
    console.log("Seu número é par!");
  } else {
    console.log("Seu número é ímpar!");
  }
  rl.close();
});
