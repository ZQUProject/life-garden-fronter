import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI, { Message, Notice } from 'view-design';
import 'view-design/dist/styles/iview.css';
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
import './mock.js'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(Viewer)
Viewer.setDefaults({
  navbar: false, //底部缩略图
  toolbar: false, //底部工具栏
  button: false, //右上角按钮
  title: false, //当前图片标题
  movable: true, //是否可以移动
  zoomable: true, //是否可以缩放
  transition: false //使用 CSS3 过度
})


Vue.config.productionTip = false;
Vue.prototype.$Message = Message

Vue.prototype.$Notice = Notice;

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
