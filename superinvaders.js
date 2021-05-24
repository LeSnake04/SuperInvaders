function setup() {
	createCanvas(400,600);
}

function draw() {
  background(40);
	player=ellipse(180,570,40,40);
	player.fill(255,255,0);
	if (keyIsPressed === true) {
		if (key == "a") {
			player.move(5,0,0);
		}
	}
}
