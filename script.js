
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

var correctAnswerOneBtn = document.getElementById("btn-answer-one")
var questionContainerTwo = document.getElementById("question-container-two")
correctAnswerOneBtn.addEventListener("click",function() {
    if (questionContainerTwo.style.display === "none") {
        questionContainerTwo.style.display = "block"
    } else {
        questionContainerTwo.style.display = "none"
    }
})

var correctAnswerTwoBtn = document.getElementById("btn-answer-two")
var questionContainerThree = document.getElementById("question-container-three")
correctAnswerTwoBtn.addEventListener("click",function() {
    if (questionContainerThree.style.display === "none") {
        questionContainerThree.style.display = "block"
    } else {
        questionContainerThree.style.display = "none"
    }
})



// set the timer to start on startbtn click. How to fix stopping the alert and going back to main page when OK is clicked. 
// document.getElementById("start-btn").addEventListener("click",function() {
//     var timeRemaining = 30
//     setInterval(function(){
//         document.getElementById("timer-seconds").innerHTML = timeRemaining-- + " seconds"
//         if (timeRemaining <= 0) {
//             clearInterval(timeRemaining)
//             alert(`Quiz Failed! You ran out of time.`)
//         }
//     }, 1000)
// },)
// displays question two when correct answer is clicked

// create objects for the questions 
// var questions = [
//     { 
//         title:"Question One",
//         question: "What does JSON stand for?",
//         answer: "Javascript object notation",
//         choices: [ "Javascript operating numbers","Javascript object notation","Javascript object numberator","Javascript open navigation"]
//     },
//     {
//         title: "Question Two",
//         question: "What is a variable?",
//         answer: "containers for storing data",
//         choices: ["containers for storing data","independent and dependent","a function","a for loop"]
//     },
//     {
//         title: "Question Three",
//         question: "An array is surrounded by what?",
//         answer: `[]`,
//         choices: [`{}`,`()`,`[]`,`""`]
//     },
//     {
//         title: "Question Four",
//         question: "What are three ways to declare a variable?",
//         answer: "let, const, and var",
//         choices: ["a, b, and c","let, const, and var","x, y, and z", "dependent and independent"]
//     }
// ]

