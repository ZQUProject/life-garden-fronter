import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/layout/index.vue';
import Login from '@/views/login/index.vue';
import ViewUI, { LoadingBar } from 'view-design';
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    component: Main,
    children: [
        {
          path: 'home',
          component: () => import('@/views/home/index.vue'),
          name: '首页',
        }, 
        {
          path: 'resource/share',
          component: () => import('@/views/resource/share/index.vue'),
          name: '资源共享'
        }, 
        {
          path: 'resource/apply',
          component: () => import('@/views/resource/apply/index.vue'),
          name: '资源申请'
        }, 
        {
          path: 'resource/ticket',
          component: () => import('@/views/resource/ticket/index.vue'),
          name: '资源申请'
        }, 
        {
          path: 'good/found',
          component: () => import('@/views/good/found/index.vue'),
          name: '找物'
        },
        {
          path: 'good/lost',
          component: () => import('@/views/good/lost/index.vue'),
          name: '失物'
        },
        {
          path: 'work/approval',
          component: () => import('@/views/work/approval/index.vue'),
          name: '文件审批'
        },
        {
          path: 'work/file',
          component: () => import('@/views/work/file/index.vue'),
          name: '文件发布'
        },
        {
          path: 'work/notice',
          component: () => import('@/views/work/notice/index.vue'),
          name: '官方通知'
        },
        {
          path: 'manage/approval',
          component: () => import('@/views/manage/approval/index.vue'),
          name: '审批信息'
        },
      ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

router.afterEach(route => {
  LoadingBar.finish();
});
export default router;
