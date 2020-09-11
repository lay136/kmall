<template>
    <div class="Note">

        <van-sticky>
            <search />
            <!-- <div class="header">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </div> -->
        </van-sticky>

        <van-row type="flex">
            <div>
                <van-sidebar v-model="activeKey" >
                    <van-sidebar-item
                    v-for="(arr,arrindex) in this.$store.state.note.categories" 
                    :key="arrindex"
                    :title="arr.name"
                    :pid="arr._id"
                    @click="handleContent()"
                     /> 
                </van-sidebar>
            </div>

            
            <van-col span="24">
                <van-grid 
                    :column-num="2"  
                    :icon-size="100"

                default>
                    <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595386719634.jpg" text="全屏手机" />
                </van-grid>
            </van-col>

            
        </van-row>




       
</div>
</template>

<script>
    import { GET_CATEGORIES, GET_NOTE_CATEGORIES  } from './store/types.js'
    import Search from '../../components/search/index.vue'
    import { mapGetters } from 'vuex'
    
    import Vue from 'vue';
    import { Sidebar, SidebarItem, Toast, Notify } from 'vant';
    Vue.use(Sidebar).use(SidebarItem);

    import { Grid, GridItem, Col, Row } from 'vant';
    Vue.use(Grid).use(GridItem).use(Col).use(Row);
    export default {
    	name:'Note',
        data() {
            return {
              activeKey:'',
              value:'',
            };
        },


        mounted(){
            var _this = this;
            //加载侧边栏
            this.$store.dispatch(GET_CATEGORIES)
            .then(()=>{
                console.log(_this.$store.state.note.categories)
            });
        },
        components: {
            Search
        },
        methods: {
            handleContent(pid){
                this.$store.dispatch(GET_NOTE_CATEGORIES,pid)
                // console.log(0)
            },
        },
        computed:{
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
                'listCategories',
                'listArr'
            ])
        }

    };
</script>

<style lang="less" scoped>
 #Note{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    .sidebar{
        .sidebar-icon{
            width: 33.3%;
            text-align: center;
            .child-item{
                img{
                    // margin-top: 2rem;
                    width: 2rem;
                    height: 2rem;
                }
                p{
                    font-size: .375rem;
                    font-weight: 400;
                }
            }
            
        }
    }
    
}
</style>