<template>
	<div id="Login">
		<van-tab title="验证码登录" >
			<div class="van-tabs__content">
				<van-form @submit="onSubmit">
					<van-field
						:value="form.Phone"
						name="用户名"
						placeholder="请输入手机号"
						v-model="form.Phone"
						:error-message="errMsg.Phone"
						@blur="isPhone"
						clearable
						@touchstart.native.stop="show = true"
					/>
					<div class="checking">
						<van-field
							name="密码"
							type="password"
							placeholder="请输入验证码"
							v-model="form.Password"
							@blur="isPassword"
							clearable
							:error-message="errMsg.Password"
						/>
						<div class="ckecking-button">
							<van-button type="primary" size="small">发送验证码</van-button>
						</div>
					</div>
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							登录
						</van-button>
					</div>
				</van-form>
				<div class="backhome" @click="goback">返回首页</div>
				
				<van-number-keyboard
					:show="show"
					@input="onInput"
					@blur="show = false"
					v-model='form.Phone'
				/>
			</div>
		</van-tab>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	//验证手机号
	export function isPhone(value) {
		return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(value);
	}
	//验证密码
	export function isPassword(value) {
		return /^[A-Za-z0-9]{6,12}$/.test(value);
	}
	export default {
		name:'PhoneLogin',
		data() {
			return {
				active: 0,
				show: false,
				form: {
					Phone: '',
					Password:'',
				},
				errMsg: {
					Phone: '',
					Password:'',
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
			isPhone(){
				if (!this.form.Phone){
					this.errMsg.Phone = '请填写手机号码！'
					return false
				}else if(!isPhone(this.form.Phone)) {
					this.errMsg.Phone = '手机号格式不正确！'
					return false
				} else {
					this.errMsg.Phone = ''
					return true
				}
			},
			isPassword(){
				if (!this.form.Password){
					this.errMsg.Password = '请填写验证码！'
					return false
				}else if(!isPassword(this.form.Password)) {
					this.errMsg.Password = '以首字母开头，必须包含数字的6-18位！'
					return false
				} else {
					this.errMsg.Password = ''
					return true
				}
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
		background-color: #07c160;
		border: .03125rem solid #07c160;
	}
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
