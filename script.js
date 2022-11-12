
// Declare variables globally 
var startBtn = document.querySelector("#start-btn")
var questionContainer = document.querySelector("#question-container")
var wrongBtn = document.querySelector(".btn-wrong")
// Shows question one after clicking start btn 
startBtn.addEventListener("click",function() {
    if (questionContainer.style.display === "none") {
        questionContainer.style.display = "block"
    } else {
        questionContainer.style.display = "none"
    }
})
// shows question two afte clicking the correct answer 
var correctAnswerOneBtn = document.getElementById("btn-answer-one")
var questionContainerTwo = document.getElementById("question-container-two")
correctAnswerOneBtn.addEventListener("click",function() {
    if (questionContainerTwo.style.display === "none") {
        questionContainerTwo.style.display = "block"
    } else {
        questionContainerTwo.style.display = "none"
    }
})
// shows question three after clicking the correct answer 
var correctAnswerTwoBtn = document.getElementById("btn-answer-two")
var questionContainerThree = document.getElementById("question-container-three")
correctAnswerTwoBtn.addEventListener("click",function() {
    if (questionContainerThree.style.display === "none") {
        questionContainerThree.style.display = "block"
    } else {
        questionContainerThree.style.display = "none"
    }
})
// shows question four after clicking the correct answer 
var correctAnswerThreeBtn = document.getElementById("btn-answer-three")
var questionContainerFour = document.getElementById("question-container-four")
correctAnswerThreeBtn.addEventListener("click",function() {
    if (questionContainerFour.style.display === "none") {
        questionContainerFour.style.display = "block"
    } else {
        questionContainerFour.style.display = "none"
    }
})

// displays Initials box and save button after 4th Q is clicked
var saveBtn = document.getElementById("save")
var initials = document.getElementById("initials") 
var correctAnswerFourBtn = document.getElementById("btn-answer-four")
correctAnswerFourBtn.addEventListener("click", function(){
    if (saveBtn.style.display === "none"){
        saveBtn.style.display = "block"
    } else {
        saveBtn.style.display = "none"
    }
})


// set the timer to start on startbtn click. 
document.getElementById("start-btn").addEventListener("click",function() {
    var timeRemaining = 45
    setInterval(function(){
        document.getElementById("timer-seconds").innerHTML = timeRemaining-- + " seconds"
        if (timeRemaining <= 0) {
            clearInterval(timeRemaining)
            alert(`Quiz Failed! You ran out of time.`)
        }
    }, 1000)
    // This does not currently work. Need to figure out how to decrement time on click event 
    // wrongBtn.addEventListener("click",function() {
    //     timeRemaining -= 5
    //     document.getElementById("timer-seconds").innerHTML = timeRemaining-- + " seconds"
    // })
},)

// Decrease score when the wrong btn is clicked. How to decrement timer more than one second. 
var scoreNumber = document.getElementById("score-number")
var results = 100
var timeRemaining = 45
function incorrect() {
    document.getElementById("score-number").innerHTML = results--
    document.getElementById("timer-seconds").innerHTML = timeRemaining-- + " seconds"
    if (timeRemaining <= 0) {
        timeRemaining = 0 
    }
}

// Increase score when correct btn is clicked 
function correct() {
    document.getElementById("score-number").innerHTML = results ++
}