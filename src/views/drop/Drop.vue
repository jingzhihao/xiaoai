<template>
  <div>
    
      <el-button @click="drop">退出登录</el-button>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  components: {},
  methods: {
    drop() {
      this.$axios
        .req("/user/logout")
        .then(res => {
          if (res.code === 0) {
            alert("退出成功");
            localStorage.name = this.name = "";
            this.$router.push("/login");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>