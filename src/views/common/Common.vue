<template>
  <div>
    <!-- 头部 -->
    <div class="top">
      <div class="top_o">
        <span>欢迎:{{this.name}},来到小爱后台管理系统</span>
      </div>
      <div class="top_t">
        <span>{{this.Ntime}}，亲爱的{{this.name}}用户。</span>
        <span>登录时间：{{time}}</span>
      </div>
    </div>

    <div style="display:flex">
      <!-- 侧边栏 -->
      <div class="navigation">
        <div class="navigation_t">
          <span @click="home()">
            <i class="el-icon-map-location"></i>&nbsp;首页
          </span>
        </div>
        <div class="navigation_t">
          <span @click="published()">
            <i class="el-icon-s-grid"></i>&nbsp;已发布
          </span>
        </div>
        <div class="navigation_t">
          <span @click="statistics()">
            <i class="el-icon-menu"></i>&nbsp;统计
          </span>
        </div>
        <div class="navigation_t">
          <span @click="publish()">
            <i class="el-icon-edit"></i>&nbsp;发表文章
          </span>
        </div>
        <div class="navigation_t">
          <span @click="label()">
            <i class="el-icon-date"></i>&nbsp;标签页
          </span>
        </div>
        <div class="navigation_t">
          <span @click="educe()">
            <i class="el-icon-folder-remove"></i>&nbsp;导出excel
          </span>
        </div>
        <div class="navigation_t">
          <span @click="uploadon()">
            <i class="el-icon-folder-add"></i>&nbsp;图片上传
          </span>
        </div>
        <div class="navigation_t">
          <span @click="drop()">
            <i class="el-icon-switch-button"></i>&nbsp;退出系统
          </span>
        </div>
      </div>

      <!-- 展示页面默认展示首页 -->
      <div class="show">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      name: 123,
      Ntime:''
    };
  },
  components: {},
  methods: {
    //首页
    home() {
      this.$router.push("/home");
    },
    //已发布
    published() {
      this.$router.push("/published");
    },
    // 统计
    statistics() {
      this.$router.push("/statistics");
    },
    // 发表文章
    publish() {
      this.$router.push("/publish");
    },
    //标签页
    label() {
      this.$router.push("/label");
    },
    //导出excel
    educe() {
      this.$router.push("/educe");
    },

    //图片上传
    uploadon() {
      this.$router.push("/uploadon");
    },
    //退出系统
    drop() {
      this.$router.push("/drop");
    },
    //获取时间
    times() {

      let hour = this.$dayjs().hour();
      this.time = this.$dayjs().format('YYYY年MM月DD日 HH时mm分ss秒')
      if(hour>6 && hour <=12){
        return this.Ntime = '早上好'
      }else if(hour>12 && hour <=14){
        return this.Ntime = '中午好'
      }else if(hour>14 && hour <=18){
        return this.Ntime = '下午好'
      }else if(hour>18 && hour <=24){
        return this.Ntime = '晚上好'
      }else{
        return this.Ntime = '太晚了该睡觉了'
      }
       
    }
  },
  mounted() {

    this.times()
    //宝登录人的信息赋值到页面
    // if (localStorage.name) {
    //   this.name = localStorage.getItem("name");
    // }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
//头部
.top {
  width: 100%;
  height: 40px;
  color: rgb(252, 252, 252);
  background: rgb(48, 77, 121);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 宋体;
  font-size: 13px;
  .top_o {
    width: 300px;
    padding: 5px;
    margin: 0 20px;
  }
  .top_t {
    width: 500px;
    padding: 5px;
  }
}

//导航栏
.navigation {
  width: 12%;
  height: 600px;
  background: rgb(65, 65, 71);
  color: rgb(248, 248, 248);
  font-size: 14px;
  font-family: 楷体;
  .navigation_t {
    padding: 10px 0 0 0;
    margin: 0 34px 8px 40px;
  }
  .navigation_t:hover {
    cursor: pointer;
  }
}
.show {
  width: 88%;
}
</style>