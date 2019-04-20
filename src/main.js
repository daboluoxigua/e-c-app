import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';//路由

Vue.config.productionTip = false

import 'lib-flexible/flexible.js'//自适应分辨率

// mui开始
import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'

import {showLoading,hideLoading} from './common/js/showLoading'
import './common/css/showLoading.scss'

// mount with global  
Vue.use(Mui)

Vue.prototype.$showLoading = showLoading
Vue.prototype.$hideLoading = hideLoading
// mui结束

//注册公共组件
//底部导航
import tabBar from './components/tabBar/tabBar'
Vue.use(tabBar)
//头部状态栏
import navBar from './components/navBar/navBar'
Vue.use(navBar)
//mui滚动组件
import muiScroll from './components/muiScroll/muiScroll'
Vue.use(muiScroll)

//消息提示组件
import dialogS from './components/dialog/dialog'
Vue.use(dialogS)

import $ from 'jquery'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

