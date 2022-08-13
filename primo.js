const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let listaDivisores = [];
let listaNaoDivisores = [];

const readlineAsync = () => {
    interface.question("Escolha um número para a verificação de primo: ", (num) => {
        for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            listaDivisores.push(i);
            } else {
            listaNaoDivisores.push(i);
            }
        }
        console.log(listaDivisores)
        if (listaDivisores.length == 0){
            console.log("Verdadeiro")

        } else {
            console.log("Falso")

        }
        listaDivisores = [];
        interface.close;
        readlineAsync();
    });
};

readlineAsync();
