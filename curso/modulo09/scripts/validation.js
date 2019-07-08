const form = document.forms['cadastro'];
const elements = form.elements;

const ValidityOnInputEvent = event => {
    event.target.setCustomValidity('');
    event.target.checkValidity();
};

const validarSexo = () => {
    const invalid = Array.from(elements['sexo'])
        .filter(input => input.checked)
        .reduce(() => false, true);

    if(invalid) {
        alert('Sexo deve ser informado!');
    }

    return !invalid;
};

const validarRegime = () => {
    const count = Array.from(elements['regime'])
        .filter(input => input.checked)
        .reduce((count) => count + 1, 0);

    invalid = count === 0;

    if(invalid) {
        alert('Pelo menos um regime deve ser selecionado!');
    }

    return !invalid;
};

const nomeCompleto = elements['nomeCompleto'];
const senha = elements['senha'];

nomeCompleto.addEventListener('input', ValidityOnInputEvent);
senha.addEventListener('input', ValidityOnInputEvent);

nomeCompleto.addEventListener('invalid', event => {
    if (event.target.value === '') {
        event.target.setCustomValidity('Este campo deve ser informado.');
    } else {
        event.target.setCustomValidity('Informe pelo menos 10 caracteres.');
    }
});

senha.addEventListener('invalid', event => {
    if (event.target.value === '') {
        event.target.setCustomValidity('Este campo deve ser informado.');
    } else if (event.target.value.length < 6) {
        event.target.setCustomValidity('Este campo deve ter pelo menos 6 digitos.');
    } else {
        event.target.setCustomValidity('A senha deve conter apenas letras e números.');
    }
});