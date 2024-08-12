<template>
    <div class="form-container">
        <h1>LOG IN</h1>
        <form id="loginForm">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Mobile number or email" required>
            <span class="error" id="usernameError">Please enter a valid email or mobile number.</span>

            <label for="password">Confirm password</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Log in</button>

            <div class="social-login">
                <p>OR</p>
                <button class="google">Log in with Google</button>
                <button class="facebook">Log in with Facebook</button>
            </div>

            <p>Have you <a href="#">forgot password</a>?</p>
        </form>
    </div>
</template>
<style>
    .form-container {
        background-color: #1e1e1e;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .form-container h1 {
        color: #ccff00;
    }
    .form-container label {
        display: block;
        margin-top: 10px;
    }
    .form-container input[type="text"],
    .form-container input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .form-container .error {
        color: red;
        display: none;
    }
    .form-container button {
        margin-top: 20px;
        padding: 10px 15px;
        background-color: #ccff00;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .social-login {
        margin-top: 20px;
        text-align: center;
    }
    .social-login button {
        padding: 10px 15px;
        margin: 5px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .social-login .google {
        background-color: #db4437;
        color: #fff;
    }
    .social-login .facebook {
        background-color: #3b5998;
        color: #fff;
    }
    .form-container a {
        color: #ccff00;
        text-decoration: none;
    }
    
</style>

<input type="email" id="email" name="email" required>
