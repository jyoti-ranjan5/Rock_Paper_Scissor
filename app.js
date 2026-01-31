const choices=document.querySelectorAll(".choice");  //Array

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        console.log(userchoice," was clicked!");
        playgame(userchoice);
    })
})

let playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    let computerchoice=compchoice();
    console.log("computer choice = ",computerchoice);

    if(userchoice===computerchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        userwin = computerchoice==="scissor" ? true:false ;
        else if(userchoice==="paper")
        userwin = computerchoice==="rock" ? true:false ;
        else if(userchoice==="scissor")
        userwin = computerchoice==="paper" ? true:false ;
        winner(userwin,userchoice,computerchoice);
    }

}


function compchoice(){
    let CompChoice=["rock","paper","scissor"];
    let compIdx=Math.floor(Math.random()*3);
    return CompChoice[compIdx];
}

let usercount=0;
let compcount=0;
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

function draw(){
    console.log("Game is draw!");
    msg.innerHTML="Draw! Play Again";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}
function winner(userwin,userchoice,computerchoice){
    if(userwin===true){
        console.log("you win!");
        usercount++;
        user.innerHTML=usercount;
        msg.innerHTML=`You Win! ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="Green";
        msg.style.color="white";
    }
    else{
        console.log("you lose!");
        compcount++;
        comp.innerHTML=compcount;
        msg.innerHTML=`You Lose! ${computerchoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="white";
    }
    
}

