import ChatsView from '@/views/ChatsView.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RouletteView from '@/views/RouletteView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/roulette',
      name: 'roulette',
      component: RouletteView,
    },
    {
      path: '/chats',
      name: 'chats',
      component: ChatsView,
    },
  ],
})

export default router
