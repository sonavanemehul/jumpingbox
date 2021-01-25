var canvas;

var edges;

var purpleSurface;

var blueSurfaces;

var yellowSurfaces;

var redSurfaces;

var ball;


var music;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
 canvas = createCanvas(600,600);

 edges = createEdgeSprites();

 //create 4 different surfaces

 purpleSurface = createSprite(60,590,130,30);
 purpleSurface.shapeColor = "purple";

 blueSurface = createSprite(220,590,130,30);
 blueSurface.shapeColor = "blue";

 yellowSurface = createSprite(380,590,130,30);
 yellowSurface.shapeColor = "yellow";

 redSurface = createSprite(540,590,130,30);
 redSurface.shapeColor = " red";



//create box sprite and give velocity

ball = createSprite(random(20,350),20,40,40);
ball.shapeColor="white";
music.play();
ball.velocityX = 5;
ball.velocityY = 6;





}

function draw() {
 
 background("pink");

 


 ball.bounceOff(edges);
 
 if(redSurface.isTouching(ball) && ball.bounceOff(redSurface)){
    //change Color here
    ball.shapeColor="red";
}


if(yellowSurface.isTouching(ball) && ball.bounceOff(yellowSurface)){
    //change Color here
    ball.shapeColor="yellow";
}

if(purpleSurface.isTouching(ball) && ball.bounceOff(purpleSurface)){
    //change Color here
    ball.shapeColor="purple";
}

if(blueSurface.isTouching(ball)){
    ball.velocityX = 0;
    ball.velocityY = 0;
    ball.shapeColor="blue";
    music.stop();
}

drawSprites();
    //add condition to check if box touching surface and make it box
    
}

