<template>
    <div class="BG">
        <div class="rgp"> 
            <div class="Frg">REGISTER</div>
            <div class="rgN"> 
                mobile number</div>
            <div class="r">OR</div>
            <BTRegis />
        </div>
    </div>
</template>

<style>

body {
     background:    #1d1d1d;
}
.rgEoF{
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: white;
    font-size: 20px;
}
.Frg {
    color: aliceblue;
    margin-bottom: 100px;
    font-size: 40px;
    border-bottom-style:solid;
    width: 50px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-variant-position:"wdth" 80;
}
.r {
    font-size: 20px;
    color: aliceblue;
    margin-top: 40px;
    margin-bottom: 40px;
}
.rgp {
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    height: 500px;
}

.rgN {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 300px;
    background-color: aqua;
    border-radius: 6px;
    font-size: 17px;
}
</style>