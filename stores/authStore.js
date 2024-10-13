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
    isAuthenticated: (state) => {
      return !!state.user.email; // Check if the user is authenticated based on the email presence
    },
  },

  actions: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the token if necessary
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        this.user = data; // Assign the fetched user data to the state
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },

    async updateUserField(field, value) {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const response = await fetch(`/api/user/${field}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the token if necessary
          },
          body: JSON.stringify({ [field]: value }), // Send the updated field
        });

        if (!response.ok) {
          throw new Error('Failed to update user data');
        }

        // If the field is successfully updated, update the local state
        this.user[field] = value; 
      } catch (error) {
        console.error('Error updating user data:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },

    async changePassword(currentPassword, newPassword) {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const response = await fetch('/api/user/password', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the token if necessary
          },
          body: JSON.stringify({ currentPassword, newPassword }), // Send the current and new password
        });

        if (!response.ok) {
          throw new Error('Failed to change password');
        }

        // Handle successful password change (e.g., show a message)
        alert('Password changed successfully!');
      } catch (error) {
        console.error('Error changing password:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },
  },
});
