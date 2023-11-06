const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Transfer Markup Language",
        b: "HyperText Markup Language",
        c: "High-Level Text Markup Language",
        d: "Hyperlink and Text Markup Language",
        correct: "b",
    },
    {
        question: "What is the purpose of a constructor in object-oriented programming?",
        a: "To destroy objects",
        b: "To initialize objects",
        c: "To hide data",
        d: "To perform arithmetic operations",
        correct: "b",
    },
    {
        question: "What does the acronym HTTP stand for?",
        a: " HyperText Transmission Protocol",
        b: "HyperText Transfer Protocol",
        c: "Hyper Transfer Text Protocol",
        d: "High-Level Transfer Protocol",
        correct: "a",
    },
    {
        question: "In Python, which keyword is used to define a function?",
        a: "define",
        b: "func",
        c: "function",
        d: "def",
        correct: "d",
    },
    {
        question: "In JavaScript, which method is used to add new elements to the end of an array?",
        a: "append()",
        b: "add()",
        c: " push()",
        d: "insert()",
        correct: "c",
    },
];


const quiz = document.getElementById("quiz");
const answerELS = document.querySelectorAll(".answer");
const questionELs = document.getElementById("question");
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const btn = document.getElementById("submit");



let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionELs.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerELS.forEach((answerEL) => {
        if (answerEL.checked) {
            answer = answerEL.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerELS.forEach((answerEL) => {
        answerEL.checked = false;
    });
}


btn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer === quizData[currentQuiz].correct)
        score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick = "location.reload()">Reload</button>
        `
    }

});