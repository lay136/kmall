var { articles } = require('../../../db/index.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlaying:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var articleId = options.articleId
        var article = articles[articleId]
        //处理收藏
        var isCollected = false
        //获取storage中的收藏对象
        var articles_collection = wx.getStorageSync('articles_collection')
        if (articles_collection){
          isCollected = !!articles_collection[articleId]
        }
        //没有收藏对象,初始化
        else{
          /**
           * articleId:false
           * {
           *  '0':false,
           *  '1':true
           * }
           */
          var data = {
    
          }
          data[articleId] = false
          wx.setStorageSync('articles_collection', data)
        }
        //处理音乐
        var backgroundAudioManager = wx.getBackgroundAudioManager()
        backgroundAudioManager.onPlay(function(){
          this.setData({isPlaying:true})
        }.bind(this))
        backgroundAudioManager.onPause(function () {
          this.setData({ isPlaying: false })
        }.bind(this)) 
        // 动态改变文章   
        this.setData({ ...article, isCollected:isCollected})
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

    },
    /**
     * 处理收藏
     */
    tapCollection:function(){
        //wx.setStorageSync('key1',{name:'Tom'})
        //var data = wx.getStorageSync('key1')
        //console.log(data)
        //获取storage中的收藏对象
        var articles_collection = wx.getStorageSync('articles_collection')
        var currentIsCollected = articles_collection[this.data.articleId]
        articles_collection[this.data.articleId] = !currentIsCollected
        wx.setStorageSync('articles_collection', articles_collection)
        this.setData({ isCollected: !currentIsCollected},function(){
        wx.showToast({
            title: currentIsCollected ? "取消成功" : "收藏成功",
            duration: 2000
        })
        })
    },
    /**
     * 处理分享
     */
    tapShare:function(){
        var itemList = ['分享到QQ', '分享到朋友圈', '分享到微博']
        wx.showActionSheet({
        itemList: itemList,
        success:function(res) {
            wx.showToast({
            title: itemList[res.tapIndex]+"成功"
            })
        }
        })
    },
    /** 
     * 处理播放音乐
     */
    tapMusic:function(){
        //获取背景音乐播放器实例
        var backgroundAudioManager  = wx.getBackgroundAudioManager()
        // console.log(backgroundAudioManager)
        if(this.data.isPlaying){//暂停播放
            backgroundAudioManager.pause()//暂停播放
            // this.setData({ isPlaying: false })
        }
        else{//播放音乐
            backgroundAudioManager.src = this.data.music.src;
            backgroundAudioManager.title = this.data.music.title;
            backgroundAudioManager.coverImgUrl = this.data.music.coverImgUrl;
            // backgroundAudioManager.title = '成都-赵雷';
            // backgroundAudioManager.src ='http://music.163.com/song/media/outer/url?id=436514312.mp3';
            // backgroundAudioManager.coverImgUrl = 'https://p2.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg?param=34y34'
            // this.setData({ isPlaying:true})
        }
    }

})