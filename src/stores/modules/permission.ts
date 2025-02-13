import { defineStore } from "pinia";
import { store } from "../index";
import { generatorRoutesByFrontEnd, generatorRoutesByServer, generatorRoutesByStatic } from "@/router/generatorRouters";
import { basicRouterMap, customRouterMap } from "@/router/router.config";
import { cloneDeep } from 'lodash-es'

export interface PermissionState {
    routers: AppRouteRecordRaw[]
    addRouters: AppRouteRecordRaw[]
    isAddRouters: boolean
}

export type Type = 'static' | 'server' | 'front'

export const usePermissionStore = defineStore('permission', {
    persist: false,
    state: (): PermissionState => ({
        routers: [],
        addRouters: [],
        isAddRouters: false
    }),
    getters: {
        getRouters(): AppRouteRecordRaw[] {
            return this.routers || []
        },
        getIsAddRouters(): boolean {
            return this.isAddRouters || false 
        }
    },
    actions: {
        setIsAddRouters(isAddRouters: boolean) {
            this.isAddRouters = isAddRouters 
        },
        generatorRoutes(type: Type, permission?: string[]) {
            return new Promise<void>((resolve) => {
                let routerMap: AppRouteRecordRaw[] = []
                if (type === 'server') {
                // 后端返回路由列表，添加到路由表
                    routerMap = generatorRoutesByServer(permission)
                } else if (type === 'front') {
                // 前端定义路由列表，通过后端返回的权限过滤后添加到路由表
                    routerMap = generatorRoutesByFrontEnd(cloneDeep(customRouterMap), permission)
                } else {
                // 直接读取静态路由表
                    routerMap = generatorRoutesByStatic(cloneDeep(customRouterMap))
                }

                // 动态路由，404一定要放到最后面
                this.addRouters = routerMap.concat([
                    {
                        path: '/:path(.*)*',
                        redirect: '/404',
                        name: '404Page',
                        meta: {
                            hidden: true
                        }
                    }
                ])

                // 渲染菜单的所有路由
                this.routers = cloneDeep(basicRouterMap).concat(routerMap)
                resolve()
            })
        }
    }
})

export const usePermissionStoreWithOut = () => {
    return usePermissionStore(store); 
}