
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.linewidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X="+mouse_x+",Y="+mouse_y);
    circle(mouse_x,mouse_y);
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.linewidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}