let userScore=0;
let computerScore=0;
let drawMatch=0;

const choices = document.querySelectorAll(".choice");
let message=document.querySelector(".msg")
let score = document.querySelector("#user");
let compScore = document.querySelector("#computer");
let drawScore= document.querySelector("#draw");


const compchoice=()=>{
let options=["rock","scissor","paper"];
let random= Math.floor(Math.random()*3);
return options[random];
};


const showWinner=(userWin, choiceId, computer)=>{
if(userWin === true){
userScore++;
score.innerText= userScore;
console.log("You win");
message.style.backgroundColor="green";
message.innerText=`Congrates! You win. Your ${choiceId} beats computer ${computer}`;
}
else{
computerScore++;
compScore.innerText= computerScore;
console.log("You lose");
message.innerText=`Sorry! You loss. computer ${computer} beats your ${choiceId}`;
message.style.backgroundColor="red";
}
};


const drawGame=()=>{
drawMatch++;
drawScore.innerText= drawMatch;
console.log("Game was Draw");
message.innerText="Draw. Try again!";
message.style.backgroundColor="grey";
};


const playGame=(choiceId)=>{
console.log("User choice = ", choiceId);
const computer=compchoice();
console.log("computer choice = ", computer);

if(choiceId==computer)
{
drawGame();
}
else
{
let userWin=true;
if(choiceId==="rock")
{
userWin= computer==="scissor"?true:false;
}
else if(choiceId==="scissor")
{
userWin= computer==="paper"?true:false;
}
else{
userWin= computer==="rock"? true: false;
}
showWinner(userWin, choiceId, computer);
}
};

choices.forEach((choice)=>{
choice.addEventListener("click", ()=>{
let choiceId= choice.getAttribute("id");
playGame(choiceId);
}) ;
});