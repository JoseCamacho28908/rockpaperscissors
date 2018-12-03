// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var UserScore = 0;
var ComputerScore = 0;

$("#userScore").html(UserScore);
$("#computerScore").html(ComputerScore);

$("#shoot").click(function() {
  $("#userChoice").text($("#input").val());
});

var rps = ["Rock", "Paper", "Scissors"];

$("#shoot").click(function() {

  var randomChoice = rps[Math.floor(Math.random() * rps.length)];
  $("#computerChoice").html(randomChoice);
  $("#computerChoice").hide(randomChoice);

  var option = $("#input").val();
  $("#computerChoice").show(randomChoice);

  while (option !== "Rock" && option !== "Paper" && option !== "Scissors") {
    alert("Please type Rock, Paper, or Scissors");
    return false;

  }

  if (option === "Rock" && randomChoice === "Scissors") {
    $("#winner").html("You win! :) ");
  }
  else if (option === "Scissors" && randomChoice === "Paper") {
    $("#winner").html("You win! :) ");
  }

  else if (option === "Paper" && randomChoice === "Rock") {
    $("#winner").html("You win! :) ");
  }
  else if (option === "Paper" && randomChoice === "Paper") {
    $("#winner").html("It's a draw");
  }
  else if (option === "Rock" && randomChoice === "Rock") {
    $("#winner").html("It's a draw");
  }
  else if (option === "Scizzors" && randomChoice === "Scizzors") {
    $("#winner").html("It's a draw");
  }
  else {
    $("#winner").html("You lose! :( ");
  }

  if ($("#winner").html() === "You win! :) ") {
    UserScore += 1;
  }
  else if ($("#winner").html() === "It's a draw") {
    UserScore += 1;
    ComputerScore += 1;
  }
  else {
    ComputerScore += 1;
  }
  $("#userScore").html(UserScore);
  $("#computerScore").html(ComputerScore);
});
