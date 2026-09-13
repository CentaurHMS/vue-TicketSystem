import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //这里是不需要导航栏的组件
    {
      path:'/blank',
      component:()=> import('@/layouts/BlankLayout.vue'),
      children:[
        
      ]
    },

    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: () => import('@/views/HomePage.vue'),
      children: [
        { path: 'sidebar', component: () => import('@/layouts/component/SideBar.vue') },

      ],
    },
  ],
})

export default router
