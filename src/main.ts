import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus' // 导入 Element Plus
import 'element-plus/dist/index.css' // 导入 Element Plus 样式

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus) // 注册 Element Plus

app.use(createPinia())
app.use(router)

app.mount('#app')
