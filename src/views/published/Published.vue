<template>
  <div class="fout">
    <div class="input">
      <el-input placeholder="请输入商品名称" v-model="input" clearable></el-input>
    </div>
    <div class="el-table">
      <el-table :data="arr.slice((currentPage-1)*pageSum,pageSum*currentPage)" style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="400" align="center"></el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="280" align="center"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" width="150" align="center"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" width="150" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <el-button icon="el-icon-edit" size="mini" type="primary">修改</el-button>
          <el-button icon="el-icon-delete" size="mini" type="danger" @click="dele()">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <br>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.arr.length"
      ></el-pagination>
    </div>
    <br>
    <div>
      <el-button size="mini" type="primary">导出xls</el-button>
      <el-button size="mini" type="danger">导出csv</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      list:[],
      arr: [],
      pageSum: 10,
      currentPage: 1
    };
  },
  components: {},
  methods: {
    //删除
    dele(){

    },
    getData() {
      this.$axios
        .req("/tableData")
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
        })
        .catch(err => {
          console.log("没有获取到表格数据");
        });
    },

    handleSizeChange(val) {
      this.pageSum = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.fout {
  width: 99%;
  height: 100%;
  margin: 10px auto;
  .input {
    width: 300px;
    height: 30px;
  }
  .el-table{
    font-size: 12px;
  }
  
}
</style>