const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 10;
let y = 10;

ctx.fillStyle = 'blue';
ctx.fillRect(x, y, 150, 100);

ctx.fillStyle = 'red';
ctx.fillRect(x + 10, y + 10, 100, 50);
