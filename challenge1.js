
let submitBtn = document.getElementById('btnSubmit');
let input = document.getElementById("input");
let userEmail = document.getElementById("userEmail");
let confirmation = document.getElementById("confirmation");
let formulaire = document.getElementById("formulaire");

// On définit le format de l'adrresse mail
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

confirmation.style.display = 'none';
error.style.display = 'none';

function soumettre(){
	// Teste de la valeur de l'input avec la methode js test()
	if(pattern.test(input.value))
	{
		formulaire.style.display = "none";
		confirmation.style.removeProperty("display");

		userEmail.innerText = input.value;
	}
	else
	{
		let error = document.getElementById("error");
		error.style.removeProperty("display");
	}	
}

function confirmer(){
	confirmation.style.display = "none";
	formulaire.style.removeProperty("display");

	input.value = "";
}

function changerImage(){
	let largeur = formulaire.offsetWidth;
	let formImg = document.getElementById("formImg")
	if(largeur < 517)
	{
		formImg.innerHTML = '<img class="img-fluid align-self-center py-md-0" src="img/illustration-sign-up-mobile.svg">';
	}else
	{
		formImg.innerHTML = '<img class="img-fluid p-4 py-md-0" src="img/illustration-sign-up-desktop.svg">';
	}
}

window.addEventListener('resize', changerImage);

changerImage();


	
