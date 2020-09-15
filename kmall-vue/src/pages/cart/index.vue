<template>
	<!-- <div id="Cart"> -->
		<div>
			<van-sticky>
				<van-nav-bar
					left-text="返回"
					left-arrow
					@click-left="onClickLeft"
					title="购物车"
				/>
			</van-sticky>
		</div>
		<!-- <van-card
			num="2"
			price="2.00"
			desc="描述信息"
			title="商品标题"
			thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
		/> -->
		<!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
		<van-checkbox v-model="checked">全选</van-checkbox>
			<template #tip>
			<span @click="onClickEditAddress">修改地址</span>
			</template>
		</van-submit-bar> -->
		<!-- <van-empty description="暂无数据" /> -->
		<!-- <p>
			this is Cart
		</p> -->
		
	</div>
</template>

<script>
	// import Vue from 'vue';
	// import { Card } from 'vant';
	// Vue.use(Card);
	// import { SubmitBar } from 'vant';
	// Vue.use(SubmitBar);
	// import { POST_CARTS } from './store/types.js'
	export default {
		name:'Cart',
		data(){

		},
		mounted(){
			// this.$store.dispatch(POST_CARTS)
		},
		methods:{
			onClickLeft(){
					// 返回方式1
				this.$router.back()
					// 返回方式2
				// window.history.go(-1)
				// 	返回方式3
				// this.$router.push({
				// 	path:'/me',
				// })
			}
		},

	}
</script>

<style scoped lang="less">
	// #Cart{
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	bottom: 1.24rem;
	// 	right: 0;
	// 	z-index: 200;
	// 	background-color: #fff;
	// 	p{
	// 		color: #008000;
	// 	}
	// 	.van-empty{
	// 		background-color: #fff;
	// 	}
	// }
</style>
