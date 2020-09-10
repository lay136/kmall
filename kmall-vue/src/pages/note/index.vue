<template>
    <div class="Note">

        <van-sticky>
            <div class="header">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </div>
        </van-sticky>

        <!-- 
        <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="手机通讯" />
            <van-sidebar-item title="食品生鲜" />
            <van-sidebar-item title="汽车保养" />
            <van-sidebar-item title="内衣配饰" />
            <van-sidebar-item title="母婴童装" />
            <van-sidebar-item title="美妆护肤" />
            <van-sidebar-item title="酒水饮料" />
            <van-sidebar-item title="个护清洁" />
        </van-sidebar> 
        <van-grid 
            :column-num="3"  
            :icon-size="72"  
            :border="false" 
            >
            <van-grid-item icon="https://api.mall.kuazhu.com/category-icons/1595386719634.jpg" text="全屏手机" />
        </van-grid>
        -->
        <van-row type="flex">
            <div>
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="手机通讯" />
                    <van-sidebar-item title="食品生鲜" />
                    <van-sidebar-item title="汽车保养" />
                    <van-sidebar-item title="内衣配饰" />
                    <van-sidebar-item title="母婴童装" />
                    <van-sidebar-item title="美妆护肤" />
                    <van-sidebar-item title="酒水饮料" />
                    <van-sidebar-item title="个护清洁" />
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
    import { GET_CATEGORIES } from './store/types.js'
    
    import Vue from 'vue';
    import { Sidebar, SidebarItem, Toast, Notify } from 'vant';
    Vue.use(Sidebar).use(SidebarItem);

    import { Grid, GridItem, Col, Row } from 'vant';
    Vue.use(Grid).use(GridItem).use(Col).use(Row);
    export default {
    	name:'Note',
        data() {
            return {
              activeKey:'0',
              value:'',
            };
        },
        mounted(){
            this.$store.dispatch(GET_CATEGORIES)
        },
        methods: {
            onChange(index) {
                Notify({ type: 'primary', message: index });
            },
        },

    };
</script>

<style scoped>
 /* .van-sidebar {
    width: 100px;
  }
  .van-sidebar-item{
    font-size:30px;
  }*/

</style>