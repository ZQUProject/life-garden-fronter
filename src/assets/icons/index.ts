
import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue'; // svg组件
Vue.component('svg-icon', SvgIcon)
// 注册到全局


const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)