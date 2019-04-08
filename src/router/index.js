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
      path: '/upgradeAgent',
      component: resolve => require(['../components/members/upgradeAgent/upgradeAgent.vue'], resolve),
      name: 'upgradeAgent',
      meta: {
        title: '升级代理',
        requiresAuth: true
      }
    },
    {
      path: '/community',
      component: resolve => require(['../components/members/community/community.vue'], resolve),
      name: 'community',
      meta: {
        title: '我的社区',
        requiresAuth: true
      }
    },
    {
      path: '/personalInfo',
      component: resolve => require(['../components/members/personalInfo/personalInfo.vue'], resolve),
      name: 'personalInfo',
      meta: {
        title: '个人资料',
        requiresAuth: true
      }
    },
    {
      path: '/security',
      component: resolve => require(['../components/members/security/security.vue'], resolve),
      name: 'security',
      meta: {
        title: '安全中心',
        requiresAuth: true
      }
    },
    {
      path: '/setCollection',
      component: resolve => require(['../components/members/setCollection/setCollection.vue'], resolve),
      name: 'setCollection',
      meta: {
        title: '收款设置',
        requiresAuth: true
      }
    },
    {
      path: '/WeChat',
      component: resolve => require(['../components/members/setCollection/WeChat.vue'], resolve),
      name: 'WeChat',
      meta: {
        title: '设置微信',
        requiresAuth: true
      }
    },
    {
      path: '/Alipay',
      component: resolve => require(['../components/members/setCollection/Alipay.vue'], resolve),
      name: 'Alipay',
      meta: {
        title: '设置支付宝号',
        requiresAuth: true
      }
    },
    {
      path: '/bankCard',
      component: resolve => require(['../components/members/setCollection/bankCard.vue'], resolve),
      name: 'bankCard',
      meta: {
        title: '添加银行卡',
        requiresAuth: true
      }
    },
    {
      path: '/myBankCard',
      component: resolve => require(['../components/members/myBankCard/myBankCard.vue'], resolve),
      name: 'myBankCard',
      meta: {
        title: '我的银行卡',
        requiresAuth: true
      }
    },
    {
      path: '/securityLoginPassword',
      component: resolve => require(['../components/members/securityLoginPassword/securityLoginPassword.vue'], resolve),
      name: 'securityLoginPassword',
      meta: {
        title: '登录密码',
        requiresAuth: true
      }
    },
    {
      path: '/changePassword',
      component: resolve => require(['../components/members/changePassword/changePassword.vue'], resolve),
      name: 'changePassword',
      meta: {
        title: '修改密码',
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