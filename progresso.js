const PROGRESS_KEY = 'ultimaFaseCompleta';

function salvarProgresso(faseNumero) {
    localStorage.setItem(PROGRESS_KEY, faseNumero.toString());
    console.log(`Progresso salvo: Fase ${faseNumero} completa.`);
}

function carregarProgresso() {
    const progresso = localStorage.getItem(PROGRESS_KEY);
    if (progresso) {
        console.log(`Progresso carregado: Fase ${progresso} completa.`);
        return parseInt(progresso, 10);
    } else {
        console.log('Nenhum progresso encontrado.');
        return 0;
    }
}