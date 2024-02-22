import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Uploader, Toast } from 'vant-green';

Vue.use(Vant);
Vue.use(Toast);
Vue.use(Uploader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
