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


//Function to check all fields have an input
function inputAllFields(){
    for (let i=0;i<6;i++){
        if (fieldNames[i].value == "") {
            if (fieldSections[i].querySelectorAll('.errorMessage').length<1){
                fieldNames[i].style.borderColor = "#ff8888";
                let error = document.createElement("div");
                error.textContent = "Please answer this field";
                error.setAttribute("class","errorMessage");
                error.setAttribute("id",i+"error")
                fieldSections[i].appendChild(error);
                return false
            }
        }
        else {
            console.log(fieldSections[i].childElementCount);
            console.log(fieldSections[i]);
            if (fieldSections[i].childElementCount == 3){
                fieldNames[i].style.borderColor = "#E5E6E8";
                fieldSections[i].removeChild(fieldSections[i].children[2]);
            }
            else if(fieldSections.childElementCount == 2){
                
            }
        }
    }
}

function errorCheck(){
    let errorCounter=0;
    for (let i = 0; i < form[0].childNodes.length; i++) {
        if (form[0].childNodes[i].className == "errorMessage") {
          errorCounter+=1
        }        
    }
    if (errorCounter==0){

    }
}

//When sign up button is pressed, this function will run all validation functions
function validate(){
    inputAllFields();
    errorCheck();
}
