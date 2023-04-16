#easyNN

一个野人也能看懂的交互式神经网络科普网站

寓教于乐、边做边学、老少皆宜

###文件结构
/docs           各页面html文件
/images         图片素材
/Model          神经网络模型
/pixi           pixi库
/src            css和js文件
/View           页面交互元素文件
-view.js        实现一个view类，可根据页面编号绘制各交互页面
-slide.js       实现一个slide类，为单个交互页面
-allSlides.js   所有交互页面的内容，slide对象的集合
/Controller.js  测试使用


每个有交互页的html需要使用一个controller来调用view