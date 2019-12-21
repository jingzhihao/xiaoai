<template>
  <div class="el_tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
        <el-table :data="arr" stripe style="width: 100%" :show-header="false">
          <el-table-column prop="date" width="700"></el-table-column>
          <el-table-column prop="name" width="280"></el-table-column>
          <el-table-column width="120">
            <el-button>标为已读</el-button>
          </el-table-column>
        </el-table>
        <div><el-button type="primary">全部标为已读</el-button></div>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">
        <el-table :data="arr" stripe style="width: 100%" :show-header="false">
          <el-table-column prop="date" width="700"></el-table-column>
          <el-table-column prop="name" width="280"></el-table-column>
          <el-table-column width="120">
            <el-button>删除</el-button>
          </el-table-column>
        </el-table>
        <div><el-button type="danger">删除全部</el-button></div>
      </el-tab-pane>
      <el-tab-pane label="回收站" name="third">
        <el-table :data="arr" stripe style="width: 100%" :show-header="false">
          <el-table-column prop="date" width="700"></el-table-column>
          <el-table-column prop="name" width="280"></el-table-column>
          <el-table-column width="120">
            <el-button>还原</el-button>
          </el-table-column>
        </el-table>
        <div><el-button type="info">清空</el-button></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
 </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      arr: [
        {
          date: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          name: "2018-4-19  20:00:00"
        },
        {
          date: "今晚12点整发大红包，先到先得",
          name: "2018-4-19  21:00:00"
        }
      ],
      newarr: [
        {
          date: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          name: "2018-4-19  20:00:00"
        }
      ],
      list: [
        {
          date: "【系统通知】您的优惠券已经过期",
          name: "2018-4-19  20:00:00"
        }
      ]
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
.el_tabs {
  width: 98%;
  margin: 10px auto;
}
</style>