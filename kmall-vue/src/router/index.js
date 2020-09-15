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
import Me from 'pages/me'

//Me页路由
//已付款
import TobePaid from '../pages/me/pages/tobepaid'
//已发货
import Delivered from '../pages/me/pages/delivered'
// 待发货
import TobeDelivered from '../pages/me/pages/tobedelivered'
//已完成
import Completed from '../pages/me/pages/completed'
// 全部订单 AllOrder
import AllOrder from '../pages/me/pages/allorder'


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
				footShow: true,
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
			path:"/me",
			component:Me,
			meta: {
				footShow: true,
			},
		},
		{
			path:"/me/tobepaid",
			component:TobePaid,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/me/delivered",
			component:Delivered,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/me/tobedelivered",
			component:TobeDelivered,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/me/completed",
			component:Completed,
			meta: {
				footShow: false,
			},
		},
		{
			path:"/me/allorder",
			component:AllOrder,
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