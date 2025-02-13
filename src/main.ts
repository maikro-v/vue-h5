// 初始化样式
import 'normalize.css'
// 引入 unocss
import 'virtual:uno.css'
// 引入组件库的少量全局样式变量
import 'tdesign-mobile-vue/es/style/index.css'
// 进度条样式
import "nprogress/nprogress.css"

import App from './App.vue'

import { createApp } from 'vue'
import { setupStore } from './stores'
import { setupRouter } from './router'

import "./permisstion"

const setupAll = () => {
    const app = createApp(App)

    setupStore(app)

    setupRouter(app)
    
    app.mount('#app')
}

setupAll()
