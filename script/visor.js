window.onload = function ()  {
	avion = document.getElementById ("avion");
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

function velocidad (valor) {
		valor = valor + "s";
		avion.style.animationDuration = valor;
		avion.style.MozAnimationDuration = valor;
		avion.style.WebkitAnimationDuration = valor;
}