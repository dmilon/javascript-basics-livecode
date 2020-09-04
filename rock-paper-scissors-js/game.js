// const hands = ['rock', 'paper', 'scissors']

// // The computer picks a hand
// const computerHand = hands[Math.floor(Math.random() * hands.length)]

// // The user picks a hand
// const playerHand = 'rock'
// console.log(`You chose ${playerHand}.`)

// if (computerHand === playerHand) {
//   console.log(`You both chose ${computerHand}, draw.`)
// } else {
//   let playerWins

//   if (computerHand === 'rock') {
//     playerWins = playerHand === 'paper'
//   } else if (computerHand === 'paper') {
//     playerWins = playerHand === 'scissors'
//   } else if (computerHand === 'scissors') {
//     playerWins = playerHand === 'rock'
//   }

//   if (playerWins) {
//     console.log(`The computer chose ${computerHand}, you win!`)
//   } else {
//     console.log(`The computer chose ${computerHand}, computer wins!`)
//   }
// }

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
