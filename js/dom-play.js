/*alert ("Hi from DOM Play");/*

/*
    A single web page wired with events: For this assignment, you will be creating a small, single page application using the DOM. The page must:

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    
    Un-highlight (normal or otherwise) all lines from all other actors in the play
    
    The function(s) created to do the work must accommodate any number of actors, and any number of additional lines 
       
    We can change to HTML as needs 

*/

//document.querySelector(".hamlet").style.backgroundColor = "yellow";
function highlight(el){

    if(el.style.backgroundColor == 'white'){//change to blue
        el.style.backgroundColor='blue';
    }else{//change to white
        el.style.backgroundColor='white';
    }
}

function myAlert(){
    alert("I'm clicked!");
}

function highlightActor(actor){
    //alert("The current actor is " + actor);
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor
            mySpan.style.backgroundColor='blue'; 
        }else{//other actor
            mySpan.style.backgroundColor='White'; 

        }
    }
}

const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
   // mySpan.addEventListener("click", myAlert);
    mySpan.addEventListener("click", function(ev){
        highlightActor(mySpan.dataset.actor);
    });

}