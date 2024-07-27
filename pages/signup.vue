<template>
    
    <div class="form-container">
        <h1>REGISTER</h1>
        <form id="registerForm">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" required>
            <span class="error" id="emailError">Invalid Email format.</span>

            <label for="password">Set a password</label>
            <input type="password" id="password" name="password" required>

            <label for="confirmPassword">Confirm password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>

            <button type="submit">NEXT</button>
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
.form-container input[type="email"],
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
</style>


