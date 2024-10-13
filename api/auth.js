// api/auth.js
export const loginApi = async (email, password) => {

  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // ส่งข้อมูลอีเมลและรหัสผ่าน
    });

    // ตรวจสอบว่าการตอบกลับเป็น OK หรือไม่
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Login failed response:', errorResponse); // ล็อกการตอบกลับข้อผิดพลาด
      throw new Error(errorResponse.message || 'Login failed.'); // ใช้ message แทน error
    }

    const data = await response.json(); // รับข้อมูล JSON จากการตอบกลับ
    return data; // คืนค่าข้อมูลที่ได้
  } catch (error) {
    console.error('Error during login API call:', error);
    throw error; // โยนข้อผิดพลาดสำหรับการจัดการในส่วนที่เรียกใช้
  }
};
