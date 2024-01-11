// game constant and variable
let inputDir = {x: 0, y: 0};
const foodsound = new Audio('music/food.mp3');
const gameoversound = new Audio('music/gameover.mp3');
const movesound = new Audio('music/move.mp3');
const musicsound = new Audio('music/music.mp3');
let speed = 10;   // 0.5 second snack move
let lastpainttime = 0;
let score = 0;
let snackArr = [
    {x: 13, y: 15}
] 

food = {x: 6, y: 7};

// game function
function main(ctime){   // ctime means(current time)
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastpainttime)/1000 < 1/speed ){
        return;
    } 
    lastpainttime = ctime;
    gameEngine();
}

function iscollide(snack){
    // if you collide into yourself
    for (let i = 1; i < snackArr.length; i++) {
        if(snack[i].x === snack[0].x && snack[i].y === snack[0].y){
            return true;
        }
    }

    // if you collide into the wall
    if (snack[0].x >= 18 || snack[0].x <= 0 || snack[0].y >= 18 || snack[0].y <= 0) {     // important
        return true
    }
    return false;
}

function gameEngine(){
    // part 1: updating the snack array
    if (iscollide(snackArr)){
        gameoversound.play();
        musicsound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game over. press any key to play again!");
        snackArr = [{x: 13, y: 15}];
        // musicsound.play();
        score = 0;
    }

    // if you have eaten the food, increament the score and regenerate the food
    if (snackArr[0].y === food.y && snackArr[0].x === food.x){
        foodsound.play();
        score += 1;
        if(score > highscoreval){
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            highscorebox.innerHTML = "High Score: " + highscoreval;
        }
        scorebox.innerHTML = "Score: " + score; 
        snackArr.unshift({x: snackArr[0].x + inputDir.x, y: snackArr[0].y + inputDir.y})   // add the food
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}       // random food generate
    }

    // moving the snake
    for (let i = snackArr.length - 2; i >= 0; i--) {    // snackArr.length-2 means second last element
        snackArr[i+1] = {...snackArr[i]}               // {...snackArr[i]} -> new object
    }

    snackArr[0].x += inputDir.x;
    snackArr[0].y += inputDir.y;

    // part 2: display the snack and food
    // display the snake
    board.innerHTML = "";
    snackArr.forEach((e, index) => {
        snackElement = document.createElement('div');
        snackElement.style.gridRowStart = e.y; 
        snackElement.style.gridColumnStart = e.x;
        // snackElement.classList.add('snack');
        if(index === 0){
            snackElement.classList.add('head');
        }
        else{
            snackElement.classList.add('snack');
        }
        board.appendChild(snackElement);
    });

    // display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y; 
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}

// main logic start here

let highscore = localStorage.getItem("highscore");
if(highscore === null){
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval));       // as a store string
}
else{
    highscoreval = JSON.parse(highscore);      
    highscorebox.innerHTML = "High Score: " + highscore; 
}


window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x: 0, y: 1}     // start the game
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;           // inputdir means(input direction)
            inputDir.y = -1;
            break;
            
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;    
            break;

        case "ArrowRight":
            console.log("ArrowRigth");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
});