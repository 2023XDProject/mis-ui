<template>
  <div>
    <head-top> </head-top>
    <section class="backContainer">
      <p class="title">统计数据</p>
      <br /><br />
      <section class="subContainer">
        <p class="subP1">宿舍号: </p><p>{{ result.dormID }}</p>
        <br /><br />
        <p class="subP2">剩余水费:</p><p>{{ result.waterBill }}</p>
        <br /><br />
        <p class="subP3">剩余电费: </p><p>{{ result.electricityBill }}</p>
      </section>
    </section>
  </div>
</template>
<script>
import headTop from "../components/headTop";
import { getUserList, getUserCount } from "@/api/getData";
export default {
  data() {
    return {
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1,
      Studentdto: JSON.parse(localStorage.getItem("uid")),
      info: {
        domID: "",
      },
      result :{
        dormID: "",
        waterBill: "",
        electricityBill: "",
      }
    };
  },
  components: {
    headTop,
  },
  created() {
    this.initData();
    if(!this.info.domID){
       getDomID()
    }
     inquire()
  },
  methods: {
     async getDomID(){
         info=Studentdto.domID
     },
    async inquire() {
      this.myPost("/dorm/balance",this.info, (response) => {
        if (response.code === "200000") {
          this.result=response;
        } else {
          alert("查询失败");
        }
      })
    },

  //   async initData() {
  //     try {
  //       const countData = await getUserCount();
  //       if (countData.status == 1) {
  //         this.count = countData.count;
  //       } else {
  //         throw new Error("获取数据失败");
  //       }
  //       this.getUsers();
  //     } catch (err) {
  //       console.log("获取数据失败", err);
  //     }
  //   },
  //   handleSizeChange(val) {
  //     console.log(`每页 ${val} 条`);
  //   },
  //   handleCurrentChange(val) {
  //     this.currentPage = val;
  //     this.offset = (val - 1) * this.limit;
  //     this.getUsers();
  //   },
  //   async getUsers() {
  //     const Users = await getUserList({
  //       offset: this.offset,
  //       limit: this.limit,
  //     });
  //     this.tableData = [];
  //     Users.forEach((item) => {
  //       const tableData = {};
  //       tableData.username = item.username;
  //       tableData.registe_time = item.registe_time;
  //       tableData.city = item.city;
  //       this.tableData.push(tableData);
  //     });
  //   },
   },
};
</script>

<style lang="less">
@import "../style/mixin";
.table_container {
  padding: 20px;
  border-radius: 5px;
}
.backContainer {
  .ctp(900px,650px);
  .wh(1140px,700px);
  border-radius: 5px;
  background-color: rgb(217, 233, 241);

  .title {
    .ctp(1100px,680px);
    //position: relativ;
    font-size: 35px;
    color: rgb(78, 148, 228);
    z-index: 9;
  }
}
.subContainer {
  .ctp(1100px,650px);
  .wh(1100px,650px);
  border-radius: 5px;
  background-color: rgb(253, 255, 255);
  .subP1 {
    .ctp(750px,400px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
  .subP2 {
    .ctp(750px,200px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
  .subP3 {
    .ctp(750px,0px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
}
</style>
