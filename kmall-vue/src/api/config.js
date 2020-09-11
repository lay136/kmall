var API_CONFIG = {
    getPositionAds:              ['/ads/positionAds','get'],
    getFloors:                   ['/floors','get'], 

    //分类
    getArrayCategories:       	 ['/categories/arrayCategories','get'],
    getNoteCategories:           ['/categories/childArrayCategories', 'get'],
   // https://api.mall.kuazhu.com/categories/childArrayCategories?limit=20&pid=5f157b8d5dbe7a0023712b7c
}

module.exports = {
    API_CONFIG
}