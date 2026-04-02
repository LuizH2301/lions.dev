const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `qual número você gostaria de verificar se é positivo ou negativo?: `,
  (usuario) => {
    const numero = parseInt(usuario);

    if (numero % 2 === 0) {
      console.log("seu número é par!");
    } else {
      console.log("seu número é ímpar!");
    }
    rl.close();
  }
);
