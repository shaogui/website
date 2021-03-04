import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Layout, Menu} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Layout)
Vue.use(Menu)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = store.state.config["Product Name"] + ' - ' + to.meta.title
    }
    next()
})