function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("hel");

  if (username == "admin" && password == "password") {
    window.location.href = "/home";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
