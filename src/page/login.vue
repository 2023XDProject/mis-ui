<template>
  	<div class="login_page fillcontain">
		<transition name="form-fade" mode="in-out">
          <div class="contianer"  v-show="showLogin">
            <div class="card">
		  		    <div>
		  			    <p><br><br><br>
						<br><br><br><br><br>
						<br><br> <br><br><br>
						<br><br><br> <br><br>
						<br><br><br><br> <br><br></p>
		  		    </div> 
            </div>
          </div>
        </transition>
      <transition name="form-fade" mode="in-out">
		<div class="manage_tip" v-show="showLogin">
		  	<p>宿舍缴费管理管理系统</p>
		</div> 
		 </transition>
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
			        <p class="login1">账号登录</p>
					<br><br><br>
					<el-form-item prop="username">
						<el-input v-model="Student.uid" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
          <br><br>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="Student.pwd"></el-input>
					</el-form-item>
          <br><br>
		        <section class="form_contianer_2" v-show="showLogin">
					<el-form-item>
				    	<el-button type="primary" @click="login()" class="submit_btn">登录</el-button>
				  	</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="register('register')" class="submit_btn">注册</el-button>
				  	</el-form-item>
				</section>
				</el-form>
				<br><br>
				<!-- <p class="tip">温馨提示：</p>
				<p class="tip">未登录过的新用户，自动注册</p>
				<p class="tip">注册过的用户可凭账号密码登录</p> -->
	  		</section>
        </transition>
  	</div>
</template>

<script>
	import {login, getAdminInfo} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'
import { getCurrentScope } from 'vue'

	export default {
	    data(){
			return {
				Student:{
					uid: "",
					pwd: "",
				},
				Result:{
                    code: "",
					message: "",
					data: "",
				},

				showLogin: false,
				loginForm: {
					username: '',
					password: '',
				},
				// rules: {
				// 	username: [
			    //         { required: true, message: '请输入用户名', trigger: 'blur' },
			    //     ],
				// 	password: [
				// 		{ required: true, message: '请输入密码', trigger: 'blur' }
				// 	],
				// },
			}
		},
		create(){
          	
		},
		mounted(){
			this.showLogin = true;
			// if (!this.adminInfo.id) {
    		// 	this.getAdminData()
    		// }
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
			login(){
				//this.$router.push('manage')
				//this.$message.error("尚未判断")
				//document.write("加入loading服务")
				this.myPost("/user/login", this.Student, response => {
					document.write("收到response")
					this.$message.error("尚未判断")
					//console.log(response.obj.code)
                    //console.log(response.obj)
					//console.log(response.data)
					//console.log(response.data.data.password)
					//this.$message.message(response.data.pwd)
					//this.console.log(response.code)
					//this.$message.error("尚未判断")
					document.write(response.code)
					if(response.code==='200000'){
						document.write("成功响应")
						this.$message({
		                        type: 'success',
		                        message: '登录成功'
								//更新信息
		                    });
						this.$router.push('manage')
					 }else{
						this.$router.push('manage')
						//this.$message.error(response.message)
					 }
				})

								// this.myPost("/user/login", this.Student, response => {
				// 	console.log(response)
				// 	if(!response.obj){
				// 		this.$message.error("用户名或密码错误")

				// 	 }else{
				// 		this.$message({
		        //                 type: 'success',
		        //                 message: '登录成功'
				// 				//更新信息
		        //             });
				// 		this.$router.push('manage')
				// 	 }
				// })

                // this.$axios.required.get("api/user/login",this.Student).then(res=>{
                //      if(!res){
				// 		this.$message.error("用户名或密码错误")
				// 	 }else{
				// 		this.$message({
		        //                 type: 'success',
		        //                 message: '登录成功'
		        //             });
				// 		this.$router.push('manage')
				// 	 }
				// })
			},
			...mapActions(['getAdminData']),
			async submitForm(formName) {

               //测试，记得删
							this.$message({
		                        type: 'success',
		                        message: '登录成功'
		                    });
							this.$router.push('manage')
				//			


				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						const res = await login({user_name: this.loginForm.username, password: this.loginForm.password})
						if (res.status == 1) {
							this.$message({
		                        type: 'success',
		                        message: '登录成功'
		                    });
							this.$router.push('manage')
						}else{
							this.$message({
		                        type: 'error',
		                        message: res.message
		                    });
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
			async register(formName){
                 this.$router.push('register')
			}
		},
		watch: {
			// adminInfo: function (newValue){
			// 	if (newValue.id) {
			// 		this.$message({
            //             type: 'success',
            //             message: '检测到您之前登录过，将自动登录'
            //         });
			// 		this.$router.push('manage')
			// 	}
			// }
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
    background-image: url('../assets/img/paymentSystem.png');
		//background-color: #324057;
		z-index: 0;
	}
  .subimage{
    .ctp(1200px, 450px);
  }

  .contianer{
    position: relative;
    .wh(800px, 1050px);
	// width:400;
    // height:800;
	
    .ctp(900px, 560px);
    //display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    .card{
    //相对位置
    position: relative;
    width:800;
    height:1000;
    background-color: rgba(225,225,225,0.1);
    margin: 30px;
    border-radius: 15px;
    //阴影
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    //溢出
    overflow:hidden;
    //display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(225,225,225,0.5);
    border-left: 1px solid rgba(225,225,225,0.5);
    backdrop-filter: blur(5px);
  }
  }
	.manage_tip{		
	//position: absolute;
    .ctp(750px, 500px);
	//width: 100%;
    padding: 20px;
    text-align: center;
	// top: -100px;
	// left: 0;
		p{
			font-size: 30px;
			color: #fff;
		}
		z-index: 2;
	}
	.form_contianer{
		.wh(300px, 398px);
		.ctp(0px, 500px);
		padding: 50px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 40%;
			font-size: 16px;
		}
		z-index: 3;
	}
	.form_contianer_2{
		.wh(300px, 10px);
		.ctp(330px, -120px);
		padding: 20px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		display: inline-block;
        .el-form-item{
			.wh(300px, 50px);
			width: 40%;
			display: inline-block;
		}
		.submit_btn{
			display: inline-block;
			width: 50%;
			font-size: 16px;
			background-color: #156c84;
		}
		z-index: 3;
	}

	.tip{
		font-size: 12px;
		color: red;
		z-index: 3;
	}
    .login1{
		font-size: 30px;
		color: rgb(24, 77, 87);
		z-index: 3;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
		z-index: 3;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
		z-index: 3;
	}
</style>