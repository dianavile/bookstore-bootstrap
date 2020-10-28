//login form
const email = document.getElementById("mail");
 
email.addEventListener("input", function (event) {
    if (email.validity.email_error) {
      email.setCustomValidity("Provide a valid e-mail address!");
    } else {
      email.setCustomValidity("");
    }
});
