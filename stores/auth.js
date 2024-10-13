import { defineStore } from 'pinia';
import { loginApi } from '../api/auth.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: '',
      email: '',
      id: null,
      coin_balance: 0,
    },
    token: null,
    error: null,
    message: null,
  }),

  actions: {
    initialize() {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUserId) {
          this.token = storedToken;
          this.user = JSON.parse(storedUser);
        } else {
          this.logout(); // Logout if no token or user
        }
      }
    },

    async login(email, password) {
      try {
        const response = await loginApi(email, password);

        if (!response || !response.user) {
          this.setError('User data not found in response.');
          return false;
        }

        // Update user state
        this.user = {
          id: response.user.id,
          name: response.user.name,
          email: response.user.email,
          coin_balance: response.user.coin_balance,
        };
        this.token = response.token;

        // Store in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id);
          localStorage.setItem('user', JSON.stringify(this.user));
        }

        this.message = 'Login successful!';
        this.clearError();
        return true;
      } catch (err) {
        console.error('Login error:', err);
        this.setError(err.message || 'An error occurred during login');
        return false;
      }
    },

    async topUpCoins(amount) {
      if (!this.token) {
        this.setError('User not authenticated. Please log in.');
        return false;
      }
    
      try {
        const response = await fetch('http://localhost:3000/api/topup', { // Specify the full URL
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount }), // Send coin top-up data
        });
    
        if (!response.ok) {
          const errorResponse = await response.json();
          this.setError(errorResponse.error || 'An error occurred during top-up');
          return false;
        }
    
        const responseData = await response.json();
        this.user.coin_balance = responseData.newBalance; // Update user coin balance
        this.message = 'Top-up successful!';
        this.clearError();
        return true;
      } catch (err) {
        console.error('Top-up error:', err);
        this.setError('An error occurred during top-up');
        return false;
      }
    },

    setError(errorMessage) {
      this.error = errorMessage;
    },

    clearError() {
      this.error = null;
    },

    logout() {
      this.user = { name: '', email: '', id: null, coin_balance: 0 };
      this.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
      }
      this.message = 'Logged out successfully.';
    },
  },
});
