<template>
  <div class="header">
    <el-col style="weight: 100% ">
      <el-row :span="4" style="min-weight: 100%">
		 <el-breadcrumb-item >首页</el-breadcrumb-item>
      </el-row>
    </el-col>
  </div>
</template>

<script>
	import {signout} from '@/api/getData'
	import {baseImgPath} from '@/config/env'
	import {getStore} from '@/config/mUtils'
	import {mapActions, mapState} from 'vuex'

    export default {
    	data(){
    		return {
    			baseImgPath,

    		}
    	},
    	created(){
    		if (!this.adminInfo.id) {
				this.getStore()
    			//this.getAdminData()
    		}
			if(!this.Studentdto.stuName){
				this.storage('uid')
			}
    	},
    	computed: {
    		...mapState(['Student']),
    	},
		methods: {
			...mapActions(['getStudent']),
			async handleCommand(command) {
				if (command == 'home') {
					this.$router.push('/manage');
				}else if(command == 'signout'){
					const res = await signout()
					if (res.status == 1) {
						this.$message({
	                        type: 'success',
	                        message: '退出成功'
	                    });
	                    this.$router.push('/');
					}else{
						this.$message({
	                        type: 'error',
	                        message: res.message
	                    });
					}
				}
			},
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.header{
		background-color: #EFF2F7;
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>
