
// let count = 0;

// function increment(){
//    console.log("The button was clicked!"); 
// }

// let lap1=34;
// let lap2 = 33;
// let lap3 =36
// function number (){
//     let totalLap =  lap1 + lap2 +lap3
// console.log(totalLap);
// }

// number()

// let lapsCompleted = 0;
// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap();
// incrementLap();
// incrementLap();
// console.log(lapsCompleted);
let saveEl = document.getElementById('save-el')
let countEl =  document.getElementById("count-el")
 let count = 0;
function increment(){
    count += 1
    // countEl.innerText = count
    countEl.textContent = count
    // console.log(count);
}

function save(){
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

