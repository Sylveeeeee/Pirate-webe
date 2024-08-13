<template>
    <div class="nav">
        <div class="logo"> PirateID</div>
        <label for="Search"></label>
        <input type="Search" id="site-search" name="q" placeholder="Search" />
        <button class="spinbutton">Search</button>
        <div class="cart"><i class="fa-solid fa-cart-shopping"></i></div>
        <div class="sign-login">
            <div class="sign"><a href="signup" >
                <div class="BTsign">สมัครสมาชิก</div>              
            </a></div>
            <div class="login"> <a href="login" >
                <div class="BTlogin">เข้าสู๋ระบบ</div>
                
            </a></div>
        </div>
    </div>
</template>
<style>
.BTsign {
    color: aliceblue;
}
.BTlogin {
    color: aliceblue;
}
.nav{
    background-color: black;
    height: 100px;
    width: auto;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo {
    margin-right: 100px;
    height: 60px;
    width: 150px;
    color: aqua;
    align-items: center;
    display: flex;
    background-color: rgb(0, 0, 0);
    margin-top: 10px;
    font-family: fantasy;
    font-size: 35px;
    margin-bottom: 10px;
    background: linear-gradient(to right, aqua , red );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

label {
    position: absolute;
    width: 200px;
}

input {
    position: relative;
    width: 400px;
    height: 30px;
}

.spinbutton {
    height: 30px;
}


.cart {
    height: 60px;
    
    width: 60px;
    border-radius: 50%;
    margin-right: 20px;
}
.sign-login {
    height: 60px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sign {
    margin-right: 20px;
    border-right: solid  2px;
    padding-right: 20px;
    border-right: aqua solid;
}


.BTsign:hover {
    color: aqua;
}

.BTlogin:hover {
    color: aqua;
}


</style>