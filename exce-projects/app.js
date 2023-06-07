// let box = document.querySelector("#box");
// box.addEventListener("click", function(){
//     console.log("I want to open the box!");
// })

// const container = document.querySelector("#container");

// container.innerHTML = `<button onclick='buy()'>Buy!</button>`

// function buy(){
    
//     container.innerHTML += "<p>Thank you for buying!<p>"
// }
// buy()

// // template strings/literals

// const recipient = "James"
// const sender = "Peter G"

// // Break the email string into multiple lines
// const email = `
// Hey ${recipient}! 

// How is it going? 

// Cheers ${sender}
// `

// console.log(email)

// const credits = 12;

// if (true) {
//   console.log("Let's play 🎰");
// } else {
//   console.log("Sorry, you have no credits 😭");
// }

// let trueOfFalse = Boolean("hello");

// console.log(trueOfFalse);
// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false

const welcomeEl = document.getElementById("welcome-el");

function greetUser(name,greeting, emoji) {
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser('greeting' ,"Peter", '👋')


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)


function getFirst(arr){
 return arr[0]
}
let firstCard = getFirst([10, 2, 5]);
console.log(firstCard);