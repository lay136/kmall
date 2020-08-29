# kmall






# 小程序
用到的网站：
https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
https://github.com/AIcolonel/w202006


1.事件注意点:
格式：key+事件类型,如bindtap,catchtap。
key 以bind或catch开头,事件类型如:tap。

bind事件绑定不会阻止冒泡事件向上冒泡
catch事件绑定可以阻止冒泡事件向上冒泡

2.页面路由:
wx.navigateTo:保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
wx.redirectTo:关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。

3.尺寸单位:用-rpx-小程序底层来换算像素单位,可以根据屏幕宽度进行自适应,规定屏幕宽为750rpx。








