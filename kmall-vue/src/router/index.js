//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'

import Sort from 'pages/sort'
import Search from 'pages/search'

import List from 'pages/list'
import Detail from 'pages/detail'
import Center from 'pages/center'

//3.声明使用
Vue.use(VueRouter)


//4.导出路由对象
export default new VueRouter({
	routes:[
		{
			path:"/home",
			component:Home,
			meta: {
				footShow: true, 
			},
		},
		{
			path:"/sort",
			component:Sort,
			meta: {
				footShow: true,
			},
		},
		{
			path:"/cart",
			component:Cart,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/center",
			component:Center,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/search",
			component:Search,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/list",
			component:List,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/Detail",
			component:Detail,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/",
			redirect:"/home",
			meta: {
				footShow: true,
			},
		},
		
	]
})