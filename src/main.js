import Vue from 'vue'

import './plugins'
import router from './router'
import App from './App'

Vue.config.devtools = true;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');