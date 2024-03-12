<script setup lang="ts">
import UserAvatar from '@/components/side-bar/UserAvatar.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <!--  user-->
  <div class="pt-72px flex items-center justify-center">
    <!--    user-info-->
    <div
      class="lt-sm:p-16px lt-sm:mr-auto lt-sm:w-100vw at-sm:py-24px at-md:py-24px at-lg:py-24px at-xl:py-24px py-48px flex justify-center"
    >
      <!--      avatar-->
      <div>
        <!--        avatar-wrapper-->
        <div class="avatar-wrapper w-250px h-175px text-center">
          <!--          <user-avatar></user-avatar>-->
          <img
            class="user-image b-rd-50% mxa w-70% h-100% b-solid b-1px b-borderColor object-cover"
            src="https://storage.yjxw.win/d/default/circle.png"
            alt="用户头像"
          />
        </div>
      </div>
      <!--      info-part-->
      <div class="pos-relative w-full">
        <!--        info-->
        <div class="info ml-32px">
          <!--          basic-info-->
          <div class="flex items-center">
            <!--            user-basic-->
            <div class="w-full">
              <!--              user-nickname-->
              <div
                class="user-nickname flex w-full items-center"
                style="max-width: calc(100% - 96px)"
              >
                <!--                user-name-->
                <div class="font-600 text-24px lh-120% c-colorPrimaryLabel">
                  用户名
                </div>
              </div>
              <!--              user-content-->
              <div
                class="text-12px lh-120% mt-8px c-colorTertiaryLabel flex w-full"
              >
                <!--                user-redId-->
                <span class="pr-12px">面经号：9437167290</span>
              </div>
            </div>
          </div>
          <!--          user-desc-->
          <div
            class="text-14px lh-140% c-colorPrimaryLabel mt-16px w-full"
            style="white-space: pre-line"
          >
            这个人很懒，什么都没有留下
          </div>
          <!--          user-tags-->
          <div
            class="h-24px mt-16px text-12px c-colorPrimaryLabel font-400 lh-120% flex items-center text-center"
          >
            <!--            tag-item-->
            <div
              class="last:mr0 first:py-3px first:px-6px b-rd-41px grid-gap-4px h-24px lh-24px bg-colorActiveBg c-colorTertiaryLabel flex items-center justify-center"
              style="grid-gap: 4px"
            >
              <!--              gender-->
              <div class="flex items-center justify-center">
                <Icon icon="material-symbols:male" color="#61d7f5" />
              </div>
            </div>
          </div>
          <!--          data-info-->
          <div class="mt-20px flex items-center justify-center">
            <!--            user-interactions-->
            <div class="user-interactions flex w-full items-center">
              <div>
                <div class="count">2</div>
                <div class="shows">关注</div>
              </div>
              <div>
                <div class="count">0</div>
                <div class="shows">粉丝</div>
              </div>
              <div>
                <div class="count">0</div>
                <div class="shows">获赞与收藏</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';
@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .avatar-wrapper {
    width: calc(16.66667vw - 37.33333px);
    height: calc(11.66667vw - 26.13333px);
  }
  .info {
    width: calc(-42.66667px + 33.33333vw);
  }
}
@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .avatar-wrapper {
    width: calc(20vw - 28.8px);
    height: calc(14vw - 20.16px);
  }
  .info {
    width: calc(-33.6px + 40vw);
  }
}

@media screen and (min-width: 960px) and (max-width: 1191px) {
  .avatar-wrapper {
    width: calc(25vw - 30px);
    height: calc(17.5vw - 21px);
  }
  .info {
    width: calc(-36px + 50vw);
    margin-left: 24px;
  }
}
@media screen and (min-width: 696px) and (max-width: 959px) {
  .avatar-wrapper {
    width: calc(33.33333vw - 32px);
    height: calc(23.33333vw - 22.4px);
  }
  .info {
    margin-left: 24px;
    width: calc(-40px + 66.66667vw);
  }
}
@media screen and (max-width: 695px) {
  .avatar-wrapper {
    width: 72px;
    height: 72px;
  }
  .user-image {
    width: 100%;
  }
}
.user-interactions {
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 16px;
  }
  .count {
    font-weight: 500;
    font-size: 14px;
    margin-right: 4px;
  }
  .shows {
    color: @color-tertiary-label;
    font-size: 14px;
    line-height: 120%;
  }
}
</style>
