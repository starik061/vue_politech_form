import { createRouter, createWebHistory } from 'vue-router'
import Forms from '@/views/Forms.vue'
import Auth from '@/views/Auth.vue'
import FormsData from '@/components/FormsData.vue'
import Users from '@/components/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forms',
      component: Forms,
      children: [
        {
          path: 'forms',
          name: 'forms',
          component: FormsData
        },
        {
          path: 'users',
          name: 'users',
          component: Users
        }
      ]
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
