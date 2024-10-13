// api/auth.js
export const loginApi = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/login', { // URL ของ API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // ส่งข้อมูลอีเมลและรหัสผ่าน
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Login failed.'); // โยนข้อผิดพลาดถ้าการตอบกลับไม่โอเค
    }

    const data = await response.json(); // รับข้อมูล JSON จากการตอบกลับ
    return data; // คืนค่าข้อมูลที่ได้
  } catch (error) {
    console.error('Error during login API call:', error);
    throw error; // โยนข้อผิดพลาดสำหรับการจัดการในส่วนที่เรียกใช้
  }
};
