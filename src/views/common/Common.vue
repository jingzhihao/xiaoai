<template>
 <div>

      <!-- 头部 -->
      <div class="top">
        <div class="top_o">
          <span>欢迎**来到小爱后台管理系统</span>
        </div>
        <div class="top_t">
          <span>早上好，亲爱的***用户</span>
          <span>登录时间：{{date}}}</span>
        </div>
      </div>


      
      <div style="display:flex">
        <!-- 侧边栏 -->
            <div class="navigation">
            <div class="navigation_t">
              <span ><i class="el-icon-map-location"></i>&nbsp;首页</span>
            </div>
            <div class="navigation_t">
              <span @click="go()"><i class="el-icon-s-grid"></i>&nbsp;已发布</span>
            </div>
            <div class="navigation_t">
              <span><i class="el-icon-menu"></i>&nbsp;统计</span>
            </div>
            <div class="navigation_t">
              <span><i class="el-icon-edit"></i>&nbsp;发表文章</span>
            </div>
            <div class="navigation_t">
              <span><i class="el-icon-date"></i>&nbsp;标签页</span>
            </div>
            <div class="navigation_t">
              <span><i class="el-icon-folder-remove"></i>&nbsp;导出excel</span>
            </div>
            <div class="navigation_t">
              <span><i class="el-icon-folder-add"></i>&nbsp;图片上传</span>
            </div>
            <div class="navigation_t">
              <span><i class="el-icon-switch-button"></i>&nbsp;退出系统</span>
            </div>
          </div>

          <!-- 展示页面默认展示首页 -->
        <div class="show">
          <router-view/>
        </div>
      </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        date: new Date(),
     }
   },
   components: {

   },
   methods: {
        add(){
          
        }
   },
   mounted() {
          let _this = this; //声明一个变量指向vue实例this,保证作用域一致
          this.timer = setInterval(function() {
            _this.date = new Date();//修改数据date
          }, 1000);
        },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

    //头部
  .top{
    width: 100%;
    height: 40px;
    color: rgb(252, 252, 252);
    background: rgb(48, 77, 121);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 宋体;
    font-size: 13px;
    .top_o{
      width: 200px;
      padding: 5px;
      margin: 0 20px;
    }
    .top_t{
      width: 300px;
      padding: 5px;
    }
  }


    //导航栏
  .navigation{
    width: 12%;
    height: 600px;
    background: rgb(65, 65, 71);
    color: rgb(248, 248, 248);
    font-size: 14px;
    font-family: 楷体;
    .navigation_t{
          padding:10px 0 0 0 ;
          margin: 0 34px 8px 40px;
    }
    .navigation_t:hover{
      cursor:pointer;
    }
  }
  .show{
    width: 88%;
  }

</style>