var sayThatWasEasy = function(){
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}
$("#Easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event){
    event.preventDefault();
    console.log(event.charCode);
    if(event.charCode==32){
        sayThatWasEasy();
    }
}  