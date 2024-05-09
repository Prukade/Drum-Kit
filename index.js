
var numberofDrumeButtons =document.querySelectorAll(".drum").length;

for(var i=0; i<numberofDrumeButtons;i++){
	
document.querySelectorAll(".drum")[i].addEventListener("click" ,function()
{
	
	


var buttonInnnerHtml=this.innerHTML;
makesound(buttonInnnerHtml);
});
}


//detecting the key press and make as relevent sound

document.addEventListener("keypress",function(event){

	makesound(event.key);

});

function makesound(key)
{
switch(key)
{
	case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

	case "s":
	var tom3=new Audio("sounds/tom-3.mp3");
	tom3.play();
	break;
	
	case "d":
	var tom4=new Audio("sounds/tom-4.mp3");
	tom4.play();
	break;
	
	case "j":
	var snare=new Audio("sounds/snare.mp3");
	snare.play();
break;
	
	case "k":
	var audio=new Audio("sounds/crash.mp3");
	audio.play();
	break;	
case "l":
	var audio=new Audio("sounds/kick-bass.mp3");
	audio.play();
	break;
	 default:
	alert("Wrong input");
break;	
	
}

}

//var audio=new Audio("sounds/tom-1.mp3");
//audio.play();



// var HouseKeeper1={
// Name:"Omkar",
// yearsofexperience:12
// }
