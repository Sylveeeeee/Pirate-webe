<template>
    <div class="container">
      <div class="login-form">
        <h1>LOG IN</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="EMAIL OR PHONE NUMBER" />
        </div>
        <div class="form-group">
          <label for="password">Confirm password</label>
          <input type="password" id="password" placeholder="PASSWORD" />
          <i class="fa fa-eye" aria-hidden="true"></i>
        </div>
        <button class="btn btn-primary">LOG IN</button>
        <div class="or">OR</div>
        <div class="social-login">
          <button class="btn btn-google">
            <i class="fa fa-google" aria-hidden="true"></i>
            Log in with Google
          </button>
          <button class="btn btn-facebook">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            Log in with Facebook
          </button>
        </div>
        <a href="#" class="forgot-password">Forgot password?</a>
      </div>
      <div class="register">
        <a href="#" class="btn btn-secondary">Register</a>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #033642;
    color: #ffffff; 
    background-repeat: no-repeat;
    background-attachment: fixed !important;
    background-size: cover;
  }
  
  .login-form {
    background-color: #222;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 350px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: aqua;
  }
  
  .form-group {
    margin-bottom: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: aqua;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
  }
  
  .fa-eye {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary {
    background-color: aqua;
    color: #000000;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 100;
  }
  
  .btn-primary:hover {
    background-color: aqua;
  }
  
  .btn-secondary {
    background-color: #f44336;
    color: #fff;
  }
  
  .btn-secondary:hover {
    background-color: #d32f2f;
  }
  
  .or {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  .social-login {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .btn-google,
  .btn-facebook {
    width: 48%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-google {
    background-color: #dd4b39;
    color: #fff;
  }
  
  .btn-google:hover {
    background-color: #c1392b;
  }
  
  .btn-facebook {
    background-color: #3b5998;
    color: #fff;
  }
  
  .btn-facebook:hover {
    background-color: #29487d;
  }
  
  .fa {
    margin-right: 10px;
  }
  
  .forgot-password {
    display: block;
    text-align: center;
    color: aqua;
    text-decoration: none;
  }
  
  .register {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  
  .register a {
    color: #fff;
    text-decoration: none;
  }
  
  .register a:hover {
    text-decoration: underline;
  }
  </style>