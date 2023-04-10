const questionArea = document.getElementById('question');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const answerA = document.getElementById('answerA');
const answerAText = document.getElementById('answerAText');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');
const timer = document.querySelector('.timer');
const btn = document.querySelector('.btn');
const fullTime = 60;
let remainingTime = fullTime;
let score = 0;
const penaltyTime = 5;

const questions = [
    {
        question:'Q1', answerKey:
        [
            {key: 'a', answer: 'text of answer', correct: true}, {answer: 'b', correct: false}, {answer: 'c', correct: false}, {answer: 'd', correct: false}
        ]
    },
    {
        question:'Q2', answerKey:
        [
            {answer: 'a', correct: true}, {answer: 'b', correct: false}, {answer: 'c', correct: false}, {answer: 'd', correct: false}
        ]
    }
]

const countdownClock = setInterval(countdown, 1000);

//START BUTTON
let questionIndex = 0;
startButton.addEventListener('click', function() {
showNextQuestion(questionIndex);
countdown();
});

//RESET BUTTON

resetButton.addEventListener('click', function() {
clearInterval(countdownClock);
timer.textContent = remainingTime;
})

//QUESTION SECTION

const showNextQuestion = (questionIndex) => {
    const question = questions[questionIndex];
    questionArea.textContent=question.question;
    answerA.textContent = question.answerKey[0].key;
    answerB.textContent = question.answerKey[1].key;
    answerC.textContent = question.answerKey[2].key;
    answerD.textContent = question.answerKey[3].key;
    answerAText.textContent = question.answerKey[0].answer;
};



const onAnswer = (name) => {
    // CHECK IF ANSWER IS CORRECT
    // QUESTIONINDEX IS CURRENT QUESTION - NAME IS THE ANSWER USER CHOSE FOR QUESTION
    const question = questions[questionIndex];
    const answers = question.answerKey;
    const answer = answers.find(({answer}) => answer === name);
    // ANSWER.CORRECT - ADD TO SCORE IF TRUE - DELETE FROM TIME IF FALSE - IF ELSE STATEMENT -- remaining time =- penaltyTime
    // GET NEXT QUESTION 
    questionIndex++;
    if (questionIndex >= questions.length) {  // ARE WE OUT OF QUESTIONS?
        console.log('done');                // REPLACE WITH SOMETHING BETTER
        clearInterval(countdownClock);
    } else {
        showNextQuestion(questionIndex); // NOT OUT OF QUESTIONS - GET NEXT QUESTION
    };
};

answerA.addEventListener('click', function(){
   onAnswer('a');
});
answerB.addEventListener('click', function(){
    onAnswer('b');
 });
 answerC.addEventListener('click', function(){
    onAnswer('c');
 });
 answerD.addEventListener('click', function(){
    onAnswer('d');
 });


//TIMER SECTION

function countdown() {
    timer.textContent=remainingTime;
    remainingTime--;
     if (remainingTime === 0 ) {
         timer.textContent = 'PENCILS DOWN! 📝';
         clearInterval(countdownClock);
         remainingTime = fullTime;
     };
    };

//HIGHSCORE SECTION
var highscore = function(){

}


// localStorage.getItem(finalScore);
// localStorage.setItem(finalScore, score)
