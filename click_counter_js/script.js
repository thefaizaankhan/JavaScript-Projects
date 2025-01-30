// ### Click Counter using onclick ### 
let value = 0

function increaseValue() {
  if (value < 20){
    value += 1
    document.querySelector('span').innerHTML = value
  }
}

function decreaseValue() {
  if (value > 0){
    value -= 1
    document.querySelector('span').innerHTML = value
  }
}

// ### Click Counter using addEventListener ###
// let counter = 0;

// const countValue = document.querySelector("span");
// const increaseValue = document.getElementById("addValue");
// const decreaseValue = document.getElementById("removeValue");

// if (counter === 0) {
//   decreaseValue.setAttribute("disabled", "");
// }

// function increaseVal() {
//   if (counter < 20) {
//     counter += 1;
//     countValue.innerHTML = counter;
//     if (counter > 0) {
//       decreaseValue.removeAttribute("disabled");
//     }
//     if (counter === 20) {
//       increaseValue.setAttribute("disabled", "");
//     }
//   }
// }

// function decreaseVal() {
//   if (counter > 0) {
//     counter -= 1;
//     countValue.innerHTML = counter;
//     if (counter < 20) {
//       increaseValue.removeAttribute("disabled");
//     }
//     if (counter === 0) {
//       decreaseValue.setAttribute("disabled", "");
//     }
//   }
// }

// increaseValue.addEventListener("click", increaseVal);

// decreaseValue.addEventListener("click", decreaseVal);

