function setup(){
    createCanvas(100,100);
    background(255);
}

var x = 50;
var speed = 1;
function draw(){
    let a = select('#words-div');
    a.position(x,50);
    x += speed;
    if(x >= 100){
        speed = -speed;
    }
    if( x <= 1){
        speed = -speed;
    }
}