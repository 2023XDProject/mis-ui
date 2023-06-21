<template>
<div>        
	<head-top>
		</head-top>
  <section class="backContainer">
    <section class="subContainer">
      <div>
        <br />
        <p class="title">充值水费缴费</p>
        <section class="domeContainer">
          <p class="subP1">宿舍号：</p>
          <el-input v-model="input2" class="domeLine" placeholder="宿舍号" />
        </section>
        <section class="moneyContainer">
          <p class="subP2">缴纳金额：</p>
          <el-input v-model="input2" class="moneyLine" placeholder="金额" />
        </section>
        <section class="payContainer">
          <p class="subP3">支付方式：</p>
          <el-select v-model="value" class="payLine" placeholder="支付方式">
            <el-option key="选项1" label="微信" value="选项1" />
            <el-option key="选项2" label="支付宝" value="选项2" />
            <!-- <el-option
              v-for="item in yearoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            /> -->
          </el-select>
        </section>
        <el-button type="primary" class="selectButton">选择</el-button>
      </div>
    </section>
  </section>
  </div>
</template>

<script>
import headTop from "@/components/headTop";
import { cityGuess, addShop, searchplace, foodCategory } from "@/api/getData";
import { baseUrl, baseImgPath } from "@/config/env";
export default {
  data() {
    return {
      // yearoptions: {
      //   value: "",
      //   label: "",
      // },
      // city: {},
      // formData: {
      //   name: "", //店铺名称
      //   address: "", //地址
      //   latitude: "",
      //   longitude: "",
      //   description: "", //介绍
      //   phone: "",
      //   promotion_info: "",
      //   float_delivery_fee: 5, //运费
      //   float_minimum_order_amount: 20, //起价
      //   is_premium: true,
      //   delivery_mode: true,
      //   new: true,
      //   bao: true,
      //   zhun: true,
      //   piao: true,
      //   startTime: "",
      //   endTime: "",
      //   image_path: "",
      //   business_license_image: "",
      //   catering_service_license_image: "",
      // },
      // rules: {
      //   name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
      //   address: [
      //     { required: true, message: "请输入详细地址", trigger: "blur" },
      //   ],
      //   phone: [
      //     { required: true, message: "请输入联系电话" },
      //     { type: "number", message: "电话号码必须是数字" },
      //   ],
      // },
      // options: [
      //   {
      //     value: "满减优惠",
      //     label: "满减优惠",
      //   },
      //   {
      //     value: "优惠大酬宾",
      //     label: "优惠大酬宾",
      //   },
      //   {
      //     value: "新用户立减",
      //     label: "新用户立减",
      //   },
      //   {
      //     value: "进店领券",
      //     label: "进店领券",
      //   },
      // ],
      // activityValue: "满减优惠",
      // activities: [
      //   {
      //     icon_name: "减",
      //     name: "满减优惠",
      //     description: "满30减5，满60减8",
      //   },
      // ],
      // baseUrl,
      // baseImgPath,
      // categoryOptions: [],
      // selectedCategory: ["快餐便当", "简餐"],
    };
  },
  components: {
  	headTop,
  },
  mounted() {
   // this.initData();
  },
  methods: {
    // async initData() {
    //   try {
    //     this.city = await cityGuess();
    //     const categories = await foodCategory();
    //     categories.forEach((item) => {
    //       if (item.sub_categories.length) {
    //         const addnew = {
    //           value: item.name,
    //           label: item.name,
    //           children: [],
    //         };
    //         item.sub_categories.forEach((subitem, index) => {
    //           if (index == 0) {
    //             return;
    //           }
    //           addnew.children.push({
    //             value: subitem.name,
    //             label: subitem.name,
    //           });
    //         });
    //         this.categoryOptions.push(addnew);
    //       }
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // async querySearchAsync(queryString, cb) {
    //   if (queryString) {
    //     try {
    //       const cityList = await searchplace(this.city.id, queryString);
    //       if (cityList instanceof Array) {
    //         cityList.map((item) => {
    //           item.value = item.address;
    //           return item;
    //         });
    //         cb(cityList);
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // },
    // addressSelect(address) {
    //   this.formData.latitude = address.latitude;
    //   this.formData.longitude = address.longitude;
    //   console.log(this.formData.latitude, this.formData.longitude);
    // },
    // handleShopAvatarScucess(res, file) {
    //   if (res.status == 1) {
    //     this.formData.image_path = res.image_path;
    //   } else {
    //     this.$message.error("上传图片失败！");
    //   }
    // },
    // handleBusinessAvatarScucess(res, file) {
    //   if (res.status == 1) {
    //     this.formData.business_license_image = res.image_path;
    //   } else {
    //     this.$message.error("上传图片失败！");
    //   }
    // },
    // handleServiceAvatarScucess(res, file) {
    //   if (res.status == 1) {
    //     this.formData.catering_service_license_image = res.image_path;
    //   } else {
    //     this.$message.error("上传图片失败！");
    //   }
    // },
    // beforeAvatarUpload(file) {
    //   const isRightType =
    //     file.type === "image/jpeg" || file.type === "image/png";
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isRightType) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isRightType && isLt2M;
    // },
    // tableRowClassName(row, index) {
    //   if (index === 1) {
    //     return "info-row";
    //   } else if (index === 3) {
    //     return "positive-row";
    //   }
    //   return "";
    // },
    // selectActivity() {
    //   this.$prompt("请输入活动详情", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //   })
    //     .then(({ value }) => {
    //       if (value == null) {
    //         this.$message({
    //           type: "info",
    //           message: "请输入活动详情",
    //         });
    //         return;
    //       }
    //       let newObj = {};
    //       switch (this.activityValue) {
    //         case "满减优惠":
    //           newObj = {
    //             icon_name: "减",
    //             name: "满减优惠",
    //             description: value,
    //           };
    //           break;
    //         case "优惠大酬宾":
    //           newObj = {
    //             icon_name: "特",
    //             name: "优惠大酬宾",
    //             description: value,
    //           };
    //           break;
    //         case "新用户立减":
    //           newObj = {
    //             icon_name: "新",
    //             name: "新用户立减",
    //             description: value,
    //           };
    //           break;
    //         case "进店领券":
    //           newObj = {
    //             icon_name: "领",
    //             name: "进店领券",
    //             description: value,
    //           };
    //           break;
    //       }
    //       this.activities.push(newObj);
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "取消输入",
    //       });
    //     });
    // },
    // handleDelete(index) {
    //   this.activities.splice(index, 1);
    // },
    // submitForm(formName) {
    //   this.$refs[formName].validate(async (valid) => {
    //     if (valid) {
    //       Object.assign(
    //         this.formData,
    //         { activities: this.activities },
    //         {
    //           category: this.selectedCategory.join("/"),
    //         }
    //       );
    //       try {
    //         let result = await addShop(this.formData);
    //         if (result.status == 1) {
    //           this.$message({
    //             type: "success",
    //             message: "添加成功",
    //           });
    //           this.formData = {
    //             name: "", //店铺名称
    //             address: "", //地址
    //             latitude: "",
    //             longitude: "",
    //             description: "", //介绍
    //             phone: "",
    //             promotion_info: "",
    //             float_delivery_fee: 5, //运费
    //             float_minimum_order_amount: 20, //起价
    //             is_premium: true,
    //             delivery_mode: true,
    //             new: true,
    //             bao: true,
    //             zhun: true,
    //             piao: true,
    //             startTime: "",
    //             endTime: "",
    //             image_path: "",
    //             business_license_image: "",
    //             catering_service_license_image: "",
    //           };
    //           this.selectedCategory = ["快餐便当", "简餐"];
    //           this.activities = [
    //             {
    //               icon_name: "减",
    //               name: "满减优惠",
    //               description: "满30减5，满60减8",
    //             },
    //           ];
    //         } else {
    //           this.$message({
    //             type: "error",
    //             message: result.message,
    //           });
    //         }
    //         console.log(result);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     } else {
    //       this.$notify.error({
    //         title: "错误",
    //         message: "请检查输入是否正确",
    //         offset: 100,
    //       });
    //       return false;
    //     }
    //   });
    // },
  },
};
</script>

<style lang="less">
@import "../style/mixin";
.button_submit {
  text-align: center;
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
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}

backContainer {
  .ctp(900px,650px);
  .wh(1140px,700px);
  border-radius: 5px;
  background-color: rgb(217, 233, 241);
}
.title {
  .ctp(1080px,630px);
  //position: relativ;
  font-size: 35px;
  color: rgb(78, 148, 228);
  z-index: 9;
}
.subContainer {
  .ctp(1100px,650px);
  .wh(1100px,650px);
  border-radius: 5px;
  background-color: rgb(253, 255, 255);
}

.domeContainer {
  .ctp(450px,400px);
  .wh(500px,300px);
  background-color: rgb(255, 255, 255);
  .domeLine {
    .ctp(150px,200px);
    .wh(250px,20px);
  }
  .subP1 {
    .ctp(500px,190px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
}

.moneyContainer {
  .ctp(450px,200px);
  .wh(500px,200px);
  background-color: rgb(255, 255, 255);
  .moneyLine {
    .ctp(150px,100px);
    .wh(250px,20px);
  }
  .subP2 {
    .ctp(500px,85px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
}

.payContainer {
  .ctp(450px,0px);
  .wh(500px,200px);
  background-color: rgb(255, 255, 255);
  .subP3 {
    .ctp(500px,20px);
    font-size: 20px;
    color: rgb(10, 41, 76);
    z-index: 9;
  }
  .payLine {
    .ctp(150px,30px);
    .wh(250px,20px);
  }
}

.selectButton {
  .ctp(170px,-350px);
  //.wh(500px,200px);
}
</style>
