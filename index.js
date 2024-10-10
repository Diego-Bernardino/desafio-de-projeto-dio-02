let rank = ''
let winner = 150
let loser = 55
let victoryBalance = playerStats(winner, loser)

ranking()
console.log(`O Herói tem de saldo de ${victoryBalance} vitórias e está no nível de ${rank}`)

function playerStats(victory = 0, losts = 0) {
    let totVictory = victory - losts
    return totVictory
}

function ranking() {
    if (victoryBalance <= 10) {
        rank = 'Ferro';
    } else if (victoryBalance > 10 && victoryBalance <= 20) {
        rank = 'Bronze';
    } else if (victoryBalance > 20 && victoryBalance <= 50) {
        rank = 'Prata';
    } else if (victoryBalance > 50 && victoryBalance <= 80) {
        rank = 'Ouro';
    } else if (victoryBalance > 80 && victoryBalance <= 90) {
        rank = 'Diamante';
    } else if (victoryBalance > 90 && victoryBalance <= 100) {
        rank = 'Lendário';
    } else {
        rank = 'Imortal';
    }
}