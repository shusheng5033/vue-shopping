// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import store from '@/store/store.js'
import '@/style/style.css'

Vue.use(iview)
Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
	// 路由跳转前先修改标题再跳转
	window.document.title = to.meta.title;
	next();
});
router.afterEach((to,from,next)=>{
	// 跳转页面后将滚轮归位为0
	window.scrollTo(0,0);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
