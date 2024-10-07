<template>
  <div class="flex flex-col items-center ">
    <div class="rgp"> 
      <div class="Frg text-[#00ffff]">REGISTER</div>
      <div class="rgN">mobile number</div>
      <div class="r">OR</div>
      <BTRegis />
    </div>
    <div class="mt-[50px] flex">
      <button 
        @click="loginWithGoogle" 
        class="bg-[#ff0000a9] text-[#ffff] h-[50px] w-[140px] flex justify-center items-center rounded-[5px] mr-[20px]">
        <Icon class="text-[30px] mr-[5px]" name="bxl:google"/>
      </button>
      <button 
        @click="loginWithFacebook" 
        class="bg-[#1e40ffaf] text-[#ffff] h-[50px] w-[140px] flex justify-center items-center rounded-[5px]">
        <Icon class="text-[30px] mr-[5px]" name="bxl:facebook"/>
      </button>
    </div>
  </div>
</template>

<script>

</script>

<style>
body {
  background: #1d1d1d;
}
.rgEoF {
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: white;
  font-size: 20px;
  font-weight: lighter;
}
.Frg {
  margin-top: 50px;
  margin-bottom: 100px;
  font-size: 40px;
  border-bottom-style: solid;
  width: 50px;
  display: flex;
  justify-content: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.r {
  font-size: 20px;
  color: aliceblue;
  margin-top: 20px;
  margin-bottom: 20px;
}
.rgp {
  display: flex;
  margin-top: 60px;
  align-items: center;
  flex-direction: column;
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
