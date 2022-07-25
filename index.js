
var gamePattern = []
var buttonColours =["red", "blue", "green", "yellow"]


function nextSequence(){
    return Math.floor(Math.random() * 4);
 }

 var randomChosenColour = buttonColours[nextSequence()];
 gamePattern.push(randomChosenColour);


 $(document).keypress(function(event){
    console.log(gamePattern)
});

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);