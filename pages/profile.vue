<template>
    <div class=" ">
        <navbar />
        <navbar2 />
        <div class="flex justify-center mt-[20px]">
            <navcol/>
            <div class="max-w-2xl w-[800px] flex flex-col">
                <div class="text-[40px] text-[#00ffff] mb-[20px] font-bold">ข้อมูลส่วนตัว</div>

                <!-- ฟิลด์ Name -->
                <div class="mb-6">
                    <div class="mb-[10px] text-[18px] text-[#ffff]">Name</div>
                    <div class="flex w-[500px]">
                        <input v-model="name" id="name" type="text" class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px] "/>
                        <button @click="save('name')" class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]">บันทึก</button>
                    </div>
                </div>

                <!-- ฟิลด์ E-mail -->
                <div class="mb-6">
                    <div class="mb-[10px] text-[18px] text-[#ffff]">E-mail</div>
                    <div class="flex w-[500px]">
                        <input v-model="email" id="email" type="email" class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]" />
                        <button @click="save('email')" class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]">บันทึก</button>
                    </div>
                </div>

                <!-- ฟิลด์ Phone -->
                <div class="mb-6">
                    <div class="mb-[10px] text-[18px] text-[#ffff]">Phone</div>
                    <div class="flex w-[500px]">
                        <input v-model="phone" id="phone" type="text" class="text-[20px] border-r-0 bg-[#fff0] shadow appearance-none border-[#ffff] border-1 rounded-l w-full py-2 px-3 text-[#ffff] leading-tight focus:outline-none focus:shadow-outline h-[45px]"/>
                        <button @click="save('phone')" class="text-[#ffffff] py-2 px-4 rounded-r hover:bg-[#00ffff] border hover:text-[#000000] hover:border-[#00ffff]">บันทึก</button>
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
                    <div class="mb-[10px] text-[18px] text-[#ffff]">NewPassword</div>
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
                    <div class="mb-[10px] text-[18px] text-[#ffff]">Confirm NewPassword</div>
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
                <div class="">
                    <button
                    @click="saveChanges"
                    class="bg-[#00ffff] hover:bg-[#00ffffc2] text-black font-bold py-2 px-4 rounded w-"
                    >
                    Changes Password
                </button>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");

// Password visibility toggles
const showPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmNewPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleNewPasswordVisibility = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleConfirmNewPasswordVisibility = () => {
  showConfirmNewPassword.value = !showConfirmNewPassword.value;
};

// ฟังก์ชันบันทึกข้อมูล
const save = (field) => {
  alert(`บันทึกข้อมูล ${field} เรียบร้อยแล้ว!`);
};
</script>

<style scoped>
body {
  background: #1d1d1d;
}

/* ซ่อนไอคอนที่ไม่ต้องการ */
button i {
  display: none;
}
</style>
