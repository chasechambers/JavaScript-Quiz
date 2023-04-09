var questions = document.querySelector('.question');
var startButton = document.querySelector('.start');
var resetButton = document.querySelector('.reset');
var answers = document.querySelector('.answer')
var timer = document.querySelector('.timer')
var btn = document.querySelector('.btn')
var startingTime = 60;
//START BUTTON

startButton.addEventListener('click', function() {
showQuestions();
showAnswers();
countdown();
});

//RESET BUTTON

resetButton.addEventListener('click', function() {
clearInterval(countdownClock);
timer.textContent = startingTime;
var startingTime = 60;
})

//QUESTION SECTION

var showQuestions = function() {
    document.querySelector('.question').textContent='This is a test question.'
};





//ANSWER SECTION

var answerList = ['a', 'b', 'c', 'd']
var showAnswers = function() {
    answerList.forEach((answer)=> {
        document.querySelector('.answer').textContent = answer;
    });
};

var answerElection = function(){

}


//TIMER SECTION

const countdownClock = setInterval(countdown, 1000);

function countdown() {
    timer.textContent=startingTime;
    startingTime--;
     if (startingTime < 1 ) {
         timer.textContent = 'PENCILS DOWN! 📝'
     };
    };

//HIGHSCORE SECTION
var highscore = function(){

}


// localStorage.getItem(finalScore);
// localStorage.setItem(finalScore, score)
