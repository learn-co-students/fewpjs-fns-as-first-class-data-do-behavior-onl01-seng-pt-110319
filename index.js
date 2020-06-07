/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function changeTimeStringToInt (timeString) {
  let convertedString = timeString.split(':');
  convertedString = convertedString.join('');
  return Number.parseInt(convertedString);
}

/* Write your implementation of greet() */

function greet (timeString) {
  const time = changeTimeStringToInt(timeString);
  if (time < 1200) {
    return 'Good Morning';
  } else if (time > 1200 && time < 1700) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

function displayMessage (greetString) {
  document.getElementById('greeting').innerText = greetString;
}

/* Write your implementation of displayMessage() */
