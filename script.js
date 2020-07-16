var inputFromUser = prompt("Enter Rock, Paper or Scissor");
var randomSelection = Math.floor(Math.random() * 2) + 1;
var randomSelected = computerPlay(randomSelection);
var input1 = inputFromUser.toLowerCase();
var input2 = randomSelected.toLowerCase();

if(input1 == "rock") {
    if(input2 == "paper") {
        document.body.querySelector(".output").textContent = "Oops Paper beats Rock";
    }
    else if(input2 == "scissor") {
        document.body.querySelector(".output").textContent = "You Win, Rocks beat Scissor";
    }
    else {
        document.body.querySelector(".output").textContent = "Draw match";
    }
} 

else if(input1 == "paper") {
    if(input2 == "scissor") {
        document.body.querySelector(".output").textContent = "Oops Scissor beats Paper";
    }
    else if(input2 == "rock") {
        document.body.querySelector(".output").textContent = "You Win, Paper beat Rock";
    }
    else {
        document.body.querySelector(".output").textContent = "Draw match";
    }
}

else if(input1 == "scissor") {
    if(input2 == "paper") {
        document.body.querySelector(".output").textContent = "You win, Scissor beats Paper";
    }
    else if(input2 == "rock") {
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

