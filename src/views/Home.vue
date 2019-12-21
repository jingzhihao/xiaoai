<template>
  <div class="home">
    <div class="index">
      <div class="index_p">
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/people.svg" />
            </div>
            <div class="visit_P">
              <span>New Visit</span>
              <div>
                <countTo :startVal="0" :endVal="arr.visits" :duration="3000"></countTo>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/news.svg" />
            </div>
            <div class="visit_P">
              <span>Messages</span>
              <div>
                <countTo :startVal="0" :endVal="arr.messages" :duration="3000"></countTo>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/money.svg" />
            </div>
            <div class="visit_P">
              <span>Purchases</span>
              <div>
                <countTo :startVal="0" :endVal="arr.purchases" :duration="3000"></countTo>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="visit">
          <div class="visit_t">
            <div>
              <img src="../assets/img/car.svg" />
            </div>
            <div class="visit_P">
              <span>Shopping</span>
              <div>
                <countTo :startVal="0" :endVal="arr.shopping" :duration="3000"></countTo>
              </div>
            </div>
          </div>
        </el-card>
      </div>
      <!-- 抽线图 -->
      <div class="line">
        <el-card class="line_t">
          <ve-line :data="charData" :settings="charSettings"></ve-line>
        </el-card>
      </div>

      <!--雷达图 饼图 柱状图-->
      <div class="pie">
        <div>
          <el-card class="card">
            <ve-radar :data="radData" :settings="radSetting"></ve-radar>
          </el-card>
        </div>
        <div>
          <el-card class="card">
            <ve-pie :data="chartDatc" :settings="chartSettinging"></ve-pie>
          </el-card>
        </div>
        <div>
          <el-card class="card">
            <ve-histogram :data="charData" :settings="charSettings"></ve-histogram>
          </el-card>
        </div>
      </div>

      <!--订单 进度条 -->
      <div class="indent">
        <div>
          <el-card class="indent_card">
            <order-Data></order-Data>
          </el-card>
        </div>
        <div>
          <el-card class="indent_rd">
            <index></index>
          </el-card>
        </div>
        <div>
          <el-card class="indent_cd">
            <div>
              <img src="../assets/img/s1.png" />
            </div>
            <Progress></Progress>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import Index from "../components/index/Index.vue";
import Progress from "../components/index/Progress.vue";
import OrderData from "../components/index/OrderData.vue";
export default {
  data() {
    return {
      arr: {},
      //抽线图
      charData: {
        couolums: ["date", "expected", "actual"],
        rows: []
      },
      charSettings: {
        metrics: ["expected", "actual"],
        dimension: ["date"]
      },
      //雷达图
      radData: {
        couolums: ["name", "sales", "ministration"],
        rows: []
      },
      radSetting: {
        metrics: [
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        dimension: ["name"]
      },
      chartDatc: {
        columns: ["name", "data"],
        rows: []
      },
      chartSettinging: {
        roseType: "radius"
      }
    };
  },
  components: {
    countTo,
    Index,
    Progress,
    OrderData
  },
  methods: {
    //请求主页数据
    //卡片图
    getData() {
      this.$axios
        .req("/homeData")
        .then(res => {
          this.arr = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //抽线图
    getLine() {
      this.$axios
        .req("/homeChat")
        .then(res => {
          this.charData.rows = res.data;
          //console.log(this.charData.rows);
        })
        .catch(err => {
          console.log("抽线图获取失败");
        });
    },
    //雷达图
    getRad() {
      this.$axios
        .req("/radarChat")
        .then(res => {
          this.radData.rows = res.data;
          //console.log(this.radData.rows);
        })
        .catch(err => {
          console.log("雷达图获取失败");
        });
    },
    //饼图
    getPie() {
      this.$axios
        .req("/ringChat")
        .then(res => {
          this.chartDatc.rows = res.data;
        })
        .catch(err => {
          console.log("饼图获取失败");
        });
    }
  },
  mounted() {
    this.getData();
    this.getLine();
    this.getRad();
    this.getPie();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
//第一个表格
.index {
  background: rgb(180, 177, 177);
}
.index_p {
  height: 144px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 6px;
  .visit {
    width: 280px;
    height: 80px;
    img {
      width: 50px;
      height: 40px;
    }
    .visit_t {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0px -42px 0px -44px;
    }
    span {
      color: #a39dc0;
    }
  }
}
//第二个表格
.line {
  width: 98%;
  margin: 0 13px;
  .line_t {
    height: 400px;
  }
}
//饼图
.pie {
  height: 410px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .card {
    width: 380px;
    height: 366px;
  }
}

//订单
.indent {
  height: 480px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .indent_card {
    width: 580px;
    height: 450px;
  }
  .indent_rd {
    width: 320px;
    height: 450px;
  }
  .indent_cd {
    width: 260px;
    height: 450px;
    img {
      width: 249px;
      height: 190px;
      margin: 0 0 0 -14px;
    }
  }
}
</style>
