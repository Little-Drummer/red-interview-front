<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/modules/user.ts'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { ElMessage } from 'element-plus'
import {
  loginService,
  registerService,
  sendVerificationCode
} from '@/api/user.ts'
import router from '@/router'

const userStore = useUserStore()
const { loginDialogVisible, userInfo } = storeToRefs(userStore)

const setLoginDialogVisible = (visible: boolean) => {
  userStore.setLoginDialogVisible(visible)
  // 清空数据
  userStore.setUserInfo({
    email: ''
  })
  userStore.setPassword('')
  userStore.setRePassword('')
}
const userInfoEmail = computed({
  get: () => userInfo.value.email,
  set: (value) => {
    userStore.userInfo.email = value
  }
})

const verificationCodeText = ref('获取验证码')
// 获取验证码的方法
const getCode = async () => {
  if (isOk.value === 1) {
    let resultCode = await sendVerificationCode(userInfo.value.email)
    if (resultCode === 200) {
      isOk.value = 2
      ElMessage({
        message: '验证码发送成功',
        type: 'success',
        appendTo: '.login-modal'
      })
    } else {
      ElMessage({
        message: '验证码发送失败',
        type: 'error',
        appendTo: '.login-modal'
      })
    }
    if (verificationCode.value.length === 6) {
      isRegisterActive.value = true
    }
    let count = 60
    verificationCodeText.value = `重新发送 (${count})s`
    const timer = setInterval(() => {
      count--
      verificationCodeText.value = `重新发送 (${count}s)`
      if (count === 0) {
        clearInterval(timer)
        verificationCodeText.value = '获取验证码'
        if (
          isFormOk(
            userInfo.value.email,
            userStore.password,
            userStore.rePassword
          )
        ) {
          isOk.value = 1
        } else {
          isOk.value = 0
        }
      }
    }, 1000)
  } else if (isOk.value === 0) {
    ElMessage({
      message: '请检查邮箱和密码是否正确',
      type: 'error',
      appendTo: '.login-modal'
    })
  } else {
    ElMessage({
      message: '验证码已发送，请稍后再试',
      type: 'error',
      appendTo: '.login-modal'
    })
  }
}

const isOk = ref(0) // 0 格式错误 1 格式正确 2 已经发送
// 验证表单是否正确
const isFormOk = (email: string, password: string, rePassword: string) => {
  return (
    email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) &&
    password &&
    rePassword &&
    password === rePassword
  )
}

// 改变获取验证码按钮状态
watchEffect(() => {
  if (isOk.value === 2) {
    return
  }
  const email = userInfo.value.email
  const password = userStore.password
  const rePassword = userStore.rePassword
  if (isFormOk(email, password, rePassword)) {
    isOk.value = 1
  } else {
    isOk.value = 0
  }
  // if (verificationCode.length === 6 && isOk.value === 2) {
  //   isRegisterVisible.value = true
  // } else {
  //   isRegisterVisible.value = false
  // }
})

// 注册按钮是否可点击
const isRegisterActive = ref(false)

// 验证码
const verificationCode = ref('')
// 验证码
const verificationCodeCom = computed({
  set: (value) => {
    // console.log(value, 'value')
    isRegisterActive.value = value.length === 6
    verificationCode.value = value
  },
  get: () => {
    return verificationCode.value
  }
})
// 控制注册和登录的显示
const isRegisterVisible = ref(false)
// 注册方法
const onRegister = async () => {
  // console.log(userInfo.value)
  if (!verificationCode.value || verificationCode.value.length !== 6) {
    ElMessage({
      message: '请检查验证码是否正确',
      type: 'error',
      appendTo: '.login-modal'
    })
    return
  }
  if (
    !isFormOk(userInfo.value.email, userStore.password, userStore.rePassword)
  ) {
    ElMessage({
      message: '请检查邮箱和密码是否正确',
      type: 'error',
      appendTo: '.login-modal'
    })
    return
  }
  // 注册

  let result = await registerService({
    email: userInfo.value.email,
    password: userStore.password,
    verificationCode: verificationCode.value
  })
  // console.log(result)
  if (result.code === 200) {
    ElMessage({
      message: '注册成功',
      type: 'success',
      appendTo: '.login-modal'
    })
    // 1.注册成功后跳转到登录
    isRegisterVisible.value = false
    return
    // setLoginDialogVisible(false)
  }
  if (result.code === 400) {
    const cause: { [key: string]: string } = result.data
    const keys: string[] = Object.keys(cause)
    keys.forEach((key) => {
      ElMessage({
        message: cause[key],
        type: 'error',
        appendTo: '.login-modal'
      })
    })
  } else {
    ElMessage({
      message: result.message,
      type: 'error',
      appendTo: '.login-modal'
    })
  }
}
// 登录按钮是否可点击
const isLoginActive = computed(() => {
  return userInfo.value.email && userStore.password
})
// 登录方法
const onLogin = async () => {
  if (
    userInfo.value.email &&
    userInfo.value.email.match(
      /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    ) &&
    userStore.password
  ) {
    // 登录
    let result = await loginService({
      email: userInfo.value.email,
      password: userStore.password
    })
    if (result.code === 200) {
      console.log(result.data)
      userStore.setIsLogin(true)
      userStore.setUserInfo({
        id: result.data.id as number,
        email: result.data.email,
        name: result.data.name,
        gender: result.data.gender as number,
        bio: result.data.bio,
        avatar: result.data.avatar,
        userType: result.data.userType as number
      })
      userStore.setPassword('')
      userStore.setToken(result.data.token)
      userStore.setLoginDialogVisible(false)
      ElMessage({
        message: '登录成功',
        type: 'success',
        appendTo: '.login-modal'
      })
      if (
        userStore.attemptedRoute !== '' &&
        userStore.attemptedRoute !== '/user/profile/0'
      ) {
        await router.push(userStore.attemptedRoute)
        userStore.setAttemptedRoute('') // 清除保存的路由
      } else {
        await router.push('/user/profile/' + result.data.id)
      }
      return
    } else if (result.code === 400) {
      const cause: { [p: string]: string } = result.data as {
        [p: string]: string
      }
      const keys: string[] = Object.keys(cause)
      keys.forEach((key) => {
        ElMessage({
          message: cause[key],
          type: 'error',
          appendTo: '.login-modal'
        })
      })
    } else {
      ElMessage({
        message: result.message,
        type: 'error',
        appendTo: '.login-modal'
      })
    }
  } else {
    ElMessage({
      message: '请检查邮箱和密码是否正确',
      type: 'error',
      appendTo: '.login-modal'
    })
  }
}
</script>

<template>
  <div class="" v-if="loginDialogVisible">
    <div
      class="reds-modal login-modal"
      :class="{
        'reds-modal-open': loginDialogVisible
      }"
    >
      <i
        class="reds-mask"
        aria-label="弹窗遮罩"
        @click="setLoginDialogVisible(false)"
      ></i>
      <div class="login-container">
        <div class="close-button" @click="setLoginDialogVisible(false)">
          <!--        <div class="close-button" @click="">-->
          <Icon icon="material-symbols:close" :width="20" />
          <!--          <button @click="isRegisterVisible = !isRegisterVisible">切换</button>-->
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="isRegisterVisible" class="register-form">
            <div class="title">电子邮箱注册</div>
            <div class="prompt">支持大部分电子邮箱</div>
            <div class="input-container">
              <form action="">
                <label for="" class="email">
                  <input
                    type="text"
                    placeholder="请输入邮箱"
                    name="blur"
                    autofocus
                    autocomplete="username"
                    v-model="userInfoEmail"
                    maxlength="25"
                    ref="email"
                  />
                  <span
                    class="clear-icon"
                    v-if="userInfoEmail"
                    @click="userStore.userInfo.email = ''"
                  >
                    <Icon icon="ci:off-outline-close" :width="18" />
                  </span>
                </label>
                <div style="height: 8px"></div>
                <label for="" class="password">
                  <input
                    type="password"
                    placeholder="请输入密码"
                    name="blur"
                    v-model="userStore.password"
                    maxlength="20"
                    minlength="8"
                    autocomplete="new-password"
                  />
                  <span
                    class="clear-icon"
                    v-if="userStore.password"
                    @click="userStore.password = ''"
                  >
                    <Icon icon="ci:off-outline-close" :width="18" />
                  </span>
                </label>
                <div style="height: 8px"></div>
                <label for="" class="re-password">
                  <input
                    type="password"
                    placeholder="请再次输入密码"
                    name="blur"
                    v-model="userStore.rePassword"
                    maxlength="20"
                    minlength="8"
                    autocomplete="new-password"
                  />
                  <span
                    class="clear-icon"
                    v-if="userStore.rePassword"
                    @click="userStore.rePassword = ''"
                  >
                    <Icon icon="ci:off-outline-close" :width="18" />
                  </span>
                </label>
                <div style="height: 8px"></div>
                <label for="" class="auth-code">
                  <input
                    type="text"
                    placeholder="请输入验证码"
                    autocomplete="off"
                    v-model="verificationCodeCom"
                    maxlength="6"
                  />
                  <span
                    class="code-button"
                    @click="getCode"
                    :class="{ active: isOk == 1 }"
                    >{{ verificationCodeText }}</span
                  >
                </label>
                <!--              <div class="err-msg"></div>-->
                <button
                  type="button"
                  @click="onRegister"
                  class="submit"
                  :class="{ active: isRegisterActive }"
                >
                  注册
                </button>
              </form>
            </div>
            <div class="login-tip">
              <span>已有账号？</span>
              <span class="login-link" @click="isRegisterVisible = false"
                >点此登录</span
              >
            </div>
          </div>
          <div v-else class="login-form">
            <div class="title">电子邮箱登录</div>
            <div class="prompt" style="margin-top: 10px">
              请输入您的电子邮件地址和密码以登录
            </div>
            <div class="input-container" style="padding: 16px 0">
              <form action="">
                <label for="" class="email">
                  <input
                    type="text"
                    placeholder="请输入邮箱"
                    name="blur"
                    autofocus
                    autocomplete="username"
                    v-model="userInfoEmail"
                    maxlength="25"
                    ref="email"
                  />
                  <span
                    class="clear-icon"
                    v-if="userInfoEmail"
                    @click="userStore.userInfo.email = ''"
                  >
                    <Icon icon="ci:off-outline-close" :width="18" />
                  </span>
                </label>
                <div style="height: 20px"></div>
                <label for="" class="password">
                  <input
                    type="password"
                    placeholder="请输入密码"
                    name="blur"
                    v-model="userStore.password"
                    maxlength="20"
                    minlength="8"
                    autocomplete="new-password"
                  />
                  <span
                    class="clear-icon"
                    v-if="userStore.password"
                    @click="userStore.password = ''"
                  >
                    <Icon icon="ci:off-outline-close" :width="18" />
                  </span>
                </label>
                <div style="height: 20px"></div>

                <!--              <div class="err-msg"></div>-->
                <button
                  type="button"
                  @click="onLogin"
                  class="submit"
                  :class="{ active: isLoginActive }"
                >
                  登录
                </button>
              </form>
            </div>
            <div class="oauth-tip">
              <span class="oauth-tip-line">或</span>
            </div>
            <div class="login-tip">
              <span>还没有账号？</span>
              <span class="login-link" @click="isRegisterVisible = true"
                >点此注册</span
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.login-modal {
  z-index: 100010;
  flex-direction: column;
}

div.reds-modal-open {
  visibility: visible;
  opacity: 1;
}

.reds-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000002;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.2s,
    visibility 0.2s;
}

.reds-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: @color-mask-backdrop;
  z-index: -1;
}

.login-container {
  display: flex;
  position: relative;
  width: 800px;
  height: 480px;
  background: @elevation-high-background;
  border-radius: 16px;
  box-shadow: @elevation-high-shadow;
  transition: all 0.2s;
  justify-content: center;

  .close-button {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    color: @color-secondary-label;
  }

  .register-form,
  .login-form {
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    .title {
      font-size: 18px;
      color: @color-secondary-label;
      font-weight: 600;
      line-height: 120%;
    }

    .prompt {
      font-size: 12px;
      color: @color-tertiary-label;
      line-height: 120%;
      margin-top: 6px;
    }

    .input-container {
      margin-top: 24px;
      width: 304px;
      display: flex;
      flex-direction: column;

      .email {
        .country-code {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 29px;
          height: 100%;
          font-weight: 400;
          margin-left: 16px;
          margin-right: 20px;
          color: @color-primary-label;
        }
      }
      .auth-code {
        padding-left: 16px;
        padding-right: 16px;
        .code-button {
          font-size: 16px;
          color: @color-red;
          cursor: pointer;
          opacity: 0.5;
        }
        .active {
          opacity: 1;
        }
      }
      .auth-code,
      .email,
      .password,
      .re-password {
        padding-left: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 22px;
        color: @color-secondary-label;
        height: 48px;
        background: @elevation-high-background;
        border-radius: 999px;
        transition: border-color 0.2s;
        border-bottom: 0.5px solid @color-border;

        input {
          flex: 1;
          font-size: 16px;
          width: 130px;
          height: 100%;
          caret-color: @color-red;
          color: @color-primary-label;
        }
      }
      .err-msg {
        height: 10px;
        margin-top: 9.5px;
      }
      .clear-icon {
        display: flex;
        align-items: center;
        margin-right: 16px;
        cursor: pointer;
        line-height: 22px;
      }
      .submit {
        margin-top: 24px;
        height: 48px;
        background: @color-red;
        color: @color-white;
        opacity: 0.5;
        border-radius: 999px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        width: 100%;
        &.active {
          opacity: 1;
        }
      }
    }
    .login-tip {
      margin-top: 29px;
      font-weight: 400;
      font-size: 14px;
      color: @color-secondary-label;
      .login-link {
        color: @color-red;
        cursor: pointer;
      }
    }
    .oauth-tip {
      margin-top: 29px;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      color: @color-tertiary-label;
      .oauth-tip-line {
        margin: 0 12px;
      }
      &::before,
      &::after {
        //content: '';
        //flex: 1;
        //height: 1px;
        //background: @color-border;
        display: block;
        width: 133px;
        height: 1px;
        content: '';
        background-color: @color-border;
      }
    }
    .login {
      display: flex;
      margin-top: 16px;
      .login-common {
        width: 304px;
        height: 40px;
        border: 1px solid @color-border;
        border-radius: 999px;
        color: @color-secondary-label;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
}
//.fade-enter-active,
//.fade-leave-active {
//  //transform: all 0.2s;
//  transition: all 2s;
//}
//.fade-enter,
//.fade-leave-to {
//  opacity: 0;
//}
</style>
