import { createRouter, createWebHistory } from 'vue-router'
import serverFarmsDemo from '@/components/serverFarmsDemo'

const routes = [
  {
    path: '/',
    name: 'serverFarmsDemo',
    component: serverFarmsDemo,
  },
  {
    path: '/threejsdemo',
    name: 'threejsdemo',
    component: () => import('@/components/threedemo'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
