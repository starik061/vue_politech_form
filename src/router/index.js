import { createRouter, createWebHistory } from 'vue-router'
import Forms from '@/views/Forms.vue'
import Auth from '@/views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forms',
      component: Forms
    },
    {
      path: '/authentication',
      name: 'auth',
      component: Auth
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Auth
    }
  ]
})

export default router
