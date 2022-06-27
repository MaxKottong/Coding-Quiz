var homepageTimeEl = document.querySelector("#homepage-time");
var containerEl = document.querySelector(".container");
var startQuizBtnEl = document.querySelector("#start-quiz-btn");
var divQuestionsEl = document.querySelector(".div-questions");
var titleEl = document.querySelector("#title");
var questionListEl = document.querySelector("#question-list");
var answerResponseEl = document.querySelector("#answer-response");
var allDoneEl = document.querySelector(".all-done");
var scoreEl = document.querySelector("#score");
var submitBtnEl = document.querySelector("#submit-btn");

var i = 0;

var timer = 61;
var timerCount;

allDoneEl.style.visibility = "hidden";

function addTimer() {
    timerCount = setInterval(function() {
        timer--;
        var timerReset = homepageTimeEl.textContent = "Time: " + timer;
        if (timer <= 0) {
            clearInterval(timerCount);
            homepageTimeEl.textContent = timerReset;
        }
    }, 1000);
}

document.addEventListener("click", function(event) {
    if (event.target === startQuizBtnEl) {
        containerEl.style.visibility = "hidden";
        allDoneEl.style.visibility = "hidden";
        addTimer();
        displayQuestions();
    }
});

function buttonHandler(event) {
    if (timer <= 0) {
        clearInterval(timerCount);
        containerEl.style.visibility = "hidden";
        showScore();
    }
    var answerChoice = event.target.textContent;
    if (answerChoice === questions[i].answer) {
        answerResponseEl.setAttribute("style", "color: green");
        answerResponseEl.textContent = "Correct";
    } else {
        answerResponseEl.setAttribute("style", "color: red");
        answerResponseEl.textContent = "Incorrect";
        timer = timer - 10;
    }

    if (i < questions.length - 1) {
        i++;
        setTimeout(function () {
            displayQuestions();
            answerResponseEl.textContent = "";
        }, 1000);
    } else {
        setTimeout(function () {
            answerResponseEl.textContent = "";
            showScore();
            clearInterval(timerCount);
        }, 500);
    }

    function showScore() {
        allDoneEl.style.visibility = "visible";
        homepageTimeEl.textContent = "Time: " + timer;
        var displayScore = timer;
        scoreEl.textContent = "Your score is: " + displayScore;
        localStorage.setItem("Score", displayScore);
    }
};

var questions = [
    {
        question: "What is the correct way to append an element?",
        choices: ["appendChild();", "AppendChild();", "appendchild();", "appendChild;"],
        answer: "appendChild();"
    },
    {
        question: "How do you select an element from an HTML page?",
        choices: ["document.select('');", "Document.QuerySelector('');", "document.querySelector('');", "querySelector('');"],
        answer: "document.querySelector('');"
    },
    {
        question: "",
        choices: ["", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "How many in a quad?",
        choices: ["1", "2", "3", "4"],
        answer: "4"
    },
    {
        question: "How many (1)?",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    }
];

function displayQuestions() {
    var questionTitle = questions[i].question;
    titleEl.textContent = questionTitle;
    var choice1 = questions[i].choices[0];
    var choice2 = questions[i].choices[1];
    var choice3 = questions[i].choices[2];
    var choice4 = questions[i].choices[3];

    questionListEl.innerHTML = "";

    var li1 = document.createElement("li");
    li1.setAttribute("class", "questionLi");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "questionBtn");
    btn1.textContent = choice1;
    li1.appendChild(btn1);
    questionListEl.appendChild(li1);
    divQuestionsEl.appendChild(questionListEl);

    var li2 = document.createElement("li");
    li2.setAttribute("class", "questionLi");
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "questionBtn");
    btn2.textContent = choice2;
    li2.appendChild(btn2);
    questionListEl.appendChild(li2);
    divQuestionsEl.appendChild(questionListEl);

    var li3 = document.createElement("li");
    li3.setAttribute("class", "questionLi");
    var btn3 = document.createElement("button");
    btn3.setAttribute("class", "questionBtn");
    btn3.textContent = choice3;
    li3.appendChild(btn3);
    questionListEl.appendChild(li3);
    divQuestionsEl.appendChild(questionListEl);

    var li4 = document.createElement("li");
    li4.setAttribute("class", "questionLi");
    var btn4 = document.createElement("button");
    btn4.setAttribute("class", "questionBtn");
    btn4.textContent = choice4;
    li4.appendChild(btn4);
    questionListEl.appendChild(li4);
    divQuestionsEl.appendChild(questionListEl);

    var questionBtn = document.querySelectorAll(".questionBtn");
    questionBtn.forEach(function(event) {
        event.addEventListener("click", buttonHandler);
    });
}

document.addEventListener("submit", function(event) {
    event.preventDefault(); 
    var initialsEl = document.querySelector("#initial-input").value;

    if (initialsEl.value === "") {
        alert("Please put in your initials");
    } else {
        localStorage.setItem("Initials", initialsEl)
        highScore();
    }
});

