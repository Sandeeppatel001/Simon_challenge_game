var gamePaterrn = [];
var buttonColours = ["blue","red","green","yellow"];

function nextsequence(){
var randomNumber = ceil(Math.random()*3);
var randomChoosenColour = buttonColours[randomNumber];
gamePaterrn.push(randomChoosenColour);

$("#"+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/"+randomChoosenColour+"mp3");
audio.play();
}
