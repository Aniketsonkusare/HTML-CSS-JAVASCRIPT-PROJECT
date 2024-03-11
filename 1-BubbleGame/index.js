function MakeBubble() {
    let clutter = "";
    
    for(let i = 1; i <= 102; i++){
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class='bubble'>${rn}</div>`
    }
    
    document.querySelector('.pbtm').innerHTML = clutter
}

let Timer = 60
var hitrun = 0
function runTimer() {
    let TimerInp = setInterval(() => {
        if (Timer > 0) {
            Timer--;
            document.getElementById('timerinp').textContent = Timer    
        }
        else{
            clearInterval(TimerInp)
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over</h1> <h1>Your Score is: ${score}</h1>`
        }
    }, 1000);    
}

function getNewHit() {
    hitrun = Math.floor(Math.random() * 10)
    document.getElementById('newHit').textContent = hitrun
}

let score = 0;

function IncreaseScore() {
    let incScore = score += 10;
    document.getElementById('incScore').textContent = incScore
}

document.querySelector('.pbtm').addEventListener('click',function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrun) {
        IncreaseScore();
        MakeBubble();
        getNewHit();    
    }
    else{
        document.querySelector('.pbtm').innerHTML = `<h1>You are Selected Wrong Bubble Please Restart Game, <br> Your Score is: ${score}</h1>`
    }
})

runTimer()
MakeBubble()
getNewHit()