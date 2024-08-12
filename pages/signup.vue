<template>
    <div class="register-form">
        <div class="container">
        <h1>REGISTER</h1>
        <button class="button">Register with Phone Number</button>
        <div class="or">OR</div>
        <button class="button">Register with Email</button>
        <div class="social-button">
            <button class="social-button google">G</button>
            <button class="social-button facebook">F</button>
        </div>
    </div>
    </div>
    
</template>

<style>
        body {
            background-color: #033642;
            color: #fff;
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            text-align: center;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 30px;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: 400;
            font-style: normal;
            color: aqua;


        }

        .button {
            display: inline-block;
            padding: 20px;
            background-color: rgb(255, 255, 255);
            color: #000;
            border: none;
            border-radius: 5px;
            margin: 1rem 0;
            cursor: pointer;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: 400;
            font-style: normal
        }

        .button:hover {
            opacity: 0.8;
        }

        .social-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .social-button {
            padding: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
            

        }

        .google {
            background-color: #dd4b39;
            color: #fff;
            margin-left: 10px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: 200;
            padding: 20px;
            font-size: 15px;
        }

        .facebook {
            background-color: #3b5998;
            color: #fff;
            margin-right: 10px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: 200;
            padding: 20px;
            font-size: 15px;
        }

        .or {
            margin: 1rem 0;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: 400;
            font-style: normal;

        }

        .register-form {
           background-color: #222;
           padding: 30px;
           border-radius: 5px;
           box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
           width: 350px;
           border-radius: 10px;
        }

        .social-button:hover {
            opacity: 0.8;
        }
    </style>