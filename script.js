// USING THESE BUTTONS TO GET INPUT PLAYERS
var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');


// FOR SCORES
var player1score = 0
var player2score = 0
var winner = 0

// TO CHOOSE RANDOM PLAYER AT START (if we get 0 player 1 will start else player 2 will start)
let randomPlayer = Math.floor(Math.random()*2)
if(randomPlayer === 0){
    document.querySelector("#player-id").innerHTML = "1"
    document.querySelector("#result").innerHTML = " Should Start The Game"
    button1.style.backgroundColor = "green"
    button2.setAttribute('disabled', 'true');
} else {
    document.querySelector("#player-id").innerHTML = "2"
    document.querySelector("#result").innerHTML = " Should Start The Game"
    button2.style.backgroundColor = "green"
    button1.setAttribute('disabled', 'true');
}


// FOR CHOOSING RANDOM NUMBER AT START
var numbers = ["./images/1.png", "./images/2.png", "./images/3.png", "./images/4.png", "./images/5.png", "./images/6.png"]
var randomIndex =Math.floor(Math.random() * numbers.length);
document.querySelector("#dice-image").src = numbers[randomIndex]


// TO RESET THE GAME
const reset = ()=>{

    // SHOULD MAKE THEIR SCORE 0
    player1score = 0
    player2score = 0
    document.querySelector(".score1").innerText = 0
    document.querySelector(".score2").innerText = 0
    
    // SHOULD ENABLE THEIR BUTTONS TO PLAY
    button1.removeAttribute('disabled');
    button2.removeAttribute('disabled');

    if(!anyWinner()){
        window.location.reload();
    }
    
    

    // if winner is 1 then 2 should start the game else 1 will start the game
    if(winner === 1){
        document.querySelector("#player-id").innerHTML = "2"
        document.querySelector("#result").innerHTML = " Should Start The Game"
    } else{
        document.querySelector("#player-id").innerHTML = "1"
        document.querySelector("#result").innerHTML = " Should Start The Game"
    }
}



// CHECK IF GAME IS OVER OR NOT
const anyWinner = ()=>{
    let a = document.querySelector("#player-id")
    if(player1score >=30){
        winner = 1
        a.innerHTML = "1"
        document.querySelector("#result").innerText = " is the Winner"
        button1.setAttribute('disabled', 'true');
        button2.setAttribute('disabled', 'true');
        return true;
    }

    if(player2score >=30){
        winner = 2
        a.innerHTML = "2"
        button1.setAttribute('disabled', 'true');
        button2.setAttribute('disabled', 'true');
        document.querySelector("#result").innerText = " is the Winner"
        return true;
    }
}


// TO ROLL THE DICE
const roll = ()=>{
    randomIndex = Math.floor(Math.random() * numbers.length);
    // console.log(randomIndex)
    document.querySelector("#dice-image").src = numbers[randomIndex]
}

//NEXT PLAYER

// const nextplayer = ()=>{
//     // button1.addEventListener('click', () => {
//     //     button2.removeAttribute('disabled');
//     //     button2.style.backgroundColor = "green"
//     //     button1.setAttribute('disabled', 'true');
//     //     button1.style.backgroundColor = "grey"
//     //   });
  
//     //   button2.addEventListener('click', () => {
//     //     button1.removeAttribute('disabled');
//     //     button1.style.backgroundColor = "green"
//     //     button2.setAttribute('disabled', 'true');
//     //     button2.style.backgroundColor = "grey"
//     //   });
// }


// NEXT PLAYER(CT)
// 
const player1 = () =>{
        document.querySelector("#player-id").innerHTML = "1"
        document.querySelector("#result").innerHTML = " To Play"
        button1.removeAttribute('disabled');
        button1.style.backgroundColor = "green"
        button2.setAttribute('disabled', 'true');
        button2.style.backgroundColor = "grey"
}

const player2 = () =>{
        document.querySelector("#player-id").innerHTML = "2"
        document.querySelector("#result").innerHTML = " To Play"
        button2.removeAttribute('disabled');
        button2.style.backgroundColor = "green"
        button1.setAttribute('disabled', 'true');
        button1.style.backgroundColor = "grey"
    //   });
}


// console.log((document.querySelector(".score1").value))

const update1score = () =>{
    player1score+=(randomIndex+1)
    console.log(player1score)
    document.querySelector(".score1").innerHTML = player1score;
}

const update2score = () =>{
    player2score+=(randomIndex+1)
    console.log(player2score)
    // document.querySelector(".score2").innerHTML= player2score;
    document.querySelector(".score2").innerHTML = player2score;
}
