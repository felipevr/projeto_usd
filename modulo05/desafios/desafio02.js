/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 05 - DESAFIO 02

*/

const readline = require('readline-sync');

/*
Crie uma agenda de contatos que armazene cada contato num array. A agenda
deve rodar em loop até que o usuário solicite sair da aplicação.

A cada iteração do loop da aplicação o usuário poderá solicitar:
● Incluir um novo contato
● Buscar um contato pelo nome e caso encontre:
○ Permitir editar o contato
○ Permitir excluir o contato
● Sair da agenda

*/

const Contatos = {
    nome: "",
    telefone: "",
    endereco: "",
    email: ""
}

function main() {
    let sair = false;

    while (!sair) {
        console.log('O que deseja fazer?');
        console.log('1. Incluir um novo contato');
        console.log('2. Buscar um contato pelo nome');
        console.log('9. Sair da agenda');

        let opcao = parseInt(readline.question("Escolha uma opcao : "));

        switch (opcao) {
            case 1:
                incluirNovoContato();
                break;
            case 2:
                buscarContato();
                break;
            case 9:
                console.log('Tchauzinho!');
                sair = true;
                break;
        }
    }

  
}

function buscarContato() {
    let voltar = false;

    while (!voltar) {
        console.log('O que deseja fazer?');
        console.log('3. Editar o contato');
        console.log('4. Excluir um contato');
        console.log('7. Voltar ao menu anterior');

        let opcao = parseInt(readline.question("Escolha uma opcao : "));

        switch (opcao) {
            case 1:
                editarContato();
                break;
            case 2:
                excluirContato();
                break;
            case 7:
                console.log('Voltando...');
                voltar = true;
                break;
        }
    }
}


function incluirNovoContato() {
    
}

function editarContato() {

}

function excluirContato() {

}




main();