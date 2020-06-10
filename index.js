/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  const step1 = parseInt(timeString, 10);
  if ( step1 < 12 ) return "Good Morning"
  if ( step1 > 17 ) return "Good Evening"
  return "Good Afternoon"

}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;

}