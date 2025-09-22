
function fazerLogin() {
    const emailUso = document.getElementById('Email').value;
    const senhaUso = document.getElementById('Senha').value;
    const divErro = document.querySelector('.mensagemErro');
    const textoErro = document.querySelector('.textoErro');
    const inputSenha = document.getElementById('Senha');
    const inputEmail = document.getElementById('Email');

    if (!emailUso.endsWith('@gmail.com')) {
        divErro.classList.add('show');
        textoErro.textContent = `O email deve terminar com @gmail.com.`;
        inputEmail.classList.add('input-erro');
        return;
    } else {
        inputEmail.classList.remove('input-erro');
    }

    if (senhaUso.length < 6) {
        divErro.classList.add('show');
        textoErro.textContent = `Aumente este texto para 6 caracteres ou mais.`;
        inputSenha.classList.add('input-erro');
        return;
    } else {
        inputSenha.classList.remove('input-erro');
    }

    divErro.classList.remove('show');
    window.location.href = 'DashBoard.html';
    localStorage.setItem('email', emailUso);
    localStorage.setItem('senha', senhaUso);
}
function irPerfil() {
    window.location.href = 'Perfil.html'
}
function irEquipe() {
    window.location.href = 'equipe.html'
}
function irSuporte() {
    window.location.href = 'Suporte.html'
}
function irDashBoard() {
    window.location.href = 'DashBoard.html'
}
function irTezte() {
    window.location.href = 'tezte.html'
}
const btnCriarConta = document.getElementById('btnCriarConta');
if (btnCriarConta) {
    btnCriarConta.addEventListener('click', function () {
        const nome = document.querySelector('.nomecompleto').value;
        const email = document.querySelector('.gmail').value;
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);


    });
}
const inputNome = document.getElementById('seuNome');
const btnEditarNome = document.getElementById('btnEditarNome');
if (inputNome) {
    inputNome.value = localStorage.getItem('nome') ||  '';
    inputNome.readOnly = true;
    if (btnEditarNome) {
        btnEditarNome.addEventListener('click', function () {
            inputNome.readOnly = !inputNome.readOnly;
            if (inputNome.readOnly) {
            localStorage.setItem('nome', inputNome.value);
            btnEditarNome.textContent = 'Editar';
            } else {
                btnEditarNome.textContent = 'Salvar';
                inputNome.focus();
            }


        });
    }
}
