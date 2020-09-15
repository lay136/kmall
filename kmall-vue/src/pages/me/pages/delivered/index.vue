<template>
	<div id="Delivered">
		<van-nav-bar
			title="已发货"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>

		<van-empty description="暂无数据" />
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'TobePaid',
		methods:{
			onClickLeft() {
				Toast('返回');
				this.$router.back();
			},
		}	
	}
</script>

<style lang="less" scoped>
	#TobePaid{
		
	}
</style>
