import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI, { Message, Notice } from 'view-design';
import 'view-design/dist/styles/iview.css';

import './mock.js'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false;
Vue.prototype.$Message = Message

Vue.prototype.$Notice = Notice;

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
