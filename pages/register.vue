<template>
  <div class="BG">
    <div class="rgP"> 
      <div class="text-5xl  text-[#fffd]  mb-[30px] bg-[#f000]">REGISTER</div>
      <div class=" h-[40px] bg-[#ff848400] w-[500px] text-[16px] overflow-hidden rounded-[5px] mt-[5px]">
              <div v-if="error" class="error bg-[#ff0000] text-[#fff] h-[40px] flex items-center pl-[10px] ">
                <div class="mr-[10px]  flex items-center">
                  <Icon  class="text-[25px]" name="material-symbols:error-circle-rounded-outline-sharp" />
                </div>
                {{ error }}
              </div>
              <div v-if="message" class="message error bg-[#0aa505] text-[#fff] h-[40px] flex items-center pl-[10px]">{{ message }}</div>
            </div>
      <div class="bg-[#ffffff00] ">
        <form @submit.prevent="register">
          <div class="input-group">
            <input v-model="email" type="email" required />
            <label>E-mail</label>
          </div>
          <div class="input-group">
            <input v-model="password " :type="passwordInputType1" required  />
            <label>Password</label>
            <i class="fa fa-eye" aria-hidden="true" @click="togglePasswordVisibility1"></i>
          </div>
          <div class="input-group">
            <input v-model ="confirmPassword" :type="passwordInputType2"   required />
            <label>Confirm Password</label>
            <i class="fa fa-eye" aria-hidden="true" @click="togglePasswordVisibility2"></i>
          </div>
          <div class="CoN">
            <router-link to="/signup">
              <div class="BTC">CANCEL</div>
            </router-link>
            <button type="submit" class="BTN">NEXT</button>
          </div>            
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const error = ref(null);
const message = ref(null);
const passwordInputType1 = ref('password');
const passwordInputType2 = ref('password');

const togglePasswordVisibility1 = () => {
  passwordInputType1.value = passwordInputType1.value === 'password' ? 'text' : 'password';
};
const togglePasswordVisibility2 = () => {
  passwordInputType2.value = passwordInputType2.value === 'password' ? 'text' : 'password';
};
const register = async () => {
  try {
    // ส่งข้อมูลลงทะเบียนไปที่ API
    const response = await $fetch('/api/register', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      },
    });

    // ตรวจสอบผลลัพธ์จาก API
    if (response.error) {
      error.value = response.error;
    } else {
      // แสดงข้อความสำเร็จ
      message.value = 'Registration successful! Redirecting to login...';
      
      // เปลี่ยนเส้นทางไปที่หน้า login
      setTimeout(() => {
        router.push('/login');
      }, 2000); // จะเปลี่ยนเส้นทางหลังจาก 2 วินาที
    }
  } catch (err) {
    error.value = 'An error occurred during registration';
  }
};
</script>

<style>
.BTN {
    height: 50px;
    width: 240px;
    background: aqua;
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
    color: aqua;
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
    color: white;
}

.input-group label {
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
    background: #1d1d1d;
    border-radius: 5px;
    border: solid 1px;
    outline: none;
}

.rgP {
    display: flex;
    margin-top: 60px;
    align-items: center;
    flex-direction: column;
    height: 500px;
    min-height: 100vh;
    
}

.input-group input:focus~label,
.input-group input:valid~label {
    top: 0;
    font-size: 16px;
    background: #1d1d1d;
    color: aqua;
}

.input-group input:focus,
.input-group input:valid {
    border: 1px solid aqua;
}

.BTC:hover {
    background-color: aqua;
    color: black;
}
</style>
