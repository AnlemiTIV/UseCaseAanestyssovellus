// Not sure if this is meant to be within JS-page2.js, or JS-page1.js
const currentUser2 = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser2){
    alert("login first");
    window.location.href = "index.html";
} else {

if (currentUser2.role === "admin"){
    document.querySelector(".adminView").style.display = "flex";
} else {
    document.querySelector(".adminView").style.display = "none";
};

//body is visible again, to prevent glitching?
document.body.style.visibility = "visible";
};
