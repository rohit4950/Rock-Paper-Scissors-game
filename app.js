let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');

const genCompChoice=()=>{
    let options =["rock","paper","scissors"];
    const ran = Math.floor(Math.random() * 3);
    return options [ran];
    
}

const drawgame=()=>{
    msg.innerText="Game was draw. Play Again!!"
    msg.style.backgroundColor="#081b31";
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You  Lost! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="red";

    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
            drawgame();
    }
    else{
        let userWin =true;
        if(userChoice==='rock'){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==='paper'){
            userWin===compChoice==="scissors"?false:true;       
        }
        else{
            userWin===compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   


}

choices.forEach((choice)=>{
    console.log(choice);
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playGame(userChoice);

    });
})
