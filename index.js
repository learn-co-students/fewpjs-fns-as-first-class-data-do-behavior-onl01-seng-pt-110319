/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (time) {
  const words = time.split(':')
  let first_word = words[0]
  let first_number = parseInt(first_word, 10)
  if (first_number < 12) return "Good Morning"
  if (first_number > 17) return "Good Evening"
  return "Good Afternoon"

}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}