const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

let tabuada = 0;
rl.question("Digite um numero: ", (input) => {
    tabuada = parseInt(input)
for (let i = 1; i <= 10; i ++) {
console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}
rl.close()
})

