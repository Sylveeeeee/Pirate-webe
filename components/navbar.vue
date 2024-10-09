<template>
  <div class="nav">
    <div class="logo">
            <button @click="goToIndex">PirateID</button>
        </div>
    <label for="site-search" class="sr-only">ค้นหา</label>
    <input type="search" id="site-search" name="q" placeholder="SEARCH" />
    <button class="spinbutton" @click="handleSearch">Search</button>
    <router-link to="/cart">
      <div class="bg-[#ffbaba00] flex content-center justify-center"><CartIcon /></div>
    </router-link>

    <div class="sign-login">
      <!-- แสดงลิงก์สมัครสมาชิกและเข้าสู่ระบบถ้ายังไม่ล็อกอิน -->
      <router-link v-if="!isLoggedIn" to="/signup" class="sign">
        <div class="BTsign">สมัครสมาชิก</div>
      </router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="login">
        <div class="BTlogin">เข้าสู่ระบบ</div>
      </router-link>
      <!-- แสดงลิงก์โปรไฟล์และปุ่มออกจากระบบถ้าล็อกอินแล้ว -->
      <router-link v-if="isLoggedIn" to="/profile">
        <div class="BTprofile rounded-full h-[50px] w-[50px] bg-[#ffff]"></div>
      </router-link>
      <div v-if="isLoggedIn">
          <UserCoins />
      </div>
      <button v-if="isLoggedIn" @click="logout" class="logout ml-[10px]">
        <div class="BTlogout">ออกจากระบบ</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CartIcon from '~/components/CartIcon.vue';

const router = useRouter();
const isLoggedIn = ref(false);

onMounted(() => {
  if (process.client) {
    isLoggedIn.value = !!localStorage.getItem('token');
  }
});

// ฟังก์ชัน logout
const logout = () => {
  if (process.client) {
    // ลบ token ออกจาก localStorage
    localStorage.removeItem('token');
    // อัพเดตสถานะ isLoggedIn เป็น false
    isLoggedIn.value = false;
    // นำผู้ใช้ไปที่หน้า login หรือหน้าแรก
    router.push('/login');
  }
};

const handleSearch = () => {
  const query = document.getElementById('site-search').value;
  // Implement search functionality here
  console.log('Search query:', query);
};
</script>

<style>
/* สไตล์เดิมของคุณ */
#site-search label {
  border-radius: 5px;
  border: solid black;
}
#site-search {
  border-radius: 2px;
}
.BTsign, .BTlogin, .BTprofile, .BTlogout {
  color: aliceblue;
}
.nav {
  background-color: black;
  height: 100px;
  width: auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  margin-right: 100px;
  height: 60px;
  width: 150px;
  color: aqua;
  align-items: center;
  display: flex;
  background-color: rgb(0, 0, 0);
  margin-top: 10px;
  font-family: fantasy;
  font-size: 35px;
  margin-bottom: 10px;
  background: linear-gradient(to right, aqua, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
label {
  position: absolute;
  width: 200px;
}
input {
  position: relative;
  width: 400px;
  height: 30px;
  background-color: #5e5e5e;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: 1px solid;
  border-color: #474747;
  color: rgb(255, 255, 255);
}
.spinbutton {
  height: 30px;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: 1px solid;
  border-color: black;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-right: 20px;
  padding-inline: 5px;
}
.sign-login {
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign {
  margin-right: 20px;
  border-right: solid 2px;
  padding-right: 20px;
  border-right: aqua solid;
}
.BTsign:hover, .BTlogin:hover, .BTprofile:hover {
  color: aqua;
}
.BTlogout:hover {
    color: red;
}
.spinbutton:hover {
  background-color: rgba(0, 255, 255, 0.381);
  color: aqua;
  border-radius: 2px;
}



</style>

<script>
export default {
  methods: {
    goToIndex() {
      this.$router.push('/');
    },
}
}
</script>


