/*  Declare constanta   */
//  Get canvas element
const canvas = document.getElementById("canvas");
//  Set 2D drawing context
const ctx = canvas.getContext("2d");

//  Key press arrow
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

/*  Declate Global Variable */
//Declare initial snake length
var snakeBody = [
  {x: 100, y: 140},
  {x: 100, y: 130},
  {x: 100, y: 120}  
];

//  Move snake per tile axis
var axisX = 0;
var axisY = 10;

var moveSnake = document.addEventListener("keydown", moveSnake);

drawCanvas();
foodPosition();
play();

function play(){
    setTimeout(
        function OnTick(){
            clearCanvas();
            snakeEngine();
            snakeDraw();
            foodDraw();
            play();
        },150);
    
}

function drawCanvas(){
    //  Select colour to fill the canvas
    ctx.fillStyle = "#FFDE03";
    // Draw a "filled" rectangle
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function foodPosition(){
    posX = RandomVal(canvas.width - 10);
    posY = RandomVal(canvas.height - 10);

    for (let i = 0; i < snakeBody.length; i++){
        const foodisOnSnake = snakeBody[i].x === posX && snakeBody[i].y === posY;
        if (foodisOnSnake) {
            foodPosition();
        }
    }
}

function RandomVal (canvasSize){
    posRandom = Math.floor(Math.random() * canvasSize / 10) * 10;
    return posRandom;
}

function clearCanvas() {
    ctx.fillStyle = "#FFDE03";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function snakeEngine(){
    const head = {x: snakeBody[0].x + axisX, y: snakeBody[0].y + axisY};
    snakeBody.unshift(head);
    const didEatFood = snakeBody[0].x === posX && snakeBody[0].y === posY;
    if (didEatFood) {
      foodPosition();
    } else {
      snakeBody.pop();
    }
    
}

function snakeDraw(){
    ctx.fillStyle = '#000000';

    for (let i = 0; i<snakeBody.length; i++){
      ctx.fillRect(snakeBody[i].x, snakeBody[i].y,10, 10);
    }
}
function foodDraw(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(posX, posY, 10, 10);

}

function moveSnake(event) {

    const keyPressed = event.keyCode;

    const goingUp = axisX === -10;
    const goingDown = axisY === 10;
    const goingRight = axisX === 10;
    const goingLeft = axisX === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        axisX = -10;
        axisY = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        axisX = 0;
        axisY = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        axisX = 10;
        axisY = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        axisX = 0;
        axisY = 10;
    }
}
