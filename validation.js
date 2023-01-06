//Set variables for form inputs and sections
let firstName = document.forms["signUp"]["firstName"];
let firstNameSection = document.querySelector("#firstName");
let lastName = document.forms["signUp"]["lastName"];
let lastNameSection = document.querySelector("#lastName");
let email = document.forms["signUp"]["email"];
let emailSection = document.querySelector("#email");
let phoneNumber = document.forms["signUp"]["phoneNumber"];
let phoneNumberSection = document.querySelector("#phoneNumber");
let password = document.forms["signUp"]["password"];
let passwordSection = document.querySelector("#password");
let passwordCheck = document.forms["signUp"]["passwordCheck"];
let passwordCheckSection = document.querySelector("#passwordCheck");


//Create two arrays with JS variable names
let fieldNames = [firstName,lastName,email,phoneNumber,password,passwordCheck];
let fieldSections = [firstNameSection,lastNameSection,emailSection,phoneNumberSection,passwordSection,passwordCheckSection];


//Create error message for fields without an input
let error = document.createElement("div");
error.textContent = "Please answer this field";
error.setAttribute("class","errorMessage");

//When sign up button is pressed, this function will run to validate all inputs
function validate(){
    //Check if all fields have an input
    if (firstName.value == "") {
        firstName.style.borderColor = "#ff8888";
        firstNameSection.appendChild(error);
        return false;
    }
    else {
        firstName.style.borderColor = "";
        firstNameSection.removeChild(error);
    }
    if (lastName.value == "") {
        lastName.style.borderColor = "#ff8888";
        lastNameSection.appendChild(error);
        return false;
    }
    else {
        lastName.style.borderColor = "";
        lastNameSection.removeChild(error);
    }
    if (email.value == "") {
        email.style.borderColor = "#ff8888";
        emailSection.appendChild(error);
        return false;
    }
    else {
        email.style.borderColor = "";
        emailSection.removeChild(error);
    }
    if (phoneNumber.value == "") {
        phoneNumber.style.borderColor = "#ff8888";
        phoneNumberSection.appendChild(error);
        return false;
    }
    else {
        phoneNumber.style.borderColor = "";
        phoneNumberSection.removeChild(error);
    }
    if (password.value == "") {
        password.style.borderColor = "#ff8888";
        passwordSection.appendChild(error);
        return false;
    }
    else {
        password.style.borderColor = "";
        passwordSection.removeChild(error);
    }
    if (passwordCheck.value == "") {
        passwordCheck.style.borderColor = "#ff8888";
        passwordCheckSection.appendChild(error);
        return false;
    }
    else {
        passwordCheck.style.borderColor = "";
        passwordCheckSection.removeChild(error);
    }
}
