function configurarPopup(botaoId, popupId, fecharId) {
  const botao = document.getElementById(botaoId);
  const popup = document.getElementById(popupId);
  const fechar = document.getElementById(fecharId);

  botao.addEventListener('click', () => {
    popup.classList.add('visivel');
  });

  fechar.addEventListener('click', () => {
    popup.classList.remove('visivel');
  });
}

configurarPopup("V1", "popup1", "fechar1");
configurarPopup("V2", "popup2", "fechar2");
configurarPopup("V3", "popup3", "fechar3");

const campoResposta = document.getElementById("resposta");
const botaoEnviar = document.getElementById("botaoEnviar");
const respostaCorreta = 386; 

botaoEnviar.addEventListener('click', verificarResposta);
inputResposta.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarResposta();
    }   
});
const proximaPagina = 'telaFinal.html';

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


