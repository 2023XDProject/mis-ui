<template>
  <div class="billContain">
            <head-top>
		</head-top>
    <section class="backContainer">
      <section class="subContainer">
        <p class="title">历史账单查询</p>
        <!-- <section class="yearContain">
    </section> -->
        <section class="selectContainer">
          <el-select v-model="value" class="yearContain" placeholder="查询年份">
            <el-option
              v-for="item in yearoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
           <el-col class="text-center" :span="1" style="margin: 50 0.5rem">-</el-col>
          <el-select v-model="value" class="monContain" placeholder="查询月份">
             <el-option key="选项1" label="1月" value="选项1" />
            <el-option key="选项2" label="2月" value="选项2" />
             <el-option key="选项3" label="3月" value="选项1" />
            <el-option key="选项4" label="4月" value="选项2" />
             <el-option key="选项5" label="5月" value="选项1" />
            <el-option key="选项6" label="6月" value="选项2" />
             <el-option key="选项7" label="7月" value="选项1" />
            <el-option key="选项8" label="8月" value="选项2" />
             <el-option key="选项9" label="9月" value="选项1" />
            <el-option key="选项10" label="10月" value="选项2" />
             <el-option key="选项11" label="11月" value="选项1" />
            <el-option key="选项12" label="12月" value="选项2" />

            <!-- <el-option
              v-for="item in yearoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            /> -->
          </el-select>
        </section>
        <br />
        <br />
        <section class="dormNoContain">
          <p class="dormNo">宿舍号：</p>
          <el-input v-model="input2" class="dormLine" placeholder="宿舍号" />
          <el-button type="primary" plain class="queryBtn">查询</el-button>
        </section>
        <section class="tableContain">
        <!-- <div> -->
          <el-table :data="tableData" height="350" style="width: 100% height:100%">
            <el-table-column prop="xuehaneg" label="学生姓名" width="180" />
            <el-table-column prop="name" label="缴纳电费" width="180" />
            <el-table-column prop="address" label="缴纳水费" />
            <el-table-column prop="address" label="缴费时间" />
          </el-table>
        <!-- </div> -->
        </section>
        <div>
          <el-pagination
            :current-page="currentPage"
            :page-size="10"
            :pager-count="11"
            layout="prev, pager, next"
            :total="count"
          />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import head from "../components/head";
import { baseUrl, baseImgPath } from "@/config/env";
// import {
//   cityGuess,
//   getResturants,
//   getResturantsCount,
//   foodCategory,
//   updateResturant,
//   searchplace,
//   deleteResturant,
// } from "@/api/getData";
export default {
  data() {
    return {
     yearoptions: [{key: "选项1",value: "1月",label:"2月"}],
      // baseUrl,
      // baseImgPath,
      // city: {},
      // offset: 0,
      // limit: 20,
      // count: 0,
      // tableData: [],
      // currentPage: 1,
      // selectTable: {},
      // dialogFormVisible: false,
      // categoryOptions: [],
      // selectedCategory: [],
      // address: {},
      info:{
        domid: {},
      },
    };
  },
  created() {
    // this.initData();
    // console.log(11111);
  },
  components: {
    headTop,
    //head,
  },
  methods: {
//     async initData() {
//       try {
//         this.city = await cityGuess();
//         const countData = await getResturantsCount();
//         if (countData.status == 1) {
//           this.count = countData.count;
//         } else {
//           throw new Error("获取数据失败");
//         }
//         this.getResturants();
//       } catch (err) {
//         console.log("获取数据失败", err);
//       }
//     },
//     async getCategory() {
//       try {
//         const categories = await foodCategory();
//         categories.forEach((item) => {
//           if (item.sub_categories.length) {
//             const addnew = {
//               value: item.name,
//               label: item.name,
//               children: [],
//             };
//             item.sub_categories.forEach((subitem, index) => {
//               if (index == 0) {
//                 return;
//               }
//               addnew.children.push({
//                 value: subitem.name,
//                 label: subitem.name,
//               });
//             });
//             this.categoryOptions.push(addnew);
//           }
//         });
//       } catch (err) {
//         console.log("获取商铺种类失败", err);
//       }
//     },
//     async getResturants() {
//       const { latitude, longitude } = this.city;
//       const restaurants = await getResturants({
//         latitude,
//         longitude,
//         offset: this.offset,
//         limit: this.limit,
//       });
//       this.tableData = [];
//       restaurants.forEach((item) => {
//         const tableData = {};
//         tableData.name = item.name;
//         tableData.address = item.address;
//         tableData.description = item.description;
//         tableData.id = item.id;
//         tableData.phone = item.phone;
//         tableData.rating = item.rating;
//         tableData.recent_order_num = item.recent_order_num;
//         tableData.category = item.category;
//         tableData.image_path = item.image_path;
//         this.tableData.push(tableData);
//       });
//     },
//     handleSizeChange(val) {
//       console.log(`每页 ${val} 条`);
//     },
//     handleCurrentChange(val) {
//       this.currentPage = val;
//       this.offset = (val - 1) * this.limit;
//       this.getResturants();
//     },
//     handleEdit(index, row) {
//       this.selectTable = row;
//       this.address.address = row.address;
//       this.dialogFormVisible = true;
//       this.selectedCategory = row.category.split("/");
//       if (!this.categoryOptions.length) {
//         this.getCategory();
//       }
//     },
//     addFood(index, row) {
//       this.$router.push({ path: "addGoods", query: { restaurant_id: row.id } });
//     },
//     async handleDelete(index, row) {
//       try {
//         const res = await deleteResturant(row.id);
//         if (res.status == 1) {
//           this.$message({
//             type: "success",
//             message: "删除店铺成功",
//           });
//           this.tableData.splice(index, 1);
//         } else {
//           throw new Error(res.message);
//         }
//       } catch (err) {
//         this.$message({
//           type: "error",
//           message: err.message,
//         });
//         console.log("删除店铺失败");
//       }
//     },
//     async querySearchAsync(queryString, cb) {
//       if (queryString) {
//         try {
//           const cityList = await searchplace(this.city.id, queryString);
//           if (cityList instanceof Array) {
//             cityList.map((item) => {
//               item.value = item.address;
//               return item;
//             });
//             cb(cityList);
//           }
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     },
//     addressSelect(vale) {
//       const { address, latitude, longitude } = vale;
//       this.address = { address, latitude, longitude };
//     },
//     handleServiceAvatarScucess(res, file) {
//       if (res.status == 1) {
//         this.selectTable.image_path = res.image_path;
//       } else {
//         this.$message.error("上传图片失败！");
//       }
//     },
//     beforeAvatarUpload(file) {
//       const isRightType =
//         file.type === "image/jpeg" || file.type === "image/png";
//       const isLt2M = file.size / 1024 / 1024 < 2;

//       if (!isRightType) {
//         this.$message.error("上传头像图片只能是 JPG 格式!");
//       }
//       if (!isLt2M) {
//         this.$message.error("上传头像图片大小不能超过 2MB!");
//       }
//       return isRightType && isLt2M;
//     },
//     async updateShop() {
//       this.dialogFormVisible = false;
//       try {
//         Object.assign(this.selectTable, this.address);
//         this.selectTable.category = this.selectedCategory.join("/");
//         const res = await updateResturant(this.selectTable);
//         if (res.status == 1) {
//           this.$message({
//             type: "success",
//             message: "更新店铺信息成功",
//           });
//           this.getResturants();
//         } else {
//           this.$message({
//             type: "error",
//             message: res.message,
//           });
//         }
//       } catch (err) {
//         console.log("更新餐馆信息失败", err);
//       }
//     },
   },
};
</script>

<style lang="less">
@import "../style/mixin";
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container {
  padding: 20px;
}
.Pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.attributes {
  border: 1px solid #ec042e;
  padding: 10px 10px 0;
  z-index: 3;
}
.backContainer {
  .ctp(900px,650px);
  .wh(1140px,700px);
  border-radius: 5px;
  background-color: rgb(217, 233, 241);
  .title {
    .ctp(1050px,630px);
    //position: relativ;
    font-size: 30px;
    color: rgb(78, 148, 228);
    z-index: 9;
  }
}
.subContainer {
  .ctp(1100px,660px);
  .wh(1100px,650px);
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
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

.selectContainer {
  .wh(500px,35px);
  .ctp(500px,450px);
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  z-index: 17;
  display: flex;
}

.dormNoContain {
  .wh(600px,200px);
  .ctp(500px,230px);
 background-color: rgb(255, 255, 255);
 z-index: 18;
  .dormNo{
    .ctp(600px,190px);
  }
  .dormLine{
     .ctp(140px,200px);
      .wh(200px,200px);
  }
  .queryBtn{
      .ctp(-140px,200px);
  }

}

.tableContain{
  .wh(1000px,300px);
  .ctp(1000px,100px);
  background-color: rgb(255, 255, 255);
  z-index: 99;


}
</style>
