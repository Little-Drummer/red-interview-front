<script setup lang="ts">
import HeaderSearch from '@/components/header/HeaderSearch.vue'
import HeaderMenu from '@/components/header/HeaderMenu.vue'
</script>

<template>
  <div class="explore-header">
    <router-link to="/explore" id="link-guide">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAABICAMAAABr9CFKAAAAP1BMVEUAAAD/I0L/JEL/JEH/JED/IED/JEH/JUL/JEL/I0H/IED/I0L/JEH/JUD/JEH/I0L/I0D/JEH/I0P/JEP/JEKyzp5HAAAAFHRSTlMA34BgQB+/n++gEJCwMHCfUM9Qz4ilXboAAAQzSURBVGje1ZrrtqMgDIW5S/HSm+//rLNmbFdNNybUg0zP/nd6DOaTkEBUbSr5lZIq1BRWGtROuXkt9UPZeaVQaqXXVt0vJiFGs/9Ckuu+KflCEl1mcyMeuF9MErYi8j5z6tUiP7O6B+MUle/jPOvO1yRBTyyJOk4dsWeljV/7GB+/3iqTnMHkxySoaDLBHMd6JDgllUhQ2uOooSpJTyxSPRJEQQ9dNRJMwZVJ8DEN659MLRKsikeSzANkyq4WCU7JoSSzeyfpK5HglBxMEt5JLpVIsCoeQkIfVRAdlEnkFHw4yURJbCUSrIqHkwyExNSr8R5cO5hEr0jCs5hczEo3nmTs1kr5KZnjZF/6N5hZFCjB2z3T0+RELjOLek1uoZRbLr74/FrtBBLIUMzTxMVvIJUW7+rxVxTmZSTJuzyChyhXhQRj1EslzfAkKe+KZuK5IUmE/MmseEi25FqUbUlCzC4Cic65GeQpaU/iPiEx4no3LUiYRYwkbHqYmE1FKxI08wLJKZOyT0zN+38k6hOSgR4WUb4VCbocGRL0JWRuDKTtSCZwmSGBq9nC6OqSRJYEnzKSyIA28ClYJjF6pUiHeert1xB6S3j6IhJx8+P/CapsKclp3qe73Rij40hwC5n4o8ABJCjtshXCSE55JjfBDuAQEpTZQQI7ArY0HUeCKPgcRRJuJZwhUA8kQT9gcJ4EwZnIa0USE0NikARfhRhuShqSzAYfpEgy5Dt/MJJrShJhlSaWBJM282ayKck8QqnjSLCQDkwKbksyba9sU/L7lWkMtyXp37aEV5EEyfNdCd0tmhqRdG9DBJnklj8EKLe7I4Htw4E6mdGgsa1GrAaZZNxYV+dDOxIoGykJHMxFEv9RF9IeRqIcSzLJJCrfwJiO7kjIb2wijJ0jEZPt/diOBApWOBRGkeSUC8fETEkjkjOkIolkIhaJI+lUQ5JI/pRI8DYXrqHqWpIYWPASSSL/8Ew5uaqWJB6GlkhUyMaP05iCW5IQv6IqIjEbS3q0hkq1JCFWQxmJK/1AsCkJCRYrkGBFGb+KxEGoSCTmZf5VJEpDqAgkI0ziZfwKkgkGFkhUwDfCMfSTpUoPt+xLAz0dwdUfkQxAkiJ4K3y+cSFTQq4FG68Lv3n4lMRnirpZ+eXtojPcB9a8TopzdsIz5n4SPI/1cD55TopmzhmwtO3W5xRYanRNErNpH15r5wYVnHs5dV1cZZztgLICSYpMR+Jh2cEo7PeSrvKUyCTYo8rvZLXPtbCZCtiXTkldEieZu5GNRa1Qt6IpCVVJcEAMGj4WbekHkPhWuDaJy1vLjUL5izvHhe25Bgnmmnz0o1IRcFFVnOuTTEwvCnQqAuGctUBZjQSDX49FARNNUpx6dkqqkmDwyw4OcXmhf+1sUry8DZsZot9LMuq1FFW6/vV/8XDonXroDwd3OfCOVCS+AAAAAElFTkSuQmCC"
        alt="logo"
      />
    </router-link>
    <div class="input-box">
      <header-search />
    </div>
    <div class="right"><header-menu /></div>
  </div>
</template>

<style scoped lang="less">
@header-search-height: 40px;
.explore-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  //max-width: var(--430e6aaa);
  height: var(--header-height);
  padding: 0 32px;
  z-index: 10;

  #link-guide {
    width: 67px;
    aspect-ratio: auto 67 / 24;
    height: 24px;
    img {
      width: 67px;
      aspect-ratio: auto 67 / 24;
      height: 24px;
    }
  }
  .input-box {
    height: @header-search-height;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    width: calc(-40px + 66.66667vw);
  }
  .right {
    display: flex;
  }

  @media screen and (max-width: 695px) {
    .input-box {
      width: calc(-40px + 66.66667vw);
    }
  }
  @media screen and (min-width: 696px) and (max-width: 959px) {
    .input-box {
      width: calc(-40px + 66.66667vw);
    }
  }
  @media screen and (min-width: 960px) and (max-width: 1191px) {
    .input-box {
      width: calc(-36px + 50vw);
    }
  }
  @media screen and (min-width: 1192px) and (max-width: 1423px) {
    .input-box {
      width: calc(-33.6px + 40vw);
    }
  }
  @media screen and (min-width: 1424px) and (max-width: 1727px) {
    .input-box {
      width: calc(-42.66667px + 33.33333vw);
    }
  }
  @media screen and (min-width: 1728px) {
    .input-box {
      width: 533.33333px;
    }
  }
}
</style>
