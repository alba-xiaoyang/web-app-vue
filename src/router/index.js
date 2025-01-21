import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import GroupView from '@/views/GroupView.vue'
import ChatComponent from '@/views/ChatView.vue'
import { auth } from '@/firebaseConfig'
import ProfileView from '@/views/ProfileView.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/group', name: 'Group', component: GroupView },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/chat', name: 'chat', component: ChatComponent},
  { path: '/profile', name: 'Profile', component: ProfileView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router
