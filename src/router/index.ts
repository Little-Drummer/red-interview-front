import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/explore',
      children: [
        {
          path: '/explore',
          name: 'explore',
          component: () => ExploreView
          // children: [
          //   {
          //     path: '/explore/re',
          //     name: 're',
          //     component: MainContent
          //   }
          // ]
        },
        {
          path: '/notification',
          name: 'notification',
          component: () => import('../views/NotificationView.vue')
        }
      ]
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
