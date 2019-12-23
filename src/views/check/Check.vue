<template>
  <div class="fot">
    <div>
      <el-button size="mini" type="primary" @click="back()">返回</el-button>
    </div>
    <div>
      <div class="title">
        <h1>{{arr.title}}</h1>
        <br />
        <br />
        <span class="span">摘要：{{arr.abstract}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      arr: {}
    };
  },
  components: {},
  methods: {
    back() {
      this.$router.push("/published");
    },
    getData() {
      this.$axios
        .req("/article/article", {
          _id: this.$route.query.id
        })
        .then(res => {
          if (res.code === 200) {
            this.arr = res.data;
            console.log(res.data);
          } else {
            alert("请求失败");
          }
        })
        .catch(err => {
          console.log(err);
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
.fot {
  width: 98%;
  margin: 10px auto;
}
.title {
  margin: 0 auto;
  width: 200px;
  text-align: center;
}
</style>