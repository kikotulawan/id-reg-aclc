import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFileAgent from 'vue-file-agent';

import 'vue-file-agent/dist/vue-file-agent.css';
import './assets/css/style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueFileAgent);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');