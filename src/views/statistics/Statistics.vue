<template>
  <div class="fot">
    <div class="fot_t">
      <div class="fnt" style="background:rgb(82, 121, 71);">
        <div class="funt">
          <div>今日发布</div>
          <div>{{Ncount}}</div>
        </div>
        <div class="img">
          <i class="el-icon-check"></i>
        </div>
      </div>
      <div class="fnt" style="background:rgb(230, 101, 112);">
        <div class="funt">
          <div>原创文章</div>
          <div>{{original}}</div>
        </div>
        <div class="img">
          <i class="el-icon-tickets"></i>
        </div>
      </div>
      <div class="fnt" style="background:rgb(159, 77, 167)">
        <div class="funt">
          <div>新留言</div>
          <div>{{Ncount}}</div>
        </div>
        <div class="img">
          <i class="el-icon-bell"></i>
        </div>
      </div>
      <div class="fnt" style="background:rgb(55, 165, 147);">
        <div class="funt">
          <div>新消息</div>
          <div>{{Noriginal}}</div>
        </div>
        <div class="img">
          <i class="el-icon-phone-outline"></i>
        </div>
      </div>
    </div>
    <!-- -->
    <div class="agram">
      <div class="diagram">
        <div class="chartDatc">
          <ve-pie :data="chartData1" :settings="chartSettinging"></ve-pie>
        </div>
        <div class="chartDatc">
          <ve-pie :data="chartData2" :settings="chartSettinging"></ve-pie>
        </div>
      </div>
      <div>
        <ve-waterfall :data="chartData3" :settings="chartSettinging"></ve-waterfall>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      // <!-- 类型 饼状图 数据 -->
      chartData1: {
        columns: ["类目", "数量"],
        rows: []
      },
      // <!-- 来源 环图 数据-->
      chartData2: {
        columns: ["来源", "数量"],
        rows: []
      },
      // <!-- 总量 瀑布图 数据-->
      chartData3: {
        columns: ["日期", "数量"],
        rows: []
      },
      chartSettinging: {
        roseType: "radius"
      },
      
      //统计今日发布
      count: 0,
      //统计原创文章
      original: 0,

      //计数
      Ncount: 0,
      Noriginal: 0
    };
  },
  components: {},
  methods: {
    //请求数据库的数据
    getData() {
      this.$axios
        .req("/article/allArticle")
        .then(res => {
          this.arr = res.data;
          //转换时间的格式
          this.arr.map(item => {
            this.arr = this.$dayjs(item.data).format("YYYY-DD-MM");
          });

          //定义数组来存放图表内容
          let chartData1 = [];
          let chartData2 = [];
          let chartData3 = [];

          //赋值
          //或许 类型 的 饼图数据
          let categoryArr = this._.groupBy(res.data, item => {
            return item.category;
          });
          //计数
          for (let i in categoryArr) {
            chartData1.push({
              类目: i,
              数量: categoryArr[i].length
            });
          }
          //或许 来源型 的 饼图数据
          let sourceArr = this._.groupBy(res.data, item => {
            return item.source;
          });
          for (let i in sourceArr) {
            chartData2.push({
              来源: i,
              数量: sourceArr[i].length
            });
          }
          //获取 瀑布图数据
          let addArr = this._.groupBy(res.data, item => {
            // console.log(item);
            return item.date.substring(0, 11);
          });
          for(let i in addArr){
            chartData3.push({
              日期: i,
              数量: addArr[i].length
            })
          }

          //计算出原创的个数
          chartData2.forEach(item => {
            if(item['来源'] === '原创'){
              this.original = item['数量']
            }
          })

          //求出总量中 当天创建的文章个数
          chartData3.forEach(item => {
            let day = this.$dayjs(item.data).format("YYYY-MM-DD");
            let now = this.$dayjs(new Date().getTime()).format("YYYY-MM-DD");
            if(day === now){
              this.count = item['数量'];
            }
          });
          this.chartData1.rows = chartData1;
          this.chartData2.rows = chartData2;
          this.chartData3.rows = chartData3;
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
  height: 500px;
  color: white;
  //border: 1px solid red;
  margin: 10px auto;
  .fot_t {
    width: 99%;
    height: 50px;
    margin: 5px auto;
    display: flex;
    .fnt {
      width: 25%;
      display: flex;
    }
    .funt {
      width: 200px;
      height: 40px;
      margin: 5px auto;
      font-size: 12px;
      text-align: center;
    }
    .img {
      position: relative;
      left: -20px;
      top: 14px;
    }
  }
}
.agram {
  width: 99%;
  //height: 800px;
  margin: 0 auto;
}
.diagram {
  width: 88%;
  height: 400px;
  display: flex;
  margin: 8px auto;
  //border: 1px solid red;
  .chartDatc {
    width: 50%;
  }
}
</style>