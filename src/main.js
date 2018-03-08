import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'Vuex'
import axios from 'axios'
import jquery from 'jquery'

import App from './App'
import Demo from '@/components/Demo'
import comA from '@/components/comA'
import comAA from '@/components/comAA'
import comB from '@/components/comB'

Vue.use(Router)
Vue.use(Vuex)
Vue.prototype.$axios = axios;

// 01282121 这是第一种方法，状态集+mutations
//let store = new Vuex.Store({
//	state: {
//		totalPrice: 0
//	},
//	mutations: {
//		increment(state, price) {
//			state.totalPrice += price
//		},
//		decrement(state, price) {
//			state.totalPrice -= price
//		}
//	}
//})

// 01282121 这是第二种方法，引入actions
//let store = new Vuex.Store({
//	state: {
//		totalPrice: 0
//	},
//	mutations: {
//		increment(state, price) {
//			state.totalPrice += price
//		},
//		decrement(state, price) {
//			state.totalPrice -= price
//		}
//	},
//	actions: {
//		increase(context, price) {
//			context.commit('increment', price)
//		}
//	}
//	//问 mutations 和 actions 有什么区别，actions可以进行异步操作然后再去触发mutations，mutations必须同步去操纵数据。
//	//如果数据关系到后端提供的api，那必须要用actions。例如，传过的id要请求后台api查询价格，然后在回调李调用mutations。
//	//mutations 里面就不行发生http请求去请求数据。
//	//   actions:{
//	//		increase(context,id){
//	//			api(id,function(price){
//	//				context.commit('increment',price)
//	//		})
//	//		}
//	//	}
//})

// 01282121 这是第三种方法，引入getters
let store = new Vuex.Store({
	//状态集
	state: {
		totalPrice: 0
	},
	//用来获取状态集里面的数据，里面设置不同的tt，省的mutations每次要获取状态集。
	getters: {
		getTotal(state) {
			return state.totalPrice
		}
	},
	mutations: {
		increment(state, price) {
			state.totalPrice += price
		},
		decrement(state, price) {
			state.totalPrice -= price
		}
	}
})
//还有modules 可以用户信息用一套，产品信息用一套，上面四个放在modules里面，形成不同的模型。然后每个状态集合成到一个store里面。

let router = new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
			//一般默认路由，不加name
			component: Demo
		},
		//		{
		//			path: '/',
		//			//重定向路由
		//			redirect: '/Demo'
		//		},
		{
			path: '/Demo',
			name: 'Demo',
			component: Demo
		},
		// 已经有了一个comA路由，不能再写一个，哪怕参数不一样都不行。
				// {
				// 	//路由的参数
				// 	//  http://localhost:8080//comA/red 可以将red的值传递到页面
				// 	// 后面设置了参数就变成了一个特殊的路由 如果router-link 里面没有带参数的话，不能访问这个组件
				// 	path: '/comA/:color',
				// 	name: 'comA',
				// 	component: comA
				// },
		{
			//带：表示是参数 没有的表示是页面（detail不能写其他值）
			// http://localhost:8080/comB/www/detail/111
			path: '/comB/:color/detail/:type',
			name: 'comB',
			component: comB
		},
		{
			path: '/comA',
			name: 'comA',
			component: comA,
			//index.js 路由页面需要引入 。 comA 页面需要写router-view
			children: [{
				path: 'comAA',
				name: 'comAA',
				component: comAA,
			}]
		},
		//具名视图，不管用。
		//		{
		//			path: '/comA',
		//			name: 'comA',
		//			component: {
		//				viewA: comA,
		//				viewB: comB
		//			},
		//			children: [{
		//				path: 'comB',
		//				name: 'comB',
		//				component: comB,
		//			}]
		//		},
		]
	})

new Vue({
	el: '#index',
	store,
	router,
	template: '<App/>',
	components: {
		App
	}
})