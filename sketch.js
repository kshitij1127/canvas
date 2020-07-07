var sketchpen,canvas,database 

function setup(){

createCanvas(1600,1600)

database = firebase.database()

var loc = database.ref('drawing/canvas')
loc.on("value",readOP)
sketchpen = createSprite(200,200,10,100)

}

function draw(){
background("white")
if(keyCode === 49){
strokeWeight(4)
}
if(keyCode === 50){
strokeWeight(5)
}
if(keyCode === 51){
    strokeWeight(6)
}
if(keyCode === 52){
    strokeWeight(7)
}

  drawSprites()

}


function readOP(data){
database.ref('drawing/canvas').set({
x : mouseX,
y : mouseY,

})
}
