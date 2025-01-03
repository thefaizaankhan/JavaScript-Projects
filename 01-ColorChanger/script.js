const myButtons = document.querySelectorAll('.button')
// console.log(myButtons);

const body = document.querySelector('body')
// console.log(body);

// Events in JS - Every action in the browser -> moving the mouse, closing a tab, button click all are events in Js.

myButtons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function(e) {
    // Refers to the specific element that triggered the click event('.button' that was clicked) and 'e' refers to the Event Object -> we should carry the event object 
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey') {
      // for better programming practice we can write grey as e.target.id
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }   
  })
});

// how we can do the same in another way ? 

// via switch statement 

// const myColor = document.querySelectorAll('.button')
// const bodyElement = document.querySelector('body')

// myColor.forEach((div) => {
// console.log(div);
//   div.addEventListener('click', function(e){
//     console.log(e);
//     console.log(e.target);
//     switch (e.target.id) {
//       case 'white':
//         bodyElement.style.backgroundColor = e.target.id
//         break;
//       case 'red':
//         bodyElement.style.backgroundColor = e.target.id
//         break;
//       case 'green':
//         bodyElement.style.backgroundColor = e.target.id
//         break;
//       case 'blue':
//         bodyElement.style.backgroundColor = e.target.id
//         break;
//       case 'orange':
//         bodyElement.style.backgroundColor =  e.target.id
//       default:
//         break;
//     }
//   })
// })