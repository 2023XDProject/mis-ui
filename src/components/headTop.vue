<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
		 {{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-dropdown @command="handleCommand" menu-align="start">
      <img :src="baseImgPath + adminInfo.avatar" class="avator" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
  </div>
  <!-- <div class="header_container">
    <el-col style="weight: 100%">
      <el-row :span="4" style="min-weight: 100%; background-color: #324057">
      </el-row>
    </el-col>
  </div> -->
</template>

<script>
import { signout } from "@/api/getData";
import { baseImgPath } from "@/config/env";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      baseImgPath,
    };
  },
  created() {
    if (!this.adminInfo.id) {
      //this.getAdminData();
      
    }
  },
  computed: {
    ...mapState(['Student']),
  },
  methods: {
    ...mapActions(['getStudent']),
    async handleCommand(command) {
      if (command == "home") {
        this.$router.push("/manage");
      } else if (command == "signout") {
        const res = await signout();
        if (res.status == 1) {
          this.$message({
            type: "success",
            message: "退出成功",
          });
          this.$router.push("/");
        } else {
          this.$message({
            type: "error",
            message: res.message,
          });
        }
      }
    },
  },
};
</script>

<style lang="less">
@import "../style/mixin";
.header_container {
  background-color: #eff2f7;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.avator {
  .wh(36px, 36px);
  border-radius: 50%;
  margin-right: 37px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
