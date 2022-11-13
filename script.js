
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
// shows question two after clicking the correct answer 
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
// Displays footer container after 4th question is answered correctly
var lastBtn = $('#btn-answer-four').on('click',function(){
    $('.footer').show()
})

// set the timer to start on startbtn click. 
var timerSeconds = document.getElementById("timer-seconds")
document.getElementById("start-btn").addEventListener("click",function() {
    var timeRemaining = 45
    setInterval(function(){
        document.getElementById("timer-seconds").innerHTML = timeRemaining-- + " seconds"
        if (timeRemaining <= 0) {
            clearInterval(timeRemaining)
            alert(`Quiz Failed! You ran out of time.`)
        }
        // Timer stops once the 4th question has been answered 
        document.getElementById("btn-answer-four").addEventListener("click",function(){
            clearInterval(timeRemaining)
            timeRemaining = setInterval(function(){
                timeRemaining = 45
                timerSeconds.innerHTML = timeRemaining
            })
        })
    }, 1000)
},)

// Decrease score when the wrong btn is clicked. Decreases timer when wrong btn is clicked. 
var scoreNumber = document.getElementById("score-number")
var results = 100
var timeRemaining = 45
function incorrect() {
    document.getElementById("score-number").innerHTML = results--
    timeRemaining = timeRemaining - 5
    document.getElementById("timer-seconds").innerHTML = timeRemaining + " seconds"
    preventDefault(timeRemaining)
    // if (timeRemaining <= 0) {
    //     clearInterval(timeRemaining)
    // }
}

// Increase score when correct btn is clicked 
function correct() {
    document.getElementById("score-number").innerHTML = results ++
}


// Saving the initials and score.This also does not work. 
var scoreNumber = document.getElementById("score-number")
var initials =  document.getElementById("initials")
var saveBtn = document.getElementById("save")
var savedScore = document.getElementById("saved-score")
var savedInitials = document.getElementById("saved-initials")

function createSave() {
 var userData = {
    score: score.value,
    initials: initials.value
};
localStorage.setItem("userData",JSON.stringify(userData))
renderMessage();
};
function renderMessage() {
    var previousUserData = JSON.parse(localStorage.getItem("userData"));
    if (previousUserData !== null) {
        document.getElementById("saved-score").innerHTML = previousUserData.score
        document.getElementById("saved-initials").innerHTML = previousUserData.initials
    } else {
        return;
    }
}

saveBtn.addEventListener("click", function(e) {
    e.preventDefault()
    createSave()
    renderMessage()
})
function init() {
    createSave()
}
init()

