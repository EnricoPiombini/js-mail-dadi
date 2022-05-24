const playerScore = [];
const pcScore = [];

let totalPc = 0;
let totalPlayer = 0;

// Creo il loop per il pc
for (let i = 0; i < 6; i++) {
    let randomPc = Math.floor(Math.random() * 5);
    pcScore.push(randomPc);
    totalPc += pcScore[i];
}
console.log(pcScore, totalPc);


// Creo il loop per il player
for (let i = 0; i < 6; i++) {
    let randomPlayer = Math.floor(Math.random() * 5);
    playerScore.push(randomPlayer);
    totalPlayer += playerScore[i];
}
console.log(playerScore, totalPlayer);

// Confronto i due array con delle condizioni per stabilire quale somma è superiore

if( totalPc > totalPlayer){
    console.log('Pc win!!')
}

else if ( totalPlayer > totalPc){
    console.log('Player win!!')
}



