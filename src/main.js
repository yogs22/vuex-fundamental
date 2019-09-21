import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import store from './store/index'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
