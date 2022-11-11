
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
// set the timer to start on startbtn click. How to fix stopping the alert and going back to main page when OK is clicked. 
document.getElementById("start-btn").addEventListener("click",function() {
    var timeRemaining = 30
    setInterval(function(){
        document.getElementById("timer-seconds").innerHTML = timeRemaining-- + " seconds"
        if (timeRemaining <= 0) {
            clearInterval(timeRemaining)
            alert(`Quiz Failed! You ran out of time.`)
        }
    }, 1000)
},)

