const canvas = document.getElementById("flow");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const style = getComputedStyle(document.documentElement);
  ctx.strokeStyle = style.getPropertyValue("--flow");
  ctx.lineWidth = 1;

  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 20) {
      const offset = Math.sin(x * 0.004 + y * 0.01 + t) * 12;
      ctx.lineTo(x, y + offset);
    }
    ctx.stroke();
  }

  t += 0.003;
  requestAnimationFrame(draw);
}

draw();
