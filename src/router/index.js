import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页', icon: '', noCache: false },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '工具', icon: '', noCache: false },
  },
  {
    path: '/album',
    name: 'album',
    component: () => import('@/views/users/index.vue'),
    meta: { title: '相册', icon: '', noCache: false },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export { routes }

export default router
