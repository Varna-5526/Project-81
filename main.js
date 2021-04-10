canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_lines;
        ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_mouse_x ;
        last_position_of_touch_y = current_position_of_mouse_y ; 
    }
}