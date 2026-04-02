const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Você gosta de café? (sim/não): `, (usuario) => {
  const gostaDeCafe = usuario.toString(``);
  if (gostaDeCafe === `sim`) {
    console.log(`Você gosta de café`);
  } else {
    console.log(`Você não gosta de café`);
  }
  rl.close();
});
