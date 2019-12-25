import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from 'dayjs'
import service from "./http"
import VCharts from 'v-charts'
import JsonExcel from 'vue-json-excel'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';
import lodash from 'lodash'


Vue.prototype.$lodash = lodash
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.component('downloadExcel', JsonExcel)
Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

//配置路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (JSON.parse(localStorage.getItem("name"))) {
            next();
        } else {
            next({
                path: "/login" //指向为你的登录界面
            });
        }
    } else {
        next();
    }

    if (to.fullPath === "/login") {
        if (JSON.parse(localStorage.getItem("login"))) {
            next({
                path: from.fullPath
            });
        } else {
            next();
        }
    }
});