/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
DESAFIO 04
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Qual seu nome? ', (nome) => {
    rl.question('Qual sua idade? ', (idade) => {
        rl.question('Qual sua telefone? ', (telefone) => {
            
            console.log(nome + " tem " + idade + " anos e seu telefone é "+telefone);
            
            rl.close();
            });
                
        //rl.close();
        });

    //rl.close();
});
