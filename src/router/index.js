import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/common/Common.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/'
    },
    {
        path: '/',
        component: Common,
        children: [{
                path: '',
                name: 'home',
                component: () =>
                    import ('../views/Home.vue')
            },

            //已发布
            {
                path: '/published',
                name: 'published',
                component: () =>
                    import ('../views/published/Published.vue')
            },
            //统计
            {
                path: '/statistics',
                name: 'statistics',
                component: () =>
                    import ('../views/statistics/Statistics.vue')
            },
            //发表
            {
                path: '/publish',
                name: 'publish',
                component: () =>
                    import ('../views/publish/Publish.vue')
            },
            //标签
            {
                path: '/label',
                name: 'label',
                component: () =>
                    import ('../views/label/Label.vue')
            },
            //导出
            {
                path: '/educe',
                name: 'educe',
                component: () =>
                    import ('../views/educe/Educe.vue')
            },
            //上传
            {
                path: '/uploadon',
                name: 'uploadon',
                component: () =>
                    import ('../views/uploadon/Uploadon.vue')
            },
            //退出
            {
                path: '/drop',
                name: 'drop',
                component: () =>
                    import ('../views/drop/Drop.vue')
            },
            //编辑
            {
                path: '/compile',
                name: 'compile',
                component: () =>
                    import ('../views/compile/Compile.vue')
            },
            //查看
            {
                path: '/check',
                name: 'check',
                component: () =>
                    import ('../views/check/Check.vue')
            },

        ]
    },

    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login.vue')
    },
    //登录
    {
        path: '/register',
        name: 'register',
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