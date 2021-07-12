/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeArray = time.split(':');
  let newTimeString = timeArray.join("");
  let parsedTime = parseInt(newTimeString);

  if (parsedTime < 1200) {
    return "Good Morning";
  } else if (parsedTime > 1700) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let element = document.getElementById('greeting');
  element.innerText = message;
}
