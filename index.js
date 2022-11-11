var readlineSync = require('readline-sync');

//  input 

var userName = readlineSync.question('Hey,What is your name? ');
console.log('Heyy ', userName, '!');

questionOne = {
  question: "Which Indian cricketer is also known as the “God of Cricket”?",
  answer: "Sachin Tendulkar"
}
questionTwo = {
  question: "How many times has India won the Cricket World Cup?",
  answer: "2"
}
questionThree = {
  question: "How many times has India won the Asia Cup?)",
  answer: "7"
}
questionFour = {
  question: "Who is the current Captain of the Indian National Men’s Cricket Team??",
  answer: "Rohit Sharma"
}
questionFive = {
  question: "When did India play its first Test match?",
  answer: "1932"
}

questionSix = {
  question: "Who has the most test runs without scoring a hundred",
  answer: "shane warne"
}
questionSeven = {
  question: "What was Sachin Tendulkar's highest score in all international cricket?",
  answer: "248"
}
listScorers = [
  {
    name: "Arjun",
    score: 7
  },
  {
    name: "Mahesh",
    score: 6
  },
  {
    name: "Pratik",
    score: 5
  },
  {
    name: "Vaibhav",
    score: 3
  }
]

questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

var score = 0;

for (let i = 0; i < questions.length; i++) {
  var receivedAns = readlineSync.question(questions[i].question + " ");
  if (receivedAns.toLowerCase() === questions[i].answer.toLowerCase()) {
    console.log("Correct!");
    score += 1
  }
  else {
    console.log('Wrong Answer! Correct answer is: ', questions[i].answer);

  }

}




console.log("============================")
console.log("Your total score: " + score);

console.log("============================")

function listScore() {
  console.log("list of score,ping me your score i will add");

  listScorers.map(score => console.log(score.name, "::", score.score))
}
listScore();
