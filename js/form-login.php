<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
</head>
<body>
    <div class="BG">
        <div class="rgP"> 
            <div class="Frg">REGISTER</div>
            <div class="input-group">
                <input type="email, text" required>
                <label for="">E-mail</label>
            </div>
            <div class="input-group">
                <input type="password" required>
                <label for="">Password</label>
            </div>
            <div class="input-group">
                <input type="password" required>
                <label for="">Confirm Password</label>
            </div>
            <div class="CoN">
                <a href="signup">
                    <div class="BTC">CANCLE</div>
                </a>
                <div class="BTN">NEXT</div>
            </div>
        </div>
    </div>
</body>
</html>
<style>
    div {
    font-family: "Noto Sans Thai", sans-serif ;  
    font-optical-sizing: auto;
    font-weight: 100px;
    font-style: normal; 
}
a {text-decoration: none;}
.rgp {
    display: flex;
    margin-top: 60px;
    align-items:center;
    flex-direction: column;
    height: 500px;
}
.Frg {
    color: white;
    margin-bottom: 100px;
    font-size: 40px;
    border-bottom-style:solid;
    width: 50px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-variant-position:"wdth" 80;
}
.BTN {
    height: 50px;
    width: 240px;
    background:aqua;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    font-size: 20px;
    
}
.BTC {
    height: 50px;
    width: 240px;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: solid aqua 1px;
    border-radius: 5px;
    font-size: 20px;
    color: #ffffff;
}
.CoN {
    margin-top: 20px;
    display: flex;
    align-items: center;
}
body {
    background: #1d1d1d;
}
* {
    box-sizing: border-box;
}
.input-group {
    margin: 20px 0;
    position: relative;
    height: 50;
}
.input-group label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 20px;
    color: #ffffff60;
    padding: 0 5px;
    pointer-events: none;
    transition: .3s;
    width: auto;
}
.input-group input {
    width: 500px;
    height: 50px;
    font-size: 20px;
    font-weight: 300;
    padding: 0 10px;
    background: transparent ;
    border-radius: 5px;
    border: solid 1px white;
    outline: none;
    color:white;
}
.rgP {
    display: flex;
    margin-top: 60px;
    align-items:center;
    flex-direction: column;
    height: 500px;
    min-height: 100vh;
}
.input-group input:focus~label,
.input-group input:valid~label {
    top:0;
    font-size: 16px;
    background: #1d1d1d;
    color: aqua;
}
.input-group input:focus,
.input-group input:valid{
    border: 1px solid aqua;
}
</style>