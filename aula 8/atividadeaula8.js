const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite um numero: ", (input) => {
    let tabuada = 0;
    tabuada = parseInt(input)
for (let i = 1; i <= 100; i ++) {
console.log(tabuada * i)
}
rl.close()
})






