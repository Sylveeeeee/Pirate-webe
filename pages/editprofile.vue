<template>
    <div class="profile-page">
        <navbar/>
        <navbar2/>
      <h1>Edit Profile</h1>
  
      <!-- แสดงข้อความข้อผิดพลาดหรือความสำเร็จ -->
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="message" class="success-message">{{ message }}</div>
  
      <form @submit.prevent="updateProfile">
        <!-- ฟิลด์สำหรับแก้ไขชื่อผู้ใช้ -->
        <div class="input-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" required />
        </div>
  
        <!-- ฟิลด์สำหรับแก้ไขรหัสผ่าน -->
        <div class="input-group">
          <label for="newPassword">New Password</label>
          <input v-model="newPassword" type="password" id="newPassword" />
        </div>
  
        <!-- ฟิลด์สำหรับยืนยันรหัสผ่าน -->
        <div class="input-group">
          <label for="confirmPassword">Confirm New Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" />
        </div>
  
        <!-- ปุ่มบันทึกการแก้ไข -->
        <button type="submit" class="btn">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');        // ชื่อผู้ใช้ปัจจุบัน
  const newPassword = ref('');     // รหัสผ่านใหม่
  const confirmPassword = ref(''); // ยืนยันรหัสผ่านใหม่
  const error = ref(null);         // ข้อความข้อผิดพลาด
  const message = ref(null);       // ข้อความสำเร็จ
  const router = useRouter();
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูลโปรไฟล์
  const updateProfile = async () => {
    // ตรวจสอบว่ารหัสผ่านใหม่และยืนยันรหัสผ่านตรงกันหรือไม่
    if (newPassword.value && newPassword.value !== confirmPassword.value) {
      error.value = 'Passwords do not match';
      return;
    }
  
    try {
      const response = await $fetch('/api/updateProfile', {
        method: 'POST',
        body: {
          username: username.value,
          newPassword: newPassword.value || null, // ถ้าไม่ได้เปลี่ยนรหัสผ่านให้ส่งเป็น null
        },
      });
  
      if (response.error) {
        error.value = response.error;  // แสดงข้อผิดพลาด
      } else {
        message.value = 'Profile updated successfully';  // แสดงข้อความสำเร็จ
      }
    } catch (err) {
      error.value = 'An error occurred while updating profile'; // แสดงข้อผิดพลาด
    }
  };
  </script>
  
  <style scoped>
  /* คุณสามารถเพิ่ม CSS ตามความต้องการของคุณ */
  </style>
  