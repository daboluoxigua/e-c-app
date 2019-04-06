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
      path: '/shoppingCar',
      component: resolve => require(['../components/shoppingCar/shoppingCar.vue'], resolve),
      name:'shoppingCar',
      meta: {
        title: '购物车'
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
      component: resolve => require(['../components/members/usdtTransfer/usdtTransfer.vue'], resolve),
      name: 'usdtTransfer',
      meta: {
        title: 'usdt转账',
        requiresAuth: true
      }
    },
    {
      path: '/usdtRecharge',
      component: resolve => require(['../components/members/usdtRecharge/usdtRecharge.vue'], resolve),
      name: 'usdtRecharge',
      meta: {
        title: 'usdt充值',
        requiresAuth: true
      }
    },
    {
      path: '/cashWithdrawal',
      component: resolve => require(['../components/members/cashWithdrawal/cashWithdrawal.vue'], resolve),
      name: 'cashWithdrawal',
      meta: {
        title: 'USDT提币',
        requiresAuth: true
      }
    },
    {
      path: '/usdtWallet',
      component: resolve => require(['../components/members/usdtWallet/usdtWallet.vue'], resolve),
      name: 'usdtWallet',
      meta: {
        title: 'usdt钱包',
        requiresAuth: true
      }
    },
    {
      path: '/commission',
      component: resolve => require(['../components/members/commission/commission.vue'], resolve),
      name: 'commission',
      meta: {
        title: '代理返佣',
        requiresAuth: true
      }
    },
    {
      path: '/coupon',
      component: resolve => require(['../components/members/coupon/coupon.vue'], resolve),
      name: 'coupon',
      meta: {
        title: '优惠券',
        requiresAuth: true
      }
    },
    {
      path: '/signIn',
      component: resolve => require(['../components/members/signIn/signIn.vue'], resolve),
      name: 'signIn',
      meta: {
        title: '签到',
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
      path: '/confirmOrder',
      component: resolve => require(['../components/confirmOrder/confirmOrder.vue'], resolve),
      name: 'confirmOrder',
      meta: {
        title: '确认订单',
        requiresAuth: true
      }
    },
    {
      path: '/checkoutCounter',
      component: resolve => require(['../components/checkoutCounter/checkoutCounter.vue'], resolve),
      name: 'checkoutCounter',
      meta: {
        title: '收银台',
        requiresAuth: true
      }
    },
    {
      path: '/moneyPassword',
      component: resolve => require(['../components/moneyPassword/moneyPassword.vue'], resolve),
      name: 'moneyPassword',
      meta: {
        title: '资金密码',
        requiresAuth: true
      }
    },
    {
      path: '/myOder',
      component: resolve => require(['../components/myOder/myOder.vue'], resolve),
      name: 'myOder',
      meta: {
        title: '我的订单',
        requiresAuth: true
      }
    },
    {
      path: '/address',
      component: resolve => require(['../components/address/address.vue'], resolve),
      name: 'address',
      meta: {
        title: '收货地址',
        requiresAuth: true
      }
    },
    {
      path: '/editAddress',
      component: resolve => require(['../components/editAddress/editAddress.vue'], resolve),
      name: 'editAddress',
      meta: {
        title: '编辑地址',
        requiresAuth: true
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