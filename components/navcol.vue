<template>
  <div class="flex mr-[50px] bg-[#444444] rounded-lg h-min">
    <div class="flex flex-col">
      <!-- ส่วนแสดงโปรไฟล์ -->
      <div class="flex bg-[#ffffff00] w-[400px] items-center border-b-2 pb-[20px] p-[20px] border-[#1d1d1d]">
        <div class="w-[100px] h-[100px] rounded-full bg-gray-700 overflow-hidden">
          <img src="https://via.placeholder.com/100" alt="Profile Picture" class="w-full h-full object-cover" />
        </div>
        <div class="ml-[20px] flex flex-col text-[#ffff]">
            <span class="font-bold text-[20px]">{{ email }}</span>
            <span class="font-bold text-[20px]">{{ name }}</span>
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
      <div class="text-[#ffff] text-[20px] p-[20px] border-b-2 border-[#1d1d1d] pb-[20px] h-[70px]" v-if="isLoggedIn" >
        <button  @click="logout" class="BTlogout">ออกจากระบบ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';  // ใช้สำหรับการนำทาง

// ใช้ useRouter สำหรับการเปลี่ยนหน้า
const router = useRouter();
const isLoggedIn = ref(false);
const name = ref('');
const email = ref('');

// ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่
onMounted(() => {
  if (process.client) {
    isLoggedIn.value = !!localStorage.getItem('token');
    if (isLoggedIn.value) {
      fetchUserData();  // ดึงข้อมูลผู้ใช้เมื่อมี token
    }
  }
});

// ฟังก์ชันดึงข้อมูลผู้ใช้จาก API
const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(userData);
    const userData = await response.json();
    name.value = userData.name || '';  // กำหนดค่าชื่อผู้ใช้
    email.value = userData.email || '';  // กำหนดค่าอีเมลผู้ใช้
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

// ฟังก์ชันออกจากระบบ
const logout = () => {
  if (process.client) {
    localStorage.removeItem('token');  // ลบ token จาก localStorage
    isLoggedIn.value = false;  // อัพเดตสถานะ isLoggedIn เป็น false
    router.push('/login');  // นำผู้ใช้ไปที่หน้า login
  }
};

// ฟังก์ชันตรวจสอบเส้นทางปัจจุบัน
const isActiveRoute = (route) => {
  return router.currentRoute.value.path === route;
};
</script>

<style scoped>
/* สไตล์ที่คุณต้องการสำหรับคอมโพเนนต์นี้ */
</style>
