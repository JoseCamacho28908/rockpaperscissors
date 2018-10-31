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


var randomChoice =
rps [Math.floor(Math.random()* rps.length)];

$("#computerChoice").append(randomChoice);

    

