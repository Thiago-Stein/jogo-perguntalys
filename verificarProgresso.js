const botaoJogar = document.getElementById('BotaoJogar');
const TOTAL_DE_FASES = 10;

function iniciarOuContinuarJogo() {
    const ultimaFaseCompleta = carregarProgresso();
    let proximaFase = ultimaFaseCompleta + 1;

    if (ultimaFaseCompleta === TOTAL_DE_FASES) {
        window.location.href = 'telaFinal.html';
    } else if (proximaFase === 1) {
        window.location.href = 'index1.html';
    } else {
        window.location.href = `index${proximaFase}.html`;
    }
}

if (botaoJogar) {
    botaoJogar.addEventListener('click', iniciarOuContinuarJogo);
}