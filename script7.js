const inputResposta = document.getElementById('inputResposta');
const botaoEnviar = document.getElementById('botaoEnviar');
const corpoFase = document.getElementById('corpo-fase7');

const respostaCorreta = 4;
const proximaPagina = 'index8.html';

const mensagemErro = document.createElement('p');
mensagemErro.id = 'mensagemErro';
mensagemErro.textContent = 'Resposta incorreta. Tente novamente!';
corpoFase.appendChild(mensagemErro);

function verificarResposta() {
    const respostaJogador = parseInt(inputResposta.value.trim());

    if (respostaJogador === respostaCorreta) {
        window.location.href = proximaPagina;
    } else {
        mensagemErro.style.display = 'block';
        inputResposta.value = '';
        inputResposta.focus();
        
        setTimeout(() => {
            mensagemErro.style.display = 'none';
        }, 3000);
    }
}

const botaoDica = document.getElementById('botaoDica7');
const mensagemDica = document.getElementById('mensagemDica7');

const dicaFase1 = "Você já usou todas as suas dicas! Boa sorte!";

function mostrarDica() {
    if (mensagemDica) {
        mensagemDica.textContent = dicaFase1;
        mensagemDica.style.display = 'block';
    }
    setTimeout(() => {
        mensagemDica.style.display = 'none';
    }, 5000);
}

botaoDica.addEventListener('click', mostrarDica);

botaoEnviar.addEventListener('click', verificarResposta);
inputResposta.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarResposta();
    }   
});