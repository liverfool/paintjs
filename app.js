const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.str

let painting = false;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}
function stopPainting(){
    painting = false;
}
function onmousedown(event){
    painting = true;
}
function onmouseup(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onmousedown);
    canvas.addEventListener("mouseup", onmouseup);
    canvas.addEventListener("mouseleave", onmouseleave);
}