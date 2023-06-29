const revealBtn = document.getElementById('reveal-btn');
const answer = document.getElementById("answer");
// const changeColor = document.querySelector(".question")
revealBtn.addEventListener('click', function(){
answer.style.display = "block";
answer.style.color = "#1434A4";
answer.style.backgroundColor = "#68e1fd";
revealBtn.style.display = "none";
})

// setTimeout(() => {
//   revealBtn.addEventListener("click", function () {
//     answer.style.display = "block";
//     answer.style.color = "#1434A4";
//     answer.style.backgroundColor = "#68e1fd";
//     revealBtn.style.display = "none";
//   });
// }, 2000);