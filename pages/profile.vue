<template>
  <div>
    <navbar />
    <navbar2 />
    <div class="flex justify-center mt-[20px]">
      <navcol />
      <div class="max-w-2xl w-[800px] flex flex-col">
        <div class="text-[40px] text-[#00ffff] mb-[20px] font-bold">ข้อมูลส่วนตัว</div>

        <!-- ตรวจสอบให้แน่ใจว่า user ถูกโหลด -->
        <div v-if="user">
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
                @click="updateUserField('name', user.name)"
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
                @click="updateUserField('email', user.email)"
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
                @click="updateUserField('phone', user.phone)"
                class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]"
              >บันทึก</button>
            </div>
          </div>

          <!-- ฟิลด์ Password -->
          <div class="mb-6">
            <div class="mb-[10px] text-[18px] text-[#ffff]">Password</div>
            <div class="flex w-[500px]">
              <input
                v-model="currentPassword"
                :type="showPassword ? 'text' : 'password'"
                id="currentPassword"
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
              @click="changePassword"
              class="bg-[#00ffff] hover:bg-[#00ffffc2] text-black font-bold py-2 px-4 rounded"
            >
              Change Password
            </button>
          </div>
        </div>

        <!-- แสดงข้อความเมื่อข้อมูลผู้ใช้ยังไม่ถูกโหลด -->
        <div v-else>
          <p class="text-[#ffffff]">Loading user data...</p>
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

// สร้าง refs สำหรับฟิลด์
const user = ref(authStore.user); // กำหนดค่าเริ่มต้นจาก store
const currentPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');
const showPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmNewPassword = ref(false);

// ฟังก์ชันดึงข้อมูลผู้ใช้จาก store
const fetchUserData = async () => {
  try {
    await authStore.fetchUserData(); // เรียกใช้ฟังก์ชันจาก store
    user.value = { ...authStore.user }; // กำหนดค่า user จาก store
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

onMounted(() => {
  fetchUserData(); // เรียกฟังก์ชันเมื่อ component ถูก mount
});

// ฟังก์ชันอัปเดตข้อมูลผู้ใช้
const updateUserField = async (field, value) => {
  try {
    await authStore.updateUserField(field, value); // เรียกใช้ฟังก์ชันจาก store
    alert(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`);
  } catch (error) {
    console.error('Error updating user field:', error);
  }
};

// ฟังก์ชันเปลี่ยนรหัสผ่าน
const changePassword = async () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert("New passwords do not match!");
    return;
  }
  try {
    await authStore.changePassword(currentPassword.value, newPassword.value); // เรียกใช้ฟังก์ชันจาก store
  } catch (error) {
    console.error('Error changing password:', error);
  }
};

// ฟังก์ชันแสดง/ซ่อนรหัสผ่าน
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
/* styles ของคุณ */
</style>
