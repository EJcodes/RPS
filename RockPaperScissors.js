const startButton = document.getElementById("SB");

const weaponIndex = ["Rock","Paper","Scissors"];

function SBL(){
    const aiChoice = Math.floor(Math.random() * 3);
    console.log(weaponIndex[aiChoice])
    return weaponIndex[aiChoice];
}

let repsonse =(Ai)=> {
    if(Ai === 1){
        console.log("Rock");
    }else if(Ai === 2){
        console.log("Paper");
    }else if (Ai === 3){
        console.log("Scissors");
    }else{
        console.log("error with AI")
    }
}
    

