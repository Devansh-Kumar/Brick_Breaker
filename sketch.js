var brick;
var paddle;
var ball;
var edges;
var brickGroup;
var gameState = "Serve"
var lives = 5

function setup() {
  createCanvas(800,400);
  brickGroup = new Group()
for(var i = 50;i<800;i = i+100){
brick = createSprite(i,50,80,20) 
brickGroup.add(brick) 
}
for(var i = 50;i<800;i = i+100){
brick = createSprite(i,80,80,20)
brickGroup.add(brick) 
}
for(var i = 50;i<800;i = i+100){
brick = createSprite(i,110,80,20)
brickGroup.add(brick) 
}
for(var i = 50;i<800;i = i+100){
  brick = createSprite(i,140,80,20)  
  brickGroup.add(brick) 
  }
  for(var i = 50;i<800;i = i+100){
    brick = createSprite(i,170,80,20) 
    brickGroup.add(brick)  
    }
    for(var i = 50;i<800;i = i+100){
      brick = createSprite(i,200,80,20) 
      brickGroup.add(brick)  
      }
      for(var i = 50;i<800;i = i+100){
        brick = createSprite(i,230,80,20)
        brickGroup.add(brick)   
        }
     paddle = createSprite(400,390,150,15)
     ball = createSprite(400,374,15,15)

edges = createEdgeSprites()

}

function draw() {
  background(0);
  
  fill("red") 
  textSize(24)
text("LIVES:- "+lives,670,25)
for(var i=0;i<brickGroup.length;i = i+1){
  if(ball.isTouching(brickGroup.get(i))){
    ball.bounceOff(brickGroup.get(i))
  brickGroup.get(i).destroy() 
  
  }
}
if(keyDown("space") && gameState === "Serve"){
  ball.velocityX = 5
  ball.velocityY = -5  
  gameState = "play"
  
}
if(gameState === "play"){
  paddle.x = mouseX
}

if(ball.y>400){
ball.x = 400
ball.y = 374
paddle.x = 400
paddle.y = 390
ball.setVelocity(0,0)
gameState = "Serve"
lives = lives-1  
}

if(lives<1){
gameState = "end"
} 

if(gameState === "end"){
  textSize(28)
  fill("blue")
text("GAME OVER",370,300)
}

ball.bounceOff(edges[0])
ball.bounceOff(edges[1])
ball.bounceOff(edges[2])
//ball.bounceOff(brick)
ball.bounceOff(paddle)
  drawSprites();
}