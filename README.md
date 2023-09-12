# easyNN

#### 一个野人也能看懂的交互式神经网络科普网站

寓教于乐、边做边学、老少皆宜

地址：https://novelvast.github.io/easyNN/



### 项目简介

互动式的神经网络科普网站，在传统科普文字的基础上添加了可交互元素，方便理解

例如：

![sandbox](https://github.com/novelvast/easyNN/assets/113240184/6236f3e0-9335-41ca-acf9-5a7abff76f22)


![layer](https://github.com/novelvast/easyNN/assets/113240184/1d2c6eed-0395-41a1-9348-1e0e4a994175)


![train](https://github.com/novelvast/easyNN/assets/113240184/37382822-da43-4fa4-b0db-1bc3ae4a3a46)




### 文件结构
```
easyNN/
├── docs/				各页面html文件
│   ├── welcome/			欢迎页面
│   ├── backIntro/			反向传播引入
│   ├── cost/				价值函数
│   ├── back/				反向传播
│   ├── intro/				简介
│   ├── net/				神经网络
│   ├── neuron/				神经元
│   ├── sandbox/			沙盒模式
│   └── credit/				个人信息
├── images/				图片素材
├── Model/				神经网络模型
│   ├── actfns.js			
│   ├── data.js				神经网络内置数据
│   ├── layer.js			层模型
│   ├── net.js				网络模型
│   └── neuron.py			神经元模型
├── pixi/				pixi图形库
├── src/				css和js文件
│   ├── css/
│   └── js/
├── View/				页面交互元素文件
│   ├── view.js        		实现一个view类，可根据页面编号绘制各交互页面
│   ├── slide.js       		实现一个slide类，为单个交互页面
│   └── allSlides.js   		所有交互页面的内容，slide对象的集合
├── README.md
└── index.html
```


每个有交互页的html需要使用一个controller来调用view