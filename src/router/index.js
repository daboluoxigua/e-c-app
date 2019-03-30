import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: '/',
  routes: [
    {
      path: '/', // 默认进入路由
      redirect: '/home'  //重定向
    },
    {
      path: '/home',
      component: resolve => require(['../components/home/home.vue'], resolve),
      name:'home',
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/my',
      component: resolve => require(['../components/members/membersIndex/membersIndex.vue'], resolve),
      name: 'my',
      meta: {
        title: '会员中心',
        requiresAuth: true
      }
    },
    {
      path: '/usdtTransfer',
      component: resolve => require(['../components/usdtTransfer/usdtTransfer.vue'], resolve),
      name: 'usdtTransfer',
      meta: {
        title: 'usdt转账',
        requiresAuth: true
      }
    },
    {
      path: '/invitation',
      component: resolve => require(['../components/invitation/invitation.vue'], resolve),
      name: 'invitation',
      meta: {
        title: '邀请好友',
        requiresAuth: true
      }
    },
    {
      path: '/search',
      component: resolve => require(['../components/search/search.vue'], resolve),
      name: 'search',
      meta: {
        title: '搜索',
      }
    },
    {
      path: '/details',
      component: resolve => require(['../components/details/details.vue'], resolve),
      name: 'details',
      meta: {
        title: '详情',
      }
    },
    {
      path: '/login',
      // component: resolve => require(['../components/members/membersIndex/membersIndex.vue'], resolve),
      name: 'login',
      meta: {
        title: '登录',
      }
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
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

var isLogin = true //
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLogin) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    }else if(to.name === 'login'){
        if (isLogin) {
          router.replace('/')
        }else{
          next()
        }
    }else{
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;