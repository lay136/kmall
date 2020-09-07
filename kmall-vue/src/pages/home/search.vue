<template>
    <div class="Toast">                          
        
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>
<script>
    import { Toast } from 'vant';
    export default {
        name:'Toast', 
        data() {
        return {
              value: '',
            };
        },
        methods: {
            onSearch(val) {
              Toast(val);
            },
            onCancel() {
              Toast('取消');
            },
        },             
    }
</script>

<style>
  
</style>