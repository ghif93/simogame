
var gamePattern = []
var buttonColours =["red", "blue", "green", "yellow"]
var userClickedPattern = []
var level = 0
var started = false
function nextSequence(){
   userClickedPattern = [];
   var randomNumber =Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
   
   gamePattern.push(randomChosenColour);
   
   animatePress(randomChosenColour)
   playSound(randomChosenColour)
 

   $("#level-title").text("Level "+ level)
   level= level + 1;

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

function checkAnswer(currentLevel) {

   //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

     console.log("success");

     //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
     if (userClickedPattern.length === gamePattern.length){

       //5. Call nextSequence() after a 1000 millisecond delay.
       setTimeout(function () {
         nextSequence();
       }, 1000);

     }

   } else {
      
      $("body").addClass("game-over")
      $("#level-title").text("Game Over, Press Any Key to Restart")
      setTimeout(function(){
         $("body").removeClass("game-over");
         
     }, 200);
     startOver();
     console.log("wrong");

   }

}



$(document).keypress(function(){
   
   if (!started){
      $("#level-title").text("Level " + level);
      nextSequence()
      started=true
      

   }


})


function startOver() {
   level = 0;
   gamePattern = [];
   started = false;
 }
 

$(".btn").click(function(event){
   var userChosenColour= event.target.id;
   userClickedPattern.push(userChosenColour)
   
   playSound(userChosenColour)
   animatePress(userChosenColour)
 
   checkAnswer(userClickedPattern.length-1);
   
})