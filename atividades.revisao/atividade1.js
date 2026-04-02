//! Escreva um programa que verifique se um número armazenado em uma variável é
//! divisível por 5 e exiba uma mensagem apropriada no console.
//! Para isso, declare uma variável número e atribua a ela um valor, use uma estrutura
//! condicional para verificar se o número é divisível por 5, e exiba no console "O
//! número X é divisível por 5." ou "O número X não é divisível por 5." dependendo do resultado.

let numero = 10

if(numero % 5 === 0 ){
console.log(`O número ${numero} é divisível por 5`)

}else {
 console.log(`O número ${numero} não é divisível por 5`)
}