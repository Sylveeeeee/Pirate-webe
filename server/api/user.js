import { getUserByEmail } from '../models/user.js'; // นำเข้าโมเดลผู้ใช้

export const loginUser = async (email, password) => {
  console.log('Login attempt with:', { email });

  if (!email || !password) {
    throw new Error('Email and password are required.');
  }

  try {
    const user = await getUserByEmail(email);
    console.log('User found:', user);

    if (!user || user.length === 0 || !user[0].password) {
      console.log('Invalid email or password.');
      throw new Error('Invalid email or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
      console.log('Invalid email or password.');
      throw new Error('Invalid email or password.');
    }

    const token = jwt.sign(
      { id: user[0].id, email: user[0].email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      message: 'Login successful',
      token,
      user: {
        id: user[0].id,
        email: user[0].email,
        name: user[0].name,
        coin_balance: user[0].coin_balance,
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Internal server error.');
  }  
};
