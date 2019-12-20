<template>
 <div>
        <div class="index_p">
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/people.svg" />
            </div>
            <div class="visit_P">
              <span>New Visit</span>
              <div>{{arr.visits}}</div>
            </div>
          </div>
        </el-card>
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/news.svg" />
            </div>
            <div class="visit_P">
              <span>Messages</span>
              <div>{{arr.messages}}</div>
            </div>
          </div>
        </el-card>
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/money.svg" />
            </div>
            <div class="visit_P">
              <span>Purchases</span>
              <div>{{arr.purchases}}</div>
            </div>
          </div>
        </el-card>
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/car.svg" />
            </div>
            <div class="visit_P">
              <span>Shopping</span>
              <div>{{arr.shopping}}</div>
            </div>
          </div>
        </el-card>
      </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        arr: {},
     }
   },
   components: {

   },
   methods: {
//卡片图
    getData() {
      this.$axios
        .req("/homeData")
        .then(res => {
          this.arr = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
   },
   mounted() {
this.getData();
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.index_p {
  height: 144px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 6px;
  .visit {
    width: 280px;
    height: 80px;
    img {
      width: 50px;
      height: 40px;
    }
    .visit_t {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0px -42px 0px -44px;
    }
    span{
      color: #a39dc0;
    }
  }
}
</style>