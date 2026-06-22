let registerForm = document.getElementById("registerForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let successMsg = document.getElementById("successMsg");

registerForm.addEventListener("submit", function(event){

    // Stop page refresh
    event.preventDefault();

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