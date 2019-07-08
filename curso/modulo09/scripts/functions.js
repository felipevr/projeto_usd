
// document.querySelector("input").focus();
// console.log(document.activeElement);

//manipulando textarea
var obsText = document.querySelector('#textObs');
var obsCount = document.querySelector('#obsCount');
obsText.addEventListener('input', (event) => {
    obsCount.textContent = obsText.value.length;
});

//manipulando checkbox e radio
let checks = document.querySelectorAll("input[name='regime'][type='checkbox']");
let radios = document.querySelectorAll("input[name='sexo'][type='radio']");

function selectChecks() {
    Array.from(checks).forEach(check => {
        let label = document.querySelector('label[for="'+check.id+'"]');
        if (check.checked) {
            label.classList.add('selected');
        } else if (label.classList.contains('selected')) {
            label.classList.remove('selected');
        }
    });
}

Array.from(checks).forEach(check => {
        check.addEventListener('change', selectChecks);
    });

function selectRadios() {
    Array.from(radios).forEach(radio => {
        let label = document.querySelector('label[for="'+radio.id+'"]');
        if (radio.checked) {
            label.classList.add('selected');
        } else if (label.classList.contains('selected')) {
            label.classList.remove('selected');
        }
    });
}

Array.from(radios).forEach(radio => {
    radio.addEventListener('change', selectRadios);
    });


//manipulando o select
let select = document.querySelector("#selectCargo");
let textA = document.querySelector('.textarea');
select.addEventListener('change', event => {
    if (event.target.value === 'Programador') {
        textA.style.display = 'none';
    } else {
        textA.style.display = 'block';
    }
});

//manipulando o input file
let inputFile = document.querySelector("#inputPDF");
inputFile.addEventListener("change", () => {
    if(inputFile.files.length > 0) {
        let file = inputFile.files[0];
        console.log("Nome do arquivo selecionado: ", file.name);

        if (file.type) {
            console.log("Tipo do arquivo selecionado: ", file.type);
        }

        let reader = new FileReader();

        reader.addEventListener('load', () => {
            console.log(reader.result);
        });

        reader.readAsText(file);
    }
});

//liberando botão salvar
let confirmar = document.querySelector("#inputConfirmacao");
let btnSalvar = document.querySelector("button[type=submit]");

confirmar.addEventListener('change', () => btnSalvar.disabled = !confirmar.checked);




//salvar dados no localStorage
let cadastroForm = document.forms['cadastro'];
cadastro.addEventListener("submit", event => {
    event.preventDefault();

    if(!validarSexo() || !validarRegime()) {
        return;
    }

    console.log('salvando...');

    let elements = event.target.elements;
    let candidato = {
        nome: elements.nomeCompleto.value,
        senha: elements['senha'].value,
        sexo: elements['sexo'].value,
        regime: Array.from(elements['regime'])
            .filter(input => input.checked)
            .map(input => input.value),
        cargo: elements['cargo'].value,
        observacao: elements['observacao'].value
    };

    console.log(elements);

    localStorage.setItem("candidato", JSON.stringify(candidato));
    alert('Cadastro salvo!');
});

//pegando dados do localStorage
window.addEventListener('load', () => {
    let candidato = JSON.parse(localStorage.getItem("candidato"));

    if(!candidato) {
        return;
    }

    let elements =  document.forms['cadastro'].elements;

    elements['nomeCompleto'].value = candidato.nome;
    elements['senha'].value = candidato.senha;
    elements['cargo'].value = candidato.cargo;
    elements['observacao'].value = candidato.observacao;
    //elements['sexo'].value = candidato.sexo;

    Array.from(elements['sexo'])
        .find(input => input.value = candidato.sexo).checked = true;

    candidato.regime.forEach(regime => {
        Array.from(elements['regime'])
            .find(input => input.value == regime).checked = true;
    });

    selectChecks();
    selectRadios();
});

//apagando dados do storage
//let cadastroForm = document.forms['cadastro'];
cadastro.addEventListener("reset", event => {
    localStorage.removeItem('candidato');

    setTimeout(function() {
        // executes after the form has been reset
        console.log('after reset: ');
        selectChecks();
        selectRadios();
    }, 1);
});