document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        {
            question: "Qual a minha cor preferida?",
            options: ["Branco", "Verde", "Preto"],
            correctAnswer: 2
        },
        {
            question: "Qual é o dia do meu aniversário?",
            options: ["20/05/2025", "16/07/2025", "13/08/2025"],
            correctAnswer: 1
        },
        {
            question: "O que eu mais odeio na vida?",
            options: ["Mentira", "Fofoca", "Chatice"],
            correctAnswer: 0
        },
        {
            question: "O que eu mais gosto de comer?",
            options: ["Lasanha", "Strogonoff", "Frango Empanado"],
            correctAnswer: 0
        },
        {
            question: "Qual é meu hobby favorito?",
            options: ["Jogar Futebol", "Ouvir Musica", "Jogar Video Game"],
            correctAnswer: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0; 

    function loadQuestion() {
        const question = questions[currentQuestionIndex];
        const questionContainer = document.getElementById('question');
        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            ${question.options.map((option, index) => `
                <button class="option" data-index="${index}">${option}</button>
            `).join('')}
        `;
    }

    function checkAnswer(selectedIndex) {
        const question = questions[currentQuestionIndex];
        const buttons = document.querySelectorAll('.option');

        buttons.forEach((button, index) => {
            if (index === selectedIndex) {
                if (index === question.correctAnswer) {
                    button.classList.add('correct');
                    score++; 
                } else {
                    button.classList.add('incorrect');
                }
            }
            button.disabled = true;
        });

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                document.getElementById('question').innerHTML = `
                    <h2>Fim do Quiz!</h2>
                    <p>Sua pontuação: ${score} de ${questions.length}</p>
                `;
            }
        }, 1000);
    }

    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('option')) {
            const selectedIndex = parseInt(e.target.getAttribute('data-index'));
            checkAnswer(selectedIndex);
        }
    });

    loadQuestion(); 
});
