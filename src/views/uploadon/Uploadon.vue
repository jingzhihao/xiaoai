<template>
  <div class="el_upload">
    <el-upload class="upload-demo" drag action="/api/upload" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  components: {},
  methods: {

  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el_upload {
  width: 70%;
  margin: 100px 200px;
}
</style>