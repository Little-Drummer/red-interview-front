import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { userInfoType } from '@/type/userType.ts'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const password = ref('')
    const rePassword = ref('')
    const userInfo = ref({
      id: 0,
      email: '',
      name: '',
      gender: 0,
      bio: '',
      avatar: '',
      userType: 0
    })
    const isLogin = ref(false)
    const loginDialogVisible = ref(false)
    const attemptedRoute = ref('')

    function setToken(newToken: string) {
      token.value = newToken
    }
    function setPassword(newPassword: string) {
      password.value = newPassword
    }
    function setRePassword(newRePassword: string) {
      rePassword.value = newRePassword
    }
    function setUserInfo(newUserInfo: Partial<userInfoType>) {
      // console.log(newUserInfo, 'newUserInfo')
      // 使用 Object.assign 或者展开运算符来合并新旧对象
      userInfo.value = { ...userInfo.value, ...newUserInfo }
    }
    function setIsLogin(newIsLogin: boolean) {
      isLogin.value = newIsLogin
    }
    function setLoginDialogVisible(newLoginDialogVisible: boolean) {
      loginDialogVisible.value = newLoginDialogVisible
    }
    function setAttemptedRoute(newAttemptedRoute: string) {
      attemptedRoute.value = newAttemptedRoute
    }

    return {
      token,
      password,
      rePassword,
      userInfo,
      isLogin,
      loginDialogVisible,
      attemptedRoute,
      setAttemptedRoute,
      setToken,
      setPassword,
      setRePassword,
      setUserInfo,
      setIsLogin,
      setLoginDialogVisible
    }
  },
  {
    persist: true
  }
)
