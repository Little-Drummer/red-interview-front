import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref({
    email: '',
    password: '',
    phone:""
  })
  const isLogin = ref(false)
  const loginDialogVisible = ref(false)

  function setToken(newToken: string) {
    token.value = newToken
  }
  function setUserInfo(newUserInfo: any) {
    userInfo.value = newUserInfo
  }
  function setIsLogin(newIsLogin: boolean) {
    isLogin.value = newIsLogin
  }
  function setLoginDialogVisible(newLoginDialogVisible: boolean) {
    loginDialogVisible.value = newLoginDialogVisible
  }

  return {
    token,
    userInfo,
    isLogin,
    loginDialogVisible,
    setToken,
    setUserInfo,
    setIsLogin,
    setLoginDialogVisible
  }
})
