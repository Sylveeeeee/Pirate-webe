export default function ({ store, redirect }) {
  // ตรวจสอบสถานะการเข้าสู่ระบบจาก Vuex store หรือสถานที่อื่น
  if (!store.state.isLoggedIn) { // ปรับปรุงให้ตรงกับการเก็บสถานะของคุณ
    return redirect('/login'); // เปลี่ยนเส้นทางไปยังหน้า login ถ้ายังไม่ได้เข้าสู่ระบบ
  }
}
