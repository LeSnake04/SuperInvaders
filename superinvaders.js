let CanvasSetup = {
	X : 400,
	Y : 600
};

let PlayerSetup = {
//FIXME: Player Not showing
X : ((CanvasSetup.X/2) - (CanvasSetup*0.05)),
Y : (CanvasSetup.Y*0.95),
Size : (CanvasSetup*0.1),
Color : [255,255,0]
};

let Player;

function setup() {
	createCanvas(CanvasSetup.X,CanvasSetup.Y);
	background(40);
	console.log(PlayerSetup)
	Player=circle(PlayerSetup.X,PlayerSetup.Y,PlayerSetup.Size);
	Player.x=PlayerSetup.X;
}

function draw() {
	Player.fill(PlayerSetup.Color);
}

function keyTyped(){
	if (key === 'a') {
		Player.move(-5,0,0);
	} else if (key === 'd'){
		Player.move(5,0,0);
	} else {
		console.log("Key not bound: {key}");
	}
	draw()
}
