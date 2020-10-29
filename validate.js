//declare & assign variables to fetch forms
const form = document.getElementById("myFormId");//search
//const form2 = document.getElementById("myFormId2");//registrer
//const form3 = document.getElementById("myFormId2");//login

function searchForm() {
	let acumErrores = 0;
	form.classList.remove("is-invalid");

	//let search = document.getElementById("search");
	let search = document.forms["mynameForm"]["search"];//name (form), id (input search)

	//condicionales
	//innerHTML = texto assignado por un variable
	//textContent = texto directo
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
	
 


/*
function validateForm() {
	let acumErrores = 0;
	form.classList.remove('is-invalid');
	
	let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.forms["myForm"]["inputPassword"];
   // let newPassword = document.forms["myForm"]["newPassword"];
    //let currentPassword = document.forms["myForm"]["currentPassword"];
	let inputAddress = document.forms["myForm"]["inputAddress"];
	let inputProvince = document.forms["myForm"]["inputProvince"];
	let inputCity = document.forms["myForm"]["inputCity"];
	let inputZip = document.forms["myForm"]["inputZip"];
	let gridCheck = document.forms["myForm"]["gridCheck"];

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "This field is required";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "The email does not meet required mailformat";
        acumErrores++;
    } else {
        inputEmail.classList.add("is-valid");
        document.getElementById("successEmail").textContent = "This email is correct";
     }

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "This field is required";
		acumErrores ++;
	}
	
    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "This field is required";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "The province is required";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "The city is missing";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.length!=5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "The zipcode does not meet the required format.";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "I accept the terms & conditions";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    } else{
		return true;
	}
}*/

//removes invalid color from input, when valid
//form.addEventListener('blur', (event) => {
//	console.log(event);
//	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
//}, true);

/*
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}*/
