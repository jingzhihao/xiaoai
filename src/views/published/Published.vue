<template>
  <div class="fout">
    <div class="el-table">
      <el-table :data="arr.slice((currentPage-1)*pageSum,pageSum*currentPage)" style="width: 100%">
        <el-table-column prop="number" type="index" label="#" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" width="350" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" width="80" align="center"></el-table-column>
        <el-table-column prop="category" label="类目" width="100" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.category === 'Vue'" type="success">Vue</el-tag>
            <el-tag v-else-if="scope.row.category === 'React'">React</el-tag>
            <el-tag v-else-if="scope.row.category === 'JavaScript'" type="warning">JavaScript</el-tag>
            <el-tag v-else-if="scope.row.category === 'Node.js'" type="danger">Node.js</el-tag>
            <el-tag v-else-if="scope.row.category === '其他'" type="danger">其他</el-tag>
            <el-tag v-else-if="scope.row.category === '小程序'" type="danger">小程序</el-tag>
            <el-tag v-else-if="scope.row.category === '工具包'" type="danger">工具类</el-tag>
            <el-tag v-else-if="scope.row.category === '性能优化'" type="danger">性能优化</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="source" label="来源" width="100" align="center"></el-table-column>
        <el-table-column prop="star" label="重要性" width="150" align="center">
          <template slot-scope="scope">
            <el-rate v-model="scope.row.star"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发表时间" width="150" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="300">
          <template slot-scope="scope">
            <el-button 
            icon="el-icon-edit" 
            size="mini" 
            type="primary" 
            @click="modification(scope.row._id)"
            >修改</el-button>
            <el-button
              icon="el-icon-delete"
              size="mini"
              type="danger"
              @click="dele(scope.row._id)"
            >删除</el-button>
            <el-button
              icon="el-icon-delete"
              size="mini"
              type="success"
              @click="check(scope.row._id)"
            >查看</el-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      pageSum: 10,
      currentPage: 1
    };
  },
  components: {},
  methods: {
    //修改
    modification(val) {
      this.$router.push({ name: "compile", query: { id: val } });
    },
    //删除
    dele(val) {
      console.log(val);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .req("/article/delete", {
              _id: val
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({ type: "success", message: "删除成功!" });
              } else {
                alert("请求失败");
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消删除" });
        });
    },
    //查看
    check(val) {
      this.$router.push({ name: "check", query: { id: val } });
    },
    getData() {
      this.$axios
        .req("/article/allArticle")
        .then(res => {
          this.arr = res.data;
          this.arr.map(item => {
            item.star = Number(item.star);
          });
          this.arr.map(item => {
            item.date = this.$dayjs(item.date).format(
              "YYYY年MM月DD日 HH时mm分ss秒"
            );
          });

          //console.log(this.arr);
        })
        .catch(err => {
          console.log("没有获取到所有文章");
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
  watch: {},
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