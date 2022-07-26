
var gamePattern = []
var buttonColours =["red", "blue", "green", "yellow"]
var userClickedPattern = []

function nextSequence(){

   var randomNumber =Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
   
   gamePattern.push(randomChosenColour);
   
   
   animatePress(randomChosenColour)
   playSound(randomChosenColour)

 }

function playSound(name){
   var audio = new Audio('sounds/'+name+'.mp3');
   audio.play();
}


function animatePress(name){
   $("#"+name).fadeOut(90).fadeIn(90);
   $("#"+name).addClass("pressed");


    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    }, 100);

}


$(document).keypress(function(){
   
   if (gamePattern.length ==0){
      nextSequence()
   }


})


$(".btn").click(function(event){
   var userChosenColour= event.target.id;
   userClickedPattern.push(userChosenColour)
   playSound(userChosenColour)
   animatePress(userChosenColour)
})

