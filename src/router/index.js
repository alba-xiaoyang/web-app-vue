import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RouletteView from '@/views/RouletteView.vue'
import ChatsView from '@/views/ChatsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/',
      name: 'roulette',
      component: RouletteView,
    },
    {
      path: '/',
      name: 'chats',
      component: ChatsView,
    },
  ],
})

export default router
