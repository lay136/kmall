<template>
    <div class="List">
        <van-sticky>
            <div class="header">
                <van-search 
	                v-model="value" 
	                placeholder="请输入搜索关键词" 
                />
            </div>
        </van-sticky>
		<van-card
		  price="2.00"
		  desc="描述信息"
		  title="商品标题"
		  thumb="https://api.mall.kuazhu.com/product-images/1595244499249.jpg"
		>
			<template #tags>
				<van-tag plain type="danger">标签</van-tag>
			</template>
			<template #footer>
				<van-button size="mini">
					<i class="cart-btn van-icon van-icon-cart-o"></i>
				</van-button>
			</template>
		</van-card>



    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
              value:'',
            };
        },       
    }
</script>

<style>
  
</style>