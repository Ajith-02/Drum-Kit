var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

    var audio = new Audio('sounds/tom-1.mp3');
audio.play();
    
    })

}


// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i<numberOfDrumButtons; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);

//     function handleClick(){
//         alert(" i am clicked");
//     }
// }


// this is same as above code but in Anonymous function
// document.querySelector("button").addEventListener("click", function(){
//     alert(" i am clicked");
// });



