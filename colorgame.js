var numberOfSq=6;
var colors= generateRandomColors(numberOfSq)

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

var newColors = document.querySelector("#newColors");

var easy = document.querySelector("#easy-btn");
var hard = document.querySelector("#hard-btn");
hard.classList.add("selected");
easy.addEventListener("click",function()
{   numberOfSq=3;
	message.textContent="";
	h1.style.backgroundColor="steelblue";
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors=generateRandomColors(numberOfSq);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
    for(var i =0 ;i<6;i++)
    {   // element h agr color me toh mtlb phele 3
    	if(colors[i])
    	{ squares[i].style.backgroundColor = colors[i];

    	}
    	else
    	{
    		squares[i].style.display = "none";
    	}
    }

});
hard.addEventListener("click",function()
{  numberOfSq=6
	message.textContent="";
	easy.classList.remove("selected");
   hard.classList.add("selected");
   h1.style.backgroundColor="steelblue";
   colors=generateRandomColors(numberOfSq);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
    for(var i =0 ;i<6;i++)
    {   // element h agr color me toh mtlb phele 3
     squares[i].style.backgroundColor = colors[i];
     squares[i].style.display="block";	
    }	
});
newColors.addEventListener("click",function()
{  newColors.textContent = "New Colors";
   message.textContent="";
	// generate colors
	colors=generateRandomColors(numberOfSq);
    // correct ans will  be 
    pickedColor = pickcolor();

    colorDisplay.textContent = pickedColor;

   h1.style.backgroundColor="steelblue";

    for(var i=0;i<squares.length;i++)
{    //asigning colors
	squares[i].style.backgroundColor=colors[i];
}
});

for(var i=0;i<squares.length;i++)
{    //asigning colors
	squares[i].style.backgroundColor=colors[i];

	//asigning click evemts

	squares[i].addEventListener("click",function()
	{
      if(this.style.backgroundColor===pickedColor)
      {
      	message.textContent="Correct";
      	h1.style.backgroundColor=pickedColor;
        newColors.textContent = "Play Again";
      	for(var i=0;i<squares.length;i++)
      		squares[i].style.backgroundColor=pickedColor;
      }
      else
      { 
                this.style.backgroundColor = "black";
                message.textContent="Try Again";
      }
	});
}             


function pickcolor()
{

return colors[Math.floor(Math.random()*(colors.length))];
}

function generateRandomColors(num)
{ // make an aRRy
   var a=[];
   //add random colors
   for(var i=0;i<num;i++)
   { 
   	  
   	a.push(randomColor());
   }
   return a;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
   	var g = Math.floor(Math.random()*256);
   	var b = Math.floor(Math.random()*256);
   	  return "rgb("+ r + ", " + g + ", " + b + ")";
}