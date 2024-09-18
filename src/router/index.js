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
    },
    {
      path: '/ec',
      name: 'ec',
      component: () => import('../views/ECView.vue')
    },
    {
      path: '/drivetrain-generators',
      name: 'drivetrain-generators',
      component: () => import('../views/DrivetrainGeneratorsView.vue')
    },
    {
      path: '/top-cover',
      name: 'top-cover',
      component: () => import('../views/TopCoverView.vue')
    },
    {
      path: '/recycle',
      name: 'recycle',
      component: () => import('../views/RecycleView.vue')
    },
    {
      path: '/reuse',
      name: 'reuse',
      component: () => import('../views/ReuseView.vue')
    },
    {
      path: '/quality',
      name: 'quality',
      component: () => import('../views/QualityView.vue')
    },
    {
      path: '/meet-us',
      name: 'meetus',
      component: () => import('../views/MeetUsView.vue')
    }
  ]
})

export default router
