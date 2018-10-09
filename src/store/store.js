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
	},
	// 购物车成员
	addCart(state,id){
		const isAdded = state.carList.find(item => item.id === id); //判断该购物车内是否有该成员，有就+1，没有就添加。find方法返回第一个匹配的成员，否则返回undefined
		if(isAdded){
			isAdded.count += 1;
		} else {
			state.carList.push({
				id:id,
				count:1
			})
		}
	},
	// 修改商品数量
	editCartCount(state,payload){
		const product = state.carList.find(item => item.id === payload.id);
		product.count += payload.count;
	},
	// 删除商品
	deleteCart(state,id){
		const index = state.carList.findIndex(item => item.id === id);
		state.carList.splice(index,1);
	},
	// 清空购物车
	emptyCart(state){
		state.carList = [];
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
	brands: state =>{
		const brands = state.productList.map(item => item.brand);
		return Array.from(new Set(brands));
	},
	colors: state =>{
		const colors = state.productList.map(item => item.color);
		return Array.from(new Set(colors));
	}
}

// 导出
export default new Vuex.Store({
	state,mutations,actions,getters
})