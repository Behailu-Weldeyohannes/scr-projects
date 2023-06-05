/*
// generate a random integer between 2 and 11, inclusive.
let firstCard = Math.floor(Math.random() * (11- 2 +1 )) + 2
// let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

const sum = firstCard + secondCard

console.log(sum);

if(sum < 21){
    console.log("Do you want to draw a new card? 🙂");
} else if(sum=== 21){
    console.log("Wohoo! You've got the highest PRIZE! 🥳");
} else{
console.log("Game over! 😭");
}
*/
/*

let age = 10;

if(age >= 21){
    console.log("You'r welcome!");
} else{
    console.log("You'r under 21");
}

// console.log(age);
*/
/*
let age = 100

if(age === 100){
console.log("ሰላም እንኳን ወደ ቴክ ግሮዝ ታክቲክ በደህና መጡ።");
}
else if(age <= 100){
console.log("Not eligible");
} else{
    console.log("Not elegible, you have already gotten one");
}
*/
// let firstCard = 10;
// let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
 let player = {
 name: "Bill",
 chips: 150,
 sayHello: function(){
  console.log("Selam!");
 }
 }
 player.sayHello();

let playerEl = document.querySelector('.bill');
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}


// let experience = ["experience", "education", "licenses", "skills"]



// for(let count = 1; count < 11; count +=2){
//     console.log(count);
// }

// for(let count = 10; count < 101; count+=10){
//     console.log(count);
// }

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
// ];

// for(let i = 0; i < messages.length; i += 1){
//     console.log(messages[i]);
// }
// let cardsE = [7, 3, 9]
// for(let i = 0; i < cardsE.length; i +=1){
//     console.log(cardsE[i]);
// }
// let sentence = ["Hello", "my", "name", "is", "James"];
// let greetingEl = document.getElementById("greeting-el");

// for(let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }



// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime(){
//     if(player1Time < player2Time)
//     {
//         return player1Time
//     }else if(player2Time < player1Time){
//      return player2Time
//     } else{
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);

// let randomNumber = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber);

// function rollDice(){
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber
// }



// console.log(rollDice());

// let hasCompletedCourse = true
// let givesCertificate = true

// // if(hasCompletedCourse === true){
// //     if(givesCertificate === true){
// //      generateCertificate() 
// //     }
// // }
// //  better option
// if(hasCompletedCourse === true && givesCertificate === true){
//   generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if(hasSolvedChallenge === false && hasHintsLeft === false){
//   showSolution()
// }


// function showSolution() {
//   console.log("Showing the solution....");
// }
// let likesDocumentaries = true;
// let likesStartups = true;

// if(likesDocumentaries === true || likesStartups === true){
//   recommendMovie()
// }
// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// let course = {
//   title: "Learn CSS Grid for free ",
//   lesson: 16,
//   creator: "Per",
//   length: 63,
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"]
// }
// console.log(course.length);
// console.log(course.tags);
// console.log(course["tags"]);
// console.log(course.tags[1]);

// let airbnbCastle = {
//   title: "Live like a king in my castle",
//   isAvaliable: true,
//   price: 150,
//   images: ["img1", "img2"],
//   isSuperHost: true
// };

// console.log(airbnbCastle.price);
// console.log(airbnbCastle.images[0]);



