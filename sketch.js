var boxer,boxer_stance;
var karateKid,karateKid_stance;
var gameState,playerCount,database;
var formObject, gameObject ,playerObject;
function preload(){
boxer_stance = loadImage("./assets/boxer_stance.gif");
//karateKid_stance = loadImage("./assets/karateKid_stance.gif");



}




function setup() {
  createCanvas(windowWidth,windowHeight);
  // boxer=createSprite(50,300,50,50);
  // boxer.addImage("stance",boxer_stance);
  //karateKid=createSprite(100,300,50,50);
  //karateKid.addImage("stance",karateKid_stance);
  database=firebase.database()
  gameObject =new Game()
  gameObject.getState()
  //console.log(gameState)
  
}

function draw() 
{
  background("yellow");
  if(gameState==0){
    
    gameObject.start()

  }
  drawSprites();
}

