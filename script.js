
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
const saveButtonGroup = document.getElementById('save-button-group');
const saveButton = document.getElementById('save-button');
const quizOver = document.getElementById('quiz-over-box');
const finalScore = document.getElementById('final-score')
const highscoreNumber = document.getElementById('high-score-number');
const highscoreName = document.getElementById('high-score-name');
const input = document.getElementById('input');
const finalScoreMessage = document.getElementById('final-score-message')
const fullTime = 30;
const penaltyTime = 5;

// This section has my variables for functions
let scoreTally = document.getElementById('current-score-number');
let highScore = localStorage.getItem('highScore') || 0;
highscoreName.textContent = localStorage.getItem('name');
let remainingTime = fullTime;
let score = 0;
let countdown;


//TIMER SECTION

function countdownFunction() {
    countdown = setInterval(function() {
        timer.textContent=remainingTime;
        remainingTime--;
            if (remainingTime < 0) {
                timer.textContent = "Pencils down! 📝";
                clearInterval(countdown);
                questionBox.style.display = "none";
                quizOver.style.display = "initial";
                saveButtonGroup.style.display = "initial";
                finalScore.textContent = score;
    }

}, 1000);
};

// START BUTTON

let questionIndex = -1;
startButton.addEventListener('click', function() {
    questionBox.style.display = "initial";
    startButton.style.display = "none"; 
    resetButton.style.display = "initial";
    showNextQuestion();
    countdownFunction();
});

// RESET BUTTON

resetButton.addEventListener('click', function() {
    location.reload() 
});

// QUESTIONS AND ANSWERS

const questions = [
    {
        question:'What is JavaScript?', 
        answerKey: [
            {key: 'A', answer: 'An object-oriented computer programming language', correct: true}, 
            {key: 'B', answer: 'The successor to Java', correct: false}, 
            {key: 'C', answer: 'How I like my coffee', correct: false}, 
            {key: 'D', answer: 'A CSS API', correct: false}
        ]
    },
    {
        question:'Which of these is a boolean?', 
        answerKey: [
            {key: 'A', answer: '"variable"', correct: false}, 
            {key: 'B', answer: '8', correct: false}, 
            {key: 'C', answer: 'true', correct: true}, 
            {key: 'D', answer: '"8"', correct: false}
        ]
    },
    {
        question:'Which of these is an ID tag indicator in CSS?', 
        answerKey: [
            {key: 'A', answer: '.id', correct: false}, 
            {key: 'B', answer: '#id', correct: true}, 
            {key: 'C', answer: 'id', correct: false}, 
            {key: 'D', answer: '$', correct: false}
        ]
    },
    {
        question:'Bootstrap was created by?', 
        answerKey: [
            {key: 'A', answer: 'Facebook', correct: false}, 
            {key: 'B', answer: 'MySpace', correct: false}, 
            {key: 'C', answer: 'The Illuminati', correct: false}, 
            {key: 'D', answer: 'Twitter', correct: true}
        ]
    }
];

// SHOW NEXT QUESTION FUNCTION - STARTS AT -1 AND THEN PROGRESSES UNTIL OUT OF QUESTIONS

const showNextQuestion = () => {
    questionIndex++;
        if (questionIndex >= questions.length) {  // ARE WE OUT OF QUESTIONS?
            questionBox.style.display = "none";
            quizOver.style.display = "initial";
            saveButtonGroup.style.display = "initial";
            finalScore.textContent = score;
            clearInterval(countdown);
        } else { 
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
    }
};

// ANSWER BUTTONS

function addUpScore(keyIndex) {
    const question = questions[questionIndex];
    const answer = question.answerKey[keyIndex];
    if (answer.correct) {
        score+=25; 
    } else {
        remainingTime -= penaltyTime;
    }
    scoreTally.textContent = score;
    remainingTime.textContent;
    showNextQuestion();
};

answerA.addEventListener('click', function(){addUpScore(0)});
answerB.addEventListener('click', function(){addUpScore(1)});
answerC.addEventListener('click', function(){addUpScore(2)});
answerD.addEventListener('click', function(){addUpScore(3)});

// HIGHSCORE AND SAVE BUTTON SECTION

highscoreNumber.textContent=highScore;

saveButton.addEventListener('click', function() {
    // If the user has more points than the currently stored high score then
    if (score > highScore) {
        highScore = parseInt(score);
        finalScoreMessage.textContent = "You got a new highscore!"
      // Store the high score
        localStorage.setItem('name', input.value);
        localStorage.setItem('highScore', highScore);
    //   localStorage.setItem('name', )
        highscoreName.textContent = input.value;
        highscoreNumber.textContent = highScore;
    
    } else {
        finalScoreMessage.textContent = "You did not set a new highscore. Try again!"
    }
    return highScore;
        });