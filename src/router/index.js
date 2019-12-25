import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/common/Common.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/',
        // 路由守卫
        meta: { requireAuth: true },
    },
    {
        path: '/',
        component: Common,
        // 路由守卫
        meta: { requireAuth: true },
        children: [{
                path: '',
                name: 'home',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/Home.vue')
            },

            //已发布
            {
                path: '/published',
                name: 'published',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/published/Published.vue')
            },
            //统计
            {
                path: '/statistics',
                name: 'statistics',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/statistics/Statistics.vue')
            },
            //发表
            {
                path: '/publish',
                name: 'publish',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/publish/Publish.vue')
            },
            //标签
            {
                path: '/label',
                name: 'label',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/label/Label.vue')
            },
            //导出
            {
                path: '/educe',
                name: 'educe',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/educe/Educe.vue')
            },
            //上传
            {
                path: '/uploadon',
                name: 'uploadon',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/uploadon/Uploadon.vue')
            },
            //退出
            {
                path: '/drop',
                name: 'drop',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/drop/Drop.vue')
            },
            //编辑
            {
                path: '/compile',
                name: 'compile',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/compile/Compile.vue')
            },
            //查看
            {
                path: '/check',
                name: 'check',
                // 路由守卫
                meta: { requireAuth: true },
                component: () =>
                    import ('../views/check/Check.vue')
            },

        ]
    },

    {
        path: '/login',
        name: 'login',
        // 路由守卫
        meta: { requireAuth: true },
        component: () =>
            import ('../views/login/Login.vue')
    },
    //登录
    {
        path: '/register',
        name: 'register',
        // 路由守卫
        meta: { requireAuth: true },
        component: () =>
            import ('../views/login/Register.vue')
    },
    {
        path: '*',
        name: 'erro',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/erro/Erro.vue')

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router