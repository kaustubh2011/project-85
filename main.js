//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=70;
greencar_height=100;
bg_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=220;
function add() {
	bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=bg_image;
   greencar_img=new Image();
    greencar_img.onload=uploadgreeencar;
   greencar_img.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadbg() {
	ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreeencar() {
	ctx.drawImage(greencar_img,greencar_x,greencar_y,greencar_width,greencar_height);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencar_y>=0)
    {
        greencar_y=greencar_y-10;
        uploadbg();
        uploadgreeencar();
    }
}
function down()
{
    if(greencar_y<=500)
    {
        greencar_y=greencar_y+10;
        uploadbg();
        uploadgreeencar();
    }
}
function left()
{
    if(greencar_x>=0)
    {
        greencar_x=greencar_x-10;
        uploadbg();
        uploadgreeencar();
    }
}
function right()
{
    if(greencar_x<=700)
    {
       greencar_x=greencar_x+10;
        
        uploadbg();
        uploadgreeencar();
    }
}
