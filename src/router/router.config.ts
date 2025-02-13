/**
 * 动态路由，根据项目需求添加
 */
export const customRouterMap: AppRouteRecordRaw[] = [
    {
        path: '/guide',
        name: 'guide',
        component: () => import('@/views/guide/Guide.vue'),
        meta: {
            title: '指南'
        }
    }
]

/**
 * 基础路由，固定的一般不需要修改它
 */
export const basicRouterMap: AppRouteRecordRaw[] = [
    {
        path: '/user',
        redirect: '/user/login',
        name: 'user',
        meta: {
            title: '登录'
        },
        children: [
            {
                path: 'login',
                name: 'userLogin',
                component: () => import('@/views/user/Login.vue'),
                meta: {
                    title: '登录'
                }
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
        meta: {
            title: '404'
        }
    }
]
