<template>
  <div class="box">
    <div class="box_1">
      <img src="../../assets/img/xuan.png" @click="ched" />
      <span class="span_1">todo List</span>
    </div>
    <div class="box_x">
      <div class="box_2" v-for="(item,index) in list" :key="index">
        <div class="span_1">
          <input type="checkbox" v-model="item.checked" @click="che(item)"/>
          {{item.name}}
        </div>
        <div class="span_2">
          <img src="../../assets/img/cuo.png" @click="del(item)"/>
        </div>
      </div>
    </div>
    <div class="box_3">
      <div class="box_3_1">{{total}}items left</div>
      <div class="box_3_2" @click="All">All</div>
      <div class="box_3_3" @click="Active">Active</div>
      <div class="box_3_4" @click="Completed">Completed</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      arr: [],
      num: 0,
      checkbox: true
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("/todoList")
        .then(res => {
          this.list = res.data;
          this.arr = res.data;
          //console.log(this.arr);
        })
        .catch(err => {
          console.log("todoList没有获取到");
        });
    },
    del(it) {
      this.list = this.list.filter(item => {
        return item !== it;
      });
    },
    All() {
      this.num = 1;
      this.list = this.arr.filter(item => {
        return item.checked !== "";
      });
    },
    Active() {
      this.num = 2;
      this.list = this.arr.filter(item => {
        return item.checked === false;
      });
    },
    Completed() {
      this.num = 3;
      this.list = this.arr.filter(item => {
        return item.checked !== false;
      });
    },
    //全选
    ched() {
      if (this.num === 1) {
        this.list.map(item => {
          item.checked = this.checkbox;
        });
      }
    },
    //单选
    che(n) {
      n.checked = !n.checked;
      if (this.num === 2) {
        this.list = this.arr.filter(item => {
          return item.checked === false;
        });
        // this.Active()
      }
      if (this.num === 3) {
        this.list = this.arr.filter(item => {
          return item.checked !== false;
        });
      }
    }
  },
  mounted() {
    this.getData();
   
  },
  created() {},
  filters: {},
  computed: {
    total() {
      let nun = 0;
      if (this.num === 1) {
        this.list.map(item => {
          if (item.checked !== true) {
            nun++;
          }
        });
        return nun;
      } else if (this.num === 2) {
        this.list.map(item => {
          if (item.checked === false) {
            nun++;
          }
        });
        return nun;
      } else if (this.num === 3) {
        this.list.map(item => {
          if (item.checked === true) {
            nun++;
          }
        });
        return nun;
      }
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.box {
  
  height: 460px;
  //border: 1px solid black;
  //margin: 100px auto;
  //background: whitesmoke;
  border-radius: 10px;
}
.box_1 {
  width: 380px;
  img {
    width: 20px;
    height: 20px;
  }
  position: relative;
  left: 20px;
  top: 20px;
  .span_1 {
    position: relative;
    left: 242px;
    top: -5px;
  }
}
.box_x {
  width: 400px;
  height: 340px;
  position: relative;
  top: 40px;
  left: 10px;
}
.box_2 {
  width: 328px;
  height: 40px;
  position: relative;
  top: 5px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}
.box_2:hover .span_2 {
  opacity: 1;
}
.span_2 {
  opacity: 0;
}
.box_3 {
  width: 330px;
  height: 40px;
  position: relative;
  top: 42px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  div {
    margin: 10px;
  }
}
</style>