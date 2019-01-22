// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue'
import App from './App'
import router from './router'
import './rem.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 判断是否登录
  if (to.path == '/login') {
    window.sessionStorage.removeItem('mstr');
    next()
  } else {
    let user = sessionStorage.getItem('mstr');
    if (!user) {
      next({ path: '/login' })
    } else {
      // SetToken(user.token)
      next()
    }  
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
