
export const API_CONFIG = {
    //首页
    getHomeAds:                 ['/ads/positionAds','get'],
    getHomeFloors:              ['/floors?limit=10','get'],

	//分类页
    getCategories:              ['/categories/arrayCategories','get'],
    getNoteCategories:         ['/categories/childArrayCategories','get'],

	//首页商品列表
    getProductsList:         	['/products/list','get'],
    getProductsDetail:         	['/products/detail','get'],

    //验证码
	getUserCaptcha:         	['/users/captcha','get'],
    //登录
    postLogin:                   ['/users/login','post'],

    //购物车信息
    postCarts:                   ['/carts','post'],

	
}
