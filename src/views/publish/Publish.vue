<template>
  <div>
    <div class="fot">
      <div class="fout">
        <el-button size="small" type="danger">查看</el-button>
        <el-button size="mini" type="primary">发布</el-button>
      </div>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>

        <div class="writer">
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选类目">
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="React" value="React"></el-option>
              <el-option label="Node.js" value="Node.js"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="JavaScript" value="JavaScript"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具包" value="工具包"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择来源">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择活动区域">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </div>
        <div class="mavonEditor">
          <mavon-editor class="mavons" v-model="value" placeholder="请开始你的表演..." />  
        </div>
        <div class="issue">
          <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        dateresource: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "请输入文章摘要", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入作者", trigger: "blur" },
          { min: 0, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.fot {
  width: 97%;
  height: 50px;
  background: rgba(37, 128, 45, 0.911);
  margin: 20px 22px;
  .fout {
    width: 140px;
    height: 32px;
    float: right;
    margin: 9px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.content {
  width: 97%;
  //height: 500px;
  //border: 1px solid red;
  margin: 10px auto;
  .writer {
    display: flex;
  }
  .issue {
    width: 76px;
    //border: 1px solid red;
    margin: 25px auto;
  }
  
}
</style>