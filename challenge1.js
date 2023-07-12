
let submitBtn = document.getElementById('btnSubmit');
let input = document.getElementById("input");
let userEmail = document.getElementById("userEmail");
let confirmation = document.getElementById("confirmation") ;

// On définit le format de l'adrresse mail
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

confirmation.style.display = 'none';
error.style.display = 'none';

function soumettre(){
	// Teste de la valeur de l'input avec la methode js test()
	if(pattern.test(input.value))
	{
		let formulaire = document.getElementById("formulaire");
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
	let formulaire = document.getElementById("formulaire");

	confirmation.style.display = "none";
	formulaire.style.removeProperty("display");

	input.value = "";
}


	
