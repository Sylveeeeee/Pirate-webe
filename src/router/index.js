import Vue from 'vue';
import Router from 'vue-router';
import Login from 'Login.vue';
import Register from 'Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', redirect: '/login' }
  ]
});
