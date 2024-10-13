<template>
  <div class="flex mr-[50px] bg-[#444444] rounded-lg h-min">
    <div class="flex flex-col">
      <!-- ส่วนแสดงโปรไฟล์ -->
      <div class="flex bg-[#ffffff00] w-[400px] items-center border-b-2 pb-[20px] p-[20px] border-[#1d1d1d]">
        <div class="w-[100px] h-[100px] rounded-full bg-gray-700 overflow-hidden">
          <img src="https://via.placeholder.com/100" alt="Profile Picture" class="w-full h-full object-cover" />
        </div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="authStore.user" class="ml-[20px] flex flex-col text-[#ffff]">
          <span class="font-bold text-[20px]">{{ authStore.user.email }}</span>
          <span class="font-bold text-[20px]">{{ authStore.user.name }}</span>
        </div>
      </div>
      <!-- เมนูต่าง ๆ -->
      <router-link
        to="/profile"
        class="text-[#ffff] text-[20px] p-[20px] border-b-2 border-[#1d1d1d] pb-[20px]"
        :class="{'text-[#00ffff]': isActiveRoute('/profile'), 'text-white': !isActiveRoute('/profile')}"
      >
        ข้อมูลส่วนตัว
      </router-link>
      <router-link
        to="/Topup"
        class="text-[#ffff] text-[20px] p-[20px] border-b-2 border-[#1d1d1d] pb-[20px]"
        :class="{'text-[#00ffff]': isActiveRoute('/Topup'), 'text-white': !isActiveRoute('/Topup')}"
      >
        เติมเงิน
      </router-link>
      <div class="text-[#ffff] text-[20px] p-[20px] border-b-2 border-[#1d1d1d] pb-[20px]">รายการเติมเงิน</div>
      <div class="text-[#ffff] text-[20px] p-[20px] border-b-2 border-[#1d1d1d] pb-[20px]">รายการบัญชี</div>

      <!-- ปุ่มออกจากระบบ -->
      <div class="text-[#ffff] text-[20px] p-[20px] border-b-2 border-[#1d1d1d] pb-[20px] h-[70px]" v-if="isLoggedIn">
        <button @click="logout" class="BTlogout">ออกจากระบบ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const router = useRouter();
const isLoggedIn = ref(false);
const error = ref(null); // ข้อความผิดพลาด

// ตรวจสอบสถานะการล็อกอิน
const checkLoginStatus = () => {
  isLoggedIn.value = !!authStore.token; // ตรวจสอบว่า token มีอยู่หรือไม่
};

// ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้
const fetchUserData = () => {
  if (!authStore.user.id) {
    error.value = 'User data not available'; // หากไม่มีข้อมูลผู้ใช้
  }
};

// ฟังก์ชันสำหรับออกจากระบบ
const logout = () => {
  authStore.logout(); // ใช้ฟังก์ชัน logout จาก authStore
  checkLoginStatus(); // อัปเดตสถานะการล็อกอิน
  router.push('/login'); // เปลี่ยนเส้นทางไปยังหน้าล็อกอิน
};

// ฟังก์ชันตรวจสอบเส้นทางปัจจุบัน
const isActiveRoute = (route) => {
  return router.currentRoute.value.path === route;
};

// เรียกใช้เมื่อคอมโพเนนต์ถูกติดตั้ง
onMounted(() => {
  checkLoginStatus(); // ตรวจสอบสถานะการล็อกอิน
  if (isLoggedIn.value) {
    fetchUserData(); // ดึงข้อมูลผู้ใช้เมื่อมี token
  }
});
</script>

<style scoped>
/* สไตล์ที่คุณต้องการสำหรับคอมโพเนนต์นี้ */
</style>
