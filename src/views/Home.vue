<template>
  <div class="home">
    <div class="index">
      <div class="index_p">
          <el-card class="visit"></el-card>
          <el-card class="visit"></el-card>
          <el-card class="visit"></el-card>
          <el-card class="visit"></el-card> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
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
