let cvs = document.getElementById("canvas").getContext( "2d" );
let sPosx = 80;
let sPosy = 80;
let nPosx = 0;
let nPosy = 0;
let fPosx = 140;
let fPosy = 140;
let snakeTail = [];
let snakeSize = 1;
let score = 0;
let gameStatus = "Ready";

// Onload functions
window.onload = function(){
    document.addEventListener("keydown",inputControl);
    game = setInterval(maingame,200);
}


// Main Game Function
function maingame(){
    document.getElementById("game-status").innerHTML = gameStatus;
    document.getElementById( "score" ).innerHTML = score;
    //Game area

    // move snake
    sPosx += nPosx;
    sPosy += nPosy;

    // control snake movement

    if(sPosx>400){
        sPosx=0;
    }
    if(sPosy>400){
        sPosy=0;
    }

    if(sPosx<0){
        sPosx=400;
    }
    if(sPosy<0){
        sPosy=400;
    }
    //Ithu background-color
    cvs.fillStyle = "black";
    cvs.fillRect(0,0,400,400)

    // Ithu Grid line varaykkan
    for(let cl=0;cl<400;cl+=20){
        cvs.moveTo(cl,0);
        cvs.lineTo(cl,400);
    }
    for(let rl=0;rl<400;rl+=20){
        cvs.moveTo(0,rl);
        cvs.lineTo(400,rl);
    }

    cvs.strokeStyle = "grey";
    cvs.stroke();

    // Paambu sir
    cvs.fillStyle = "green";
    // cvs.fillRect(sPosx,sPosy,20,20);
    for(let i = 0; i<snakeTail.length; i++){
        cvs.fillRect(
            snakeTail[i].x, snakeTail[i].y,20,20
        );
        
        

        if(sPosx == snakeTail[i].x && sPosy == snakeTail[i].y && snakeSize > 1){
            clearInterval(game);
            gameStatus = "Game over";
            document.getElementById("game-status").innerHTML = gameStatus;
            alert(gameStatus);
        }
        }
    //Fruit
    cvs.fillStyle = "red";
    cvs.fillRect(fPosx,fPosy,20,20);



    // if snake eat fruit
    if (sPosx == fPosx && sPosy == fPosy) {
        snakeSize++;
        score+=5;
        fPosx = Math.floor(Math.random()*20)*20;
        fPosy = Math.floor(Mathh.random()*20)*20;
    }
    
    snakeTail.push({x: sPosx, y: sPosy});
    while(snakeTail.length>snakeSize){
        snakeTail.shift();
    }
}


// Input control
function inputControl(e){
    switch(e.keyCode){
        case 38:
            // Up
            nPosy-=20;
            nPosx = 0;
            break;
        case 40:
            //  Down
            nPosy+=20;
            nPosx = 0;
            break;
        case 39:
            //  Right
            nPosx+=20;
            nPosy = 0;
            break;
        case 37:
            // Left
            nPosx-=20;
            nPosy = 0;
            break;

    }
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
        gameStatus = "Game started";
        document.getElementById("game=status").innerHTML = gameStatus;
    }
    }
