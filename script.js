var inputFromUser = prompt("Enter Rock, Paper or Scissor");
var randomSelection = Math.floor(Math.random() * 2) + 1;
var randomSelected = computerPlay(randomSelection);

if(inputFromUser == "Rock") {
    if(randomSelected == "Paper") {
        document.body.querySelector(".output").textContent = "Oops Paper beats Rock";
    }
    else if(randomSelected == "Scissor") {
        document.body.querySelector(".output").textContent = "You Win, Rocks beat Scissor";
    }
    else {
        document.body.querySelector(".output").textContent = "Draw match";
    }
} 

else if(inputFromUser == "Paper") {
    if(randomSelected == "Scissor") {
        document.body.querySelector(".output").textContent = "Oops Scissor beats Paper";
    }
    else if(randomSelected == "Rock") {
        document.body.querySelector(".output").textContent = "You Win, Paper beat Rock";
    }
    else {
        document.body.querySelector(".output").textContent = "Draw match";
    }
}

else if(inputFromUser == "Scissor") {
    if(randomSelected == "Paper") {
        document.body.querySelector(".output").textContent = "You win, Scissor beats Paper";
    }
    else if(randomSelected == "Rock") {
        document.body.querySelector(".output").textContent = "Oops, Rock beat Scissor";
    }
    else {
        document.body.querySelector(".output").textContent = "Draw match";
    }
}




function computerPlay(randomSelection) {
    if(randomSelection == 0) {
        return "Rock" ;
    }
    else if(randomSelection == 1) {
        return "Paper" ;
    }
    else {
        return "Scissor" ;
    }
}

