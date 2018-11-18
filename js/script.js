// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
});



var rps = ["rock", "paper", "scissors"];






$("#shoot").click(function(){
    
var randomChoice = rps [Math.floor(Math.random() * rps.length)];
 $("#computerChoice").html(randomChoice);
 $("#computerChoice").hide(randomChoice);
 
  var option = $("#input").val();
  $("#computerChoice").show(randomChoice);
  
  if (option === "rock" && randomChoice === "scissors" ) {
    $("#winner").html("You wins! :)");
} 
  else if (option === "scissors" && randomChoice === "paper"){
    $("#winner").html("You win! :)");
}

  else if (option === "paper" && randomChoice === "rock"){
    $("#winner").html("You win! :)");
}
  else if (option === "paper" && randomChoice === "paper"){
    $("#winner").html("It's a draw");
}
  else if (option === "rock" && randomChoice === "rock"){
    $("#winner").html("It's a draw");
}
  else if (option === "scizzors" && randomChoice === "scizzors"){
    $("#winner").html("It's a draw");
}
  else{
    $("#winner").html("You lose! :(");  
  }
});
 

    

    
    
    

