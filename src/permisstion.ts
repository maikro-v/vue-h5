import router from './router'
import { useNprogress } from './hooks/web/useNprogress'
import { usePermissionStoreWithOut } from "./stores/modules/permission"
import { useConfigStoreWithOut } from "./stores/modules/config"
import { RouteRecordRaw } from "vue-router"

const { start, done } = useNprogress()

router.beforeEach(async (to, from, next) => {
    start()
    const permissionStore = usePermissionStoreWithOut()
    const configStore = useConfigStoreWithOut()

    if (permissionStore.getIsAddRouters) {
        next()
        return
    }

    if (configStore.getDynamicRouter) {
        configStore.getServerDynamicRouter ? 
        await permissionStore.generatorRoutes('server') : 
        await permissionStore.generatorRoutes('front')
    } else {
        await permissionStore.generatorRoutes('static')
    }

    permissionStore.addRouters.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw)
    })
    
    const redirectPath = from.query.redirect || to.path
    const redirect = decodeURIComponent(redirectPath as string)
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
    permissionStore.setIsAddRouters(true)
    next(nextData)

})

router.afterEach(() => {

    done()
})