<template>
    <div class="box">
        <div class="box_1"><img src="../../assets/img/xuan.png" @click="ched"><span class="span_1">todo List</span></div>
        <div class="box_x">
            <div class="box_2" v-for="(item,index) in arr" :key="index">
                <div class="span_1"><input type="checkbox" v-model="item.checked" @click="che(item)">{{item.name}}</div>
                <div class="span_2"><img src="../../assets/img/cuo.png" @click="del(item)"></div>
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
        name: "Home",
        components: {
        },
        props: {},
        data() {
            return {
                list: [],
                arr :[],
                num : 0,
                checkbox : true,

            }
        },
        methods: {
            getData(){
                this.$axios.req('/todoList').then(res => {
                    this.arr = res.data;
                    console.log(this.arr);
                }).catch(err => {
                    console.log('todoList没有获取到');
                })
            },
            del(it){
                this.list = this.list.filter((item)=>{
                    return item !== it
                })
            },
            All(){
                this.num = 1;
                this.list = this.arr.filter((item)=> {
                    return item.checked !== ''
                })
            },
            Active(){
                this.num = 2;
                this.list = this.arr.filter((item)=> {
                    return item.checked === false
                })
            },
            Completed(){
                this.num = 3;
                this.list = this.arr.filter((item)=> {
                    return item.checked !== false
                })
            },
            //全选
            ched(){
                if (this.num === 1){
                    this.list.map((item) => {
                        item.checked = this.checkbox;
                    })
                }
            },
            //单选
            che(n){
                n.checked=!n.checked
                if(this.num === 2){
                    this.list = this.arr.filter((item)=> {
                        return item.checked === false
                    })
                    // this.Active()
                }
                if(this.num === 3){
                    this.list = this.arr.filter((item)=> {
                        return item.checked !== false
                    })
                }
            }
        },
        mounted() {
            this.getData();
            this.list = this.arr;
        },
        created() {

        },
        filters: {},
        computed: {
            total(){
                let nun = 0;
                if (this.num === 1){
                    this.list.map((item) => {
                        if (item.checked !== true){
                            nun ++
                        }
                    })
                    return nun
                }else if (this.num === 2){
                    this.list.map((item) => {
                        if (item.checked === false){
                            nun ++
                        }
                    })
                    return nun
                }
                else if (this.num === 3){
                    this.list.map((item) => {
                        if (item.checked === true){
                            nun ++
                        }
                    })
                    return nun
                }
            }
        },
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">
    .box{
        border: 1px solid black;  
    }
    
</style>