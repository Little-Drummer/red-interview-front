import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'
import { useMiscStore } from '@/stores/modules/misc.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/explore'
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('../views/NotificationView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    const MiscStore = useMiscStore()
    // console.log(to)
    // if (savedPosition) {
    //   return savedPosition
    // }

    if (to.path === '/explore') {
      return { top: 1000, behavior: 'smooth', el: '.feeds-page' }
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log(MiscStore.feedsScrollPosition, '---------')
      //     resolve({
      //       top: 1000,
      //       behavior: 'smooth',
      //       el: '.el-main'
      //     })
      //   }, 1000)
      // })

      // return { top: MiscStore.feedsScrollPosition, behavior: 'smooth' }
    } else return { top: 1000, behavior: 'smooth' }
  }
  // }
})

export default router
