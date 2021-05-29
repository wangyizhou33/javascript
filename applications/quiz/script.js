const quizData = [
    {
        question: "Where are you from?",
        a: "Shanghai",
        b: "Suzhou",
        c: "Hangzhou",
        d: "Guangzhou",
        correct: "a",
    },
    {
        question: "How old are you ?",
        a: "20",
        b: "30",
        c: "40",
        d: "50",
        correct: "b",
    },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        console.log("answered");
        if (answer === quizData[currentQuiz].correct) {
            console.log("correct");
            ++score;
        }
        else {
            console.log("incorrect");
        }
    }

    ++currentQuiz;
    if (currentQuiz < quizData.length)
        loadQuiz();
    else
        quiz.innerHTML = `<h2> You answered correctly at ${score} / ${quizData.length} </h2>
                          <button onClick="location.reload()">Reload</button>  
        `;
})

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked)
            answer = answerEl.id;
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}