const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaTarefas = []

rl.question("Primeira Tarefa ", (input1) => {
    listaTarefas.push(input1);

        rl.question("Segunda Tarefa ", (input2) => {
          listaTarefas.push(input2);

           rl.question("Terceira Tarefa ", (input3) => {
              listaTarefas.push(input3);

                  console.log(`Você têm ${listaTarefas} pendentes`)
                   console.log(`Você tem essas tarefas restantes: ${listaTarefas}`)

                   listaTarefas.pop();

               console.log(`Restam ${listaTarefas.length} restantes`)
               rl.close();

           })
        })
        })