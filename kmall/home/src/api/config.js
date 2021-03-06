
const API_CONFIG = {
    //登录zhuce
    login:                       ['/sessions/users','post'],
    //获取用户名
    getUsername:                 ['/sessions/username','get'],
    //用户退出
    logout:                      ['/sessions/users','delete'],
    //监听表单提交
    register:                    ['/users','post'],
    //用户中心
    checkUsername:               ['/users/checkUsername','get'],
    //获取登录用户信息
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
    //创建订单
    addOrders:                   ['/orders','post'],
    //订单确认列表
    getOrdersList:               ['/orders/list','get'],
    //获取订单详情
    getOrdersDetail:             ['/orders/detail','get'],
    //更新订单状态
    updateOrdersStatus:          ['/orders/status','put'],


    //新增订单地址
    addShippings:                ['/shippings','post'],
    //地址列表
    getShippingsList:            ['/shippings/list','get'],
    //删除地址      
    deleteShippings:             ['/shippings','delete'], 
    //编辑地址     
    getShippingsDetail:          ['/shippings/detail','get'],
    //更新地址状态      
    updateShippings:             ['/shippings','put'],      

    //支付订单
    getPayments:                 ['/payments','get'], 
    //订单支付状态
    getPaymentsStatus:           ['/payments/status','get'], 
}


module.exports = {
    API_CONFIG
}