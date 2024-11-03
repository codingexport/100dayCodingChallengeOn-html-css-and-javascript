const Quizdata = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}];

let index = 0;
const optionInput = document.querySelectorAll(".option");
let total = Quizdata.length;
let right = 0, wrong = 0;

const QuestionLoading = () => {
    if (index >= total) {
        return endQuiz();
    }
    reset();
    const data = Quizdata[index];
    document.getElementById("questionBox").innerText = `${index + 1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = Quizdata[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    QuestionLoading();
};

const getAnswer = () => {
    let answer;
    optionInput.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInput.forEach(input => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3>Thank you for playing the quiz!</h3>
        <p>Your score: ${right} right, ${wrong} wrong</p>
    
    `;
};

QuestionLoading();
