<template>
  <div class="fout">
    <div class="input_t">
      <el-input placeholder="请输入商品名称" v-model="input" clearable></el-input>
    </div>
    <div class="el-table">
      <el-table :data="arr.slice((currentPage-1)*pageSum,pageSum*currentPage)"  style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="500" align="center"></el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="380" align="center"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" width="150" align="center"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" width="150" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-delete" @click="dialogFormVisible = true">修改</el-button>
            <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
              <el-form>
                <el-form-item label="原价" prop="ORI_PRICE">
                  <el-input v-model="scope.row.ORI_PRICE" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="现价" prop="PRESENT_PRICE">
                  <el-input v-model="scope.row.PRESENT_PRICE" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
              </el-dialog>
            <!-- <el-button icon="el-icon-edit" size="mini" type="primary" @click="modification()">修改</el-button> -->
            <el-button
              icon="el-icon-delete"
              size="mini"
              type="danger"
              @click="dele(scope.$index)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <br />
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
    <br />
    <div>
      <download-excel
        class="export-excel-wrapper"
        :data="arr"
        :fields="json_fields"
        name="filename.xls"
      >
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="primary" size="small">导出EXCEL</el-button>
      </download-excel>
      <!-- <el-button size="mini" type="danger">导出csv</el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      list: [],
      arr: [],
      pageSum: 10,
      currentPage: 1,

      json_fields: {
        商品名称: "NAME", //常规字段
        商品编号: "GOODS_SERIAL_NUMBER", //支持嵌套属性
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
       dialogTableVisible: false,
        dialogFormVisible: false,
    };
  },
  components: {},
  methods: {
    //修改
    modification() {
      this.$prompt("原价", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$message({
            type: "success"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    //删除
    dele(val) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.arr.splice(val + (this.currentPage - 1) * this.pagesize, 1);

          this.$message({ type: "success", message: "删除成功!" });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    getData() {
      this.$axios
        .req("/tableData")
        .then(res => {
          this.arr = res.data;
          this.list = res.data;
         // console.log(this.arr);
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
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    input(val) {
      //每次搜索的时候要将展示页重新归为一
      this.currentPage = 1;
      this.arr = this.list.filter(item => {
        return JSON.stringify(item).includes(val);
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.fout {
  width: 99%;
  height: 100%;
  margin: 10px auto;
  .input_t {
    width: 300px;
    height: 40px;
  }
  .el-table {
    font-size: 12px;
  }
}
</style>