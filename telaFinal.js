const botaoNovoJogo = document.getElementById('botaoNovoJogo');

function reiniciarJogo() {
    localStorage.removeItem('ultimaFaseCompleta');
    window.location.href = 'index.html';
}


botaoNovoJogo.addEventListener('click', reiniciarJogo);
