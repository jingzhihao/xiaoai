<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      name:''
    };
  },
  components: {},
  methods: {
    drop() {
      localStorage.name = this.name = "";
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>