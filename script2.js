correctArray = [];
userArray = [];


function whenClicked(number) {
    buttons = $(".btn");

    switch (number) {
        case 0:
            userArray.push(0);
            checkAnswer(0);

            $(buttons[0]).addClass("pressed");
            break;
        case 1:
            userArray.push(1);
            checkAnswer(1);

            $(buttons[1]).addClass("pressed");
            break;
        case 2:
            userArray.push(2);
            checkAnswer(2);

            $(buttons[2]).addClass("pressed");
            break;
        case 3:
            userArray.push(3);
            checkAnswer(3);

            $(buttons[3]).addClass("pressed");

            break;
        default:
            break;
    }
    setTimeout(function () {
        $(".btn").removeClass("pressed")
    }, 100)

}
//--------------------------------------------------------------

function lightbutton() {
    buttons = $(".btn");
    const randomNumber = Math.floor(Math.random() * 4);
    playSound(randomNumber);
    $(buttons[randomNumber]).fadeIn(100).fadeOut(200).fadeToggle(100);
    
    /*addClass("pressed");
    setTimeout(function () {
        $(".btn").removeClass("pressed")
    }, 100)*/
    correctArray.push(randomNumber);
    h1Naming();


   
}
//-----------------------------------------------------------------------

function gameOver() {
    $("h1").text("game over ,Press A Key to Start.")
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 100)
    correctArray = [];
    userArray = [];
    var audio1 = new Audio("sounds/wrong.mp3");
    audio1.play();

}
//-----------------------------------------------------------------------

function checkAnswer(number) {
    
        if (correctArray[userArray.length-1] === userArray[userArray.length-1] && correctArray.length > userArray.length ) {
            playSound(number);
            
        }
        else if (correctArray[userArray.length-1] === userArray[userArray.length-1] && correctArray.length === userArray.length){
            playSound(number);
            userArray =[];
            setTimeout( function (){lightbutton();},750);
            
           
        }
        else {

            gameOver();

            //setTimeout(lightbutton, 2500)
            
        

    }
}
//-----------------------------------------------------------------------------

//------------------------------------------------------------------------


//-------------------------------------------------------------------------

function playSound(number) {
    switch (number) {
        case 0:
            Audio1 = new Audio("sounds/green.mp3")

            break;
        case 1:
            Audio1 = new Audio("sounds/red.mp3")

            break;
        case 2:
            Audio1 = new Audio("sounds/yellow.mp3")

            break;
        case 3:
            Audio1 = new Audio("sounds/blue.mp3")

            break;

        default:
            break;
    }
    Audio1.play();
}

//---------------------------------------------------

$(document).keydown(function () {
    if (correctArray.length == 0) {
        lightbutton();     
    }

});
$("em").click(function () {
    if (correctArray.length == 0) {
        lightbutton();     
    }

});
function h1Naming (){
    if(correctArray.length > 0){
        $("h1").text("level " + correctArray.length);
    }
}


$(".green").click(function () {
    whenClicked(0);
});
$(".red").click(function () {
    whenClicked(1);
});
$(".yellow").click(function () {
    whenClicked(2);
});
$(".blue").click(function () {
    whenClicked(3);
});