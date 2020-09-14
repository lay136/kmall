<template>
   <div id="Register">
		<van-tab title="免费注册" >
			<div class="van-tabs__content">
				<van-form @submit="onSubmit" > 
					<van-field
						:border='true'
						:value="shows"
						name="用户名"
						placeholder="请输入手机号"
						v-model="form.Phone"
						:error-message="errMsg.Phone"
						@blur="Phone"
						clearable
						@touchstart.native.stop="show = true"
					/>
					<div class="checking">
						<van-field
							name="验证码"
							placeholder="请输入短信验证码"
							:rules="[{ required: true, message: '请填写短信验证码' }]"
							@touchstart.native.stop="show = true"
						/>

						<div class="ckecking-button">
							<van-button type="primary" @click='Dialog()' size="small">发送验证码
							</van-button>
						</div>
					</div>
					
					<van-field
						name="密码"
						v-model="registerPassword"
						type="password"
						placeholder="请输入密码"
						:rules="[{ cipher,required: true,message: '请输入密码', }]"
						@touchstart.native.stop="show = true"
					/>
					<van-field
						v-model="againPassword"
						type="password"
						name="确认密码"
						placeholder="请再次输入密码"
						:rules="[{ required: true, message: '请再次输入密码' }]"
						@touchstart.native.stop="show = true"
					/>
					
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							确 定
						</van-button>
					</div>
				</van-form>
				<div class="backhome" @click="goback">返回首页</div>
				
				<van-number-keyboard
					:show="show"
					@input="onInput"
					@blur="show = false"
					v-model='shows'
				/>
			</div>
		</van-tab>
	</div>
</template>

<script>
	// import { Dialog } from 'vant';
	// Dialog({ message: '提示' });
	// 	Dialog.confirm({
	// 		title: '请输入图形验证码',
	// 		message: '图形验证码',
	// 	})
	// 	.then(() => {
	// 	// on confirm
	// 	})
	// 	.catch(() => {
	// 	// on cancel
	// 	});
	import { Toast } from 'vant';
    export default {
		name:'Register',
		data() {
			return {
				active: 0,
				registerPassword: '',
				againPassword:'',
				show: false,
				shows:'',
				form: {
					Phone: '',
					Password:'',
				},
				errMsg: {
					Phone: '',
					Password:'',
					againPassword:'',
				}
			};
		},
		methods: {
			goback(){
				this.$router.replace('/')
			},
			onSubmit(values) {
				console.log('submit', values);
			},
			// 手机号
			Phone(val) {
				return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(val);
			},
			//密码
			cipher(val){
				return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
			},	
			onInput(value) {
				Toast(value);
			},
			onDelete() {
				Toast('删除');
			},
			
		},
	}
</script>

<style lang="less" scoped>
.van-tabs__wrap{
		padding-bottom: .46875rem;
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
	// .van-button--primary{
	// 	font-size: .5rem;

	// }
	.checking{
		display: flex;
		.ckecking-button{
			position: relative;
			right: 0.625rem;
			top: 0.175rem;
			.van-button--small{
				width: 2.4rem;
				height: 2.1875rem;
				height: 0.935rem;
				line-height: .875rem;
				overflow: hidden;
			}
			.van-button__text{
				font-size: 0.375rem;
			}
		}
	}
</style>
