import * as VueRouter from 'vue-router'
import Home from '@/views/blackClock/blackClock.vue'

const routes = [
    {
        path: '/',
        name: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/memory',
        name: 'memory',
        component: () => import('@/views/memory/memory.vue'),
        meta: {
            title: '测试'
        }
    },
    {
        path: '/song',
        name: 'song',
        component: () => import('@/views/song/one.vue'),
        meta: {
            title: '松松'
        }
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router