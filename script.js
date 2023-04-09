var questions = document.querySelector('.question');
var startButton = document.querySelector('.start');
var resetButton = document.querySelector('.reset');
var answers = document.querySelector('.answer')
var timer = document.querySelector('.timer')


// START BUTTON STARTS TIMER AND QUIZ

var timeRemaining = 60;
// var countdown = setInterval(function() {
//     clearInterval(countdown);    
//     timeRemaining--;
//    timer.textContent = timeRemaining;
//     if (timeRemaining < 1) {
//       clearInterval();
//          timer.textContent = 'PENCILS DOWN!'
//        }
//     }, 1000);

var questionsList = [
    {quizAnswer: 'Correct', correct: true},
    {quizAnswer: 'Incorrect', correct: false},
    {quizAnswer: 'Incorrect', correct: false},
    {quizAnswer: 'Incorrect', correct: false}
    ];



   startButton.addEventListener('click', function(){
     document.querySelector('.question-box').style.display ='block';
    // questionsList.forEach((answer) => {
    //     answers.textContent=answer.quizAnswer;
 questionsList.forEach(i => {
    var button = document.createElement("button");
    button.innerText = i.quizAnswer;
    answers.appendChild(button);
 })
});

// RESET BUTTON RESETS QUIZ BACK TO ZERO
resetButton.addEventListener('click', function(){
    document.querySelector('.question-box').style.display ='none';
    clearInterval(countdown);
    timer.textContent = 60;
    });

// HIGHSCORE TABLE HOLDS SCORE AND INITIALS - MOVES INFO DEPENDING ON SCORE PLACEMENT


// QUESTIONS AND ANSWERS

answers.addEventListener('click', function(){
    if(questionsList.correct === true) {
        console.log("That's right");
    } else {
        console.log("That's not right");
    }
})