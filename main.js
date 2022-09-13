canvas = document.getElementById("mycanvas");
color = "blue";

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "black";

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "red";

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "yellow";

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(250, 235, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "green";

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(350, 235, 40, 0, 2 * Math.PI);
ctx.stroke();
