/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) {
  const hour = parseInt(string);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  else return "Good Afternoon"
}

function displayMessage(message) {
 document.getElementById("greeting").innerText = message;
}

