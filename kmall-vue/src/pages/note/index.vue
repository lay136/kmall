<template>
    <div class="Note">

    <van-sticky>
        <div class="header">
            <van-search v-model="value" placeholder="请输入搜索关键词" />
        </div>
    </van-sticky>
    <div class="wrap">
        <div class="category-list">
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
        </div>
        <div class="child-list">
            
        </div>
    </div>
</div>
</template>

<script>
    import Vue from 'vue';
    import { Sidebar, SidebarItem, Toast, Notify } from 'vant';
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    export default {
    	name:'Note',
        data() {
            return {
              activeKey:'0',
              value:'',
            };
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