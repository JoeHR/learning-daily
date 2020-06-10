import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';

import '@/util/veevalidate-i18n';
import Alert from './components/modules/alert';
import Pop from './components/modules/pop';

Vue.use(Alert);
Vue.use(Pop);

Vue.config.productionTip = false;

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://your.domain.com';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
