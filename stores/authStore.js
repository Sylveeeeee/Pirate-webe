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
    isAuthenticated: (state) => !!state.user.email, // Check if the user is authenticated based on the email presence
  },

  actions: {
    async fetchUserData() {
      const token = localStorage.getItem('token'); // Get token from local storage

      try {
        const response = await this.makeRequest('/api/user', 'GET', token);
        this.user = response; // Assign the fetched user data to the state
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },

    async updateUserField(field, value) {
      const token = localStorage.getItem('token'); // Get token from local storage

      try {
        await this.makeRequest(`/api/user/${field}`, 'PUT', token, { [field]: value });
        this.user[field] = value; // Update the local state if the field is successfully updated
      } catch (error) {
        console.error('Error updating user data:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },

    async changePassword(currentPassword, newPassword) {
      const token = localStorage.getItem('token'); // Get token from local storage

      try {
        await this.makeRequest('/api/user/password', 'PUT', token, { currentPassword, newPassword });
        alert('Password changed successfully!'); // Handle successful password change
      } catch (error) {
        console.error('Error changing password:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    },

    async makeRequest(url, method, token, body = null) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Send the token if necessary
      };

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null, // Send the body if it exists
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error response from server
        throw new Error(errorData.message || 'Network response was not ok'); // Throw an error with the message from the server if available
      }

      return await response.json(); // Return the response data
    },
  },
});
