let CanvasSetup = {
	X : 400,
	Y : 600
};

let PlayerSetup = {
//FIXME: Player Not showing
X : ((CanvasSetup.X/2) - (CanvasSetup.X*0.05)),
Y : (CanvasSetup.Y*0.95),
Size : (CanvasSetup.X*0.1),
Color : [255,255,0]
};

function setup() {
	createCanvas(CanvasSetup.X,CanvasSetup.Y);
	background(40);
	console.log(PlayerSetup);
	Player=circle(PlayerSetup.X,PlayerSetup.Y,PlayerSetup.Size);
	Player.x=PlayerSetup.XM
}

function draw() {
	Player.fill(PlayerSetup.Color);
}

function keyTyped(){
	draw()
	if (key === 'a') {
		Player.x(-5);
	} else if (key === 'd'){
		Player.x(5);
	} else {
		console.log("Key not bound:",key);
	}
	
}
