import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import GroupView from '@/views/GroupView.vue'
import ChatComponent from '@/views/ChatView.vue'
import { auth } from '@/firebaseConfig'
import ProfileView from '@/views/ProfileView.vue'
import RouletteView from '@/views/RouletteView.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
<<<<<<< HEAD
  { path: '/group', name: 'Group', component: GroupView, meta: {requiresAuth: true},},
=======
  { path: '/group', name: 'Group', component: GroupView },
>>>>>>> 3c28cc8 (Commit rebase responsive)
  { path: '/home', name: 'Home', component: HomeView, meta: {requiresAuth: true}, },
  { path: '/chat', name: 'chat', component: ChatComponent, meta: {requiresAuth: true},},
  { path: '/profile', name: 'Profile', component: ProfileView, meta: {requiresAuth: true},},
  { path: '/roulette', name: 'roulette', component: RouletteView, meta: {requiresAuth: true},}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next({ path: '/' });
  } else {
    next();
  }
});

export default router
