var play;
var how;
var about;
//var body = document.querySelector(".body");

var htp, ply, backButton, atg, lvl1, htpimg, atgimg;
var backButton, nextButton;

var pl1, plimg1, pl2, clueimg1, pl3, ground, groundImage;
var ddr;
var dd_running , dr , d_running;

var score = 0;

var ddr;

var gameState = "wait";

 //ddr = donald duck running , dd = dinosuar running

function preload() {
  dd_running = loadAnimation("wlk1.png" , "wlk2.png" , "ideal.png")
   d_running = loadAnimation("dinowalk-1.png" , "dinowalk-2.png" , "dinowalk-3.png","dinowalk-4.png" , "dinowalk-5.png" , "dinowalk-6.png","dinowalk-7.png" , "dinowalk-8.png" , "dinowalk-9.png","dinowalk-10.png" , "dinowalk-11.png")
  gcimg = loadImage("goldcoin.png")
  groundImage = loadImage("runnerbg.png");
  waitimg = loadImage("splash.gif");
  htpimg = loadImage("htpbackground.png");
  atgimg = loadImage("atgbackground.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 

  // ddr = createImg("running.gif");
  // ddr.position(1150, 235);
  // ddr.size(850, 650);
  // ddr.class("plimg1");

  // ground = createImg("runnerbg.png");
  // ground.velocityX = -(6 + 3*10/100);

  plimg1 = createImg("plimg-1.png");
  plimg1.position(1050, 835);
  plimg1.size(125, 125);
  plimg1.class("plimg1");

  clueimg1 = createImg("clue1.png");
  clueimg1.position(1220, 60);
  clueimg1.size(425, 500);
  clueimg1.class("plimg1");

  pl2 = createVideo("pl2.mp4");
  pl2.position(-50, 0);
  pl2.size(windowWidth + 200, windowHeight);

  pl3 = createVideo("pl3.mp4");
  pl3.position(-10, 0);
  pl3.size(windowWidth + 200, windowHeight);

  pl1 = createVideo("pl1.mp4");
  pl1.position(-10, 0);
  pl1.size(windowWidth + 200, windowHeight);

  play = createImg("Play.png");
  play.position(width / 2 + 200, height - 150);
  play.size(250, 100);

  backButton = createImg("backArrow.png");
  backButton.position(width - 1900, 10);
  backButton.size(90, 80);

  nextButton = createImg("nextbutton.png");
  nextButton.position(width / 2 - 100, height - 150);
  nextButton.size(250, 100);

  how = createImg("how.png");
  how.position(width / 2 - 100, height - 150);
  how.size(250, 100);

  about = createImg("about.png");
  about.position(width / 2 + width / 3.8, height - 150);
  about.size(250, 100);

  //ground
  bgsprite = createSprite(width / 2, height / 2, width, height);
  bgsprite.addImage(groundImage);
  bgsprite.visible = false;
  bgsprite.scale = 0.7;

  ddr = createSprite(windowWidth - 1700 ,windowHeight- 280 , 20 , 20);
  ddr.addAnimation("running" , dd_running);
  ddr.class = "plimg1";
}



function level1clues(){
if(frameCount%320 == 0){

         ddr.visible=true;
    
randy=Math.round(random(5,height-(height/2)))
clueobject=createSprite(width,randy , 20 ,20);
clueobject.addImage(gcimg);
clueobject.size = 0.2;

clueobject.velocityX=-2;


  // dr = createSprite( windowWidth - 1000 , windowHeight- 280  );
  // dr.addAnimation("running" , d_running);
  // dr.class = "plimg1";
  // dr.scale = 0.37;


}




}

function hide() {
  play.hide();
  how.hide();
  about.hide();
  backButton.hide();
  pl1.hide();
  pl2.hide();
  pl3.hide();
  nextButton.hide();
}

function draw() {
  if (gameState === "wait") {
    background(waitimg);
    bgsprite.visible = false;
// dr.scale=0.0007;
    play.show();
    how.show();
    about.show();
    backButton.hide();
    pl1.hide();
    pl1.stop();
    plimg1.hide();
    pl2.hide();
    clueimg1.hide();
    pl3.hide();
    nextButton.hide();
    ddr.visible = false;
    
clueobject.visible = false;
  }

  plimg1.mousePressed(() => {
    gameState = "playstate";
    plimg1.hide();
    pl1.stop();
    pl1.hide();
    pl2.show();
    pl2.play();
    clueimg1.show();
    pl3.hide();
    nextButton.hide();
    ddr.visible=false;
    // dr.scale=0.0007
  });

  clueimg1.mousePressed(() => {
    ddr.visible=false;
    clueimg1.hide();
    pl2.stop();
    pl2.hide();
    pl3.show();
    pl3.play();
    // dr.scale=0.0007
    nextButton.show();
  });

  nextButton.mousePressed(() => {
    gameState = "playstate1";
    pl3.hide();
    pl3.stop();
    nextButton.hide();
    ddr.visible=true;
      // dr.visible=true;
  });

  if (gameState === "playstate1") {
   // background(groundImage);
    //  dr.visible=true;
       ddr.visible=true;
    bgsprite.visible = true;
    bgsprite.class = "bgimg"
    backButton.show();
    level1clues();

    bgsprite.velocityX = -4;

if(bgsprite.x<=width/4){
    bgsprite.x=width/2
}


//level1clues()

  }

  if (gameState === "how") {
    background(htpimg);
    backButton.show();
    plimg1.hide();
    pl2.hide();
    clueimg1.hide();
    nextButton.hide();
    pl3.hide();
    ddr.visible=false;
    // dr.scale=0.0007;
    
clueobject.visible = false;
  }

  if (gameState === "about") {
    background(atgimg);
    backButton.show();
    plimg1.hide();
    pl2.hide();
    clueimg1.hide();
    nextButton.hide();
    pl3.hide();
    ddr.visible=false;
    // dr.scale=0.0007;
    
clueobject.visible = false;
  }

  play.mousePressed(() => {
    play.hide();
    about.hide();
    how.hide();
    pl1.play();
    pl1.show();
    gameState = "playstate";
    plimg1.show();
  });
  how.mousePressed(() => {
    play.hide();
    about.hide();
    how.hide();
    gameState = "how";
  });
  about.mousePressed(() => {
    play.hide();
    about.hide();
    how.hide();
    //body.style.background="#A5E1FF";
    //  atg = new Atg();
    //  atg.display();
    gameState = "about";
  });

  backButton.mousePressed(() => {
    gameState = "wait";
  });

  drawSprites();
}