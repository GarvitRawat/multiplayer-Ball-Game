var ball ,database, ref1, position

function setup() { 
  createCanvas(800,400); 
  ball = createSprite(400, 200, 50, 50); 
  ball.shapeColor="red" 
  database = firebase.database()
  ref1 = database.ref('ball/position')
  ref1.on("value", readPosition, showError)
  console.log(database)
} 

function draw() { 
  background(0); 

  if(position !== undefined){
    if(keyDown(LEFT_ARROW)){ 
      changePosition(-1,0) 
    } 
    if(keyDown(RIGHT_ARROW)){ 
      changePosition(1,0) 
    } 
    if(keyDown(UP_ARROW)){ 
      changePosition(0,-1) 
    } 
    if(keyDown(DOWN_ARROW)){ 
      changePosition(0,1) 
    } 
  }

  drawSprites(); 
} 
function changePosition(x,y){ 
 database.ref('ball/position').set({
   x : position.x + x,
   y : position.y + y
 })
}

function readPosition(data){
  position = data.val()
  ball.x = position.x
  ball.y = position.y
}

function showError(){
  console.log("error")
}