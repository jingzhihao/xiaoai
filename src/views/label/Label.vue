<template>
  <div class="el_tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="`未读消息(${this.arr.length})`" name="first">
        <el-table :data="arr" stripe style="width: 100%" :show-header="false">
          <el-table-column prop="date" width="700"></el-table-column>
          <el-table-column prop="name" width="280"></el-table-column>
          <el-table-column width="120">
            <template slot-scope="scope">
              <el-button @click="read(scope.$index,scope.row)">标为已读</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="primary" @click="addRead">全部标为已读</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="`已读消息(${this.newarr.length})`" name="second">
        <el-table :data="newarr" stripe style="width: 100%" :show-header="false">
          <el-table-column prop="date" width="700"></el-table-column>
          <el-table-column prop="name" width="280"></el-table-column>
          <el-table-column width="120">
             <template slot-scope="scope">
            <el-button @click="remove(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="danger" @click="addRemove">删除全部</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="`回收站(${this.list.length})`" name="third">
        <el-table :data="list" stripe style="width: 100%" :show-header="false">
          <el-table-column prop="date" width="700"></el-table-column>
          <el-table-column prop="name" width="280"></el-table-column>
          <el-table-column width="120">
            <template slot-scope="scope">
            <el-button @click="restore(scope.$index,scope.row)">还原</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-button type="info" @click="res">清空</el-button>
        </div>
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
      activeName: "first",
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
    read(val , va) {

      this.arr.splice(val,1)
      this.newarr.push(va)
    },
    remove(val , va){
      this.newarr.splice(val,1)
      this.list.push(va)
    },
    restore(val , va){
      this.list.splice(val,1)
      this.newarr.push(va)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },

    //全部标记为已读
    addRead(){
      this.newarr = this.arr.concat(this.newarr)
      this.arr = []
    },

    //删除全部
    addRemove(){
      this.list = this.newarr.concat(this.list)
      this.newarr = ''
    },
    res(){
        this.list = []
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