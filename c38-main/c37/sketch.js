var database
var form,player,game,

var gameState=0;
var playerCount;
var distance = 0;
var allplayers;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth -30, displayHeight -30);
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    background("white");
    if(playerCount === 4 ) {
        game.update(1)
    }
    if(gameState === 1){
        clear()
        game.play();
    }

}