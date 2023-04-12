// This section contains my DOM manipulation variables
const questionArea = document.getElementById('question-section');
const questionBox = document.getElementById('question-box');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const answerA = document.getElementById('answerA');
const answerAText = document.getElementById('answerAText');
const answerB = document.getElementById('answerB');
const answerBText = document.getElementById('answerBText');
const answerC = document.getElementById('answerC');
const answerCText = document.getElementById('answerCText');
const answerD = document.getElementById('answerD');
const answerDText = document.getElementById('answerDText');
const timer = document.getElementById('timer-number');
const btn = document.querySelector('.btn');
const answerBox = document.getElementById('answer-box');
const nextButton = document.getElementById('next-button');
let scoreTally = document.getElementById('current-score-number');

// This section has my global variables for functions

const fullTime = 60;
let remainingTime = fullTime;
let score = 0;
const penaltyTime = 5;




// const countdownClock = setInterval(countdown, 1000);


const questions = [
    {
        question:'What is JavaScript?', answerKey:
        [
            {key: 'A', answer: 'An object-oriented computer programming language', correct: true}, {key: 'B', answer: 'The successor to Java', correct: false}, {key: 'C', answer: 'How I like my coffee', correct: false}, {key: 'D', answer: 'A CSS API', correct: false}
        ]
    },
    {
        question:'Which of these is a boolean?', answerKey:
        [
            {key: 'A', answer: '"variable"', correct: true}, {key: 'B', answer: '8', correct: false}, {key: 'C', answer: 'true', correct: true}, {key: 'D', answer: '"8"', correct: false}
        ]
    },
    {
        question:'Which of these is an ID tag indicator in CSS?', answerKey:
        [
            {key: 'A', answer: '.id', correct: false}, {key: 'B', answer: '#id, correct: true'}, {key: 'C', answer: 'id', correct: false}, {key: 'D', answer: '$', correct: false}
        ]
    },
    {
        question:'Bootstrap was created by?', answerKey:
        [
            {key: 'A', answer: 'Facebook', correct: false}, {key: 'B', answer: 'MySpace', correct: false}, {key: 'C', answer: 'The Illuminati', correct: false}, {key: 'D', answer: 'Twitter', correct: true}
        ]
    }
]

//START BUTTON

let questionIndex = 0;
score
startButton.addEventListener('click', function() {
questionBox.setAttribute('class', 'show');
startButton.setAttribute('class', 'hide')
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
    answerA.innerText = question.answerKey[0].key;
    answerB.innerText = question.answerKey[1].key;
    answerC.innerText = question.answerKey[2].key;
    answerD.innerText = question.answerKey[3].key;
    answerAText.textContent = question.answerKey[0].answer;
    answerBText.textContent = question.answerKey[1].answer;
    answerCText.textContent = question.answerKey[2].answer;
    answerDText.textContent = question.answerKey[3].answer;
};

    // ANSWER.CORRECT - ADD TO SCORE IF TRUE - DELETE FROM TIME IF FALSE - IF ELSE STATEMENT -- remaining time =- penaltyTime
    // GET NEXT QUESTION 
    nextButton.addEventListener('click', function() {
        questionIndex++;
        nextButton.setAttribute('class', 'hide')
        answerBox.removeAttribute('class', 'correct-answer');
        answerBox.removeAttribute('class', 'wrong-answer');
    if (questionIndex >= questions.length) {  // ARE WE OUT OF QUESTIONS?
        console.log('done');                // REPLACE WITH SOMETHING BETTER
        clearInterval(countdownClock);
    } else {
        showNextQuestion(questionIndex); // NOT OUT OF QUESTIONS - GET NEXT QUESTION
    };
})
answerA.addEventListener('click', function(){
//    onAnswer('a');
   const question = questions[questionIndex];
   const answer = question.answerKey[0];
  
   if (answer.correct) {
    answerBox.setAttribute('class','correct-answer');
    score+=25;
    scoreTally.textContent = score;
    console.log(score);
   } else {
    answerBox.setAttribute('class','wrong-answer');
   }
   nextButton.setAttribute('class', 'show')
});
answerB.addEventListener('click', function(){
    // onAnswer('b');

    const question = questions[questionIndex];
   const answer = question.answerKey[1];
     
   if (answer.correct) {
    answerBox.setAttribute('class','correct-answer');
   } else {
    answerBox.setAttribute('class','wrong-answer');
   }
   nextButton.setAttribute('class', 'show')
});

 answerC.addEventListener('click', function(){
    // onAnswer('c');
    const question = questions[questionIndex];
    const answer = question.answerKey[2];
      
    if (answer.correct) {
        answerBox.setAttribute('class','correct-answer');
       } else {
        answerBox.setAttribute('class','wrong-answer');
       }
       nextButton.setAttribute('class', 'show')
    });
     
 answerD.addEventListener('click', function(){
    // onAnswer('d');
    const question = questions[questionIndex];
    const answer = question.answerKey[3];
      
    if (answer.correct) {
        answerBox.setAttribute('class','correct-answer');
       } else {
        answerBox.setAttribute('class','wrong-answer');
       }
       nextButton.setAttribute('class', 'show')
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
