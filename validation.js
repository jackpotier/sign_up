//Set variables for form inputs and sections
let form = document.forms["signUp"];
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


//Function to check passwords are matching
function passwordMatch(){
    if (password.value !== passwordCheck.value){
        if (passwordCheckSection.childElementCount<3){
            passwordCheck.style.borderColor = "#ff8888";
            let passError = document.createElement("div");
            passError.textContent = "Passwords do not match";
            passError.setAttribute("class","errorMessage");
            passwordCheckSection.appendChild(passError);
            return false;
        }
        else {
            return false;
        }
    }
    else if (password.value == passwordCheck.value){
        passwordCheck.style.borderColor = "#E5E6E8";
        passwordCheckSection.removeChild(passwordCheckSection.children[2]);
        var elements = passwordCheckSection.getElementsByClassName("errorMessage");
        while (elements[0]) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}


//Function to check all fields have an input
function inputAllFields(){
    for (let i=0;i<6;i++){
        if (fieldNames[i].value == "") {
            if (fieldSections[i].querySelectorAll('.errorMessage').length<1){
                fieldNames[i].style.borderColor = "#ff8888";
                let error = document.createElement("div");
                error.textContent = "Please answer this field";
                error.setAttribute("class","errorMessage");
                fieldSections[i].appendChild(error);
                return false;
            }
        }
        else {
            console.log(fieldSections[i].childElementCount);
            console.log(fieldSections[i]);
            if (fieldSections[i].childElementCount >= 3){
                fieldNames[i].style.borderColor = "#E5E6E8";
                fieldSections[i].removeChild(fieldSections[i].children[2]);
            }
        }
    }
}


//Function to ensure email is correct
function emailCheck(){
    let emailString = email.value;
    let emailChar = emailString.split("");
    console.log(emailChar);
    if (emailChar.length > 0){
        if (emailChar.includes('@')){
            if (emailChar[emailChar.length - 1] == "."){
                email.style.borderColor = "#ff8888";
                let error = document.createElement("div");
                error.textContent = "Please enter a valid email";
                error.setAttribute("class","errorMessage");
                emailSection.appendChild(error);
                return false;
            }
            else {
                if (emailSection.childElementCount >= 3){
                    email.style.borderColor = "#E5E6E8";
                    emailSection.removeChild(emailSection.children[2]);
                }
            }
        }
        else {
            if (emailSection.childElementCount >= 3){
                email.style.borderColor = "#E5E6E8";
                emailSection.removeChild(emailSection.children[2]);
            }
            email.style.borderColor = "#ff8888";
            let error = document.createElement("div");
            error.textContent = "Please enter a valid email";
            error.setAttribute("class","errorMessage");
            emailSection.appendChild(error);
            return false;
        }
    }
}


//When sign up button is pressed, this function will run all validation functions
function validate(){
    inputAllFields();
    emailCheck();
    passwordMatch();
    for (let i=0; i<6; i++){
        if (fieldSections[i].querySelectorAll('.errorMessage').length>0){
            return false
        }
    }
}
