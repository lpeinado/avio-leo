window.onload = function ()  {
	playa = document.getElementById ("playa");
}

function parar() {
		playa.style.animationPlayState = "paused";
		playa.style.MozAnimationPlayState = "paused";
		playa.style.WebkitAnimationPlayState = "paused";	
}


function seguir () {
		playa.style.animationPlayState = "running";
		playa.style.MozAnimationPlayState = "running";
		playa.style.WebkitAnimationPlayState = "running";
}



function parar() {
		avion.style.animationPlayState = "paused";
		avion.style.MozAnimationPlayState = "paused";
		avion.style.WebkitAnimationPlayState = "paused";	
}


function seguir () {
		avion.style.animationPlayState = "running";
		avion.style.MozAnimationPlayState = "running";
		avion.style.WebkitAnimationPlayState = "running";
}

function velocidad (num) {
		valor = num + "s";
		avion.style.animationDuration = valor;
		avion.style.MozAnimationDuration = valor;
		avion.style.WebkitAnimationDuration = valor;

}



function velocidad (num) {
		valor = num + "s";
		playa.style.animationDuration = valor;
		playa.style.MozAnimationDuration = valor;
		playa.style.WebkitAnimationDuration = valor;

}



