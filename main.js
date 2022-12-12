// Variables
let ball = document.getElementById("ball");
let output = document.getElementById("output");

// Event Listener
ball.addEventListener("click", ballClick);

// Process

function ballClick() {
  let questions = document.getElementById("question").value;

  let randNum = Math.random();
  if (questions == "") {
    output.innerHTML = "Please ask a question...";
  } else if (questions == "Are you lying?") {
    output.innerHTML = "You don't trust me?";
  } else if (questions == "Are you the goat?") {
    output.innerHTML = "yes";
  } else if (randNum <= 0.2) {
    output.innerHTML = "Without a Doubt.";
  } else if (randNum <= 0.4) {
    output.innerHTML = "As I see it, yes.";
  } else if (randNum <= 0.6) {
    output.innerHTML = "Concentrate and ask again.";
  } else if (randNum <= 0.8) {
    output.innerHTML = "Don't count on it.";
  } else if (randNum <= 1) {
    output.innerHTML = "Outlook not so good.";
  }
}
