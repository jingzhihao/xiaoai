<template>
  <div id="de">
    <el-card class="box-card">
      <el-card class="sign">请注册</el-card>
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

        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      let qq = new RegExp(/[\u4E00-\u9FA5]/g)
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (value.match(qq)) {
        return callback(new Error("用户名不能为中文"));
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
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
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    //切换验证码

    //判断注册是否成功
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //发送post请求
          this.$axios
            .req("/user/register", {
              username: this.ruleForm.age,
              password: this.ruleForm.pass
            })
            .then(res => {
              console.log("res=>", res);
              if (res.message === "注册成功") {
                this.$message({
                  message: "恭喜你，这是一条成功消息",
                  type: "success"
                });
                this.$router.push("/login");
                console.log("scusse");
              } else {
                console.log("注册失败");
              }
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //
    postData() {
      let data = {
        username: this.ruleForm.pass,
        password: this.ruleForm.checkPass
      };
      console.log(this.$axios);
      this.$axios
        .post("/user/register", data)
        .then(function(res) {
          if (res.message === "注册成功") {
            //写跳转操作
            this.$message({ type: "scusse", massage: res.message });
            console.log("scusse");
            this.$router.push("/login");
          } else {
            console.log("注册失败");
            this.$message({ type: "scusse", massage: res.message });
          }
        })
        .catch(function(error) {});
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
#de {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  background: url("../../assets/img/zhuche.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.box-card {
  width: 500px;
  height: 380px;
  margin: 100px auto;
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