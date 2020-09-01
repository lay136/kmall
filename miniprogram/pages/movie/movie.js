// pages/movie/movie.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //页面加载完毕请求电影列表数据
        wx.request({
            url: 'http://t.yushu.im/v2/movie/in_theaters?start=0&count=3',
            success (res) {
                var data = res.data.subjects.map(function(item){
                    return {
                        title:item.title,
                        coverImage:item.images.large,
                        score:item.rating.average,
                        stars:item.rating.stars
                    }
                })
            }
        })
    
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        wx.request({
            url:"http://t.yushu.im/v2/movie/in_theaters?start=0&count=3",
            success:function(res){

            }
        })
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})



/*
            url:"http://t.yushu.im/v2/movie/in_theaters?start=0&count=3",
*/