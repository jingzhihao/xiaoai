<template>
  <div class="fout">
    <div class="input">
      <el-input placeholder="请输入商品名称" v-model="input" clearable></el-input>
    </div>
    <div class="el-table">
      <el-table :data="arr" style="width: 100%">
        <el-table-column prop="date" label="名称" width="280"></el-table-column>
        <el-table-column prop="name" label="商品编号" width="280"></el-table-column>
        <el-table-column prop="name" label="原价" width="180"></el-table-column>
        <el-table-column prop="name" label="现加" width="180"></el-table-column>
        <el-table-column label="操作">
          <el-button icon="el-icon-edit" type="primary">修改</el-button>
          <el-button icon="el-icon-delete" type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
    <div>
      <el-button type="primary">导出xls</el-button>
      <el-button type="danger">导出csv</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      arr: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {},
  methods: {
    getData() {
      this.$axios
        .req("/article/allArticle")
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
        })
        .catch(err => {
          console.log("没有获取所有文章");
        });
    }
  },
  mounted() {},
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
  }
  .el-table {
    width: 99%;
    margin: 5px auto;
  }
}
</style>