import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/Home',
        component: () => import('@/components/Layout'),
        children: [
            {
                path: '/Home',
                name: 'home',
                component: () => import('@/views/3D Coverflow effect'),
                meta: {
                    title: "首页"
                }
            },
            {
                path: '/AboutDeal',
                name: 'AboutDeal',
                component: () => import('@/views/AboutDeal'),
                meta: {
                    title: "用户协议"
                }
            },
            {
                path: '/UserPrivacy',
                name: 'UserPrivacy',
                component: () => import('@/views/UserPrivacy'),
                meta: {
                    title: "隐私政策"
                }
            }
        ]

    }
]

const router = new VueRouter({
    routes,
    baseUrl: "./"
})

export default router
