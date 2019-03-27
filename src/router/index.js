import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  
  linkActiveClass: 'active',
  base: '/',
  routes: [
    {
      path: '/home',
      component: resolve => require(['../components/home/home.vue'], resolve),
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/my',
      component: resolve => require(['../components/members/membersIndex/membersIndex.vue'], resolve),
      meta: {
        title: '欢迎'
      }
    },
    // {
    //   path: '/goods',
    //   component: resolve => require(['../components/goods/goods.vue'], resolve),
    //   name: "goods",
    //   meta: {
    //     keepAlive: true // 需要被缓存
    //   }
    // }
  ]
});