import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tower',
      name: 'tower',
      component: () => import('../views/TowerView.vue')
    },
    {
      path: '/nacelle',
      name: 'nacelle',
      component: () => import('../views/NacelleView.vue')
    },
    {
      path: '/hub',
      name: 'hub',
      component: () => import('../views/HubsView.vue')
    },
    {
      path: '/blade',
      name: 'blade',
      component: () => import('../views/BladesView.vue')
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: () => import('../views/EngineeringView.vue')
    }
  ]
})

export default router
