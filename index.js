

for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var but = this.innerHTML;
        makeSound(but);
        makeAnimations(but);
    });
}


// DETECTING KEY PRESS
document.addEventListener("keypress", function(event) { 
    makeSound(event.key);
    makeAnimations(event.key);
});

// FUNCTION

function makeSound(key){
switch (key)
{
case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    
case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;            

case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;  
case "j":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
case "k":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
case "l":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;            
}
}

function makeAnimations(input){
    var current=  document.querySelector("."+input);
    current.classList.add("pressed");
    setTimeout(function(){
        current.classList.remove("pressed");
    },100);
}

    
    
// function anime(binput){
//     var current=  document.querySelector("."+binput);
//     current.classList.add("pressed");

    
// }