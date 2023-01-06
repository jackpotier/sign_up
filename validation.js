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

//Set a counter for the function inputAllFields() for the removal of prior error messages
counter = 0;

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
                console.log(fieldNames[i]);
            }
        }
        else {
            fieldNames[i].style.borderColor = "#E5E6E8";
            let errorRemove = fieldSections[i].querySelector(".errorMessage");
            fieldSections[i].removeChild(errorRemove);
            console.log(fieldNames[i]);
        }
    }
    counter+=1;
}

//When sign up button is pressed, this function will run all validation functions
function validate(){
    inputAllFields();
}
