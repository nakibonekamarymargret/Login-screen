document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById("usernameError").style.display = "none";
  document.getElementById("passwordError").style.display = "none";

  // Validate form
  let valid = true;

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const passwordPattern = /^[a-z0-5]{8,}$/;

  if (username === "") {
    valid = false;
    document.getElementById("usernameError").textContent =
      "Username is required";
    document.getElementById("usernameError").style.display = "block";
  }

  if (password === "") {
    valid = false;
    document.getElementById("passwordError").textContent =
      "Password is required";
    document.getElementById("passwordError").style.display = "block";
  } else if (!passwordPattern.test(password)) {
    valid = false;
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long and contain only lowercase letters and digits from 0-5.";
    document.getElementById("passwordError").style.display = "block";
  }

 
});
