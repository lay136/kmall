<template>
    <div class="Toast">                          
        
        
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