// Get the ball element
const ball = document.getElementById("ball");

// Get the viewport dimensions
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Set the ball's initial position
let ballX = viewportWidth / 2;
let ballY = viewportHeight / 2;
ball.style.left = ballX + "px";
ball.style.top = ballY + "px";

// Set the ball's speed
const ballSpeed = 10;

// Set the ball's boundaries
const minX = 0;
const minY = 0;
const maxX = viewportWidth - ball.offsetWidth;
const maxY = viewportHeight - ball.offsetHeight;

// Move the ball
function moveBall(direction) {
	switch (direction) {
		case "up":
			if (ballY > minY) {
				ballY -= ballSpeed;
			}
			break;
		case "left":
			if (ballX > minX) {
				ballX -= ballSpeed;
			}
			break;
		case "down":
			if (ballY < maxY) {
				ballY += ballSpeed;
			}
			break;
		case "right":
			if (ballX < maxX) {
				ballX += ballSpeed;
			}
			break;
	}

	ball.style.left = ballX + "px";
	ball.style.top = ballY + "px";
}

// Listen for key presses
document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "w":
			moveBall("up");
			break;
		case "a":
			moveBall("left");
			break;
		case "s":
			moveBall("down");
			break;
		case "d":
      moveBall("right");
      	break;
	}
});
