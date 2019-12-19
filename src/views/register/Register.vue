<template>
  <div>
    <el-card class="box-card">
      <el-card class="sign">欢迎来到小爱社区</el-card>
      <el-form :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="用户名" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="请输入验证码" prop="checkPass">
          <el-input type="captcha" v-model="ruleForm.captcha" autocomplete="oft"></el-input>
        </el-form-item>
          <div class="img">
            <img src="api/captcha" @click="getData()"  ref="captcha">
          </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    
    return {
      
      ruleForm: {
        pass: "",
       
        
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        
        
      }
    };
  },
  components: {},
  methods: {
    //切换验证码
    getData(){
        this.$refs.captcha.src = "api/captcha?time=" + Date.now();
    },
    //判断登录是否成功
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "成功登陆",
            type: "success"
          });
          // this.$router.push({name:"home"})
          localStorage.setItem('name',this.ruleForm.age)
          this.$router.push('/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
.sign {
  width: 460px;
  height: 100px;
  text-align: center;
  line-height: 50px;
}
.yonghu {
  width: 460px;
  height: 50px;
  margin-top: 10px;
}
.denglu {
  margin: 30px 0 0 170px;
}
.img{
  margin: 0 100px;
}
</style>