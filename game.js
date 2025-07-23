// declaraton of the variables.......

let userscore = 0;
let compscore = 0;

let userpoints = document.querySelector("#userscore");
let comppoints = document.querySelector("#compscore");

let update = document.querySelector("#update");

const choices = document.querySelectorAll(".choice");

// code for draw game ....
const draw = ()=>{
    console.log("The game was draw");
      update.innerText = "Game was draw , Try again";
           update.style.backgroundColor = "rgb(10, 10, 59)";
}



// code for winner score updata.... 
const showwinner = (userwin , userchoice , compchoice)=>{
    if (userwin){
     userscore++
     userpoints.innerText = userscore;
     update.innerText = `You win .. your ${userchoice} beats ${compchoice} `;
     update.style.backgroundColor = "green";
    } else {
     compscore++
     comppoints.innerText = compscore;
      update.innerText = `You lose !! ${compchoice} beats your ${userchoice} `;
       update.style.backgroundColor = "red";
    } 

    if(userscore === 5){
        alert("Congratulation...you win ")
        userscore = 0;
        compscore = 0;
        userpoints.innerText = userscore;
        comppoints.innerText = compscore;
    }
       


    else if(compscore === 5){
        alert("You lose..! Try again !")
        userscore = 0;
        compscore = 0;
        comppoints.innerText = compscore;
        userpoints.innerText = userscore;
    }


}


// code for genrate computer choice...... 
const gencompchoice = ()=>{
    const option = ["rock", "paper" ,"scissors"];
    const random = Math.floor( Math.random()* 3); 
    return option[random];
}


// code for gameplay between user and computer

const playgame  = (userchoice)=>{
 console.log("yourchoice - " , userchoice);
 const compchoice = gencompchoice();
 console.log("compchoice - " , compchoice);


 // condition of the choices and there results......

 if(userchoice === compchoice){
    draw();

   }  else {
        let userwin = true;
        if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true;
    } else{
        userwin = compchoice === "rock" ? false : true ;
    }
      showwinner(userwin  , userchoice , compchoice);
        
}      
};



choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
const userchoice = choice.getAttribute("id");    
playgame(userchoice)
});
});


