/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hours=time.split(':')[0]
  const hi=parseInt(hours)
  if (hi<12) {
      const msg='Good Morning'
      return msg
    }
    else if (hi<17) {
      const msg='Good Afternoon'
      return msg
    }
    else {
      const msg='Good Evening'
      return msg
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  const greeting=document.getElementById('greeting');
  greeting.innerText=msg

}
