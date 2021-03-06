const CanvasSetup = {
	X : 400,
	Y : 600
};

const PlayerSetup = {
X : ((CanvasSetup.X/2) - (CanvasSetup.X*0.05)),
Y : (CanvasSetup.Y*0.95),
Size : (CanvasSetup.X*0.1),
Color : [255,255,0]
};

function setup() {
	createCanvas(CanvasSetup.X,CanvasSetup.Y);
	background(40);
	fill(PlayerSetup.Color);
	Player=circle(PlayerSetup.X,PlayerSetup.Y,PlayerSetup.Size)
}

function draw() {

}

function keyTyped(){
	draw()
	if (key === 'a') {
		x += -5;
	} else if (key === 'd'){
		x += 5;
	} else {
		console.log("Key not bound:",key);
	}
}
