const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
 
// ----------------------------------------------
 
var range = document.getElementById('range-line');
 
var rangeinput = document.getElementById('range-input');
 
var colorPicker = document.getElementById('color-change');


function myFunction() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

colorPicker.addEventListener("change" , event => {
    ctx.strokeStyle = event.target.value; 
})
 
rangeinput.addEventListener("input" , event => {
    var width = event.target.value;       
    range.innerHTML = width;
    ctx.lineWidth = width;

})
ctx.lineWidth = '30';
 
let  obj = {
    x:0 ,
    y:0 ,
}
 
document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
window.addEventListener('resize', resize);
resize();
 
function resize() {
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
}
 
// canvasi elementi vra mkniki slaqi jamanak kordinat stanal
 
function reposition(event) {
    obj.x = event.clientX - canvas.offsetLeft;
    obj.y = event.clientY - canvas.offsetTop;
}
 
function start(event) {
    document.addEventListener('mousemove' , draw);
    reposition(event);
}
 
 
function stop() {
    document.removeEventListener('mousemove' , draw);
}
 
function draw() {
    ctx.beginPath();
    // ctx.lineWidth = '5';
    // ctx.strokeStyle = colorPicker;
    ctx.lineCap = "round";
    ctx.moveTo(obj.x , obj.y );
    reposition(event);
    ctx.lineTo(obj.x , obj.y);
    ctx.stroke();
}
var clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }