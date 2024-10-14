import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: '',
      email: '',
      phone: '',
    },
  }),

  getters: {
    isAuthenticated: (state) => !!state.user.email, // ตรวจสอบการ authentication จาก email
  },

  actions: {
    // ฟังก์ชันดึงข้อมูลผู้ใช้
    async fetchUserData() {
      const token = localStorage.getItem('token'); // ดึง token จาก local storage

      try {
        // ใช้ makeRequest ในการดึงข้อมูลผู้ใช้
        const response = await this.makeRequest('/api/user', 'GET', token);
        this.user = response; // กำหนดข้อมูลที่ดึงมาได้ให้กับ state user
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // ส่ง error ไปให้ component handle
      }
    },

    // ฟังก์ชันอัปเดตฟิลด์ผู้ใช้
    async updateUserField(field, value) {
      const token = localStorage.getItem('token'); // ดึง token จาก local storage

      try {
        // ใช้ makeRequest ในการอัปเดตฟิลด์ผู้ใช้
        await this.makeRequest(`/api/user/${field}`, 'PUT', token, { [field]: value });
        this.user[field] = value; // อัปเดต state ภายใน local หลังจากสำเร็จ
      } catch (error) {
        console.error('Error updating user data:', error);
        throw error; // ส่ง error ไปให้ component handle
      }
    },

    // ฟังก์ชันเปลี่ยนรหัสผ่าน
    async changePassword(currentPassword, newPassword) {
      const token = localStorage.getItem('token'); // ดึง token จาก local storage

      try {
        // ใช้ makeRequest ในการเปลี่ยนรหัสผ่าน
        await this.makeRequest('/api/user/password', 'PUT', token, { currentPassword, newPassword });
        alert('Password changed successfully!'); // แจ้งผลสำเร็จ
      } catch (error) {
        console.error('Error changing password:', error);
        throw error; // ส่ง error ไปให้ component handle
      }
    },

    // ฟังก์ชัน request ทั่วไป
    async makeRequest(url, method, token, body = null) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // ส่ง token ถ้าจำเป็น
      };

      // เรียก API request
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null, // ส่ง body ถ้ามี
      });

      // ตรวจสอบว่าการตอบสนอง OK หรือไม่
      if (!response.ok) {
        const errorData = await response.json(); // ดึงข้อมูลข้อผิดพลาดจากเซิร์ฟเวอร์
        throw new Error(errorData.message || 'Network response was not ok'); // ส่งข้อความ error ถ้ามี
      }

      return await response.json(); // คืนค่าข้อมูลจากการตอบสนอง
    },
  },
});
