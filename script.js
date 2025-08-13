/* --- Interatividade da Página de phishing --- */

// Variável para guardar a pontuação
let pontuacaoPhishing = 0;

// Função para adicionar pontos
function adicionarPontos(pontos) {
    pontuacaoPhishing = pontuacaoPhishing + pontos;
    alert('Resposta Registrada!');
}

// Função para mostrar o resultado final do quiz
let localDoResultado = document.getElementById('resultado');
let mensagem = '';

function mostrarResultado() {
    // Usando ternário para definir a mensagem
    mensagem = pontuacaoPhishing < 2 ? 'Seu resultado foi insatisfatório! :( ' : 'Seu resultado foi surprendeente! :)';

    // Mostra o resultado na tela
    localDoResultado.innerHTML = mensagem;
}

function reiniciar() {
    let mensagem = '';
    pontuacaoPhishing = 0;
    localDoResultado.innerHTML = mensagem;
}

/* --- Interatividade da Página de 2fa --- */



// Função para verificar a Resposta

function verificarResposta(respostaEscolhida,explicacao,idResposta) {
    if (respostaEscolhida === 'correto') {
        resposta = 'Parabéns, você respondeu corretamente!'
        let localDaResposta = document.getElementById(idResposta);
        localDaResposta.innerHTML = resposta;
    } else {
        resposta = 'Você errou, porque ' + explicacao;
        let localDaResposta = document.getElementById(idResposta);
        localDaResposta.innerHTML = resposta;
    }
}

function limpar() {
    localDaResposta = document.getElementById('resposta1').innerHTML = '';
    localDaResposta = document.getElementById('resposta2').innerHTML = ''; 
}