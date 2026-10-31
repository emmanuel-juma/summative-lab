



const questions = [
    {
        id: 1,
        question: "What is the the capital city of france? ",
        options : ["A) Berlin", "B) Mars", "C) Jupiter", "D) Rome"],
        answer :"C",
        explanation:"Paris has been the capital of France since the 12th century.",
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet? ",
        options : ["A) VENUS","B) MARS","C) JUPITER","D) SATURN"],
        answer :"B",
        explanation: "Mars always appears red due to iron oxide (rust) on its surface.",
    },
    {
        id: 3,
        question: "What is the largest ocean on Earth ? ",
        options : ["A) Atlantic", "B) Indian", "C) Arctic", "D) Pacific"],
        answer :"D",
        explanation: "The Pacific Ocean covers more area than all of Earth's land combined.",
    },
    {
        id: 4,
        question: "What is the smallest prime number?",
        options : ["A) 0", "B) 1", "C) 2", "D) 3"],
        answer : "C",
        explanation: "2 is the only even prime number and the smallest prime.",
    },
]


const gameTime = 90 ;
let timeRemaining = gameTime ;
let timerInterval = null ;
let gameActive = false ;
let answersLog = [] ;
let score = 0 ;





