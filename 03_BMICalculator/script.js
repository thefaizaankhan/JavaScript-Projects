const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value); (that's why it is written inside addEventListener so that we can get the value of the input element on the event otherwise we will get the empty value)

form.addEventListener('submit', function(e){
  // to prevent any submission through form (to stop its default behavior of submitting data to server)
  e.preventDefault();
  // here, document.querySelector('#height') will select the input element with the given id but adding '.value' at the last will give u the values of the input element -> values coming from input is of type 'string' so to parse it to number we use parseInt. 
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Modern Method - isNaN(height) - used to determine whether a value is NaN (Not-a-Number). It checks if the value cannot be converted to a valid number and returns a Boolean value (true or false).
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight/ ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight! Your BMI is ${bmi}</span>`
    } else if (18.6 <= bmi && bmi <= 24.9) {
      results.innerHTML = `<span>Normal Range! Your BMI is ${bmi}</span>`
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>Overweight! Your BMI is ${bmi}</span>`;
    }

  }
})


// OR
// const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

/* 
parseInt() and Number() methods :-

parseInt() - Extracts an integer from a string, stopping at the first non-numeric character.
console.log(parseInt("123abc")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseInt("abc123")); // NaN

Number() - Converts the entire string into a number, including decimals.
console.log(Number("123abc")); // NaN
console.log(Number("123.45")); // 123.45
console.log(Number("abc123")); // NaN
*/

/* 
isNaN() - The isNaN() function in JavaScript is used to determine whether a value is NaN (Not-a-Number). It checks if the value cannot be converted to a valid number and returns a Boolean value (true or false).

How it Works
- isNaN() converts the given value to a number using the Number() function.
- If the resulting value is NaN, the function returns true.
- Otherwise, it returns false.

console.log(isNaN(123));    // false (123 is a valid number)
console.log(isNaN(-1.5));   // false (-1.5 is a valid number)
console.log(isNaN(NaN));    // true (NaN is not a valid number)
console.log(isNaN("123"));      // false (can be converted to number 123)
console.log(isNaN("123abc"));   // true (cannot be converted to a number)
console.log(isNaN("Hello"));    // true (not a numeric string)
console.log(isNaN(true));       // false (true is converted to 1)
console.log(isNaN(false));      // false (false is converted to 0)
console.log(isNaN(undefined)); // true (cannot be converted to a number)
console.log(isNaN(null));      // false (null is converted to 0)
*/

// we can also use isNaN(Number(height)) to validate inputs more explicitly (for exceptional inputs like 'false', )