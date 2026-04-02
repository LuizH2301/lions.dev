

rl.question("Em que ano você nasceu? ", (input1) => {
    let ano = parseInt(input1);
    let anoAtual = 2026

const idade = (anoAtual - ano)
console.log(`Sua idade é: ${idade}`)
rl.close()
})
