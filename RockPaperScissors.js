const startButton = document.getElementById("SB");

const weaponIndex = ["Rock","Paper","Scissors"];
let Ai ="";
let SBL= () => {
    const aiChoice = Math.floor(Math.random() * 3);
    console.log(weaponIndex[aiChoice])
    return Ai = weaponIndex[aiChoice];
}
const iChooseYouRock = () => {
    Response("Rock")
}


let logic =(choice)=> {
    if(Ai === choice){
        console.log("Tie");
    }else if(Ai === "Rock" && choice === "Scissor"){
        console.log("You Win");
    }else if (Ai === "Rock" && choice === "Paper"){
        console.log("You lose");
    }else{
        console.log("error with AI")
    }
}
    

