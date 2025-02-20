const questions = [
    {
        question: "Sebuah pesawat sedang terbang pada ketinggian 1.200 meter. Jika sudut depresinya ke sebuah kapal di permukaan laut adalah 30∘, tentukan jarak kemiringan antara pesawat dan kapal.",
        options: ["1.200", "2.400", "1.800", "3.600"],
        answer: 1
    },
    {
        question: "Seorang pengamat melihat puncak sebuah gedung yang memiliki tinggi 50 meter dengan sudut elevasi 45∘. Tentukan jarak antara pengamat dengan gedung tersebut.",
        options: ["10", "25", "50", "100"],
        answer: 2
    },
    {
        question: "Sebuah bukit memiliki kemiringan dengan sudut 30∘. Jika seseorang harus berjalan sejauh 200 meter mendaki kemiringan bukit untuk mencapai puncak bukit, tentukan ketinggian vertikal yang telah didaki.",
        options: ["100 meter", "200 meter", "300 meter", "400 meter"],
        answer: 3
    },
    {
        question: "Sebuah perahu berlayar dari pantai ke wilayah A sejauh 100 meter dengan sudut arah 60∘ dari garis pantai. Tentukan jarak mendatar perahu dari titik awal di pantai dengan wilayah A.",
        options: ["20", "30", "40", "50"],
        answer: 3
    },
    {
        question: "Sebuah drone terbang menaik dengan sudut elevasi 30∘ dari titik di tanah yang berjarak 150 meter dari titik lepas landasnya. Tentukan ketinggian drone dari tanah.",
        options: ["75", "150", "225", "300"],
        answer: 0
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
