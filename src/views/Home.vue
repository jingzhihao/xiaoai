<template>
  <div class="home">
    <div class="index">
      <div class="index_p">
          <el-card class="visit">
            <div>new visit</div>
            <div>{{arr.visits}}</div>
          </el-card>
          <el-card class="visit">
            <div>messages</div>
            <div>{{arr.messages}}</div>
          </el-card>
          <el-card class="visit">
            <div>purchases</div>
            <div>{{arr.purchases}}</div>
          </el-card>
          <el-card class="visit">
            <div>shopping</div>
            <div>{{arr.shopping}}</div>
          </el-card> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr :{},
    };
  },
  components: {},
  methods: {
    //请求主页数据
    getData(){
      this.$axios.req('/homeData').then(res => {
          this.arr = res.data;
          console.log(this.arr);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
     this.getData();
  },
  watch: {},
  computed: {
   
  }
};
</script>

<style scoped lang='scss'>
.index {
  height: 800px;
  background: rgb(180, 177, 177);
  
}
.index_p {
  height: 144px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 6px;
   .visit {
     width: 280px;
     height: 80px;
   }
}
</style>
