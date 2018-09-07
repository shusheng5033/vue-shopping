import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
    {
      path: '/list',
      meta:{
      	title:"商品列表"
      },
      component:(resolve) => require(['@/views/list'],resolve)
    },
    {
      path: '/product/:id',
      meta:{
      	title:"商品详情"
      },
      component:(resolve) => require(['@/components/product'],resolve)
    },
    {
      path: '*',
      redirect: '/list'
    },
  ]
})
