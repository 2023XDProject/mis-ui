
// 首页（没有左边侧栏）
<template>
  <div>
    <Head></Head>
    <section class="backContainer">
      <section class="subContainer">
        <p class="p" weight="1020px">常用功能：</p>
        <div class="box-selector">
          <br />
          <img src="../assets/img/1.png" class="img" />
          <br /><br />
          查询剩余费用
        </div>
        <div class="box-selector2">
          <br />
          <img src="../assets/img/2.png" class="img" />
          <br /><br />
          查询历史账单
        </div>
        <div class="box-selector3">
          <br />
          <img src="../assets/img/3.png" class="img" />
          <br /><br />
          充值
        </div>
      </section>
      <section class="subContainer2">
        <p class="p">通知：</p>
      </section>
      <section class="subContainer3">
        <p class="p">温馨提示：</p>
      </section>
    </section>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import tendency from "../components/tendency";
import Head from "../components/head";
import dtime from "time-formater";
import {
  userCount,
  orderCount,
  getUserCount,
  getOrderCount,
  adminDayCount,
  adminCount,
} from "@/api/getData";
export default {
  data() {
    return {
      userCount: null,
      orderCount: null,
      adminCount: null,
      allUserCount: null,
      allOrderCount: null,
      allAdminCount: null,
      sevenDay: [],
      sevenDate: [[], [], []],
    };
  },
  components: {
    //headTop,
    Head,
    tendency,
  },
  mounted() {
    // this.initData();
    // for (let i = 6; i > -1; i--) {
    //   const date = dtime(new Date().getTime() - 86400000 * i).format(
    //     "YYYY-MM-DD"
    //   );
    //   this.sevenDay.push(date);
    // }
    // this.getSevenData();
  },
  computed: {},
  methods: {
    // async initData() {
    //   const today = dtime().format("YYYY-MM-DD");
    //   Promise.all([
    //     userCount(today),
    //     orderCount(today),
    //     adminDayCount(today),
    //     getUserCount(),
    //     getOrderCount(),
    //     adminCount(),
    //   ])
    //     .then((res) => {
    //       this.userCount = res[0].count;
    //       this.orderCount = res[1].count;
    //       this.adminCount = res[2].count;
    //       this.allUserCount = res[3].count;
    //       this.allOrderCount = res[4].count;
    //       this.allAdminCount = res[5].count;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    },
  //   async getSevenData() {
  //     const apiArr = [[], [], []];
  //     this.sevenDay.forEach((item) => {
  //       apiArr[0].push(userCount(item));
  //       apiArr[1].push(orderCount(item));
  //       apiArr[2].push(adminDayCount(item));
  //     });
  //     const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]];
  //     Promise.all(promiseArr)
  //       .then((res) => {
  //         const resArr = [[], [], []];
  //         res.forEach((item, index) => {
  //           if (item.status == 1) {
  //             resArr[Math.floor(index / 7)].push(item.count);
  //           }
  //         });
  //         this.sevenDate = resArr;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // },
};
</script>

<style lang="less">
@import "../style/mixin";
.data_section {
  z-index: 999;
  .wh(1400,800);
  // padding: 20px;
  // margin-bottom: 40px;

  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
.wan {
  .sc(16px, #333);
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
  .ctp(1050px,650px);
  .wh(510px,320px);
  border-radius: 5px;
  background-color: rgb(253, 255, 255);
  border: 0.25rem dashed #5384ce;
  border-radius: 0.25rem;
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

.subContainer2 {
  .ctp(-50px,650px);
  .wh(510px,320px);
  border-radius: 5px;
  background-color: rgb(253, 255, 255);
  border: 0.25rem dashed #5384ce;
  border-radius: 0.25rem;
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

.subContainer3 {
  .ctp(1050px,-50px);
  .wh(1060px,300px);
  border-radius: 5px;
  background-color: rgb(253, 255, 255);
  border: 0.25rem dashed #5384ce;
  border-radius: 0.25rem;
  .subP {
    .ctp(700px,400px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
}

.p {
  color: #289cce;
  font-size: 20px;
}

.pricing-table {
  /* Content is centered horizontally */
  align-items: center;
  display: flex;
  justify-content: center;
}

.pricing-table__column {
  /* Content is centered vertically */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Make all columns have the same width */
  flex: 1;

  /* OPTIONAL: Space between columns */
  margin: 0 0.5rem;

  /* OPTIONAL: Border */
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}

.box-selector {
  .ctp(480px,230px);
  .wh(130px,240px);
  border: 1px solid #527bb9;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 20px;
  text-align: center;
  color: #04142e;
}

.box-selector2 {
  .ctp(150px,230px);
  .wh(130px,240px);
  border: 1px solid #527bb9;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 20px;
  text-align: center;
  color: #04142e;
}
.box-selector3 {
  .ctp(-180px,230px);
  .wh(130px,240px);
  border: 1px solid #527bb9;
  border-radius: 0.25rem;
  padding: 0.5rem;
  text-align: center;
  font-size: 20px;
  color: #04142e;
}

.box-selector--selected {
  /* Change the border color */
  border: 2px solid #3b82f6;

  /* Used to position the tick */
  position: relative;
}

/* The tick */
.box-selector--selected:before {
  /* Absolute position */
  content: "";
  left: 0.25rem;
  position: absolute;
  top: 0.25rem;

  /* Size */
  height: 1rem;
  width: 1rem;

  /* Background */
  background-image: url("data:image/svg+xml,%3Csvg fill='%233b82f6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'%3E%3C/path%3E%3C/svg%3E");
  background-position: center center;
  background-repeat: no-repeat;
}
.img{
  .wh(130px,130px);
}
</style>
