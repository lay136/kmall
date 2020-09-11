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
			</template>
			<template #footer>
					<i class="cart-btn van-icon van-icon-cart-o"></i>
			</template>
		</van-card>
		

		<van-card
			price="2.00"
			desc="描述信息"
			title="商品标题"
			thumb="https://api.mall.kuazhu.com/product-images/1595244499249.jpg"
		>
			<template #tags>
			</template>
			<template #footer>
					<i class="cart-btn van-icon van-icon-cart-o"></i>
			</template>
		</van-card>


		<van-card
			price="2.00"
			desc="描述信息"
			title="商品标题"
			thumb="https://api.mall.kuazhu.com/product-images/1595244499249.jpg"
		>
			<template #tags>
			</template>
			<template #footer>
					<i class="cart-btn van-icon van-icon-cart-o"></i>
			</template>
		</van-card>



    </div>
</template>

<script>
    import Search from '../../components/search/index.vue'
	import Vue from 'vue';
import { Card } from 'vant';

Vue.use(Card);
    export default {
        name:'List',
        data() {
            return {
              value:'',
            };
        }, 
        components: {
            Search
        },      
    }
</script>

<style>
  
</style>