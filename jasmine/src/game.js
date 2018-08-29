let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user_score");
let computerScore_span = document.getElementById("computer_score");
let result_p = document.querySelector(".result > p");
let scoreBoard_div = document.getElementsByClassName("score-board");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

function getComputerOption() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

//console.log(getComputerOption());

function roshambo(userOption) {
  let computerOption = getComputerOption();
  let smallUSer = "user".fontsize(1).sub();
  let smallComputer = "computer".fontsize(1).sub();
  // console.log('user selected ' + userOption );
  // console.log('computer selected ' + computerOption);
  switch (userOption + " " + computerOption) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      // console.log("You win!!!");
      userScore++;
      userScore_span.innerHTML = userScore;

      result_p.innerHTML = `${userOption}${smallUSer} beats ${computerOption}${smallComputer} . You win!!!`;
      break;
    case "rock paper":
    case "paper scissors":
    case "scissors rock":
      computerScore++;
      computerScore_span.innerHTML = computerScore;

      result_p.innerHTML = `${userOption}${smallUSer} looses to ${computerOption}${smallComputer} . You loose!!!`;

      //console.log("You loose!!!");

      break;
    case "rock rock":
    case "paper paper":
    case "scissors scissors":
      console.log("It is a tie!!!");
      result_p.innerHTML = `Both players selected ${userOption} . It's a draw!!!`;

      break;
  }
}

function game() {
  rock_div.addEventListener("click", function() {
    roshambo("rock");
  });

  paper_div.addEventListener("click", function() {
    roshambo("paper");
  });

  scissors_div.addEventListener("click", function() {
    roshambo("scissors");
  });
}

game();
