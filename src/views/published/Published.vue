<template>
 <div>
    <div>获取所有文章</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        arr :[]
     }
   },
   components: {

   },
   methods: {
      getData(){
        this.$axios.req('/article/allArticle').then(res => {
          this.arr = res.data
          console.log(this.arr);
        }).catch(err => {
          console.log('没有获取所有文章');
        })
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>