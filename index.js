/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(response) {
  if (parseInt(response) < 12 ) {
    return "Good Morning";
  }
  else if (parseInt(response) > 12 && parseInt(response) <17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(response) {
document.getElementById("greeting").innerText = response;
}
