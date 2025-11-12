const inputResposta = document.getElementById('inputResposta');
const botaoEnviar = document.getElementById('botaoEnviar');
const corpoFase = document.getElementById('corpo-fase3');

const faseAtual = 3;
const respostaCorreta = "U";
const proximaPagina = 'index4.html';

const mensagemErro = document.createElement('p');
mensagemErro.id = 'mensagemErro';
mensagemErro.textContent = 'Resposta incorreta. Tente novamente!';
corpoFase.appendChild(mensagemErro);

function verificarResposta() {
    const respostaJogador = inputResposta.value.trim().toLowerCase();
    const respostaEsperada = respostaCorreta.toLowerCase();

    if (respostaJogador === respostaEsperada) {
        salvarProgresso(faseAtual);
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

const botaoDica = document.getElementById('botaoDica3');
const mensagemDica = document.getElementById('mensagemDica3');

const dicaFase1 = "Veja o número de saltos entre as letras.";

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