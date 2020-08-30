//服务请求地址
export const SERVER = 'http://127.0.0.1:3000'

//上传封面图片地址
export const UPLOAD_PRODUCT_IMAGE = SERVER + '/products/images'

//上传商品详情图片信息地址
export const UPLOAD_PRODUCT_DETAIL_IMAGES = SERVER + '/products/detailImages'

export const UPLOAD_AD_IMAGE = SERVER + '/ads/image'

export const API_CONFIG = {
    //登录
    login:                       ['/sessions/users','post'],
    logout:                      ['/sessions/users','delete'],
    // 用户列表
    getCounts:                   ['/counts','get'],
    getUserList:                 ['/users/list','get'],
    // 分类管理
	addCategories:           	 ['/categories','post'],
    getlevelCategories:          ['/categories/levelCategories','get'],
    getCategoriesList:           ['/categories/list','get'],
    updateCategoriesName:        ['/categories/name','put'],
    updateCategoriesMobileName:  ['/categories/mobileName','put'],
    updateCategoriesOrder:       ['/categories/order','put'],
    updateCategoriesIsShow:      ['/categories/isShow','put'],
    //新增商品
    addProducts:                 ['/products','post'],
    updateProducts:              ['/products','put'],
    getProductsList:             ['/products/list','get'],
    getProductDetail:            ['/products/detail','get'],
    updateProductsIsShow:        ['/products/isShow','put'],
    updateProductsStatus:        ['/products/status','put'],
    updateProductsIsHot:         ['/products/isHot','put'],
    updateProductsOrder:         ['/products/order','put'],
    //广告
    getAdsList:                  ["/ads/list","get"],
    getAdsDetail:                ["/ads/detail","get"],
    addAds:                      ["/ads","post"],
    updateAds:                   ["/ads","put"],
    updateAdsOrder:              ["/ads/order","put"],
    updateAdsIsShow:             ["/ads/isShow","put"],
    
    //订单api
    getOrdersList:               ["/orders/list","get"],
    getOrdersDetail:             ["/orders/detail","get"],
    updateOrdersStatus:          ["/orders/status","put"], 

}