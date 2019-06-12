/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 05 - DESAFIO 02

*/

const readline = require('readline-sync');
const fs = require('fs');

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

//estrutura básica de um contato (objeto)
const Contato = {
    nome: "",
    telefone: "",
    endereco: "",
    email: ""
}

function main() {
    let sair = false;

    //array que armazenará os contatos
    const listaDeContatos = [];

    //quantidade de contatos na lista
    let quantidade = 0;

    //loop principal do programa
    while (!sair) {
        console.log('O que deseja fazer?');
        console.log('1. Incluir um novo contato');
        console.log('2. Buscar um contato pelo nome');
        console.log('5. Listar contatos');
        console.log('6. Carregar agenda');
        console.log('7. Salvar agenda');
        console.log('9. Sair da agenda');

        let opcao = parseInt(readline.question("Escolha uma opcao : "));

        switch (opcao) {
            case 1:
                listaDeContatos[quantidade++] = incluirNovoContato();
                break;
            case 2:
                buscarContato(listaDeContatos);
                break;
            case 5:
                listarContatos(listaDeContatos);
                break;
            case 6:
                listaDeContatos = carregarAgenda(listaDeContatos);
                break;
            case 7:
                salvarAgenda(listaDeContatos);
                break;
            case 9:
                sair = true;
                break;
        }

        //console.log(listaDeContatos);
    }

    console.log('Tchauzinho!');

}

function carregarAgenda() {
    const file = 'agenda.json';
    let listaDeContatos = [];

    fs.open(file, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(file+' does not exist');
                return;
            }
            
            throw err;
        }
        
        const dados = readMyData(fd);
        console.log(dados);
    });

    return listaDeContatos;
}

function salvarAgenda(listaDeContatos) {
    const file = 'agenda.json';
    //fs.createWriteStream(path[, options])
    fs.open(Buffer.from(file), 'w', (err, fd) => {
        if (err) throw err;

        var json = JSON.stringify(listaDeContatos, null, 2);
        fs.writeFileSync(fd, json, (err) => {
            if (err) { 
                console.log(json);
                throw err;
            }
            console.log('The file has been saved!');
        }); 
        //fs.write(fd, listaDeContatos);

        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });

    console.log('Agenda salva!');

}

function listarContatos(listaDeContatos) {
    
    for(let contato of listaDeContatos) {
        console.log(contato);
    }

}

function buscarContato(listaDeContatos) {
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
    
    console.log('CADASTRO DE NOVO CONTATO');

    let novoContato = Object.create(Contato);

    novoContato.nome = (readline.question("Digite o nome do contato: "));
    novoContato.telefone = (readline.question("Telefone: "));
    novoContato.endereco = (readline.question("Endereco: "));
    novoContato.email = (readline.question("Digite o e-mail do contato: "));

    return novoContato;
}

function editarContato() {


    console.log('EDITAR CONTATO');

}

function excluirContato() {
    console.log('EXCLUIR CONTATO');
}




main();