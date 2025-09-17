document.getElementById('Email').addEventListener('input', function() {
    const emailUso = this.value;
    const inputEmail = document.getElementById('Email');
    const divErro = document.querySelector('.mensagemErro');
    const textoErro = document.querySelector('.textoErro');

    if (!emailUso.endsWith('@gmail.com')) {
        divErro.classList.add('show');
        textoErro.textContent = 'O emai deve terminar com @gmail.com';
        inputEmail.classList.add('input-erro');
    } else {
        if (document.getElementById('Senha').value.length >= 6) {
            divErro.classList.remove('show');
        }
        inputEmail.classList.remove('input-erro');
    }
})

document.getElementById('Senha').addEventListener('input', function () {
    const senhaUso = this.value;
    const divErro = document.querySelector('.mensagemErro');
    const textoErro = document.querySelector('.textoErro');
    const inputSenha = document.getElementById('Senha');

    if (senhaUso.length < 6) {
        divErro.classList.add('show');
        textoErro.textContent = `Aumente este texto para 6 caracteres ou mais.`; 
        inputSenha.classList.add('input-erro');
        return;
    } else {
        divErro.classList.remove('show');
        inputSenha.classList.remove('input-erro');

    }
});

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