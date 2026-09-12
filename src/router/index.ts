import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/homepage' },
    {
      path: '/homepage',
      component: () => import('@/views/HomePage.vue'),
      children: [{ path: '/sidebar', component: () => import('@/components/layouts/SideBar.vue') }],
    },
  ],
})

export default router
