export const loginApi = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Login failed response:', errorResponse);
      throw new Error(errorResponse.message || 'Login failed.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login API call:', error);
    throw error; // โยนข้อผิดพลาดสำหรับการจัดการในส่วนที่เรียกใช้
  }
};
