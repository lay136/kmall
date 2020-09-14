<template>
    <div id="Center">
		<div class="login">
			<van-tabs 
				v-model="active" 
				class="van-tabs__wrap" 
				:border='true'
				>
				<van-tab title="密码登录" >
					<div class="van-tabs__content">
						<van-form  @submit="onSubmit">
							<van-field
								name="用户名"
								v-model='form.Phone'
								:value="shows"
								@blur='isPhone'
								placeholder="请输入手机号"
								:error-mecssage="errMsg.Phone"
								:rules="[{ isPhone, required: true,message: '请输入正确的手机号', }]"
								@touchstart.native.stop="show = true"
							/>
							<van-field
								v-model="form.Password"
								type="password"
								name="密码"
								:error-mecssage='errMsg.Password'
								@blur="isPassword"
								placeholder="请输入密码"
								:rules="[{ isPassword, required: true, message: '请填写密码' }]"
							/>
							<div class="checking">
								<van-field
									v-model="verification"
									name="验证码"
									placeholder="请输入图形内验证码"
									:rules="[{ required: true }]"
									@touchstart.native.stop="show = true"
								/>
								<div class="captch" >
									<div class="captch-img" v-html="captcha" @click="handleCaptch">
									</div>
								</div>
							</div>
							<div style="margin: 16px;">
								<van-button round block type="info" native-type="submit" @onSubmit='onSubmit(values)'>
									登 录
								</van-button>
							</div>
						</van-form>
					<div class="backhome" @click='goHome'>返回首页</div>
						<van-number-keyboard
							:show="show"
							@input="onInput"
							@blur="show = false"
							v-model='shows'
						/>
					</div>
				</van-tab>
				<Login />
				<Register />
				<!-- <van-tab title="免费注册" >
					this is register page！
				</van-tab> -->
			</van-tabs>
			<!-- this is Center page -->
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import { mapGetters } from 'vuex'
	import { GET_CAPTCHA } from './store/types.js'
	import Login from '../../components/login/index.vue'
	import Register from '../../components/register/index.vue'
	//验证手机号是否合法
	export function isPhone(value){
		return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(value);
	}
	//验证密码合法性
	export function isPassword(value){	
		return /^(?![^A-Za-z]+$)(?![^0-9]+$)[\x21-x7e]{6,18}$/.test(value);
	}

    export default {
		name:'Center',
		data() {
			return {
				active: 0,
				username: '',
				password: '',
				verification:'',
				show: false,
				shows:'',
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
		mounted(){
			this.$store.dispatch(GET_CAPTCHA)
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			//验证手机号
			isPhone(){
				if (!this.form.Phone){
					this.errMsg.Phone = '请输入正确的手机号z'
					return false
				}else if(!isPhone(this.form.Phone)) {
					this.errMsg.Phone = '请输入正确的手机号'
					return false
				} else {
					this.errMsg.Phone = ''
					return true
				}
			},
			isPassword(){
				if (!this.form.Password){
					this.errMsg.Password = '请输入合法密码'
					return false
				}else if(!isPassword(this.form.Password)) {
					this.errMsg.Password = '以首字母开头，必须包含数字的6-18位！'
					return false
				} else {
					this.errMsg.Password = ''
					return true
				}
			},
			
			// phone(val) {
			// 	return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(val);
			// },
			//密码至少包含 数字和英文，长度6-20
			// cipher(val){
			// 	return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
			// },
			goHome(){
				this.$router.replace('/')
			},
			onInput(value) {
				Toast(value);
			},
			onDelete() {
				Toast('删除');
			},
			handleCaptch(){
				this.$store.dispatch(GET_CAPTCHA)
			},
		},
		computed: {
			...mapGetters([
				'captcha',
			])
		},
		components: {
			Login,
			Register
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
		}
	}
</style>
