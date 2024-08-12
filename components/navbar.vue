<template>
    <div class="nav">
        <div class="logo"> PirateID</div>
        <div class="Search">Search</div>
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
    width: 60px;
    color: aliceblue;
    align-items: center;
    display: flex;
    background-color: rgb(126, 126, 126);
    border-radius: 50%;
    margin-top: 10px;
}
.Search {
    height: 30px;
    width: 500px;
    background-color: rgb(126, 126, 126);
    display: flex;
    align-items: center;
    margin-right: 70px;
    color: aliceblue;
    padding-left: 10px;
    border-radius: 3px;
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

.BTsign {
    font-family: "Prompt", sans-serif;
   font-weight: 100;
   font-style: normal;
    
}


</style>