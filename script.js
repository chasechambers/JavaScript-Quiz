
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
const saveButton = document.getElementById('save-button');
const quizOver = document.getElementById('quiz-over-box');
const finalScore = document.getElementById('final-score')
const highscoreNumber = document.getElementById('high-score-number');
let scoreTally = document.getElementById('current-score-number');

// This section has my global variables for functions

const fullTime = 30;
let remainingTime = fullTime;
let score = 0;
const penaltyTime = 5;
var countdown;
highscoreNumber.textContent=highScore;
//TIMER SECTION


function countdownFunction() {
    countdown = setInterval(function() {
        timer.textContent=remainingTime;
    remainingTime--;
    if (remainingTime < 0) {
        timer.textContent = "Pencils down! 📝";
        clearInterval(countdown);
        nextButton.style.display = "none";
        questionBox.style.display = "none";
        quizOver.style.display = "initial";
        nextButton.style.display = "none";
        saveButton.style.display = "initial";
        finalScore.textContent = score;
    }

}, 1000);
};


// START BUTTON

let questionIndex = 0;
startButton.addEventListener('click', function() {
questionBox.style.display = "initial";
startButton.style.display = "none"; 
resetButton.style.display = "initial";
nextButton.style.display = "initial";
showNextQuestion(questionIndex);
countdownFunction();
});

// RESET BUTTON

resetButton.addEventListener('click', function() {
    // clearInterval(countdown);
    // timer.textContent = fullTime;
    // startButton.style.display = "initial";
    // questionBox.style.display = "none";
    // nextButton.style.display = "none";
    // scoreTally.textContent = highScore;
    // quizOver.style.display = "none";
    // saveButton.style.display = "none";
    // resetButton.style.display = "none";
    // questionIndex = 0;
    location.reload() 
});

// NEXT BUTTON - GET NEXT QUESTION OR STOP

    nextButton.addEventListener('click', function() {
        questionIndex++;
        nextButton.style.display = "none";
        answerBox.style.backgroundColor = "lightblue";
        
            if (questionIndex >= questions.length) {  // ARE WE OUT OF QUESTIONS?
                nextButton.style.display = "none";
                questionBox.style.display = "none";
                quizOver.style.display = "initial";
                nextButton.style.display = "none";
                saveButton.style.display = "initial";
                finalScore.textContent = score;
            } else { 
        showNextQuestion(questionIndex); // NOT OUT OF QUESTIONS - GET NEXT QUESTION
    };
});

saveButton.addEventListener('click', function() {
// If the user has more points than the currently stored high score then
if (score > highScore) {
  highScore = parseInt(score);
  // Store the high score
  localStorage.setItem('highScore', highScore);
}
return highScore;
    });


// QUESTIONS AND ANSWERS

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
            {key: 'A', answer: '"variable"', correct: false}, {key: 'B', answer: '8', correct: false}, {key: 'C', answer: 'true', correct: true}, {key: 'D', answer: '"8"', correct: false}
        ]
    },
    {
        question:'Which of these is an ID tag indicator in CSS?', answerKey:
        [
            {key: 'A', answer: '.id', correct: false}, {key: 'B', answer: '#id', correct: true}, {key: 'C', answer: 'id', correct: false}, {key: 'D', answer: '$', correct: false}
        ]
    },
    {
        question:'Bootstrap was created by?', answerKey:
        [
            {key: 'A', answer: 'Facebook', correct: false}, {key: 'B', answer: 'MySpace', correct: false}, {key: 'C', answer: 'The Illuminati', correct: false}, {key: 'D', answer: 'Twitter', correct: true}
        ]
    }
]



// QUESTION SECTION

const showNextQuestion = (questionIndex) => {
    const question = questions[questionIndex];
    questionArea.textContent = question.question;
    answerA.innerText = question.answerKey[0].key;
    answerB.innerText = question.answerKey[1].key;
    answerC.innerText = question.answerKey[2].key;
    answerD.innerText = question.answerKey[3].key;
    answerAText.textContent = question.answerKey[0].answer;
    answerBText.textContent = question.answerKey[1].answer;
    answerCText.textContent = question.answerKey[2].answer;
    answerDText.textContent = question.answerKey[3].answer;
};

// STOPS USER FROM CLICKING TO INCREASE SCORE/DECREASE TIME
var addUpScoreA = () => {
    const question = questions[questionIndex];
    const answer = question.answerKey[0];
    if (answer.correct) {
        score+=25; 
    } else {
        remainingTime-=penaltyTime;
    }
    scoreTally.textContent = score;
    remainingTime.textContent;
};

var addUpScoreB = () => {
    const question = questions[questionIndex];
    const answer = question.answerKey[1];
    if (answer.correct) {
        score+=25; 
    } else {
        remainingTime-=penaltyTime;
    }
    scoreTally.textContent = score;
    remainingTime.textContent;
};

var addUpScoreC = () => {
    const question = questions[questionIndex];
    const answer = question.answerKey[2];
    if (answer.correct) {
        score+=25; 
    } else {
        remainingTime-=penaltyTime;
    }
    scoreTally.textContent = score;
    remainingTime.textContent;
};

var addUpScoreD = () => {
    const question = questions[questionIndex];
    const answer = question.answerKey[3];
    if (answer.correct) {
        score+=25; 
    } else {
        remainingTime-=penaltyTime;
    }
    scoreTally.textContent = score;
    remainingTime.textContent;
};


answerA.addEventListener('click', addUpScoreA, {once: true});
answerB.addEventListener('click', addUpScoreB, {once: true});
answerC.addEventListener('click', addUpScoreC, {once: true});
answerD.addEventListener('click', addUpScoreD, {once: true});



// ANSWER BUTTONS

answerA.addEventListener('click', function(){
   const question = questions[questionIndex];
   const answer = question.answerKey[0];
  
   if (answer.correct) {
    answerBox.style.backgroundColor = "green";
   } else {
    answerBox.style.backgroundColor = "red";
}
    nextButton.style.display = "initial";
});



answerB.addEventListener('click', function(){
    const question = questions[questionIndex];
    const answer = question.answerKey[1];
    if (answer.correct) {
        answerBox.style.backgroundColor = "green";
       } else {
        answerBox.style.backgroundColor = "red";
    }
        nextButton.style.display = "initial";
    });

 answerC.addEventListener('click', function(){
    const question = questions[questionIndex];
    const answer = question.answerKey[2];
      
    if (answer.correct) {
        answerBox.style.backgroundColor = "green";
       } else {
        answerBox.style.backgroundColor = "red";
    }
    nextButton.style.display = "initial";
    });
     
 answerD.addEventListener('click', function(){
    // onAnswer('d');
    const question = questions[questionIndex];
    const answer = question.answerKey[3];
      
    if (answer.correct) {
        answerBox.style.backgroundColor = "green";
       } else {
        answerBox.style.backgroundColor = "red";
    }
    nextButton.style.display = "initial";
    });


// HIGHSCORE SECTION

var highScore = localStorage.getItem('highScore') || 0;