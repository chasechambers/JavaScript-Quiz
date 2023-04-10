const questionArea = document.getElementById('question');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const answers = document.querySelector('.answer')
const timer = document.querySelector('.timer')
const btn = document.querySelector('.btn')
var startingTime = 10;

const questions = [
    {
        question:'Q', answerKey:
        [
            {answer: 'answer', correct: true}, {answer: 'answer', correct: false}, {answer: 'answer', correct: false}, {answer: 'answer', correct: false}
        ]
    },
    {
        question:'Q', answerKey:
        [
            {answer: 'answer', correct: false}, {answer: 'answer', correct: false}, {answer: 'answer', correct: true}, {answer: 'answer', correct: false}
        ]
    }
]

//START BUTTON

startButton.addEventListener('click', function() {
showQuestions();
showAnswers();
countdown();
});

//RESET BUTTON

resetButton.addEventListener('click', function() {
clearInterval(interval);
timer.textContent = startingTime;
var startingTime = 60;
})

//QUESTION SECTION

var showQuestions = function() {
    questions.textContent='This is a test question.'
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

const interval = setInterval(countdown, 1000);

function countdown() {
    timer.textContent=startingTime;
    startingTime--;
     if (startingTime === 0 ) {
         timer.textContent = 'PENCILS DOWN! 📝';
         clearInterval(interval);
     };

    };

//HIGHSCORE SECTION
var highscore = function(){

}


// localStorage.getItem(finalScore);
// localStorage.setItem(finalScore, score)
