import './assets/main.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus' // 导入 Element Plus
import 'element-plus/dist/index.css' // 导入 Element Plus 样式

import pinia from './stores/index.ts' // 导入 pinia

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus) // 注册 Element Plus

app.use(pinia) // 注册 pinia
app.use(router)

app.mount('#app')
