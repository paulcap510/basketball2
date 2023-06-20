homeScore = 0
awayScore = 0
let scoreBoxHomeEl = document.getElementById('scorebox-home')
let scoreBoxAwayEl = document.getElementById('scorebox-away')


function homeAdd1() {
    homeScore += 1
    console.log(homeScore)
    scoreBoxHomeEl.textContent = homeScore
}

function homeAdd2() {
    homeScore += 2
    console.log(homeScore)
    scoreBoxHomeEl.textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
    console.log(homeScore)
    scoreBoxHomeEl.textContent = homeScore
}

function awayAdd1() {
    awayScore +=1
    scoreBoxAwayEl.textContent = awayScore
}

function awayAdd2() {
    awayScore += 2
    scoreBoxAwayEl.textContent = awayScore
}

function awayAdd3() {
    awayScore += 3
    scoreBoxAwayEl.textContent = awayScore
}

function resetscore() {
    homeScore = 0
    awayScore = 0
    scoreBoxHomeEl.textContent = homeScore
    scoreBoxAwayEl.textContent = awayScore
}