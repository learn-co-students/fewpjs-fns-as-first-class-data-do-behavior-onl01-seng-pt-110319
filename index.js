/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
  if (parseInt(string) < 12) {
    return "Good Morning";
  } else if (parseInt(string) > 12 && parseInt(string) < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
  
}