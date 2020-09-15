<template>
	<div id="App">
		<!-- 路由出口 展示路由匹配后的组件 -->
		<router-view></router-view>
        <!-- 注册成为子组件 -->
		<Tabbar v-if="$route.meta.footShow"/>
	</div>
</template>

<script>
	import Tabbar from 'components/tabbar/index.vue'
	
	export default {
		name: 'App',
		components: {
			Tabbar
		}
	}
</script>

<style>
#app {
  
}
</style>
