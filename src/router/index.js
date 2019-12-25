import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/common/Common.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/',

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



// 进入路由之前
// 参数是一个回调函数 回调里面又传3个参数
// to:要进入的路由 from:从哪进入的路由 next是一个函数 所以必须调用 代表进入到下一个路由
// 如果不写next 程序就被阻塞了


// 第一是浏览器标题会随页面变化
// 如果用户登录成功 我们会把用户信息存在localStorage和vuex里面
// 如果用户没有登录 只能访问登录或者注册页面
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
        // 下面的name就是存在本地的用户名 要修改
    let user = localStorage.getItem('name')
    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        user ? next() : next('/login')
    }
    // console.log(to)
    // console.log(from)
})



export default router