let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
    window.location.href = "../js/login.html";
}

document.getElementById("welcomeName").textContent =
    "Welcome, " + user.name + "!";

document.getElementById("profileInitial").textContent =
    user.name.charAt(0).toUpperCase();

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../js/login.html";
}
