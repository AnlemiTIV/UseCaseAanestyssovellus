//const valinnatReset = document.getElementsByClassName("option-row");

//window.onload = function() {
    //valinnatReset[0].checked = false;
//}

const logOutButton = document.getElementById("kirjauduUlos");

// Siirry 3. sivulle luomaan äänestys sivulta 2.
function makeAPoll() {
    window.location.href = 'Poll_page.html';
}

if (logOutButton){
    logOutButton.addEventListener('click', function () {
        
        localStorage.removeItem("currentUser");  // Clear the user data // Not sure if removes the registered user also? IDK...
        window.location.href = "index.html"; // Redirect to the login page
    });
}