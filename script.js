// All inputs and form by Id
const inputs = document.querySelectorAll('input');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const contactInput = document.getElementById('contact');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');

// Inputs validator
let inputValidator = {
    "firstname" : false,
    "lastname" : false,
    "age" : false,
    "contact" : false,
    "email" : false,
    "password" : false,
    "confirmPassword" : false
}

// validate first name
firstnameInput.addEventListener('keyup', (e) => {
    if(firstnameInput.value.length > 0){
        inputValidator["firstname"] = true;
    }
    else{
        inputValidator["firstname"] = false;
    }

    let allAtrr = Object.values(inputValidator).every(el => el == true);
    if(allAtrr){
        submitBtn.disabled = false;
    }

    else{
        submitBtn.disabled = true;
    }
})    

// validate lastname
lastnameInput.addEventListener('keyup', e => {
    if(lastnameInput.value.length > 0){
        inputValidator["lastname"] = true;
    }
    else{
        inputValidator["lastname"] = false;
    }

    let allAtrr = Object.values(inputValidator).every(el => el == true);
    if(allAtrr){
        submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
})

// validate age
ageInput.addEventListener('keyup', e => {
    if(ageInput.value > 18 && ageInput.value < 150 && ageInput.value != null){
        inputValidator["age"] = true;
    }
    else{
        inputValidator["age"] = false;
    }

    let allAtrr = Object.values(inputValidator).every(el => el == true);
    
    if(allAtrr){
        submitBtn.disabled = false;
     }
     else{
        submitBtn.disabled = true;
     }
})

// validate contact
contactInput.addEventListener('keyup', e => {
    var phoneno = /^\d{11}$/;

    if(contactInput.value.match(phoneno)){
        inputValidator["contact"] = true;
    }
    else{
        inputValidator["contact"] = false;
    }

    let allAtrr = Object.values(inputValidator).every(el => el == true);
    
    if(allAtrr){
        submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
})

// Validate Email
emailInput.addEventListener('keyup', e => {
    var isEmailCorrect = false;
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let testEmails = e.target.value.split(",");    
    
    testEmails.forEach((email) => {

        if (email.match(emailRegex)){
            isEmailCorrect = true;
        }
    })
    
    if(isEmailCorrect){
        inputValidator["email"] = true;
    }
    else{
        inputValidator["email"] = false;
    }
    
    let allAtrr = Object.values(inputValidator).every(el => el == true);
    
    if(allAtrr){
        submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
});

// function for password validation
passwordInput.addEventListener('keyup', (e) => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
    if(passwordInput.value.match(passw)) { 
        inputValidator["password"] = true;
        if(passwordInput.value == confirmPasswordInput.value){
            inputValidator["confirmPassword"] = true;
        }
        else{
            inputValidator["confirmPassword"] = false;
        }
    
    }
    else{
        inputValidator["password"] = false;
    }

  
    let allAtrr = Object.values(inputValidator).every(el => el == true);

    if(allAtrr){
        submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
})

// compare password and confirm password
confirmPasswordInput.addEventListener('keyup', e =>{
    if(passwordInput.value == confirmPasswordInput.value){
        inputValidator["confirmPassword"] = true;
    }
    else{
        inputValidator["confirmPassword"] = false;
    }

    let allAtrr = Object.values(inputValidator).every(el => el == true);
    
    if(allAtrr){
        submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(firstnameInput.value,
                lastnameInput.value,
                ageInput.value,
                contactInput.value,
                emailInput.value,
                passwordInput.value)
})



