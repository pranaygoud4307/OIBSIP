function loginUser() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Incorrect Email or Password");
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login Successful!");
    window.location.href = "../sass/dashboard.html";  // redirect to signup as fake dashboard placeholder
}
