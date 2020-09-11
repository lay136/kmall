//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'
import Me from 'pages/me'
import Note from 'pages/note'
import List from 'pages/list'
import Search from 'pages/search'
import Detail from 'pages/detail'




//3.声明使用
Vue.use(VueRouter)

//4.导出路由对象
export default new VueRouter({
    routes:[
        {path:"/home",component:Home},
        {path:"/cart",component:Cart},
        {path:"/me",component:Me},
		{path:"/note",component:Note},
		{path:"/search",component:Search},

		{path:"/list",component:List},
        {path:"/",redirect:"/home"},
    ]
})
