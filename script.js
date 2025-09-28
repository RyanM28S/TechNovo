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
        textoErro.textContent = `Senha muito curta!`;
        inputSCadastro.classList.add('input-erro');
        return;
    } else {
        inputSCadastro.classList.remove('input-erro');
    }

    if (confirmaCadastro !== senhaCadastro) {
        divErro.classList.add('show');
        textoErro.textContent = `Senha esta diferente.`;
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

function irEsqueciMinhaSenha() {
    window.location.href = 'EsqueciMinhaSenha.html'
}
function irLogin() {
    window.location.href = 'Login.html'
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
                btnEditarNome.innerHTML = '<img src="img/logo lapis.png" alt="Editar"  style="height:30px; width:30px;">';
            } else {
                btnEditarNome.innerHTML = '<img src="img/logo salva.png" alt="Salvo"  style="height:30px; width:30px;">';
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
                btnEditarNome.innerHTML = '<img src="img/logo lapis.png" alt="Editar" style="height:30px; width:30px;">';
            } else {
                btnEditarNome.innerHTML = '<img src="img/logo salva.png" alt="Salvo" style="height:30px; width:30px;">';
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
                btnEditarNome.innerHTML = '<img src="img/logo lapis.png" alt="Editar" style="height:30px; width:30px;">';
            } else {
                btnEditarNome.innerHTML = '<img src="img/logo salva.png" alt="Salvo" style="height:30px; width:30px;">';
                inputEmail.focus();
            }


        });
    }
}
const btnMostrarSenha = document.getElementById('btnMostrarSenha');
const inputSenhaPerfil = document.getElementById('senhaPerfil');

if (btnMostrarSenha && inputSenhaPerfil) {
    const imgOlho = btnMostrarSenha.querySelector('.icone-olho');
    imgOlho.src = 'img/icone olho.png';

    btnMostrarSenha.addEventListener('click', function (e) {
        e.preventDefault();
        if (inputSenhaPerfil.type === 'password') {
            inputSenhaPerfil.type = 'text';
            imgOlho.src = 'img/icone olho fechado.png';
        } else {
            inputSenhaPerfil.type = 'password';
            imgOlho.src = 'img/icone olho.png';
        }

    });
}
function enviarIns() {
    const email = document.getElementById('emailEsqueci').value;
    if (!email) {
        alert('Por favor, digite seu e-mail.');
        return;
    }
    alert('Verifique seu Email... Amanhão');

    const assunto = encodeURIComponent('Solicitação de Entrevista - [ Nome da Empresa ]');
    const corpo = encodeURIComponent(
        `Prezado [Vinicius Santos Camelo],\n\nGostaria de expressar meu interesse em uma oportunidade de entrevista. Agradeceria se pudesse confirmar seus dados para contato e sugerir uma data e horário convenientes.\n\nAtenciosamente,\n\n[Nome do Interessado]`
    );
    const mailtoLink = `mailto:${email}?subject=${assunto}&body=${corpo}`;
    console.log(mailtoLink);

    window.location.href = mailtoLink;
}
function novo() {
    const modal = document.getElementById('modal');
    modal.classList.add('flex')
}
function fechar() {
    const modal = document.getElementById('modal');
    modal.classList.remove('flex')
}


function addA() {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    const op1p = document.getElementById('op1p');
    const op2p = document.getElementById('op2p');
    const op3p = document.getElementById('op3p');
    const op4p = document.getElementById('op4p');

    const item = 'Ações';
    const preco = 'R$3.000';



    if (op1.textContent === '') {
        op1.textContent = item;
        op1p.textContent = preco;

    } else if (op2.textContent === '') {
        op2.textContent = item;
        op2p.textContent = preco;

    } else if (op3.textContent === '') {
        op3.textContent = item;
        op3p.textContent = preco;

    } else if (op4.textContent === '') {
        op4.textContent = item;
        op4p.textContent = preco;

    } else {
        alert('Não tem espaço');
    }
    const modal = document.getElementById('modal2');
    modal.classList.remove('flex')
}
function addCM() {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    const op1p = document.getElementById('op1p');
    const op2p = document.getElementById('op2p');
    const op3p = document.getElementById('op3p');
    const op4p = document.getElementById('op4p');
    const item = 'Cripto Moedas';
    const preco = 'R$1.800';



    if (op1.textContent === '') {
        op1.textContent = item;
        op1p.textContent = preco;

    } else if (op2.textContent === '') {
        op2.textContent = item;
        op2p.textContent = preco;

    } else if (op3.textContent === '') {
        op3.textContent = item;
        op3p.textContent = preco;

    } else if (op4.textContent === '') {
        op4.textContent = item;
        op4p.textContent = preco;

    } else {
        alert('Não tem espaço');
    }
    const modal = document.getElementById('modal2');
    modal.classList.remove('flex')
}
function addTD() {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    const op1p = document.getElementById('op1p');
    const op2p = document.getElementById('op2p');
    const op3p = document.getElementById('op3p');
    const op4p = document.getElementById('op4p');
    const item = 'Tesouro Direto';
    const preco = 'R$5.000';



    if (op1.textContent === '') {
        op1.textContent = item;
        op1p.textContent = preco;

    } else if (op2.textContent === '') {
        op2.textContent = item;
        op2p.textContent = preco;

    } else if (op3.textContent === '') {
        op3.textContent = item;
        op3p.textContent = preco;

    } else if (op4.textContent === '') {
        op4.textContent = item;
        op4p.textContent = preco;

    } else {
        alert('Não tem espaço');
    }
    const modal = document.getElementById('modal2');
    modal.classList.remove('flex')
}
function addCDB() {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    const op1p = document.getElementById('op1p');
    const op2p = document.getElementById('op2p');
    const op3p = document.getElementById('op3p');
    const op4p = document.getElementById('op4p');
    const item = 'CDB';
    const preco = 'R$2.500';



    if (op1.textContent === '') {
        op1.textContent = item;
        op1p.textContent = preco;
        const modal = document.getElementById('modal2');
        modal.classList.remove('flex')

    } else if (op2.textContent === '') {
        op2.textContent = item;
        op2p.textContent = preco;
        const modal = document.getElementById('modal2');
        modal.classList.remove('flex')

    } else if (op3.textContent === '') {
        op3.textContent = item;
        op3p.textContent = preco;
        const modal = document.getElementById('modal2');
        modal.classList.remove('flex')

    } else if (op4.textContent === '') {
        op4.textContent = item;
        op4p.textContent = preco;
        const modal = document.getElementById('modal2');
        modal.classList.remove('flex')

    } else {
        alert('Não tem espaço');

    }
    const modal = document.getElementById('modal2');
    modal.classList.remove('flex')

}
function tira() {
    const modal = document.getElementById('modal2');
    modal.classList.add('flex')
}
function fechar2() {
    const modal = document.getElementById('modal2');
    modal.classList.remove('flex')
}
function excluir1() {
    const op1 = document.getElementById('op1');
    const op1p = document.getElementById('op1p');
    if (op1 !== '') {
        op1.textContent = ''
        op1p.textContent = ''
    } else {
        alert("Ja esta vazio")
    }


}
function excluir2() {
    const op2 = document.getElementById('op2');
    const op2p = document.getElementById('op2p');
    if (op2 !== '') {
        op2.textContent = ''
        op2p.textContent = ''
    } else {
        alert("Ja esta vazio")
    }


}
function excluir3() {
    const op3 = document.getElementById('op3');
    const op3p = document.getElementById('op3p');
    if (op3 !== '') {
        op3.textContent = ''
        op3p.textContent = ''
    } else {
        alert("Ja esta vazio")
    }


}
function excluir4() {
    const op4 = document.getElementById('op4');
    const op4p = document.getElementById('op4p');
    if (op4 !== '') {
        op4.textContent = ''
        op4p.textContent = ''
    } else {
        alert("Ja esta vazio")
    }

}