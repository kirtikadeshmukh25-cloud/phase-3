
    let questions = [
            {
                question: "What is the capital of France?",
                answers: [
                    { text: "Berlin", correct: false },
                    { text: "Madrid", correct: false },
                    { text: "Paris", correct: true },
                    { text: "Rome", correct: false }
                ]
            },
            {
                question: "Who was the first President of India?",
                answers: [
                    { text: "Jawaharlal Nehru", correct: false },
                    { text: "Rajendra Prasad", correct: true },
                    { text: "Sardar Patel", correct: false },
                    { text: "B. R. Ambedkar", correct: false }
                ]
            },
            {
                question: "Which planet is known as the 'Morning Star'?",
                answers: [
                    { text: "Mars", correct: false },
                    { text: "Venus", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Mercury", correct: false }
                ]
            },
            {
                question: "Which is the largest desert in the world?",
                answers: [
                    { text: "Sahara Desert", correct: false },
                    { text: "Arabian Desert", correct: false },
                    { text: "Antarctic Desert", correct: true },
                    { text: "Gobi Desert", correct: false }
                ]
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: [
                    { text: "Venus", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Saturn", correct: false }
                ]
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let wrong = 0;

        let questionEl = document.getElementById('question-text');
        let answerButtonsEl = document.getElementById('answer-buttons');
        let  nextButton = document.getElementById('next-btn');
        let  quizContainer = document.getElementById('quiz-container');
        let  resultScreen = document.getElementById('result-screen');

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            wrong = 0;
            
           
            resultScreen.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            
            showQuestion();
        }

        function showQuestion() {
            resetState();
            let currentQuestion = questions[currentQuestionIndex];
            questionEl.innerText = currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                let  button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('btn');

                if (answer.correct) {
                    button.dataset.correct = "true";
                }

                button.addEventListener('click', selectAnswer);
                answerButtonsEl.appendChild(button);
            });
        }

        function resetState() {
            nextButton.classList.add('hidden');
            answerButtonsEl.innerHTML = "";
        }

        function selectAnswer(e) {
            let selectedButton = e.target;
            let isCorrect = selectedButton.dataset.correct === "true";
            
            if (isCorrect) {
                selectedButton.classList.add('correct');
                score++;
            } else {
                selectedButton.classList.add('wrong');
                wrong++;
            }

          
            Array.from(answerButtonsEl.children).forEach(button => {
                button.disabled = true;
                if (button.dataset.correct === "true") {
                    button.classList.add('correct');
                }
            });

            
            if (questions.length > currentQuestionIndex + 1) {
                nextButton.classList.remove('hidden');
                nextButton.innerText = "Next Question";
            } else {
                nextButton.classList.remove('hidden');
                nextButton.innerText = "See My Results";
            }
        }

        nextButton.addEventListener('click', () => {
            if (questions.length > currentQuestionIndex + 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResults();
            }
        });

        function showResults() {
            quizContainer.classList.add('hidden');
            resultScreen.classList.remove('hidden');

            document.getElementById('final-score').innerHTML = `
                <p>✅ <strong>Correct:</strong> ${score}</p>
                <p>❌ <strong>Wrong:</strong> ${wrong}</p>
                <p>📊 <strong>Total:</strong> ${questions.length}</p>
            `;
        }

        startQuiz();


function showBackButton() {

    
    if (document.getElementById("back-btn")) return;

    let  backBtn = document.createElement("button");
    backBtn.id = "back-btn";
    backBtn.innerText = "Back ";

    backBtn.style.marginTop = "20px";
    backBtn.style.backgroundColor = "#007bff";
    backBtn.style.color = "white";
    backBtn.style.border = "none";
    backBtn.style.padding = "10px 20px";
    backBtn.style.borderRadius = "5px";
    backBtn.style.cursor = "pointer";
    backBtn.style.fontSize = "16px";

   
    backBtn.addEventListener("mouseover", () => {
        backBtn.style.backgroundColor = "#0056b3";
    });

    backBtn.addEventListener("mouseout", () => {
        backBtn.style.backgroundColor = "#007bff";
    });

  
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    
    document.getElementById("result-screen").appendChild(backBtn);
}


function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    document.getElementById('final-score').innerText =
        `${score} / ${questions.length}`;

    showBackButton(); 
}


