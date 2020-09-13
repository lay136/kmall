<template>
    <div id="Center">
		<div class="login">
			<van-tabs 
				v-model="active" 
				class="van-tabs__wrap"
				:border='true'
				>
				<van-tab title="密码登录" ></van-tab>
				<van-tab title="手机号登录" ></van-tab>
				<van-tab title="免费注册" ></van-tab>
			</van-tabs>

			<div class="van-tabs__content">
				<van-form  @submit="onSubmit">
					<van-field
						name="用户名"
						placeholder="请输入手机号"
						:rules="[{ pattern, message: '请输入正确内容' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="密码"
						placeholder="请输入密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<div>
						<van-field
							v-model="verification"
							type="password"
							name="密码"
							placeholder="请输入图形内验证码"
							:rules="[{ required: true, message: '请输入图形内验证码' }]"
						/>
					</div>
				
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							登录
						</van-button>
					</div>
				</van-form>
			</div>
			<div class="backhome" @click='goHome'>返回首页</div>
			<!-- this is Center page -->
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { GET_CAPTCHA } from './store/types.js'
    export default {
		name:'Center',
		data() {
			return {
				active: 0,
				username: '',
				password: '',
				verification:'',
			};
		},
		//获取密码
		mounted(){
			this.$store.dispatch(GET_CAPTCHA)
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			pattern(username) {
				return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(username);
			},
			goHome(){
				this.$router.replace('/')
			},
		},
		computed: {
			...mapGetters([
				'captcha',
			])
		},
	}
</script>

<style lang="less" scoped>
	#Center{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 200;
		background-color: #fff;
		.login{
			margin-top: 1.875rem;
			.van-tabs__wrap{
				overflow: hidden;
				box-sizing: content-box;
				height: 100%;
				padding-bottom: .46875rem;
				.van-tab{
					position: relative;
					flex: 1;
					box-sizing: border-box;
					min-width: 0;
					padding: 0 .15625rem;
					color: #7d7e80;
					font-size: .4375rem;
					line-height: 1.375rem;
					text-align: center;
					cursor: pointer;
				}
			}
			.van-tabs__wrap{
				padding-bottom: .46875rem;
				font-size: 20px;
			}

			.van-cell{
				line-height: 1.25rem;
			}
			.backhome{
				margin-left: .3125rem;
				margin-top: .3125rem;
				font-size: .375rem;
				color: #1890ff;
			}
			.van-button--info{
				color: #fff;
				font-size: .5rem;
				background-color: #07c160;
				border: .03125rem solid #07c160;
			}
		}
	}

</style>
