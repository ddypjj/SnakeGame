/*  Declare constanta   */
//  Get canvas element
const canvas = document.getElementById("canvas");
//  Set 2D drawing context
const ctx = canvas.getContext("2d");

/*  Declate Global Variable */

drawCanvas();
foodPosition();
play();

function drawCanvas(){
    //  Select the colour to fill the canvas
    ctx.fillStyle = "#FFDE03";
    // Draw a "filled" rectangle
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function foodPosition(){
    posX = RandomVal(canvas.width - 10);
    posY = RandomVal(canvas.height - 10);
}

function RandomVal (canvasSize){
    posRandom = Math.round(Math.random() * canvasSize);
    return posRandom;
}

function play(){
    setTimeout(
        function onPlay(){
            snakeEngine();
            foodDraw();
            play();
        },150);
    
}

function snakeEngine(){
    
}
function foodDraw(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(posX, posY, 10, 10);

}
