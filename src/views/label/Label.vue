<template>
  <div class="el_tabs">
      <el-tabs  @tab-click="handleClick">
        <el-tab-pane label="未读消息" name="first">未读消息</el-tab-pane>
        <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
        <el-tab-pane label="回收站" name="third">回收站</el-tab-pane>
      </el-tabs>
  </div>
</template>
 </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
  .el_tabs{
    width: 98%;
    margin: 10px  auto;
  }
</style>