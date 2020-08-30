// pages/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles:[
            {
                author:'小辉',
                avatar:'/images/avatar/u1.jpg',
                date:'发表于：今天',
                title:'返校第一天！',
                img:'/images/article/a1.jpg',
                desc:'阔别八个月，我们将再次于许院重聚，再次见到亲爱的老师和同学，再次回到亲切的校园，在见到的那一刻，都化为了心中的汩汩暖流。',
                star:30,
                view:20
            },
            {
                author:'小明',
                avatar: '/images/avatar/u2.jpg',
                date: '2020-08-30',
                title: '许院，我们回来了！',
                img: '/images/article/a2.jpg',
                desc: '阔别稍久，终如期相逢！8月28—30日，我校迎来了17级、18级、19级学生秋季学期集中返校报到。',
                star: 30,
                view: 20
            },      
          ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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