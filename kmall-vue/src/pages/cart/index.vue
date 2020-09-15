<template>
	<div id="Cart">
		<div>
			<van-nav-bar
				title="购物车"
			/>
		</div>
		<van-empty description="暂无数据" />
		<!-- <p>
			this is Cart
		</p> -->
		
	</div>
</template>

<script>
	
	export default {
		name:'Cart',
		// data(){

		// },
		methods:{
			onClickLeft(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped lang="less">
	#Cart{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 1.24rem;
		right: 0;
		z-index: 200;
		background-color: #fff;
		p{
			color: #008000;
		}
		.van-empty{
			background-color: #fff;
		}
	}
</style>
