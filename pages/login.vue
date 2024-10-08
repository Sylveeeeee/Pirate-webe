<template>
  <div class="sss">
    <div class="bg-[#ffbbbb00]">
      <div class="bg-[#ff858500] mt-[50px]">
        <h1 class="text-[50px]">LOGIN</h1>
        <div class="h-[40px] bg-[#ff848400] w-[500px] text-[16px] overflow-hidden rounded-[5px] mt-[5px]">
          <!-- แสดงข้อความข้อผิดพลาด -->
          <div v-if="error" class="error-message bg-[#ff0000] text-[#fff] h-[40px] flex items-center pl-[10px] w-[500px]">
            <div class="mr-[10px] flex items-center">
              <Icon class="text-[25px]" name="material-symbols:error-circle-rounded-outline-sharp" />
            </div>
            {{ error }}
          </div>

          <!-- แสดงข้อความสำเร็จ -->
          <div v-if="message" class="success-message bg-[#0aa505] text-[#fff] h-[40px] flex items-center pl-[10px] w-[500px]">
            {{ message }}
          </div>
        </div>
        
        <div class="input-group">
          <input v-model="email" type="email" required />
          <label>E-mail</label>
        </div>
        
        <div class="input-group">
          <!-- Password input -->
           <input v-model="password" :type="passwordInputType" required />
           <label>Password</label>
           <!-- Toggle eye icon -->
            <i 
            class="fa" 
            :class="passwordInputType === 'password' ? 'fa-eye' : 'fa-eye-slash'" 
            :style="{ color: passwordInputType === 'password'  }" 
            aria-hidden="true" 
            @click="togglePasswordVisibility">
          </i>
        </div>
        
        <button class="btn btn-primary h-[50px]" @click="login">LOG IN</button>
        <div class="or text-[#ffff] ">OR</div>
        
        <div class="social-login">
          <button class="btn btn-google" @click="loginWithGoogle">
            <Icon class="text-[30px] mr-[5px]" name="bxl:google"/>
            Log in with Google
          </button>
          <button class="btn btn-facebook">
            <Icon class="text-[30px] mr-[5px]" name="bxl:facebook"/>
            Log in with Facebook
          </button>
        </div>
        
        <a href="#" class="forgot-password">Forgot password?</a>
      </div>
      <div class="register">
        <a href="/register" class="btn btn-secondary">Register</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref(null);
const message = ref(null);
const passwordInputType = ref('password');
const router = useRouter();

const togglePasswordVisibility = () => {
  passwordInputType.value = passwordInputType.value === 'password' ? 'text' : 'password';
};

const login = async () => {
  try {
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    // ตรวจสอบผลลัพธ์จาก API
    if (response.error) {
      error.value = response.error; // แสดงข้อความข้อผิดพลาดจากเซิร์ฟเวอร์
      message.value = null;
    } else {
      message.value = response.message;
      error.value = null;
      setTimeout(() => {
        router.push('/'); // เปลี่ยนไปยังแดชบอร์ดหลังจาก 2 วินาที
      }, 2000);
    }
  } catch (err) {
    error.value = 'An error occurred during login'; // แสดงข้อความข้อผิดพลาด
    message.value = null; // ลบข้อความสำเร็จ
  }
};

</script>

<style>
.sss {
  display: flex;
  justify-content: center;
  background-color: #1d1d1d;
  height: 100vh;
}

.container {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

.login-form {
  background-color: #222;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  margin-bottom: 300px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: aqua;
  font-size: 30px;
}

.form-group {
  margin-bottom: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: aqua;
  text-align: left;
  width: 330px;
  position: relative;
}


.fa-eye {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: aqua;
  color: #000000;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 100;
}

.btn-primary:hover {
  background-color: aqua;
  border: solid 3px;
  border-color: aqua;
  background-color: transparent;
  color: aqua;
}

.btn-secondary {
  background-color: #f44336;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #d32f2f;
}

.or {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.social-login {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.btn-google,
.btn-facebook {
  width: 48%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-google {
  background-color: #dd4b39;
  color: #fff;
}

.btn-google:hover {
  background-color: #c1392b;
}

.btn-facebook {
  background-color: #3b5998;
  color: #fff;
}

.btn-facebook:hover {
  background-color: #29487d;
}

.fa {
  margin-right: 10px;
}

.forgot-password {
  display: block;
  text-align: center;
  color: aqua;
  text-decoration: none;
}

.register {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.register a {
  color: #fff;
  text-decoration: none;
}

.register a:hover {
  text-decoration: underline;
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
</style>
