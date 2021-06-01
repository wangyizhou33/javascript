const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 10;
let isPressed = false;
let color = 'black';

let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {

    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x, y);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;

    }
});

increaseBtn.addEventListener('click', () => {
    size += 5
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2); // "/2" to match line width
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerHTML = size;
}