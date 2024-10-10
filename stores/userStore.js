// stores/userStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const name = ref('');
  const email = ref('');

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      name.value = userData.name || '';
      email.value = userData.email || '';
      isLoggedIn.value = true;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    isLoggedIn.value = false;
    name.value = '';
    email.value = '';
  };

  return { isLoggedIn, name, email, fetchUserData, logout };
});
