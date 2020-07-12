/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
  const time=input.split(":")
  const hours=parseInt(time[0])
  const min=parseInt(time[1])


  if (hours<12 ){
   return `Good Morning`
  }
   else if (hours>=12 && hours<=17){
     return `Good Afternoon`
   }
   else {
     return "Good Evening"
   }

}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
document.getElementById("greeting").innerText= message

}