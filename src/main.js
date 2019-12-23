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