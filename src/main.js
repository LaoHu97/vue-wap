// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint);
Vue.use(VueRouter);

const FastClick = require('fastclick')
FastClick.attach(document.body)

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path=='/') {
    next({ path: '/index' })
  } else {
    next()
  }
});
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
