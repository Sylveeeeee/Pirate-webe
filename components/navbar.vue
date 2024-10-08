<template>
    <div class="nav">
        <div class="logo"> PirateID</div>
        <label for="Search"></label>
        <input type="Search" id="site-search" name="q" placeholder="  SEARCH" />
        <button class="spinbutton">Search</button>
        <router-link to="/cart">
            <div class="bg-[#ffbaba00] px-[10px] flex content-center justify-center"><cart-icon /></div>
        </router-link>
        <div class="sign-login">
            <router-link to="/signup" class="sign">
                <div class="BTsign">สมัครสมาชิก</div>
            </router-link>
            <router-link to="/login" class="login">
                <div class="BTlogin">เข้าสู่ระบบ</div>
            </router-link>
        </div>
        <router-link to="/profile">
            <div class="bg-[#ffbaba00] px-[10px] flex content-center justify-center"><cart-icon /></div>
        </router-link>
    </div>
</template>
<script setup>
import CartIcon from '~/components/CartIcon.vue';
</script>
<style>
#site-search label {
    border-radius: 5px;
    border: solid black;
}
#site-search {
    border-radius: 2px;
}
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
    background-color:#5e5e5e;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border: 1px solid;
    border-color: #474747;
    color: rgb(255, 255, 255);
    
}

.spinbutton {
    height: 30px;
    background-color: transparent;
    color: rgb(255, 255, 255);
    border: 1px solid;
    border-color: black;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    margin-right: 20px;
    padding-inline: 5px;
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

.spinbutton:hover {
    background-color: rgba(0, 255, 255, 0.381) ;
    color:aqua;
    border-radius: 2px;

}



</style>