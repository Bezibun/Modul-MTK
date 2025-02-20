const questions = [
    {
        question: "Dalam segitiga siku-siku ABC, dengan sudut siku-siku di B, diketahui AC=10 dan AB=5. Tentukan besar sudut ∠A dalam derajat.",
        options: ["⁡60∘", "⁡30∘", "⁡90∘", "⁡45∘"],
        answer: 0
    },
    {
        question: "Sebuah tangga sepanjang 20 meter disandarkan ke dinding, jika dinding memiliki ketinggian 10 meter. Tentukan sudut yang dibentuk tangga dengan tanah.",
        options: ["⁡60∘", "⁡30∘", "⁡90∘", "⁡45∘"],
        answer: 1
    },
    {
        question: "Sebuah tiang bendera memiliki tinggi 8 meter dan bayangannya 8 meter. Tentukan sudut elevasi matahari saat itu.",
        options: ["⁡60∘", "⁡30∘", "⁡90∘", "⁡45∘"],
        answer: 3
    },
    {
        question: "Dalam segitiga siku-siku, diketahui panjang sisi miring adalah 13 cm dan salah satu sisinya 5 cm. Tentukan besar nilai sin sudut yang berhadapan dengan sisi 5 cm.",
        options: ["5/13", "12/13", "13/5", "13/12"],
        answer: 0
    },
    {
        question: "Dalam segitiga siku-siku, panjang sisi alas adalah 7 cm dan tinggi 24 cm. Tentukan panjang sisi miringnya",
        options: ["1", "25", "3", "45"],
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
