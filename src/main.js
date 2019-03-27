import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';//路由

Vue.config.productionTip = false

import 'lib-flexible/flexible.js'//自适应分辨率

// mui开始
import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'
// mount with global  
Vue.use(Mui)
// mui结束

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

