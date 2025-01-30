const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString('en-US');
}, 1000)


// 'en-Us' timezone -  "2: 22: 34 PM"
// Now i want date variable to run again and again to display time so we use setInterval() method it takes two parameters -> function(){} and 1000(time in milliseconds) -> it is running again and again