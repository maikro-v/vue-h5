import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { basicRouterMap } from './router.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = (app) => {
  app.use(router)
}

export default router
