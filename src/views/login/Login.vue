<template>
  <div>
    <el-card class="box-card">
      <el-card class="sign">欢迎来到小爱社区</el-card>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="checkPass">
          <el-input type="captcha" v-model="ruleForm.checkPass" autocomplete="oft"></el-input>
        </el-form-item>
        <div class="img" @click="getData()">
          <img src="api/captcha" ref="captcha" />点击切换
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="register">注册</el-button>
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
        callback();
      }
    };
    var verification = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        age: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: verification, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    //切换验证码
    getData() {
      this.$refs.captcha.src = "api/captcha?time=" + Date.now();
    },
    //判断登录是否成功
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate(valid => {
        if (valid) {
          
           this.$axios
            .req("/user/login", {
              username:  this.ruleForm.age,
              password: this.ruleForm.pass,
              code: this.ruleForm.checkPass
            })
            .then(res => {
              console.log(res);
              if (res.message === "登录成功") {
                this.$message({
                  message: "成功登陆",
                  type: "success"
                });
                // 保存登录人的信息
                localStorage.setItem("name", this.ruleForm.age);
                
                this.$router.push("/");
              }else{
                console.log('登录失败')
              }
            });
        }
      });
    },
    //清空输入框
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //跳转注册页面
    register() {
      this.$router.push("/register");
    }
  },
  mounted() {},
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
.img {
  margin: 0 100px;
}
</style>