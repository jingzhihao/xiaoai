import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/Common.vue'
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

        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/login/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/register/Register.vue')
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