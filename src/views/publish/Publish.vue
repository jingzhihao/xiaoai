<template>
  <div>
    <div class="fot">
      <div class="fout">
        <el-button size="small" type="danger" @click="check()">查看</el-button>
        <el-button size="mini" type="primary" @click="submitForm('ruleForm')">发布</el-button>
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
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
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
          <el-form-item label="发布时间" prop="date">
            <el-date-picker
              v-model="ruleForm.date"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
        </div>
        <div class="mavonEditor">
          <mavon-editor class="mavons" v-model="ruleForm.text" placeholder="请开始你的表演..." />
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
        date: ""
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
          { min: 0, max: 5, message: "长度在 0 到 5 个字符", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请选择类目", trigger: "change" }
        ],
        source: [{ required: true, message: "请选择来源", trigger: "change" }],
        star: [{ required: true, message: "请选择重要性", trigger: "change" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      },
      pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }

    };
  },
  components: {},
  methods: {

    check(val) {
      this.$router.push({ name: "published"});
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //console.log(this.ruleForm);
          this.$axios
            .req("/article/create", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text,
              date: this.ruleForm.date
            })
            .then(res => {
              console.log("res=>", res);
              if (res.code === 200) {
                console.log("scusse");
                alert("创建成功");
              } else {
                console.log("失败");
              }
            });
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