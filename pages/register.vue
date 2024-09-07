<template>
    <div class="BG">
        <div class="rgP"> 
            <div class="text-4xl mb-50px">REGISTER</div>
            <form @submit.prevent="register">
                <div class="input-group">
                    <input v-model="email" type="email" required>
                    <label for="">E-mail</label>
                </div>
                <div class="input-group">
                    <input v-model="password" type="password" required>
                    <label for="">Password</label>
                </div>
                <div class="input-group">
                    <input v-model="confirmPassword" type="password" required>
                    <label for="">Confirm Password</label>
                </div>
                <div class="CoN">
                    <a href="signup">
                        <div class="BTC">CANCEL</div>
                    </a>
                    <button type="submit" class="BTN">NEXT</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const register = async () => {
  // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกัน
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }

  try {
    // ส่งคำร้องไปยัง API ของเซิร์ฟเวอร์เพื่อทำการลงทะเบียน
    const response = await fetch('/api/register', {
      method: 'POST',  // ส่งข้อมูลด้วยวิธี POST
      headers: { 'Content-Type': 'application/json' },  // กำหนดรูปแบบของข้อมูลที่ส่งเป็น JSON
      body: JSON.stringify({ email: email.value, password: password.value })  // ส่งข้อมูล email และ password
    });

    // แปลงคำตอบที่ได้จากเซิร์ฟเวอร์เป็น JSON
    const result = await response.json();

    // ตรวจสอบว่าการลงทะเบียนสำเร็จหรือไม่
    if (response.ok) {
      alert('Registration successful');
      router.push('/login');  // หากสำเร็จจะนำผู้ใช้ไปยังหน้า login
    } else {
      // แสดงข้อความผิดพลาดหากการลงทะเบียนล้มเหลว
      alert(result.error || 'Registration failed');
    }
  } catch (error) {
    // จัดการข้อผิดพลาดกรณีที่ไม่สามารถติดต่อเซิร์ฟเวอร์ได้
    console.error('Registration failed:', error);
    alert('Something went wrong, please try again later.');
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
