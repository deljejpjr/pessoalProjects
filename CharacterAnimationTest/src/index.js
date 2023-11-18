import "./styles.css";
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 300);
const CANVAS_HEIGHT = (canvas.height = 300);

let playerImage = new Image();
playerImage.src = "https://www.frankslaboratory.co.uk/downloads/shadow_dog.png"; //"../shadow_dog.png";
//playerImage.src = "/sandbox/src/shadow_dog.png";
const sW = 575; //spriteWigth
const sH = 523; //spriteHeight
let frameX = 0;
let frameY = 0;

const dropDown = document.getElementById("animations");
dropDown.addEventListener("change", function (e) {
  frameY = e.target.value;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(0,0,200,200);
  //ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage, //playerImage
    Math.floor(frameX / 6) * sW, // sx
    frameY * sH, // sy
    sW, // sw
    sH, // sh
    0, // dx
    0, // dy
    200, // dw
    200
  ); // dh

  if (frameX < 36) frameX++;
  else frameX = 0;
  requestAnimationFrame(animate);
}
animate();

/*
 */
