import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'
import PostDetail from '@/views/posts/PostDetail.vue'
import { useUserStore } from '@/stores/modules/user.ts'
// import { useMiscStore } from '@/stores/modules/misc.ts'

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
      component: () => import('../views/NotificationView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/explore/:postId',
      name: 'postDetail',
      component: PostDetail
    },
    {
      path: '/user/profile/:userId',
      name: 'userProfile',
      component: () => import('../views/user/UserProfile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
  // scrollBehavior(to, from, savedPosition) {
  //   const MiscStore = useMiscStore()
  // console.log(to)
  // if (savedPosition) {
  //   return savedPosition
  // }
  // if (to.path === '/explore') {
  // return { top: 1000, behavior: 'smooth', el: '.feeds-page' }
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
  //     } else return { top: 1000, behavior: 'smooth' }
  //   }
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  const userStore = useUserStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // console.log('需要登录')
    if (!userStore.isLogin) {
      userStore.setLoginDialogVisible(true)
      userStore.setAttemptedRoute(to.fullPath)
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
