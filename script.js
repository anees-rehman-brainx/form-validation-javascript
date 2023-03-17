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
    const errorMessage = document.getElementById('firstnameError');

    if(firstnameInput.value.length > 0){
        inputValidator["firstname"] = true;
        errorMessage.innerHTML = '';
        firstnameInput.style.border = "2px solid green"
    }
    else{
        inputValidator["firstname"] = false;
        errorMessage.innerHTML = 'First Name is required';
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
    const errorMessage = document.getElementById('lastnameError');
    
    if(lastnameInput.value.length > 0){
        inputValidator["lastname"] = true;
        errorMessage.innerHTML = "";
        lastnameInput.style.border = "2px solid green"
    }
    else{
        inputValidator["lastname"] = false;
        errorMessage.innerHTML = "Last Name is required!"
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
    const errorMessage = document.getElementById('ageError');

    if(ageInput.value > 18 && ageInput.value < 150 && ageInput.value != null){
        inputValidator["age"] = true;
        errorMessage.innerHTML = "";
        ageInput.style.border = "2px solid green"
    }
    else{
        inputValidator["age"] = false;
        errorMessage.innerHTML = "Age must be between 18 and 150!"
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
    const errorMessage = document.getElementById('contactError');
    var phoneno = /^\d{11}$/;

    if(contactInput.value.match(phoneno)){
        inputValidator["contact"] = true;
        errorMessage.innerHTML = '';
        contactInput.style.border = "2px solid green"
    }
    else{
        inputValidator["contact"] = false;
        errorMessage.innerHTML = 'contact must be 11 digits!';
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
    const errorMessage = document.getElementById('emailError');
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
        errorMessage.innerHTML = '';
        emailInput.style.border = "2px solid green"
    }
    else{
        inputValidator["email"] = false;
        errorMessage.innerHTML = "Provide valid email";
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
    const errorMessage = document.getElementById('passwordError');
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
    if(passwordInput.value.match(passw)) { 
        inputValidator["password"] = true;
        
        if(passwordInput.value == confirmPasswordInput.value){
            inputValidator["confirmPassword"] = true;
        }
        else{
            inputValidator["confirmPassword"] = false;
            const errorMessage = document.getElementById("confirmPasswordError")
            errorMessage.innerHTML = "Password must be same!";
        }
        errorMessage.innerHTML = '';
        passwordInput.style.border = "2px solid green"
    }

    else{
        inputValidator["password"] = false;
        errorMessage.innerHTML = "Password must contain alphabets, numbers, atleast one uppercase,<br>one lowercase and of minimum 8 characters!"
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
    const errorMessage = document.getElementById('confirmPasswordError');

    if(passwordInput.value == confirmPasswordInput.value){
        inputValidator["confirmPassword"] = true;
        errorMessage.innerHTML = "";
        confirmPasswordInput.style.border = "2px solid green"

    }
    else{
        inputValidator["confirmPassword"] = false;
        errorMessage.innerHTML = "Password must be same!"
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



