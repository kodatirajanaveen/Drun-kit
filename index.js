//for detecting button press

for(var i =0; i<document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var buttonName= this.innerHTML;

      makeSound(buttonName);

      buttonAnimation(buttonName);

      });


      }


      // if (buttonName === "w"){
      //   var audio = new Audio("sounds/crash.mp3");
      //   audio.play();
      // }
      // else if(buttonName === "a"){
      //   audio = new Audio("sounds/kick-bass.mp3");
      //   audio.play();
      // }
      // else if(buttonName === "s"){
      //   audio = new Audio("sounds/snare.mp3");
      //   audio.play();
      // }
      // else if(buttonName === "d"){
      //   audio = new Audio("sounds/tom-1.mp3");
      //   audio.play();
      // }
      // else if(buttonName === "j"){
      //   audio = new Audio("sounds/tom-2.mp3");
      //   audio.play();
      // }
      // else if(buttonName === "k"){
      //   audio = new Audio("sounds/tom-3.mp3");
      //   audio.play();
      // }
      // else if(buttonName === "l"){
      //   audio = new Audio("sounds/tom-4.mp3");
      //   audio.play();
      // }





// document.querySelectorAll(".drum").addEventListener("click", function() {
//   alert("I got clicked");
// });

// function handleClick() {
//   alert("I got clicked");
// }

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//for detecting keyboard press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {
  switch(key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
   case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    default: console.log(buttonName);

  }
};

function buttonAnimation(currentKey) {
  var activeButton= document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
};
