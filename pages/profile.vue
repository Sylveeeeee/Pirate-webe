<template>
  <div>
    <navbar />
    <navbar2 />
    <div class="flex justify-center mt-[20px]">
      <navcol />
      <div class="max-w-2xl w-[800px] flex flex-col">
        <div class="text-[40px] text-[#00ffff] mb-[20px] font-bold">ข้อมูลส่วนตัว</div>

        <!-- ฟิลด์ Name -->
        <div class="mb-6">
          <div class="mb-[10px] text-[18px] text-[#ffff]">Name</div>
          <div class="flex w-[500px]">
            <input
              v-model="user.name"
              id="name"
              type="text"
              class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"
            />
            <button
              @click="save('name')"
              class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]"
            >บันทึก</button>
          </div>
        </div>

        <!-- ฟิลด์ E-mail -->
        <div class="mb-6">
          <div class="mb-[10px] text-[18px] text-[#ffff]">E-mail</div>
          <div class="flex w-[500px]">
            <input
              v-model="user.email"
              id="email"
              type="email"
              class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"
            />
            <button
              @click="save('email')"
              class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]"
            >บันทึก</button>
          </div>
        </div>

        <!-- ฟิลด์ Phone -->
        <div class="mb-6">
          <div class="mb-[10px] text-[18px] text-[#ffff]">Phone</div>
          <div class="flex w-[500px]">
            <input
              v-model="user.phone"
              id="phone"
              type="text"
              class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"
            />
            <button
              @click="save('phone')"
              class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]"
            >บันทึก</button>
          </div>
        </div>

        <!-- ฟิลด์ Password -->
        <div class="mb-6">
          <div class="mb-[10px] text-[18px] text-[#ffff]">Password</div>
          <div class="flex w-[500px]">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"
            />
            <button
              @click="togglePasswordVisibility"
              class="text-[#ffffff] py-2 px-4 rounded-r border-l-0 border flex items-center justify-center"
            >
              <Icon v-if="showPassword" class="text-[20px]" name="entypo:eye-with-line" />
              <Icon v-else class="text-[20px]" name="entypo:eye" />
            </button>
          </div>
        </div>

        <!-- ฟิลด์ New Password -->
        <div class="mb-6">
          <div class="mb-[10px] text-[18px] text-[#ffff]">New Password</div>
          <div class="flex w-[500px]">
            <input
              v-model="newPassword"
              :type="showNewPassword ? 'text' : 'password'"
              id="newPassword"
              class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"
            />
            <button
              @click="toggleNewPasswordVisibility"
              class="text-[#ffffff] py-2 px-4 rounded-r border-l-0 border flex items-center justify-center"
            >
              <Icon v-if="showNewPassword" class="text-[20px]" name="entypo:eye-with-line" />
              <Icon v-else class="text-[20px]" name="entypo:eye" />
            </button>
          </div>
        </div>

        <!-- ฟิลด์ Confirm New Password -->
        <div class="mb-6">
          <div class="mb-[10px] text-[18px] text-[#ffff]">Confirm New Password</div>
          <div class="flex w-[500px]">
            <input
              v-model="confirmNewPassword"
              :type="showConfirmNewPassword ? 'text' : 'password'"
              id="confirmNewPassword"
              class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"
            />
            <button
              @click="toggleConfirmNewPasswordVisibility"
              class="text-[#ffffff] py-2 px-4 rounded-r border-l-0 border flex items-center justify-center"
            >
              <Icon v-if="showConfirmNewPassword" class="text-[20px]" name="entypo:eye-with-line" />
              <Icon v-else class="text-[20px]" name="entypo:eye" />
            </button>
          </div>
        </div>

        <div>
          <button
            @click="saveChanges"
            class="bg-[#00ffff] hover:bg-[#00ffffc2] text-black font-bold py-2 px-4 rounded"
          >
            Changes Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore'; // นำเข้า authStore
import navcol from './components/navcol.vue';

const authStore = useAuthStore(); // สร้าง instance ของ authStore

const user = ref({
  name: '',
  email: '',
  phone: ''
});
const password = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');
const showPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmNewPassword = ref(false);

// ฟังก์ชันดึงข้อมูลผู้ใช้จาก API
const fetchUserData = async () => {
  try {
    const response = await fetch('/api/user'); // ใช้ fetch แทน axios
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // แปลง response เป็น JSON
    console.log(data); // ตรวจสอบข้อมูลที่ได้จาก API
    user.value = data; // อัพเดต user state
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};


onMounted(() => {
  fetchUserData(); // เรียกฟังก์ชันเมื่อ component ถูก mount
});

// ฟังก์ชันบันทึกข้อมูล
const save = async (field) => {
  try {
    const response = await fetch(`/api/user/${field}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: user.value[field] }), // ส่งข้อมูลในรูปแบบ JSON
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert(`บันทึกข้อมูล ${field} เรียบร้อยแล้ว!`);
  } catch (error) {
    alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
  }
};

// ฟังก์ชันสำหรับการเปลี่ยนรหัสผ่าน
const saveChanges = async () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert("รหัสผ่านใหม่ไม่ตรงกัน");
    return;
  }
  try {
    const response = await fetch('/api/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oldPassword: password.value,
        newPassword: newPassword.value,
      }), // ส่งข้อมูลในรูปแบบ JSON
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('เปลี่ยนรหัสผ่านเรียบร้อยแล้ว!');
  } catch (error) {
    alert('เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน');
  }
};

// ฟังก์ชันสำหรับ toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleNewPasswordVisibility = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleConfirmNewPasswordVisibility = () => {
  showConfirmNewPassword.value = !showConfirmNewPassword.value;
};
</script>

<style scoped>
/* เพิ่มสไตล์ที่ต้องการ */
</style>
