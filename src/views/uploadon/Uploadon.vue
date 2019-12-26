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
     <div class="title">vue-image-crop-upload上传</div>
    <div>
      <div>
        <el-button class="btn" @click="toggleShow">点击上传</el-button>
      </div>
      <my-upload
        field="file"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        url="/api/upload"
        img-format="png"
      ></my-upload>
      <img v-if="imgDataUrl" :src="imgDataUrl" />
    </div>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  data() {
    return {
      fileList: [],
      imgDataUrl: "",
      show: false,
    };
  },
  components: {"my-upload": myUpload},
  methods: {
toggleShow() {
      this.show = !this.show;
    },
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