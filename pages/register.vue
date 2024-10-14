<template>
  <div class="BG">
    <div class="rgP"> 
      <div class="text-5xl text-[#00ffff] mb-[30px] bg-[#f000]">REGISTER</div>
      <div class="h-[40px] bg-[#ff848400] w-[500px] text-[16px] overflow-hidden rounded-[5px] mt-[5px]">
        <!-- แสดงข้อความแจ้งเตือนล่าสุด -->
        <div v-if="error" class="error bg-[#ff0000] text-[#fff] h-[40px] flex items-center pl-[10px]">
          <div class="mr-[10px] flex items-center">
            <Icon class="text-[25px]" name="material-symbols:error-circle-rounded-outline-sharp" />
          </div>
          {{ error }}
        </div>
        <div v-else-if="message" class="message bg-[#0aa505] text-[#fff] h-[40px] flex items-center pl-[10px]">{{ message }}</div>
      </div>
      <div class="bg-[#ffffff00]">
        <form @submit.prevent="register">
          <div class="input-group">
            <input v-model="email" type="email" required />
            <label>E-mail</label>
          </div>
          <div class="input-group">
            <input v-model="password" :type="passwordInputType1" required :disabled="passwordInputDisabled" />
            <label>Password</label>
            <!-- ไอคอนลูกตา -->
            <i class="fa" 
               :class="passwordInputType1 === 'password' ? 'fa-eye' : 'fa-eye-slash'" 
               :style="{ color: passwordInputType1 === 'password'  }"
               aria-hidden="true" 
               @click="togglePasswordVisibility1">
            </i>
          </div>
          <div class="input-group">
            <input v-model="confirmPassword" :type="passwordInputType2" required :disabled="passwordInputDisabled" />
            <label>Confirm Password</label>
            <!-- ไอคอนลูกตา -->
            <i class="fa" 
               :class="passwordInputType2 === 'password' ? 'fa-eye' : 'fa-eye-slash'" 
               :style="{ color: passwordInputType2 === 'password'  }"
               aria-hidden="true" 
               @click="togglePasswordVisibility2">
            </i>
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
const passwordInputDisabled = ref(false); // สถานะการปิดใช้งานช่องกรอกรหัสผ่าน

// แสดงหรือซ่อนรหัสผ่าน
const togglePasswordVisibility1 = () => {
  passwordInputType1.value = passwordInputType1.value === 'password' ? 'text' : 'password';
};

const togglePasswordVisibility2 = () => {
  passwordInputType2.value = passwordInputType2.value === 'password' ? 'text' : 'password';
};

// ล้างข้อความเก่าเมื่อมีการตั้งค่าข้อความใหม่
const clearMessages = () => {
  error.value = null;
  message.value = null;
};

// ตรวจสอบรูปแบบอีเมล
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ตรวจสอบความแข็งแกร่งของรหัสผ่าน
const isStrongPassword = (password) => {
  return password.length >= 8; // กำหนดความยาวขั้นต่ำของรหัสผ่าน
};

const register = async () => {
  clearMessages(); // ล้างข้อความเก่าทุกครั้งก่อนเริ่มการส่งข้อมูลใหม่

  // ตรวจสอบรูปแบบอีเมล
  if (!isValidEmail(email.value)) {
    error.value = 'Invalid email format!';
    return;
  }

  // ตรวจสอบว่ารหัสผ่านมีความแข็งแกร่ง
  if (!isStrongPassword(password.value)) {
    error.value = 'Password must be at least 8 characters long!';
    return;
  }

  // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกันหรือไม่
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match!';
    return; // หยุดการทำงานถ้ารหัสผ่านไม่ตรงกัน
  }

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
      // ถ้า API ส่งกลับข้อผิดพลาด
      if (response.error === 'Email already registered.') {
        error.value = 'This email is already registered. Please use another email.'; // แสดงข้อความเมื่ออีเมลถูกลงทะเบียนแล้ว
        passwordInputDisabled.value = true; // ปิดใช้งานช่องกรอกรหัสผ่าน
        confirmPassword.value = ''; // ล้างช่องกรอกยืนยันรหัสผ่าน
      } else {
        error.value = response.error; // ตั้งค่าข้อความ error อื่นๆ
      }
    } else {
      message.value = 'Registration successful! Redirecting to login...'; // ข้อความสำเร็จ
      setTimeout(() => {
        router.push('/login');
      }, 2000); // เปลี่ยนเส้นทางหลังจาก 2 วินาที
    }
  } catch (err) {
    error.value = 'An error occurred during registration'; // ข้อความแสดงเมื่อเกิดข้อผิดพลาด
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
    height: 50px;
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

/* Style for the eye icon */
.input-group i {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: color 0.3s;
}

.BTC:hover {
    background-color: aqua;
    color: black;
}
</style>
