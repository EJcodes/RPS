let choiceBtns = document.querySelectorAll(".choiceBtns");

const weaponIndex = [["Rock"],["Paper"],["Scissors"]];
let Ai ="";

for(let i = 0; i<weaponIndex.length; i++){
    choiceBtns[i].addEventListener("click", function(){
        let palyerChoice = weaponIndex[i][0];
        let random = Math.floor(Math.random()*3);
        let AiChoice =  weaponIndex[random][0];
        console.log(palyerChoice, AiChoice);
    })
}


