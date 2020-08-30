﻿# kmall项目：
服务器接口类型：restful类型接口
	参考文档地址：
	http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html
1.使用：
	根据 HTTP 规范，动词一律大写：
	GET：用来获取资源（Read）
	POST：新建（Create）也可以用于更新资源
	PUT：用来更新资源（Update）
	PATCH：更新（Update），通常是部分更新
	DELETE：（Delete）用来删除资源
	有些客户端只能使用GET和POST这两种方法。服务器必须接受POST模拟其他三个方法（PUT、PATCH、DELETE）。
	这时，客户端发出的 HTTP 请求，要加上X-HTTP-Method-Override属性，告诉服务器应该使用哪一个动词，覆盖POST方法。
	例子：POST /api/Person/4 HTTP/1.1     X-HTTP-Method-Override: PUT
2.什么是RESTful架构：
　　（1）每一个URI代表一种资源；
　　（2）客户端和服务器之间，传递这种资源的某种表现层；
　　（3）客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。
3.误区：
  （1）URI不应该有动词，动词应该放在HTTP协议中。
	例子：某个URI是/posts/show/1，其中show是动词，这个URI就设计错了.
		  正确的写法应该是/posts/1，然后用GET方法表示show。
  （2）URI中不能加入版本号，因为不同的版本，可以理解成同一种资源的不同表现形式，所以应该采用同一个URI。版本号可以在HTTP请求头信息的Accept字段中进行区分.
4.用到的技术栈：
	后端：
	React 用于构建用户界面的 JavaScript 库,给简单的 HTML 页面增加一点交互,
	Webpack: 项目的一些配置项，安装包环境
	Ant Design(antd): UI框架
	axios: 网站地址：http://www.axios-js.com/zh-cn/docs/
		可以发送请求,易用、简洁且高效,是一个基于 promise的 HTTP 库,用在浏览器和 node.js 中。
	安装：使用 npm: npm install axios
		 使用 bower: bower install axios
		 使用 cdn:<script src="https://unpkg.com/axios/dist/axios.min.js">		  </script>
	前端：
	JQuery： 地址：https://jquery.com/ 		
		是一个小型且功能丰富的JavaScript库。通过易于使用的API，它使HTML文档的遍历和操作，事件处理，动画和Ajax等事情变得更加简单。兼具多功能性和可扩展性。
	Webpack: 项目的一些配置项，安装包环境








# 小程序项目：
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







