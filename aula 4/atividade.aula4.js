//! Criem um programa que receba um número e diga:
//! SE ele é positivo ou negativo


const numero1 = -5
if(numero1 >=0) {
    console.log("Seu número é positivo")
} else {
    console.log("Seu número é negativo")
}


//! Verifique se o número é par ou ímpar

const number = 10
const parOuImpar = number % 2
if(parOuImpar === 0) {
    console.log("Número Par")
    } else {
        console.log("Número ímpar")
    }

//! Faça um programa que verifique se um aluno está aprovado
//! Ele será aprovado se a note for maior ou igual a 6 e a frequência for maior ou igual a 75%

const aprovado2 = 80
const frequencia = "60%"

if(aprovado2 >= 60 && frequencia >= "75%"){

console.log("Parabéns, você foi aprovado")
} else {
    console.log("Infelizmente Você foi reprovado")
}

