
var score=0;
var life=3;
var gameState=1;


var asteroidGroup, coinGroup, fuelGroup, laserGroup;


 var blast_img1, blast_img2, blast_img3, blast_img4, blast_img5, blast_img6, blast_img7;
 var coin_img, back_img,back2_img,  laser_img, fule_img , asteroid_img1, collided,asteroid_img2, asteroid_img3, player_img;
 var enemy1_img, enemy2_img, life_img, win_img, lose_img, restartball_img, blueball_img;

 
function preload(){

player_img = loadImage("spaceship.png");
enemy1_img = loadImage("enemy1.gif");
enemy2_img = loadImage("enemy2.gif");


blast_img1 = loadImage("blast1.png");
blast_img2 = loadImage("blast2.png");
blast_img3 = loadImage("blast3.png");
blast_img4 = loadImage("blast4.png");
blast_img5 = loadImage("blast5.png");
blast_img6 = loadImage("blast6.png");
blast_img7 = loadImage("blast7.png");

collided = loadAnimation("blast1.png","blast2.png","blast3.png","blast4.png","blast5.png","blast6.png","blast7.png" );
laser_img = loadImage("laser_attack.jpg");

life_img = loadImage("pixel_heart.png");
coin_img = loadImage("coin.png");
fule_img = loadImage("fuel.png");

back_img = loadImage("bgtrack.jpg");
back2_img = loadImage("bg2.jpg");
asteroid_img1 = loadImage("astroid1.png");
asteroid_img2 = loadImage("astroid2.png");
asteroid_img3 = loadImage("astroid3.png");
redball_img = loadImage("enemy_spaceship_attack.png");
blueball_img = loadImage("enemy_spaceship_attack1.png");
win_img = loadImage("win.png");
lose_img = loadImage("game_over.png");

}

function setup() {

canvas = createCanvas(displayWidth, displayHeight);

space = createSprite(width/2,height/2,width,height);
space.addImage(back_img);
space.velocityY = 2

spaceship = createSprite(width/2,height-100);
spaceship.addImage(player_img);
spaceship.scale= 0.5;








}

function draw(){
background(back_img);
drawSprites();






    
}










