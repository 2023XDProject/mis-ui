<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%">
      <el-col :span="4" style="min-height: 100%; background-color: #324057">
        <section class="userItem">
          <div class="userAvatar"></div>
          <section class="item">
            <p class="userNameItem">用户名：{{ userName }}</p>
            <div class="point"></div>
            <p class="stateItem">在 线</p>
          </section>
        </section>
        <hr />
        <el-menu
          :default-active="defaultActive"
          style="min-height: 100%"
          theme="dark"
          router
        >
          <el-menu-item index="manage"
            ><i class="el-icon-menu"></i>首页</el-menu-item
          >
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-document"></i>数据统计</template
            >
            <!-- 记得重写方法啊！ -->
            <el-menu-item index="userList">剩余费用</el-menu-item>
            <el-menu-item index="shopList">历史账单</el-menu-item>
            <!-- <el-menu-item index="foodList">食品列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="adminList">管理员列表</el-menu-item> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>充值</template>
            <!-- 记得重写方法啊！ -->
            <el-menu-item index="addShop">充值水费</el-menu-item>
            <el-menu-item index="addGoods">充值电费</el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="4" > -->
          <!-- <el-menu-item index="visitor"
            ><i class="el-icon-star-on"></i>通知</el-menu-item
          > -->
          <!-- <template slot="title" >
							<i class="el-icon-star-on" ></i>通知
							</template> -->
          <!-- <el-menu-item index="visitor">用户分布</el-menu-item> -->
          <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
          <!-- </el-submenu> -->
          <!-- <el-submenu index="5"> -->
          <el-menu-item index="adminSet"
            ><i class="el-icon-edit"></i>个人信息</el-menu-item
          >
          <!-- <template slot="title"><i class="el-icon-edit"></i>个人信息</template> -->
          <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
          <!-- <el-menu-item index="vueEdit">文本编辑</el-menu-item> -->
          <!-- </el-submenu> -->
          <!-- <el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item> -->
          <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          <!-- </el-submenu> -->
          <!-- <el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu> -->
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%; overflow: auto">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>


<style lang="less" scoped>
@import "../style/mixin";
.manage_page fillcontain{
	.wh(1400px,1000px);
	.ctp(1460px, 800px);
}

.userItem {
  .wh(240px,95px);
  z-index: 1;
  .userAvatar {
    .ctp(1430px, 790px);
    //position: relative;
	background-size:65px;
    background-image: url('../assets/img/avatar.jpg');
    //background-color: aqua;
    width: 65px;
    height: 65px;
    border-radius: 100%;
    z-index: 3;
  }
  .userNameItem {
    .ctp(1250px, 765px);
    //position: relative;
    font: 30px;
    color: rgb(255, 255, 255);
    z-index: 3;
  }
  .stateItem {
    .ctp(1190px, 710px);
    //position: relative;
    font: 25px;
    color: rgb(255, 255, 255);
    z-index: 3;
  }
  .point{
	.ctp(1230px, 690px);
	background-color: rgb(52, 222, 122);
    width: 6px;
    height: 6px;
    border-radius: 100%;
	 z-index: 3;
  }
}

</style>