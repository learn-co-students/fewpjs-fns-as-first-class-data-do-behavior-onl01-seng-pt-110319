/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(times) {
  let parsed = times.split(':').join('')
  const parsedOne = parseInt(parsed)

  if (parsedOne < 1200) {
    return "Good Morning";
  } else if (parsedOne > 1700 ) { 
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }

};


greet();
/* Write your implementation of displayMessage() */

function displayMessage(content) {

  let element = document.getElementById('greeting')
  element.innerText = content
}

displayMessage();