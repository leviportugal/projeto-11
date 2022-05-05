var pista
var pistaimage
var jake
var jakeanimation
var barreira1
var barreira2



function preload(){
  //imagens pré-carregadas
pistaimage = loadImage ("path.png")
jakeanimation = loadAnimation ("Jake1.png","Jake2.png",
"jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
pista = createSprite (200,200,60,60)
pista.addImage (pistaimage)
pista.velocityY= 2
jake=createSprite (200,300,20,20)
jake.addAnimation ("jakerun",jakeanimation)
barreira1 = createSprite (10,200,100,400)
barreira2 = createSprite (400,200,100,400)
}

function draw() {
  background(0);
drawSprites ()
if (pista.y>400){
  pista.y = height/2
  }
jake.x=mouseX
jake.collide (barreira1)
jake.collide (barreira2)

}



