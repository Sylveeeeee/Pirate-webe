<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p v-if="error">{{ error }}</p>
      </form>
      <router-link to="/register">Register</router-link>
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
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/api/login', {
            username: this.username,
            password: this.password
          });
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        } catch (err) {
          this.error = err.response?.data?.error || 'Login failed';
        }
      }
    }
  };
  </script>
  