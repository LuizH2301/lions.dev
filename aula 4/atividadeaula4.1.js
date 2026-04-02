//! Crie um programa que verifique se um número está dentro de um intervalo;
//! considerando que ele deve ser maior que 10 e menor que 50

const numero1 = 22

if(numero1 > 10 && numero1 < 50){
    console.log("Número dentro do intervalo")
    } else {
        console.log("Número fora do intervalo")
    }


//! Um produto pode ser comprado se estiver disponível em estoque e o cliente tiver saldo suficiente


const produtoEstoque = 40
const produtoCompra = 15
const valorProduto = 10
const saldoEmConta = 100

if(produtoCompra  <= produtoEstoque && saldoEmConta >= valorProduto){
    console.log("Compra Aprovada")
} else {
    console.log("Compra Negada")
}



//! Crie um programa que verifique se uma pessoa pode votar considerando que ela deve ter;
//! 16 anos ou mais e título de eleitor


const idadeEleitor = 22
const tituloDeEleitor = true

if(idadeEleitor >= 16 && tituloDeEleitor){
    console.log("Pessoa Apta à Votar!")
} else{
    console.log("Pessoa Inapta à Votar!")
}
