const inputResposta = document.getElementById('inputResposta');
const botaoEnviar = document.getElementById('botaoEnviar');
const corpoFase = document.getElementById('corpo-fase9');

const faseAtual = 9;
const respostaCorreta = 15;
const proximaPagina = 'index10.html';

const mensagemErro = document.createElement('p');
mensagemErro.id = 'mensagemErro';
mensagemErro.textContent = 'Resposta incorreta. Tente novamente!';
corpoFase.appendChild(mensagemErro);

function verificarResposta() {
    const respostaJogador = parseInt(inputResposta.value.trim());

    if (respostaJogador === respostaCorreta) {
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

botaoEnviar.addEventListener('click', verificarResposta);
inputResposta.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarResposta();
    }   

});
