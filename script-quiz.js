const questions = [
    {
        question: "Berapa hasil dari 2x + 5x?",
        options: ["3x", "5x", "7x", "7"],
        answer: 2
    },
    {
        question: "Berapa hasil dari 24y + 10y?",
        options: ["24y", "10y", "34y", "34yy"],
        answer: 2
    },
    {
        question: "Manakah yang bukan termasuk variabel dari 6x + 3y + 2",
        options: ["x", "y", "x dan y", "6 dan 3"],
        answer: 3
    },
    {
        question: "Manakah yang termasuk koefisien dari 6x + 3y + 2",
        options: ["x", "6", "y", "x dan y"],
        answer: 1
    },
    {
        question: "Manakah yang tidak termasuk koefisien dari 5x + 2y + 12",
        options: ["12", "2", "5", "5 dan 2"],
        answer: 0
    },
    {
        question: "Manakah yang termasuk konstanta dari 2x + 18y + 32",
        options: ["x", "2", "32", "x dan y"],
        answer: 2
    },
    {
        question: "Manakah yang termasuk koefisien dari 8x + 10y + 20",
        options: ["x", "10", "y", "20"],
        answer: 1
    },
    {
        question: "Manakah yang termasuk variabel dari x + 5y + 2",
        options: ["2", "5", "5 dan 2", "x dan y"],
        answer: 3
    },
    {
        question: "Manakah yang termasuk konstanta 6x + 3y + 2?",
        options: ["x dan y", "6 dan 3", "2", "6 dan y"],
        answer: 2
    },
    {
        question: "Berapa hasil dari 2x + 5y - x + 2y?",
        options: ["x + 7y", "3x + 5y", "x - 5y", "3x + 7y"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionCounter = document.getElementById("question-counter");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of 10`;
    questionText.textContent = questions[currentQuestionIndex].question;

    optionsContainer.querySelectorAll(".option-btn").forEach((btn, index) => {
        btn.textContent = questions[currentQuestionIndex].options[index];
        btn.disabled = false;
        btn.style.backgroundColor = "#007bff";
    });

    nextBtn.style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].answer;
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    // Ambil elemen audio
    const correctSound = document.getElementById("correct-sound");
    const incorrectSound = document.getElementById("incorrect-sound");

    if (selectedOption === correctOption) {
        correctAnswers++;
        optionsContainer.children[selectedOption].style.backgroundColor = "green";
        correctSound.play(); // Mainkan suara benar
    } else {
        incorrectAnswers++;
        optionsContainer.children[selectedOption].style.backgroundColor = "red";
        optionsContainer.children[correctOption].style.backgroundColor = "green";
        incorrectSound.play(); // Mainkan suara salah
    }

    optionsContainer.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
    });

    nextBtn.style.display = "block";
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    const totalQuestions = questions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    document.getElementById("correct-answers").textContent = correctAnswers;
    document.getElementById("incorrect-answers").textContent = incorrectAnswers;
    document.getElementById("score-percentage").textContent = scorePercentage.toFixed(2);
}
