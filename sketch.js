var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;

var car1,car2;
var cars = [];
var imgCar1, imgCar2, imgTrack;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  imgCar1 = loadImage("./assets/car1.png");
  imgCar2 = loadImage("./assets/car2.png");
  imgTrack = loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
