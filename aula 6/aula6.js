const numeros = [10,20,30,40,50]

console.log(numeros[3])

//! Criem uma condicional que compare dois valores de um array e retorne o maior valor
//! Lembrando que para acessar os valores em um Array, devemos usar os índices nomeDoArray [...]


if(numeros[1]< numeros[2]){
    console.log(numeros[2])

    } else{
        console.log(numeros[1])
    }


    //! Splice  ( Remover elemento específico dentro da Array)

    const personagens = ('Shrek', 'Fiona', 'Mickey')
    personagens.splice = (1, 1)
    console.log(personagens)



//! Includes (VERIFICAR SE FAZ PARTE)


const personagens1 = ['Shrek', 'Fiona', 'Mickey']

if(personagens1.includes('Shrek')){
    console.log("Shrek, O Filme")

}else{
    console.log("Não é Shrek!")
}



//! IndexOf  (Usado para saber a posição de determinado elemento dentro da Array)


const personagens2 = ['Shrek', 'Fiona', 'Mickey', 'Spider Man']

console.log(personagens2.indexOf('Mickey'))



//! Length  (Usado para saber a quantidade de elementos dentro da Array)

const personagens3 = ['Shrek', 'Fiona', 'Mickey', 'Spider Man']

console.log(personagens3.length)


//! Push = ADICIONA ELEMENTO AO FINAL DA ARRAY
//! Pop =   REMOVE O ÚLTIMO ELEMENTO DA ARRAY
//! Unshift = ADICIONA ELEMENTO NO INICIO DA ARRAY
//! Shift = REMOVE O PRIMEIRO ELEMENTO DA ARRAY


rl.setPrompt('Digite um número:')
rl.prompt()
console.log("Digite dois números")

let entradaUsuario = ''
let entradaUsuario2 = ''

rl.on('line', (input) => {
    entradaUsuario = parseFloat(input)
 rl.on('line', (input2) =>{
    entradaUsuario2 = parseFloat(input2)
    console.log(entradaUsuario + entradaUsuario2)
})
})
