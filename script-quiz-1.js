const questions = [
    {
        question: "Hitung nilai dari sin30∘",
        options: ["1/5", "1/3", "1/2", "1"],
        answer: 2
    },
    {
        question: "Berapakah nilai dari cos ⁡60∘?",
        options: ["1/4", "1", "1/2", "√3/2"],
        answer: 2
    },
    {
        question: "Jika tan 45∘ = x, maka nilai x adalah",
        options: ["0", "1", "2", "3"],
        answer: 1
    },
    {
        question: "Hitunglah nilai dari sin 90∘",
        options: ["0", "1", "2", "3"],
        answer: 1
    },
    {
        question: "jika cos 0∘ = y, berapakah nilai y?",
        options: ["0", "1", "2", "3"],
        answer: 1
    },
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

    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of 5`;
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
