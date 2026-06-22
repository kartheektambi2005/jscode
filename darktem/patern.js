// REGEX PATTERNS
let usernamePattern = /^[A-Za-z0-9_]{5,}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

// ELEMENTS
let registerForm = document.getElementById("registerForm");

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let usernameMsg = document.getElementById("usernameMsg");
let emailMsg = document.getElementById("emailMsg");
let passwordMsg = document.getElementById("passwordMsg");

let successMsg = document.getElementById("successMsg");

// USERNAME VALIDATION
username.addEventListener("keyup", function(){

    if(usernamePattern.test(username.value)){
        usernameMsg.innerHTML = "Valid Username";
        usernameMsg.style.color = "green";
    }else{
        usernameMsg.innerHTML = "Minimum 5 characters required";
        usernameMsg.style.color = "red";
    }

});

// EMAIL VALIDATION
email.addEventListener("keyup", function(){

    if(emailPattern.test(email.value)){
        emailMsg.innerHTML = "Valid Email";
        emailMsg.style.color = "green";
    }else{
        emailMsg.innerHTML = "Invalid Email";
        emailMsg.style.color = "red";
    }

});

// PASSWORD VALIDATION
password.addEventListener("keyup", function(){

    if(passwordPattern.test(password.value)){
        passwordMsg.innerHTML = "Strong Password";
        passwordMsg.style.color = "green";
    }else{
        passwordMsg.innerHTML =
        "Password must contain Uppercase, Lowercase, Number and 8 Characters";
        passwordMsg.style.color = "red";
    }

});

// REGISTER
registerForm.addEventListener("submit", function(event){

    event.preventDefault();

    if(
        !usernamePattern.test(username.value) ||
        !emailPattern.test(email.value) ||
        !passwordPattern.test(password.value)
    ){
        successMsg.innerHTML = "Please Enter Valid Details";
        successMsg.style.color = "red";
        return;
    }

    let userData = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    let existingUser = localStorage.getItem(email.value);

    if(existingUser){

        successMsg.innerHTML = "User Already Exists";
        successMsg.style.color = "red";

    }else{

        localStorage.setItem(
            email.value,
            JSON.stringify(userData)
        );

        successMsg.innerHTML =
        "✓ Registration Successful! Redirecting...";
        successMsg.style.color = "green";

        setTimeout(function(){

            window.location.href = "./index.html";

        },2000);

    }

});