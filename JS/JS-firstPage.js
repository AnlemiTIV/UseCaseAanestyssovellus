
window.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("register-form1");
    const loginForm = document.getElementById("login-form1");

    //Registering
    if (registerForm) {
        registerForm.addEventListener("submit", function(e){

            e.preventDefault();

            const username = document.getElementById("ask-username1").value.trim();
            const password = document.getElementById("ask-password1").value;
            const role = document.querySelector('input[name="role"]:checked').value;

            if (username.length < 3 || password.length < 6) {

                alert("username must be at least 3 characters and password 6 characters");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            const userExists = users.some(user => user.username === username);
            if (userExists){
                alert("Username already exist!");
                return;
            }

            const newUser = {
                id: `user_${Date.now()}`,
                username,
                password, // hash
                role
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert("Registration success. You may log in now.");
            registerForm.reset();
        }    
    
    )};

    //Logging in (to page 2)
    if (loginForm) {
        
        loginForm.addEventListener("submit", function(e){
            
            e.preventDefault();

            const username2 = loginForm.querySelector('input[name="username2"]').value.trim();
            const password2 = loginForm.querySelector('input[name="password2"]').value;

            const users2 = JSON.parse(localStorage.getItem('users')) || [];
            const foundUser = users2.find(user => user.username === username2 && user.password === password2);

            if (!foundUser){

                alert("Invalid username or password");
                return;
            }

            //store
            localStorage.setItem("currentUser", JSON.stringify(foundUser));


            //move to page 2
            window.location.href = "User_page.html"; //not working it seems?
        }); 
    }; 

});

// Implement way to reset registered users without saved info getting ridiculous
//window.onload = localStorage.clear();
//window.onload = localStorage.removeItem("votes");