import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TowerView from '../views/TowerView.vue'
import NacelleView from '../views/NacelleView.vue'
import HubsView from '../views/HubsView.vue'
import BladesView from '../views/BladesView.vue'
import EngineeringView from '../views/EngineeringView.vue'
import ECView from '../views/ECView.vue'
import DrivetrainGeneratorsView from '../views/DrivetrainGeneratorsView.vue'
import TopCoverView from '../views/TopCoverView.vue'
import RecycleView from '../views/RecycleView.vue'
import ReuseView from '../views/ReuseView.vue'
import QualityView from '../views/QualityView.vue'
import MeetUsView from '../views/MeetUsView.vue'
import ServiceView from '../views/ServiceView.vue'
import OffshoreView from '../views/OffshoreView.vue'
import EsgStrategyView from '../views/EsgStrategyView.vue'

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
      component: TowerView
    },
    {
      path: '/nacelle',
      name: 'nacelle',
      component: NacelleView
    },
    {
      path: '/hub',
      name: 'hub',
      component: HubsView
    },
    {
      path: '/blade',
      name: 'blade',
      component: BladesView
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: EngineeringView
    },
    {
      path: '/ec',
      name: 'ec',
      component: ECView
    },
    {
      path: '/drivetrain-generators',
      name: 'drivetrain-generators',
      component: DrivetrainGeneratorsView
    },
    {
      path: '/top-cover',
      name: 'top-cover',
      component: TopCoverView
    },
    {
      path: '/recycle',
      name: 'recycle',
      component: RecycleView
    },
    {
      path: '/reuse',
      name: 'reuse',
      component: ReuseView
    },
    {
      path: '/quality',
      name: 'quality',
      component: QualityView
    },
    {
      path: '/meet-us',
      name: 'meetus',
      component: MeetUsView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/offshore',
      name: 'offshore',
      component: OffshoreView
    },
    {
      path: '/esg',
      name: 'esg',
      component: EsgStrategyView
    }
  ]
})

export default router
