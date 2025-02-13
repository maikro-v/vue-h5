import { Component } from 'vue'

/**
 * 根据服务端动态添加可访问路由
 * @param token
 * @returns {Promise<Router>}
 */
export const generatorRoutesByServer = (permission: string[]): AppRouteRecordRaw[] => {
    /**
     * 暂未实现
     */

    return []
}

/**
 * 根据前端路由表动态添加可访问路由
 */
export const generatorRoutesByFrontEnd = (routes: AppRouteRecordRaw[], permission: string[]): AppRouteRecordRaw[] => {
    /**
     * 暂未实现
     */
    
    return []
}

/**
 * 静态路由
 */
export const generatorRoutesByStatic = (routes: AppRouteRecordRaw[]) => {
    const res: AppRouteRecordRaw[] = []

    for (const route of routes) {
        const data: AppRouteRecordRaw = {
            path: route.path,
            name: route.name,
            redirect: route.redirect,
            meta: route.meta
        }
        
        data.component = generateRoutesComponent(route)

        // recursive child routes
        if (route.children) {
            data.children = generatorRoutesByStatic(route.children)
        }
        res.push(data as AppRouteRecordRaw)
    }
    return res
}

export const generateRoutesComponent = (route: AppRouteRecordRaw): Component => {
    if (route?.meta?.layout && !route?.component) {
        return () => import(`@/layouts/${route.meta.layout}.vue`)
    } else {
        return typeof route.component == 'string' ? () => import(`@/views/${route.component}.vue`) : route.component
    }
}
