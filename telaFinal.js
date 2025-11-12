const botaoNovoJogo = document.getElementById('botaoNovoJogo');

function reiniciarJogo() {
    localStorage.removeItem('ultimaFaseCompleta');
    window.location.href = 'TelaInicio.html';
}

botaoNovoJogo.addEventListener('click', reiniciarJogo);