function fazerCadastro() {
    const nomeCadastro = document.getElementById('nomeCadastro').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const senhaCadastro = document.getElementById('senhaCadastro').value;
    const confirmaCadastro = document.getElementById('confirmaCadastro').value;
    const checkbox = document.getElementById('aceitartermos');
    const inputECadastro = document.getElementById('emailCadastro');
    const inputSCadastro = document.getElementById('senhaCadastro');
    const inputNCadastro = document.getElementById('nomeCadastro');
    const inputCCadastro = document.getElementById("confirmaCadastro");
    const divErro = document.querySelector('.mensagemErro');
    const textoErro = document.querySelector('.textoErro');

    if (nomeCadastro.length <= 0) {
        divErro.classList.add('show');
        textoErro.textContent = `nome muito curto`;
        inputNCadastro.classList.add('input-erro');
        return;
    } else {
        inputNCadastro.classList.remove('input-erro');
    }


    if (!emailCadastro.endsWith('@gmail.com')) {
        divErro.classList.add('show');
        textoErro.textContent = `O email deve terminar com @gmail.com.`;
        inputECadastro.classList.add('input-erro');
        return;
    } else {
        inputECadastro.classList.remove('input-erro');
    }

    if (senhaCadastro.length < 6) {
        divErro.classList.add('show');
        textoErro.textContent = `Aumente este texto para 6 caracteres ou mais.`;
        inputSCadastro.classList.add('input-erro');
        return;
    } else {
        inputSCadastro.classList.remove('input-erro');
    }

    if (confirmaCadastro !== senhaCadastro) {
        divErro.classList.add('show');
        textoErro.textContent = `Esta diferente.`;
        inputCCadastro.classList.add('input-erro');
        return;
    } else {
        inputCCadastro.classList.remove('input-erro');
    }
    if (!checkbox.checked) {
        divErro.classList.add('show');
        textoErro.textContent = `Você deve aceitar os termos de uso e política de privacidade.`;
        return;
    }

    divErro.classList.remove('show');
    window.location.href = 'DashBoard.html';
    localStorage.setItem('email', emailCadastro);
    localStorage.setItem('senha', senhaCadastro);
    localStorage.setItem('nome', nomeCadastro);


}
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
function irEsqueciMinhaSenha() {
    window.location.href = 'EsqueciMinhaSenha.html'
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
const inputSenha = document.getElementById('senhaPerfil');
const inputEmail = document.getElementById('emailPerfil');
const btnEditarNome = document.getElementById('btnEditarNome');
if (inputNome) {
    inputNome.value = localStorage.getItem('nome') || '';
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
if (inputSenha) {
    inputSenha.value = localStorage.getItem('senha') || '';
    inputSenha.readOnly = true;
    if (btnEditarNome) {
        btnEditarNome.addEventListener('click', function () {
            inputSenha.readOnly = !inputSenha.readOnly;
            if (inputSenha.readOnly) {
                localStorage.setItem('senha', inputSenha.value);
                btnEditarNome.textContent = 'Editar';
            } else {
                btnEditarNome.textContent = 'Salvar';
                inputSenha.focus();
            }


        });
    }
}
if (inputEmail) {
    inputEmail.value = localStorage.getItem('email') || '';
    inputEmail.readOnly = true;
    if (btnEditarNome) {
        btnEditarNome.addEventListener('click', function () {
            inputEmail.readOnly = !inputEmail.readOnly;
            if (inputEmail.readOnly) {
                localStorage.setItem('email', inputEmail.value);
                btnEditarNome.textContent = 'Editar';
            } else {
                btnEditarNome.textContent = 'Salvar';
                inputEmail.focus();
            }


        });
    }
}
const btnMostrarSenha = document.getElementById('btnMostrarSenha');
const inputSenhaPerfil = document.getElementById('senhaPerfil');

if (btnMostrarSenha && inputSenhaPerfil) {
    btnMostrarSenha.addEventListener('click', function (e) {
        e.preventDefault();
        if (inputSenhaPerfil.type === 'password') {
            inputSenhaPerfil.type = 'text';
            btnMostrarSenha.querySelector('.p1').textContent = 'Ocultar Dados';
        } else {
            inputSenhaPerfil.type = 'password';
            btnMostrarSenha.querySelector('.p1').textContent = 'Mostrar Dados';
        }
    });
}
function enviarIns() {
    const email = document.getElementById('emailEsqueci').value;
    
}