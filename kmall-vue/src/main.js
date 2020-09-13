import Vue from 'vue'
import App from './App.vue'

<<<<<<< HEAD
Vue.config.productionTip = false
//加载全局css样式
import './assets/css/common.css'
import router from './router/index.js'
//全局加载vant组件
import './plugins/vant/index.js';


import store from './store/index.js'

new Vue({
	router,
=======
Vue.config.productionTip = false
//加载全局css样式
import './assets/css/common.css'
import router from './router/index.js'
//全局加载vant组件
import './plugins/vant/index.js';


import store from './store/index.js'

new Vue({
	router,
>>>>>>> 66ca6d3fe49a3c1728d5df84bf792872680ccf72
	store,
	render: h => h(App),
}).$mount('#app')
