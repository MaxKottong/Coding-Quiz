function highScore() {
    var yourInitials = localStorage.getItem("Initials");
    var yourScore = localStorage.getItem("Score");
    var highscoresPageEl = document.querySelector(".highscores-page");
    highscoresPageEl.style.visibility = "visible";
    var initialAndScore = document.querySelector("#get-scores");
    initialAndScore.value = yourInitials + ": " + yourScore;
}

function init() {
    location.reload();
}

function clearScores() {
    initialAndScore.value = "";
}
