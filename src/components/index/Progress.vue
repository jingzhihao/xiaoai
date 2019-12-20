<template>
 <div>
     <!--进度条-->
     <div v-for="(item,index) in arr" :key="index">
         {{item.name}}
        <el-progress :percentage="item.progress*100"></el-progress>
        </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        arr:[]
     }
   },
   components: {

   },
   methods: {
        //获取进度条数据
        getData(){
            this.$axios.req('/progress').then(res => {
                this.arr = res.data
                //console.log(this.arr);
            }).catch(err => {
                console.log('没有拿到进度条');
            })
        },
        format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
   },
   mounted() {
        this.getData()

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>