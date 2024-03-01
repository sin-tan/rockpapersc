let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
console.dir(choices)

const genCompChoice  = ()=>{
    const opt = ["rock","paper","scissors"];
    const rand = Math.floor(Math.random()*3);
    return opt[rand];
}

function over(userScore,compScore){
    if(userScore== 10){
        window.alert("You Won The Match");
        location.reload();
    }
    else if(compScore == 10){
        window.alert("Computer Won The Match");
        location.reload();
    }
}


function showWinner(userWin,userChoice,compChoice){
    if (userWin==true){
        userScore++;
        userScorePara.innerText = userScore;
        document.querySelector("#msg").innerText =`You Win! ${userChoice} beats ${compChoice}`;
        document.querySelector("#msg").style.color="white";
        document.querySelector("#msg").style.backgroundColor = "green";
        setTimeout(function() {
            over(userScore,compScore);
        }, 5500);
    }
    else{
        document.querySelector("#msg").innerText =`You Lose! ${compChoice} beats ${userChoice} `;
        document.querySelector("#msg").style.color="white";
        document.querySelector("#msg").style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore; 
        setTimeout(function() {
            over(userScore,compScore)
        }, 5500);
    }
}
const playgame  = (userChoice)=>{
    //generate comp choice
    const compChoice= genCompChoice();
    if(compChoice === userChoice){
        document.querySelector("#msg").innerText ="Draw!";
        document.querySelector("#msg").style.color="white";
        document.querySelector("#msg").style.backgroundColor = "orange";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            //rock,paper
            userWin = compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
        console.log("choice was clicked",userChoice)
        playgame(userChoice);
    })
});


