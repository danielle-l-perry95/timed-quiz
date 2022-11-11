
// Shows question one after clicking start btn 
var startBtn = document.querySelector("#start-btn")
var questionContainer = document.querySelector("#question-container")
startBtn.addEventListener("click",function() {
    if (questionContainer.style.display === "none") {
        questionContainer.style.display = "block"
    } else {
        questionContainer.style.display = "none"
    }
})