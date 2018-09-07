import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { products } from "@/api";


// 储存变量数据
const state = {
	//全部数据
	productList:[],
	//购物车数据
	carList:[]
}

// 在此处修改变量数据
const mutations = {
	// 给state 里面的列表添加数据
	setProductList(state,data){
		state.productList = data;
	}
}
// 执行异步数据
const actions = {
	getProductList(context){
		products().then(res=>{
			console.log(res)
			context.commit('setProductList',res);
		})
	}
}
// 数据的再处理
const getters = {

}

// 导出
export default new Vuex.Store({
	state,mutations,actions,getters
})