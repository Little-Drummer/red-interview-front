<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue'
import { useUserStore } from '@/stores/modules/user.ts'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'

const userStore = useUserStore()
const { loginDialogVisible, userInfo } = storeToRefs(userStore)

const setLoginDialogVisible = (visible: boolean) => {
  userStore.setLoginDialogVisible(visible)
}
const userInfoEmail = computed({
  get: () => userInfo.value.email,
  set: (value) => {}
})
const isPhoneOk = ref(false)
watchEffect(() => {
  const phone = userInfo.value.phone
  isPhoneOk.value = !!(phone && phone.match(/^1[3-9]\d{9}$/))
})
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
          <Icon icon="material-symbols:close" :width="20" />
        </div>
        <div class="register-form">
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
                  v-model="userInfoEmail"
                  maxlength="20"
                />
              </label>
              <div style="height: 16px"></div>
              <label for="" class="auth-code">
                <input
                  type="number"
                  placeholder="请输入验证码"
                  autocomplete="false"
                />
                <span class="code-button" :class="{ active: isPhoneOk }"
                  >获取验证码</span
                >
              </label>
              <div class="err-msg"></div>
              <button  class="submit">注册</button>
            </form>
          </div>
          <div class="login-tip">
            <span>已有账号？</span>
            <span class="login-link">点此登录</span>
          </div>
          <div class="oauth-tip">
            <span class="oauth-tip-line">或</span>
          </div>
          <div class="login">
            <div class="login-common">
              <Icon
                style="margin-right: 4px"
                icon="mdi:wechat"
                :width="18"
                color="#07C160"
              />
              微信登录
            </div>
          </div>
        </div>
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

  .register-form {
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
        //.email_domain {
        //  border: none;
        //  font-weight: 400;
        //  color: @color-primary-label;
        //  width: 120px;
        //  height: 100%;
        //  &:focus {
        //    outline: none;
        //  }
        //}
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
      .email {
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
</style>
