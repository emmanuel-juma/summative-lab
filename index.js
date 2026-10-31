
const readline = require('readline');


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


let score = 0;
let timeLeft = 60;
let timer = null;

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer.trim().toUpperCase());
    });
  });
}


function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log("\n\n|||||||____Time's up!____||||||||");
      endGame();
    }
  }, 1000);
}


function endGame() {
  clearInterval(timer);
  console.log("\n========== GAME OVER ==========");
  console.log(`Your final score is====: ${score} / ${questions.length}`);
  console.log("||||||____Thanks for playing!____||||||||\n");
  rl.close();
  process.exit(0);
}


async function playGame() {
    console.log("=== CLI TRIVIA QUIZ ===");
    console.log("You have 60 seconds. Answer with A, B, C or D.\n");
    startTimer();
    // Loop through each question

    for (let i = 0; i < questions.length; i++) {
    
        if (timeLeft <= 0) break;   
        const q = questions[i];

    
        console.log(`\nQuestion ${i + 1} of ${questions.length} (Time left: ${timeLeft}s)`);   
        console.log(q.question);
    
        q.options.forEach(opt => console.log(opt));
    
        const userAnswer = await ask("\nYour answer: ");   
        if (userAnswer === q.answer) {    
            console.log("||||_______Correct!_______||||||");      
            score++;   
        } else {    
            console.log(`|||___Wrong! The correct answer was ${q.answer}___|||`);   
        }
  
    }

  
    endGame();
}
playGame();


