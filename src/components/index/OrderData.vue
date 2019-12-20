<template>
  <div>
    <!--订单-->
    <div class="orderData">
                  <div class="Order_No">Order_No</div>
                  <div>Pice</div>
                  <div>Status</div>
              </div>
    <div class="order_Data" v-for="(item,index) in arr" :key="index">
      <div class="num">{{item.num}}</div>
      <div class="price">￥{{item.price}}</div>
      <div class="" v-if="item.status === 0"><el-tag type="danger">pending</el-tag></div>
      <div class="" v-else-if="item.status === 1"><el-tag type="success">success</el-tag></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    getData() {
      this.$axios
        .req("/orderData ")
        .then(res => {
          this.arr = res.data;
          //console.log(this.arr);
        })
        .catch(err => {
          console.log("订单没有获取到");
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.orderData{
       display: flex;
       justify-content: space-around;
       margin: 0px -6px 0px 12px;
       .Order_No{
         width: 240px;
       }
       color: rgb(138, 138, 138);
    }
.order_Data{
    display: flex;
    justify-content: space-around;
    margin:24px 0px 15px -26px;
    color: rgb(138, 138, 138);
    .num{
        width: 280px;
    }
    .price{
        width: 80px;
    }
}
</style>