var ball;
var data_base;
var ball_position;
var pos;

function setup(){
    createCanvas(500,500);
    data_base = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ball_position = data_base.ref("ball/position");
    ball_position.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   data_base.ref("ball/position").set({x:pos.x+x, y:pos.y+y});
}


function readPosition(data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;

}

