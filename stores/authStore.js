import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(null);
  const isAuthenticated = ref(false);

  // Action for login
  const login = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        user.value = data.user;
        token.value = data.token;
        isAuthenticated.value = true;

        // Save token to localStorage
        localStorage.setItem('token', token.value);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Action for logout
  const logout = () => {
    user.value = null;
    token.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('token');
  };

  // Action for fetching user data
  const fetchUserData = async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const response = await fetch('/api/user', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          user.value = data; // Set user data
          isAuthenticated.value = true;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    fetchUserData,
  };
});
