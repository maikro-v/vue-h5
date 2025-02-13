import { defineStore } from 'pinia'
import { store } from '../index'

export interface ThemeTypes {}

export interface ConfigState {
    title: string
    isDark: boolean
    dynamicRouter: boolean
    serverDynamicRouter: boolean
    theme: ThemeTypes
}

export const useConfigStore = defineStore('config', {
    persist: false,
    state: (): ConfigState => ({
        title: import.meta.env.VITE_APP_TITLE,
        isDark: false, // 暗黑模式
        dynamicRouter: false, // 是否动态路由
        serverDynamicRouter: false, // 是否服务端渲染动态路由
        // 主题相关
        theme: {}
    }),
    getters: {
        getTitle(): string {
            return this.title
        },
        getIsDark(): boolean {
            return this.isDark
        },
        getDynamicRouter(): boolean {
            return this.dynamicRouter
        },
        getServerDynamicRouter(): boolean {
            return this.serverDynamicRouter
        },
        getTheme(): ThemeTypes {
            return this.theme
        }
    },
})

export const useConfigStoreWithOut = () => {
    return useConfigStore(store)
}
