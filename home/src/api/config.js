
const API_CONFIG = {
    //登录zhuce
    login:                       ['/sessions/users','post'],
    getUsername:                 ['/sessions/username','get'],
    logout:                      ['/sessions/users','delete'],
    register:                    ['/users','post'],
    //用户中心
    checkUsername:               ['/users/checkUsername','get'],
    getUserinfo:                 ['/sessions/users','get'],
    //更新密码
    updateUsers:                 ['/users','put'],
    //首页加载数据
    getHomeCategories:           ['/categories/homeCategories','get'],
    //加载广告轮播图
    getPositionAds:              ['/ads/positionAds','get'],
    //加载楼层
    getFloors:                   ['/floors','get'],
    //加载列表页
    getProductsList:             ['/products/list','get'], 
    //详情页数据 
    getProductsDetail:           ['/products/detail','get'],  
    //添加到购物车
    addCarts:                    ['/carts','post'], 
    //更新购物车数量
    getCartsCount:               ['/carts/count','get'],
    //获取购物车信息
    getCarts:                    ['/carts','get'],  
    //更新购物车的选中状态  
    updateCartsChoices:          ['/carts/choices','put'],
    //删除商品    
    deleteCarts:                 ['/carts','delete'], 
    //更新商品   
    updateCartsCounts:           ['/carts/counts','put'],
    //获取生成的订单列表
    getOrdersProducts:           ['/orders/products','get'],
    addOrders:                   ['/orders','post'],
    





}


module.exports = {
    API_CONFIG
}