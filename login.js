<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page with JS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .login-container {
      background: #fff;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      width: 320px;
      text-align: center;
    }

    .login-container h2 {
      margin-bottom: 20px;
      color: #333;
    }

    .login-container input {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 15px;
      outline: none;
    }

    .login-container input:focus {
      border-color: #4facfe;
    }

    .login-container button {
      width: 100%;
      padding: 12px;
      background: #4facfe;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 12px;
    }

    .login-container button:hover {
      background: #0099ff;
    }

    .login-container a {
      display: block;
      margin-top: 12px;
      font-size: 14px;
      color: #4facfe;
      text-decoration: none;
    }

    .login-container a:hover {
      text-decoration: underline;
    }

    .error {
      color: red;
      font-size: 14px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required>
      <input type="password" id="password" placeholder="Password" required>
      <button type="submit">Login</button>
      <p class="error" id="errorMsg"></p>
      <a href="#">Forgot Password?</a>
    </form>
  </div>

  <script>
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // stop form from submitting

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Demo check
      if (username === "admin" && password === "12345") {
        alert("Login Successful ✅");
        window.location.href = "welcome.html"; // redirect
      } else {
        errorMsg.textContent = "Invalid username or password ❌";
      }
    });
  </script>

</body>
</html>
