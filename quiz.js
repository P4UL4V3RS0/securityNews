let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "Qual é a melhor prática para criar uma senha segura?",
        options: [
            "A) Usar a mesma senha para todos os sites",
            "B) Combinar letras, números e caracteres especiais",
            "C) Usar seu nome e data de nascimento",
            "D) Escrever a senha em um papel"
        ],
        correctAnswer: 1,
        explanation: "Senhas seguras devem combinar letras maiúsculas, minúsculas, números e caracteres especiais para aumentar a complexidade e dificultar ataques."
    },
    {
        question: "O que é phishing?",
        options: [
            "A) Um software de proteção antivírus",
            "B) Um ataque que engana usuários para obter informações sensíveis",
            "C) Um tipo de criptografia",
            "D) Um protocolo de rede seguro"
        ],
        correctAnswer: 1,
        explanation: "Phishing é uma técnica usada por cibercriminosos para enganar usuários, geralmente por e-mails ou sites falsos, para roubar informações como senhas ou dados bancários."
    },
    {
        question: "Qual é o propósito de uma VPN?",
        options: [
            "A) Aumentar a velocidade da internet",
            "B) Proteger a privacidade online criptografando a conexão",
            "C) Bloquear atualizações de software",
            "D) Criar backups automáticos"
        ],
        correctAnswer: 1,
        explanation: "Uma VPN (Rede Privada Virtual) criptografa sua conexão à internet, protegendo seus dados e mantendo sua privacidade online, especialmente em redes públicas."
    }
];

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    const questionData = questions[currentQuestion];
    
    quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map((option, index) => `
            <button onclick="checkAnswer(${index})">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(selected) {
    const resultDiv = document.getElementById('result');
    const nextButton = document.getElementById('next');
    
    if (selected === questions[currentQuestion].correctAnswer) {
        score++;
        resultDiv.innerHTML = `<p style="color: green;">Correto! ${questions[currentQuestion].explanation}</p>`;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Errado! ${questions[currentQuestion].explanation}</p>`;
    }
    
    nextButton.style.display = 'block';
    document.querySelectorAll('#quiz button').forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    const resultDiv = document.getElementById('result');
    const nextButton = document.getElementById('next');
    
    if (currentQuestion < questions.length) {
        loadQuestion();
        resultDiv.innerHTML = '';
        nextButton.style.display = 'none';
    } else {
        document.getElementById('quiz').innerHTML = '';
        resultDiv.innerHTML = `<h2>Quiz concluído! Sua pontuação: ${score}/${questions.length}</h2>`;
        nextButton.style.display = 'none';
    }
}

