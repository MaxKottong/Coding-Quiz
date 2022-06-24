var questionListEl = document.querySelector("#question-list");
var divQuestionsEl = document.querySelector(".divQuestions");

var questions = [
    {
        question: "What is a question?",
        choices: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What is a question?",
        choices: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What is a question?",
        choices: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What is a question?",
        choices: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What is a question?",
        choices: ["1", "2", "3", "4"],
        answer: 2
    }
];

function displayQuestions() {
    var questionTitle = questions[i].question;
    var choice1 = questions[i].choices[0];
    var choice2 = questions[i].choices[1];
    var choice3 = questions[i].choices[2];
    var choice4 = questions[i].choices[3];

    var li1 = document.createElement("li");
    li1.setAttribute("class", "questionLi");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "questionBtn");
    btn1.textContent = choice1;
    li1.appendchild(btn1);
    questionListEl.appendchild(li1);
    divQuestionsEl.appendchild(questionListEl);

    var li2 = document.createElement("li");
    li2.setAttribute("class", "questionLi");
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "questionBtn");
    btn2.textContent = choice2;
    li2.appendchild(btn3);
    questionListEl.appendchild(li2);
    divQuestionsEl.appendchild(questionListEl);

    var li3 = document.createElement("li");
    li3.setAttribute("class", "questionLi");
    var btn3 = document.createElement("button");
    btn3.setAttribute("class", "questionBtn");
    btn3.textContent = choice3;
    li3.appendchild(btn3);
    questionListEl.appendchild(li3);
    divQuestionsEl.appendchild(questionListEl);

    var li4 = document.createElement("li");
    li4.setAttribute("class", "questionLi");
    var btn4 = document.createElement("button");
    btn4.setAttribute("class", "questionBtn");
    btn4.textContent = choice4;
    li4.appendchild(btn4);
    questionListEl.appendchild(li4);
    divQuestionsEl.appendchild(questionListEl);

    var li5 = document.createElement("li");
    li5.setAttribute("class", "questionLi");
    var btn5 = document.createElement("button");
    btn5.setAttribute("class", "questionBtn");
    btn5.textContent = choice5;
    li5.appendchild(btn5);
    questionListEl.appendchild(li5);
    divQuestionsEl.appendchild(questionListEl);

    var questionBtn = document.querySelector(".questionBtn")
    questionBtn.forEach(function(event) {
        event.addEventListener("click", buttonHandler)
    });
}

function buttonHandler(event) {

}
