import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'

// 加载全局css样式
import './assets/css/common.css'

//引入路由对象
import router from './router'

//全局加载vant组件
import './plugins/vant'

//引入store
import store from './store'
axios.defaults.withCredentials = true //允许跨域

Vue.config.productionTip = false

new Vue({
	store,
	router,
  	render: h => h(App),
}).$mount('#app')