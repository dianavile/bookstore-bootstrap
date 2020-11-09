//declare & assign variables to fetch forms
const form = document.getElementById("myFormId");//search
const form2 = document.getElementById("myFormId2");//registrer
const form3 = document.getElementById("myFormId3");//login

function searchForm() {
	let acumErrores = 0;
	form.classList.remove("is-invalid");

	//let search = document.getElementById("search");
	let search = document.forms["myForm"]["search"];//name (form), id (input search)
    
	//condicionales
	//"innerHTML" = texto assignado por un variable VS "textContent" = texto directo
	if (search.value == "") {
		search.classList.add("is-invalid"); //add invalid list if search is empty
		document.getElementById("errorSearch").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	} else if (search.value.length < 3) {
		search.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "Enter at least 3 characters";
		console.log("Enter at least 3 characters");
		acumErrores++;
		console.log(acumErrores);
	} 
	if (acumErrores > 0) {
		return false;// don´t send form to server 
	} else { 
		return true;
	}
}

function registerForm() {
	let acumErrores = 0;
	form.classList.remove('is-invalid');

	let inputEmail = document.forms["myForm2"]["mail"];
    let newPassword = document.forms["myForm2"]["newPassword"];
    let repeatPassword = document.forms["myFormId2"]["repeatPassword"];
	let inputAddress = document.forms["myForm2"]["inputAddress"];
	let inputProvince = document.forms["myForm2"]["inputProvince"];
	let inputCity = document.forms["myForm2"]["inputCity"];
	let inputZip = document.forms["myForm2"]["inputZip"];
	let gridCheck = document.forms["myForm2"]["gridCheck"];

	if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorMail").textContent = "The email does not meet required format";
		console.log("The email does not meet required format");
		acumErrores++;
		console.log(acumErrores);
    } 
		if (inputZip.value.length != 5) {
			inputZip.classList.add("is-invalid");
			document.getElementById("errorZip").textContent = "The zipcode does not meet the required format.";
			console.log("The zipcode does not meet the required format.");
			acumErrores++;
			console.log(acumErrores);
		}	
	if (newPassword.value != repeatPassword.value) {
		repeatPassword.classList.add("is-invalid");
		document.getElementById("errorRepeatPassword").textContent = "Passwords are different.";
		console.log("Passwords are different");
		acumErrores++;
		console.log(acumErrores);
	}	
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Select I accept the terms & conditions";
		console.log("I accept the terms & conditions");
		acumErrores++;
		console.log(acumErrores);
	}
	if (acumErrores > 0) {
		return false;// don´t send form to server 
	} else { 
		return true;
	}
}

function loginForm() { 
	let acumErrores = 0;
	form.classList.remove('is-invalid');

	let email = document.forms["myForm3"]["email"];
    let inputPassword = document.forms["myForm3"]["inputPassword"];

	//conditional
	if(email.value == "") {
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	}
	if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorInputPassword").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	}
	if (acumErrores > 0) {
		return false;// don´t send form to server 
	} else { 
		return true;
	}

}
	
//removes invalid color from input, when valid
form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

//removes invalid color from input, when valid
form2.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

//removes invalid color from input, when valid
form3.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
