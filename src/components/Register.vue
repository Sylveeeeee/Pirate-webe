<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p v-if="error">{{ error }}</p>
      </form>
      <router-link to="/login">Login</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('http://localhost:3000/api/register', {
            username: this.username,
            password: this.password
          });
          this.$router.push('/login');
        } catch (err) {
          this.error = err.response?.data?.error || 'Registration failed';
        }
      }
    }
  };
  </script>
  