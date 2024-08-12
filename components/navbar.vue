<template>
    <div class="nav">
        <div class="logo"> PirateID</div>
        <div class="Search">Search</div>
        <div class="cart"></div>
        <div class="sign-login">
            <div class="sign"><a href="signup">สมัครสมาขิก</a></div>
            <div class="login"> <a href="login">เข้าสู่ระบบ</a></div>
        </div>
    </div>
</template>
<style>
.nav{
    background-color: black;
    height: 60px;
    width: auto;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo {
    margin-right: 100px;
    height: 60px;
    color: aliceblue;
    align-items: center;
    display: flex;
    background-color: rgb(234, 0, 255);
}
.Search {
    height: 30px;
    width: 400px;
    background-color: aqua;
    display: flex;
    align-items: center;
    margin-right: 70px;
}
.cart {
    height: 60px;
    background-color: blanchedalmond;
    width: 60px;
    border-radius: 50%;
    margin-right: 20px;
}
.sign-login {
    height: 60px;
    width: auto;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sign {
    margin-right: 20px;
    border-right: solid  2px;
    padding-right: 20px;
}
</style>