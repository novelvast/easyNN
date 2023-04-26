// 组织了每个页面中的非共有元素
import { Slide } from "./Slide.js"
import { layout } from "./layout.js";
import { Net } from "../Model/net.js"
import { actFns } from "../Model/neuron.js";
import {fruits, fruits_single} from "../Model/data.js"
import {Graph} from "./Graph.js"
import {textstyles} from "./textstyles.js"
import { Button } from "./Button.js";

import { loader } from "./View.js";



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// slides 
// is this the best way to do this? probably not
export var SlideHome = new Slide();
export var SlideInstruct1 = new Slide();
export var SlideInstruct2 = new Slide();
export var SlideIntro1 = new Slide();
export var SlideIntro2 = new Slide();
export var SlideIntro3 = new Slide();
export var SlideIntro4 = new Slide();
export var SlideIntro5 = new Slide();
export var SlideIntro6 = new Slide();
export var SlideIntro7 = new Slide();
export var SlideIntro8 = new Slide();

export var SlideNeuron1 = new Slide();
export var SlideNeuron2 = new Slide();
export var SlideNeuron3 = new Slide();
export var SlideNeuron4 = new Slide();
export var SlideNeuron5 = new Slide();
export var SlideNeuron6 = new Slide();
export var SlideNeuron7 = new Slide();

export var SlideNet1 = new Slide();
export var SlideNet2 = new Slide();
export var SlideNet3 = new Slide();
export var SlideNet4 = new Slide();

export var SlideBackIntro1 = new Slide();
export var SlideBackIntro2 = new Slide();

export var SlideCost1 = new Slide();
export var SlideCost2 = new Slide();
export var SlideCost3 = new Slide();
export var SlideCost4 = new Slide();
export var SlideCost5 = new Slide();
export var SlideCost6 = new Slide();
export var SlideCost7 = new Slide();
export var SlideCost8 = new Slide();
export var SlideCost9 = new Slide();
export var SlideCost10 = new Slide();

export var SlideCredit = new Slide();

export var SlideBack1 = new Slide();
export var SlideBack2 = new Slide();
export var SlideBack3 = new Slide();
export var SlideBack4 = new Slide();
export var SlideBack5 = new Slide();
export var SlideBack6 = new Slide();
export var SlideBack7 = new Slide();
export var SlideBack8 = new Slide();
export var SlideBack9 = new Slide();
export var SlideBack10 = new Slide();
export var SlideBack11 = new Slide();
export var SlideBack12 = new Slide();
export var SlideBack13 = new Slide();

export var SlideBackCalc8 = new Slide();
export var SlideBackCalc9 = new Slide();
export var SlideBackCalc9b = new Slide();
export var SlideBackCalc9a = new Slide();
export var SlideBackCalc9a2 = new Slide();
export var SlideBackCalc9c = new Slide();
export var SlideBackCalc10 = new Slide();
export var SlideSandbox = new Slide();




export function makeSlides(){
    SlideHome = new Slide();

    /*  ------- INSTRUCTIONS --------*/ 


    /*  ------- INTRO --------*/ 

    // INTRO 1
    
    //INTRO 2
    
    //INTRO 3

    //INTRO 4
    var percep_blank =new PIXI.Sprite(loader.resources["/easyNN/images/intro/percep_blank1.png"].texture);
        percep_blank.isSprite=true;
        percep_blank.x=layout.CX-120;
        percep_blank.y=layout.CY-150;

    var textIntro1b= [percep_blank,
        // [ ["一旦我们的网络完成训练，它就能够用于分辨"], [" 未标注 ", textstyles.ital ], ["的数据."],[layout.CX-450,layout.CY-185]],
        // [["不信？这里有一个已经训练完\n的神经网络，它已经学会了如何分辨"+'\n'],[layout.CX-450,layout.CY-130]],
        // [[" 草莓 ", textstyles.default_red],
        // ["   和   "],
        // [" 蓝莓", textstyles.default_blue],
        // [layout.CX-450,layout.CY-70]],
         [["点击图片可以把它传给神经网络"], [layout.CX-450, layout.CY-20] ],
    ];


    var strawx= layout.CX-320;
    var strawy= layout.CY;

    var bluex= layout.CX-460;
    var bluey=layout.CY;

    var inx= percep_blank.x+3;
    var iny = percep_blank.y+110;

    var singleblue2 =new PIXI.Sprite(loader.resources["/easyNN/images/intro/singleblue.png"].texture);
        singleblue2.x=inx;
        singleblue2.y=iny;
        singleblue2.visible=false;

    var singlestraw2 =new PIXI.Sprite(loader.resources["/easyNN/images/intro/singlestraw.png"].texture);
        singlestraw2.x=inx;
        singlestraw2.y=iny;
        singlestraw2.visible=false;

    var singleblue =new PIXI.Sprite(loader.resources["/easyNN/images/intro/singleblue.png"].texture);
        singleblue.isSprite=true;
        singleblue.x=bluex;
        singleblue.y=bluey;
        singleblue.interactive=true;
        singleblue.buttonMode=true;
        singleblue.on('click', async function(e){

            singleblue2.visible=true;
            singlestraw2.visible=false;


            await sleep(500);
           percep_blank.texture=loader.resources["/easyNN/images/intro/percep_blue1.png"].texture;
           
        });

        singleblue.on('tap', async function(e){

            singleblue2.visible=true;
            singlestraw2.visible=false;


            await sleep(500);
           percep_blank.texture=loader.resources["/easyNN/images/intro/percep_blue1.png"].texture;
           
        });


    var singlestraw =new PIXI.Sprite(loader.resources["/easyNN/images/intro/singlestraw.png"].texture);
        singlestraw.isSprite=true;
        singlestraw.x=strawx;
        singlestraw.y=strawy;
        singlestraw.interactive=true;
        singlestraw.buttonMode=true;
        singlestraw.on('click', async function(e){

            singlestraw2.visible=true;
            singleblue2.visible=false;

            await sleep(500);
            percep_blank.texture=loader.resources["/easyNN/images/intro/percep_straw1.png"].texture;
            
        });

        singlestraw.on('tap', async function(e){

            singlestraw2.visible=true;
            singleblue2.visible=false;

            await sleep(500);
            percep_blank.texture=loader.resources["/easyNN/images/intro/percep_straw1.png"].texture;
            
        });

    SlideIntro4.drawText(textIntro1b);
    SlideIntro4.textContainer.addChild(singleblue,singleblue2,singlestraw,singlestraw2);
    SlideIntro4.drawInteractive();

    //INTRO 5
   

    //INTRO 6
    

    //INTRO 7


    //INTRO 8



    /*  ------- NEURON --------*/ 

    // NEURON 1


    //NEUROON 2 
    SlideNeuron2.largenet=1;
    SlideNeuron2.large_nointeract=true;

    var net_neuron = new Net();
    net_neuron.removeLayer();
    SlideNeuron2.slideNet=net_neuron;

    const train_input2 = {
        input: [2,10],
        expected: [1],
        expected_text: ["blueberry"]
    }

    const train_data2 = {
        points: [train_input2],
        labels: ["长度", "圆润程度"],
        type: ["blueberry"]
    }

    SlideNeuron2.slideNet.setNetData(train_data2);
    SlideNeuron2.slideNet.setOutLayer();
    SlideNeuron2.slideNet.update();
    SlideNeuron2.draw_init_large(SlideNeuron2.slideNet);
    SlideNeuron2.slideNet.getLayer(0).getNeuron(0).bias=0.21;

    var neuron_large_over=new PIXI.Sprite(loader.resources["/easyNN/images/net/neuronOver_large.png"].texture);
        neuron_large_over.isSprite=true;
        neuron_large_over.anchor.set(0.5);
        neuron_large_over.x=layout.NEURON_LEFTLIM_LARGE;
        neuron_large_over.y=layout.CY;

    var inputexample=new PIXI.Sprite(loader.resources["/easyNN/images/intro/input_example.png"].texture);
        inputexample.isSprite=true;
        inputexample.scale.set(1.0);
        inputexample.x= layout.CX-350;
        inputexample.y= layout.CY-150;

    var textNeuron2 = [
        neuron_large_over,
        inputexample,
        [["我们每次给我们的网络提供一条训练数据"], [layout.CX-480,layout.CY-200]],
        [["用我们之前定义的长度和" + "\n" +
        "圆润程度作为我们的输入"], [layout.CX-480,layout.CY+160]],
    ];

    SlideNeuron2.drawText(textNeuron2);
    SlideNeuron2.drawTextButtons();

    //NEURON 3
    SlideNeuron3.largenet=1;
    SlideNeuron3.slideNet=net_neuron;
    SlideNeuron3.slideNet.update();
    SlideNeuron3.draw_init_large(SlideNeuron3.slideNet);

    var neuron_large_actfncover=new PIXI.Sprite(loader.resources["/easyNN/images/net/neuron_large_actfncover.png"].texture);
        neuron_large_actfncover.isSprite=true;
        neuron_large_actfncover.anchor.set(0.5);
        neuron_large_actfncover.x=layout.NEURON_LEFTLIM_LARGE;
        neuron_large_actfncover.y=layout.CY;

    var orange = new PIXI.TextStyle({
        fontFamily: 'Helvetica',
        fontWeight: 400,
        fontSize: 16,
        fill:0xFF5733

    });

    var blue = new PIXI.TextStyle({
        fontFamily: 'Helvetica',
        fontWeight: 400,
        fontSize: 16,
        fill:0x344EE8
    });

    var med = new PIXI.TextStyle({
        fontFamily: 'Helvetica',
        fontWeight: 400,
        fontSize: 16,
    });

    var textNeuron2b = [neuron_large_actfncover,
    //     [["还记得我们说过神经元之间由权重进行连接吗？"], [layout.TEXTSTART_X, layout.TEXTSTART_Y]],
    //     [neuron_large_actfncover,["每个输入都乘上一个"],[" 权重. ",textstyles.medium_bold], [layout.CX-470,layout.CY-200]],
    //     [["之后，再将乘以权重后的值求和 "], [layout.CX-470,layout.CY-145]],
    //    [["最后，把求和的结果再加上一个数，我们把这个数叫做——"], ["偏置(bias)", textstyles.medium_bold], [layout.CX-450,layout.CY-95]],
         [["把鼠标放在输入和神经元的连\n接线上，就可以看到对应的权重"], [layout.CX-470,layout.CY-60]],
         [["橙色 ",orange], ["代表权重为负值"+'\n',med],
             ["蓝色 ",blue], ["代表权重为正值",med], [layout.CX-350,layout.CY+35]],
         [["线越粗代表权重越大"],[layout.CX-440,layout.CY+130]],
         [["点击加减号可以修改权重"],[layout.CX-400,layout.CY+200]],
         [["神经元中绿色的值就是我们的计算结果"],[layout.CX+140,layout.CY+200]],


    
    ];

    SlideNeuron3.drawText(textNeuron2b);
    SlideNeuron3.drawTextButtons();
    SlideNeuron3.drawInteractive();


    //NEURON 4
    SlideNeuron4.largenet=1;

    SlideNeuron4.slideNet=net_neuron;
    SlideNeuron4.slideNet.update();
    SlideNeuron4.draw_init_large(SlideNeuron4.slideNet);

    var sigmoid=new PIXI.Sprite(loader.resources["/easyNN/images/intro/sigmoid_graph.png"].texture);
    sigmoid.isSprite=true;
    sigmoid.scale.set(0.9)
    sigmoid.x=layout.CX-480;
    sigmoid.y=layout.CY-90;

    var textNeuron2c = [sigmoid,
        // [ ["求出这个值之后还没有结束，我们还需要把它放到一个函数中，这个函数名叫 "+'\n'], ["激活函数(activation function)", textstyles.large_bold], [layout.CX-480,layout.CY-200]],   
         [ ["sigmoid函数: "], [layout.CX-480,layout.CY-120]],
        // [ ["不仅看起来很有趣，它还能把我们的输出限制在0到1之间 "], [layout.CX-480,layout.CY+170]],
         [ ["紫色数字是我们经过激活函数计算得到的结果"], [layout.CX + 100,layout.CY+230]],

    ];
    SlideNeuron4.drawText(textNeuron2c);
    SlideNeuron4.drawTextButtons();  
    SlideNeuron4.drawInteractive();


    //NEURON 5
    SlideNeuron5.largenet=1;

    SlideNeuron5.slideNet=net_neuron;
    SlideNeuron5.slideNet.update();
    SlideNeuron5.draw_init_large(SlideNeuron5.slideNet);

    var relu=new PIXI.Sprite(loader.resources["/easyNN/images/intro/relu_graph.png"].texture);
    relu.isSprite=true;
    relu.scale.set(0.9)
    relu.x=layout.CX-480;
    relu.y=layout.CY-90;

    var textNeuron2d = [
       [ ["另一个常用的激活函数名叫"+'\n'],[layout.CX-470,layout.CY-200]],
        [ [" Re",textstyles.large_bold],
          ["ctified"],
          [" L",textstyles.large_bold],
          ["inear"],
          [" U",textstyles.large_bold],
          ["nit                     "],
          [layout.CX-470,layout.CY-170]],
          [ ["或者简称"], [" ReLU ", textstyles.large_bold], [layout.CX-400,layout.CY-135]],
          [["它长下面这样："+'\n'],[layout.CX-470,layout.CY-100]],
          
        relu,
    
    ];
    SlideNeuron5.drawText(textNeuron2d);
    SlideNeuron5.drawInteractive();


    //NEURON 6
    SlideNeuron6.largenet=1;

    SlideNeuron6.slideNet=net_neuron;
    SlideNeuron6.slideNet.update();
    SlideNeuron6.draw_init_large(SlideNeuron6.slideNet);
    SlideNeuron6.largefn=true;
    SlideNeuron6.drawActFnButtons();

    var textNeuron2d2 = [
        // [ ["激活函数非常重要，因为它可以让神经网络\n从简单的线性分类问题转向解决那些更为复杂的"],["非线性问题",textstyles.ital], [layout.CX-470,layout.CY-170]],
        // [ ["简而言之，这允许我们对那些无法用一条线分割的数据进行分类"], [layout.CX-470,layout.CY-90]],   

         [ ["尝试不同的激活函数，看看\n它们对神经网络的影响吧！"], [layout.CX-420,layout.CY-10]],   
    ];
    SlideNeuron6.drawText(textNeuron2d2);
    SlideNeuron6.drawInteractive();


    //NEURON 7
    SlideNeuron7.largenet=1;

    SlideNeuron7.slideNet=net_neuron;
    SlideNeuron7.slideNet.update();
    SlideNeuron7.draw_init_large(SlideNeuron4.slideNet);
    SlideNeuron7.neuronContainer.getChildAt(1).getChildAt(0).visible=true;

    var textNeuron2e = [
    //     [["我们在应用激活函数" +'\n'+"之后得到的数值"+'\n'+"就是神经网络最终的输出 - "+'\n'],[layout.CX-450,layout.CY-190]],
    //    [["         也被叫做它的"], [" activation.  ", textstyles.large_bold],[layout.CX-450,layout.CY-105]],
        [["更活跃的神经元是更亮的黄色"], [layout.CX-465,layout.CY-50]],
        [["把鼠标放在神经元上可以查看具体的计算过程"], [layout.CX+100,layout.CY + 200]],

    ];
    SlideNeuron7.drawText(textNeuron2e);
    SlideNeuron7.drawTextButtons();
    SlideNeuron7.drawInteractive(); 
    SlideNeuron7.largefn=true;

    SlideNeuron7.drawActFnButtons();


    //NET 1
    SlideNet1.leftnet=true;

    var net1 = new Net();
    SlideNet1.slideNet=net1;
    net1.setNetData(fruits);
    net1.setOutLayer();
    net1.removeLayer();
    net1.update();
    SlideNet1.draw_init(net1);


    var targetarrow=new PIXI.Sprite(loader.resources["/easyNN/images/arrows/targetarrow.png"].texture);
    targetarrow.isSprite=true;
    targetarrow.scale.set(0.5)
    targetarrow.x=layout.CX-110;
    targetarrow.y=layout.CY-75;

    var textNet1 = [
        targetarrow,
        // [["因为我们要分成两类,"+'\n'+ "所以在我们的输出层中需要两个最终的神经元. ", textstyles.large_bold], [layout.CX-470,layout.CY-170]],
        //[["Each output neuron corresponds to a different class."], [layout.LEFTBUFFER+500,170]],

        [["当我们的图片是一个"], [" 蓝莓", textstyles.default_blue], [", 我们希望: "], [layout.CX,layout.CY-80]],
        [["这个神经元的值为"], [" 0",textstyles.large_bold], [layout.CX+40,layout.CY-10]],
        [["这个神经元的值为"], [" 1",textstyles.large_bold], [layout.CX+40,layout.CY+40]],
        [["图片为草莓时则相反"], [layout.CX+20,layout.CY+100]],
        [["点击图片更换例子.",textstyles.instruct], [layout.CX,layout.CY+150]],

    ];
    SlideNet1.drawText(textNet1);
    SlideNet1.drawTextButtons();
    SlideNet1.drawActFnButtons(SlideNet1.slideNet);
    SlideNet1.drawInteractive();


    //Net 2
    var net2 = new Net();

    SlideNet2.slideNet=net2;
    net2.setNetData(net1.data);
    net2.setOutLayer();
    net2.update();
    SlideNet2.draw_init(net2);    

    var textNet1b = [
        // [["我们可以添加隐藏层..."], [layout.CX+25,layout.CY-150]],
    ];
    SlideNet2.drawText(textNet1b);
    SlideNet2.drawTextButtons();
    SlideNet2.drawActFnButtons();
    SlideNet2.drawInteractive();

    //NET 3    
    SlideNet3.leftnet=1;

    var net3 = new Net();

    net3.setNetData(net1.data);
    net3.setOutLayer();

    var w000= net2.getLayer(0).getNeuron(0).getWeight(0);
    var w001= net2.getLayer(0).getNeuron(0).getWeight(1);
    var w100= net2.getLayer(1).getNeuron(0).getWeight(0);
    var w110= net2.getLayer(1).getNeuron(1).getWeight(0);

    var b00 =net2.getLayer(0).getNeuron(0).bias;
    var b10 =net2.getLayer(1).getNeuron(0).bias;
    var b11 =net2.getLayer(1).getNeuron(1).bias;

    net3.getLayer(0).getNeuron(0).setWeight(0,w000);
    net3.getLayer(0).getNeuron(0).setWeight(1,w001);
    net3.getLayer(1).getNeuron(0).setWeight(0,w100);
    net3.getLayer(1).getNeuron(1).setWeight(0,w110);

    net3.getLayer(0).getNeuron(0).setBias(b00);
    net3.getLayer(1).getNeuron(0).setBias(b10);
    net3.getLayer(1).getNeuron(1).setBias(b11);

    net3.update();

    SlideNet3.slideNet=net3;
    SlideNet3.draw_init(net3);    
    SlideNet3.slideNet.getLayer(0).addNeuron();
    SlideNet3.slideNet.update();
    SlideNet3.draw_init(net3);    

    var textNet1b2 = [
        // [["我们可以添加隐藏层..."], [layout.CX+25,layout.CY-150]],
        // [["...也可以向每个隐藏层中添加神经元."], [layout.CX+100,layout.CY-100]],
        // [["特别注意前一层的"], [" 输出 ",textstyles.large_bold], [layout.CX+120,layout.CY-50]],
        // [["是怎么转变为下一层的"], [" 输入 ",textstyles.large_bold], ["的. "], [layout.CX+130,layout.CY]],
        // [["这个从输入"+'\n'+ "到最终输出的过程被叫做 "],[layout.CX+140,layout.CY+100]],
        // [["前向传播.",textstyles.large_bold], [layout.CX+140,layout.CY+160]],
    ];
    SlideNet3.drawText(textNet1b2);
    SlideNet3.drawTextButtons();
    SlideNet3.drawActFnButtons();
    SlideNet3.drawInteractive();

    //NET 4
    SlideNet4.slideNet=net3;
    SlideNet4.draw_init(net3);    
    var textNet1c = [
        [["用这些按钮来添加层.", textstyles.instruct], [layout.CX-420,layout.CY-210]],
        [["用这些按钮" +'\n'+"来添加神经元.", textstyles.instruct], [layout.CX-410,layout.CY-150]],


    ];
    SlideNet4.drawText(textNet1c);
    SlideNet4.drawTextButtons();
    SlideNet4.drawActFnButtons();

    SlideNet4.drawLayerButtons();
    SlideNet4.buttonContainer.getChildByName("buttonNeuronAddContainer").getChildAt(0).visible=true;
    SlideNet4.buttonContainer.getChildByName("buttonNeuronRemContainer").getChildAt(0).visible=true;
    SlideNet4.buttonContainer.getChildByName("layersbox").x= layout.NEURON_LEFTLIM+200;


    SlideNet4.drawInteractive();


    //back intro 1
   

    //back2
   



    //COST 1
   

    //COST 2
    SlideCost2.leftnet=true;
    // layout.NEURON_UPPERLIM = window.innerHeight/2 -140;

    var nete = new Net();
    SlideCost2.slideNet=nete;
    nete.setNetData(net1.data);
    nete.setOutLayer();
    nete.update();
    nete.removeLayer();
    nete.update();
    SlideCost2.draw_init(nete);

    SlideCost2.drawRateButtons();

    SlideCost2.buttonContainer.visible=false;
    

    var textNet1e = [
        // [ [" 这里有一个神经网络是如何计算代价的例子."],[layout.CX-470,layout.CY-180] ],
        [ [" 提示：点击权重可以更改它们，"+'\n'+ " 点击图片可以更换一个新的样例",textstyles.instruct],[layout.CX-450,layout.CY+180] ],
        // [ [" Notice how                    "+'\n'],[" changing the"],[" weights ",textstyles.large_bold],[layout.NEURON_LEFTLIM+450,layout.CY-60] ],
        // [ [" changes the"],[" output   ",textstyles.large_bold],[layout.NEURON_LEFTLIM+450,layout.CY] ],
        // [ [" which changes the"],[" cost. ",textstyles.large_bold],[layout.NEURON_LEFTLIM+450,layout.CY+40] ],
    ];
   
    SlideCost2.drawText(textNet1e);
    SlideCost2.costSteps=true;
    SlideCost2.drawCost_steps();
    SlideCost2.drawInteractive();

    // layout.NEURON_UPPERLIM = window.innerHeight/2 -80;

    //COST 3
    

    //COST 4
   

    //COST 5
   

    //COST 6
    

    //COST 7
    


    //COST 8
    SlideCost8.fakenet=true;

    var netFin=new Net();
    SlideCost8.slideNet=netFin;
    netFin.setNetData(fruits);
    netFin.setOutLayer();
    netFin.update();

    netFin.getLayer(0).addNeuron();
    netFin.getLayer(0).addNeuron();

    netFin.getLayer(0).getNeuron(0).setWeight(0,0.5);
    netFin.getLayer(0).getNeuron(0).setWeight(1,0.5);

    netFin.getLayer(0).getNeuron(1).setWeight(0,0.5);
    netFin.getLayer(0).getNeuron(1).setWeight(1,0.5);

    netFin.getLayer(0).getNeuron(2).setWeight(0,0.5);
    netFin.getLayer(0).getNeuron(2).setWeight(1,0.5);

    netFin.update();

    SlideCost8.slideNet.setNetActFn(actFns.RELU);
    SlideCost8.slideNet.update();

    var SlideErrorGraph = new Graph(fruits);
        SlideErrorGraph.axis.scale.set(1.2);

        SlideErrorGraph.axis.x=layout.CX-380;
        SlideErrorGraph.axis.y=layout.CY-130;

    SlideCost8.labelsContainer.addChild(SlideErrorGraph.getGraph());

    for(var i=0;i<100;i++){
        SlideCost8.slideNet.learn_batch();
        SlideCost8.slideNet.update();
        SlideErrorGraph.updateGraph(SlideCost8.slideNet,SlideErrorGraph);
    }

    var textError7 = [        
        [["我们可以用图像来可视化神经网络的学习过程.",textstyles.large_bold], [layout.CX-450,layout.CY-180]],
        [[" 蓝色区域代表网络" +'\n'+" 将该区域内的所有数据点归类为蓝莓."], [layout.CX,layout.CY-100]],
        [[" 红色区域则代表归类为草莓."], [layout.CX,layout.CY-20]],
        [[" 颜色越深代表着"+'\n'+" 网络对其分类的结果更有自信."], [layout.CX,layout.CY+60]],
    ];
    SlideCost8.drawText(textError7);


    //COST 9
    var gotocalcarrow = new PIXI.Sprite(loader.resources["/easyNN/images/arrows/gotocalcarrow.png"].texture);
        gotocalcarrow.anchor.set(0.5);
        gotocalcarrow.scale.set(0.8);
        gotocalcarrow.isSprite=true;
        gotocalcarrow.x=layout.CX;
        gotocalcarrow.y=layout.CY-30;

    var textError8 = [
    [["想看看梯度下降背后的微积分吗？", textstyles.large_bold], [layout.CX-300,layout.CY-150]],
    [["点这里", ], [layout.CX-50,layout.CY-90]],
    [["或者，点下一页跳过计算过程.", ], [layout.CX-100,layout.CY+150]],

    gotocalcarrow,

    ];
    SlideCost9.drawText(textError8);

    var gotocalcx=layout.CX;
    var gotocalcy=layout.CY+50;
    var gotocalc=new Button("gotocalc",loader.resources["/easyNN/images/buttons/calculus.png"].texture, gotocalcx,gotocalcy,true);
    gotocalc.on('click', function(e){

            // viewst.currentSlide=36;
            // viewst.drawSlide();
        
    });

    gotocalc.on('tap', function(e){

        // viewst.currentSlide=36;
        // viewst.drawSlide();
    
    });
    SlideCost9.buttonContainer.addChild(gotocalc);


    //COST 10



    //Credit
        



    /*********     CALCULUS    *********** */   

    layout.NEURON_LEFTLIM = layout.NEURON_LEFTLIM_BACKPROP;
    layout.NEURON_X_DIF = 135;

    layout.NEURON_Y_DIF = 175;



    var netBack0 = new Net();
    SlideBack1.slideNet=netBack0;
    netBack0.setNetData(fruits_single);
    netBack0.setOutLayer();
    netBack0.checkInit();

    netBack0.update();

    SlideBack1.backprop=true;
    SlideBack1.backprop_init=true;
    SlideBack1.backprop_labels=true;
    SlideBack1.none=true;


    SlideBack1.draw_init(netBack0);

    SlideBack1.slideContainer.getChildAt(1).getChildByName("targetLabel0").visible=false;
    SlideBack1.slideContainer.getChildAt(1).getChildByName("targetLabel1").visible=false;

    var a = new PIXI.TextStyle({
        fontFamily: 'Helvetica',
        fontWeight: 600,
        fontSize: 28,
        fill: 0x8900C4   
    });

    var z = new PIXI.TextStyle({
        fontFamily: 'Helvetica',
        fontWeight: 600,
        fontSize: 28,
        fill: 0x007015 
    });

    var a21example= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/a21.png"].texture);
        a21example.isSprite=true;
        a21example.tint=0x000000;
        a21example.scale.set(1.4);
        a21example.x=layout.CX-70;
        a21example.y=layout.CY+90;

    var backpropx= layout.CX-40;

    SlideBack1.backfromcalc=true;

    var textBackCalc0 = [
        a21example,
        [ ["First, we need to label each component of our net."],[backpropx,layout.CY-170] ],
        [ ["The output, or activation, of each neuron"+'\n'+ "is notated as"], [" a", a],[backpropx,layout.CY-120] ],
        [ ["However, we also need the value of the neuron" +'\n'+"prior to applying the activation function"], [backpropx,layout.CY-40] ],
        [ ["                            This value is "],[" z                ",z], [backpropx,layout.CY+22] ],
        [ ["The superscript denotes the layer number "], [backpropx+80,layout.CY+85] ],
        [ ["While the subscript denotes the neuron number "], [backpropx+80,layout.CY+150] ],


    ];    
    SlideBack1.drawText(textBackCalc0);
    

    //Back2
    SlideBack2.slideNet=netBack0;

    SlideBack2.backprop=true;
    SlideBack2.backprop_labels=true;
    SlideBack2.none=true;

    SlideBack2.draw_init(netBack0);
    SlideBack2.drawCost();

    var backpropx_cost= layout.CX+75;

    var yimg=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/y.png"].texture);
    yimg.isSprite=true;
    yimg.x=backpropx_cost-15;
    yimg.y=layout.CY-103;

    var C=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/C.png"].texture);
    C.isSprite=true;
    C.scale.set(0.8);
    C.x=backpropx_cost-12;
    C.y=layout.CY-20;



    var textBackCalc1 = [
        [ ["We'll also need:"],[backpropx_cost,layout.CY-150] ],
        [ ["       : the target value"+'\n'+" for each output neuron"],[backpropx_cost,layout.CY-80] ],
        yimg,
        [ ["       : the cost for each output neuron," +'\n'+ "and the total cost of the net."],[backpropx_cost,layout.CY] ],
        C,

    ];    
    SlideBack2.drawText(textBackCalc1);

    //BACK3
    SlideBack3.slideNet=netBack0;
    SlideBack3.backprop=true;
    SlideBack3.backprop_labels=true;
    SlideBack3.w3=true;

    SlideBack3.draw_init(netBack0);
    SlideBack3.drawCost();

    var arrowx=layout.CX-536;
    var arrowy=layout.CY-238;

    var w3toc= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w3toc.png"].texture);
        w3toc.isSprite=true;
        w3toc.x=arrowx;
        w3toc.y=arrowy;

    var dctot= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dctot.png"].texture);
        dctot.isSprite=true;
        dctot.x=backpropx_cost+100;
        dctot.y=layout.CY+30;

    var w3= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w3_teal.png"].texture);
        w3.isSprite=true;
        w3.x=backpropx_cost+190;
        w3.y=layout.CY-125;

    var w32= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w3_teal.png"].texture);
        w32.isSprite=true;
        w32.x=backpropx_cost+155;
        w32.y=layout.CY+25;


    var textBackCalc2 = [
        w3toc,
        [ ["What we want to know is:"],[backpropx_cost,layout.CY-170] ],
        [ ["How much does     "+'\n'+"influence the total cost?", textstyles.large_bold],[backpropx_cost,layout.CY-100] ],
        w3,
        [ ["This value is"], [backpropx_cost+20,layout.CY-10] ],

        [ ["the partial derivative of the cost "+'\n'+"with respect to   ",textstyles.ital],[backpropx_cost+20,layout.CY+20] ],
        w32,
        [ ["This is written as                "],[backpropx_cost,layout.CY+120] ],
        dctot,
    ];    
    SlideBack3.drawText(textBackCalc2);

    //BACK 4
    SlideBack4.slideNet=netBack0;
    SlideBack4.backprop=true;
    SlideBack4.backprop_labels=true;
    SlideBack4.w3=true;


    SlideBack4.draw_init(netBack0);
    SlideBack4.drawCost();

    var w3toc= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w3toc.png"].texture);
        w3toc.isSprite=true;
        w3toc.x=arrowx;
        w3toc.y=arrowy;

    var w3= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w3_teal.png"].texture);
    w3.isSprite=true;
    w3.x=backpropx_cost+125;
    w3.y=layout.CY-225;

    var dctot= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dctot.png"].texture);
    dctot.scale.set(0.7);
    dctot.isSprite=true;
    dctot.x=backpropx_cost+54;
    dctot.y=layout.CY-200;


    var nablaC = new PIXI.Sprite(loader.resources["/easyNN/images/cost/nablaC.png"].texture);
    nablaC.anchor.set(0.5)
    nablaC.scale.set(0.8)

    nablaC.isSprite=true;
    nablaC.x=backpropx_cost+270
    nablaC.y=layout.CY-90;

    var nablaC2 = new PIXI.Sprite(loader.resources["/easyNN/images/cost/nablaC.png"].texture);
    nablaC2.anchor.set(0.5)
    nablaC2.scale.set(0.7)

    nablaC2.isSprite=true;
    nablaC2.x=backpropx_cost+160
    nablaC2.y=layout.CY-40;

    var lr = new PIXI.Sprite(loader.resources["/easyNN/images/cost/lr.png"].texture);
        lr.anchor.set(0.5)
        lr.scale.set(0.8)
        lr.isSprite=true;
        lr.x=backpropx_cost+385;
        lr.y=layout.CY-40;

    var w3new = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w3new.png"].texture);
        w3new.anchor.set(0.5)
        w3new.scale.set(0.8)
        w3new.isSprite=true;
        w3new.x=backpropx_cost+200;
        w3new.y=layout.CY+150;

    var textBackCalc2b = [
        w3toc,        
        [ ["To find our new         "],[backpropx_cost,layout.CY-200] ],
        w3,
        [ ["We calculate           for each of our datapoints." +'\n\n'+"then take the average to get   "],[backpropx_cost-20,layout.CY-150] ],
        [ ["We multiply            by the learning rate     "+'\n\n'+"   and subtract it from our current weight."],[backpropx_cost+25,layout.CY-50] ],
        [ ["Our final formula for our new weight is: "],[backpropx_cost+25,layout.CY+50] ],
        dctot,
        nablaC,
        nablaC2,
        lr,
        w3new


     
    ];    
    SlideBack4.drawText(textBackCalc2b);

    //BACK 5
    SlideBack5.slideNet=netBack0;
    SlideBack5.backprop=true;
    SlideBack5.backprop_labels=true;
    SlideBack5.w3=true;


    SlideBack5.draw_init(netBack0);
    SlideBack5.drawCost();

    var w3all= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w3all.png"].texture);
    w3all.isSprite=true;
    w3all.x=arrowx;
    w3all.y=arrowy;

    var dctot_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dctot.png"].texture);
        dctot_small.isSprite=true;
        dctot_small.x=backpropx_cost+90;
        dctot_small.y=layout.CY-200-55;

    var dzdw3_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dxdy/dzdw3.png"].texture);
        dzdw3_small.scale.set(0.85)
        dzdw3_small.anchor.set(0.5)
        dzdw3_small.isSprite=true;
        dzdw3_small.x=backpropx_cost+70;
        dzdw3_small.y=layout.CY-100+40;

    var w3=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w3_teal.png"].texture);
        w3.isSprite=true;
        w3.anchor.set(0.5)
        w3.scale.set(0.8);
        w3.x=backpropx_cost +270;
        w3.y=layout.CY-100+45;

    var z21=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/z21.png"].texture);
        z21.isSprite=true;
        z21.scale.set(0.6)
        z21.anchor.set(0.5)
        z21.x=backpropx_cost +355;
        z21.y=layout.CY-100+45;

    var dadz21_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dadz21.png"].texture);
        dadz21_small.scale.set(0.85)
        dadz21_small.anchor.set(0.5)
        dadz21_small.isSprite=true;
        dadz21_small.x=backpropx_cost+70;
        dadz21_small.y=layout.CY+40;

    var a21=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/a21.png"].texture);
        a21.isSprite=true;
        a21.scale.set(0.6)
        a21.anchor.set(0.5)
        a21.x=backpropx_cost +355;
        a21.y=layout.CY+45;

    var z212=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/z21.png"].texture);
        z212.isSprite=true;
        z212.scale.set(0.6)
        z212.anchor.set(0.5)
        z212.x=backpropx_cost +270;
        z212.y=layout.CY+45;

    var dcda21_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda21.png"].texture);
        dcda21_small.scale.set(0.85)
        dcda21_small.anchor.set(0.5)
        dcda21_small.isSprite=true;
        dcda21_small.x=backpropx_cost+70;
        dcda21_small.y=layout.CY+100+40;

        var a212=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/a21.png"].texture);
        a212.isSprite=true;
        a212.scale.set(0.6)
        a212.anchor.set(0.5)
        a212.x=backpropx_cost +270;
        a212.y=layout.CY+100+45;

        var ctot=new PIXI.Sprite(loader.resources["/easyNN/images/backprop/ctot.png"].texture);
        ctot.isSprite=true;
        ctot.scale.set(0.6)
        ctot.anchor.set(0.5)
        ctot.x=backpropx_cost +355;
        ctot.y=layout.CY+100+40;

    var textBackCalc3 = [
        w3all,
        [ ["To calculate              we need:", textstyles.large_bold],[backpropx_cost,layout.CY-170] ],
        dctot_small,
        [ ["         (how much does       affect       ?)"],[backpropx_cost+50,layout.CY-70] ],
        dzdw3_small, w3,z21,
        [ ["         (how much does       affect       ?"],[backpropx_cost+50,layout.CY+30] ],
        dadz21_small, z212, a21,
        [ ["         (how much does       affect       ?)"],[backpropx_cost+50,layout.CY+130] ],
        dcda21_small, a212,ctot
    ];    
    SlideBack5.drawText(textBackCalc3);

    //BACK 6
    SlideBack6.slideNet=netBack0;
    SlideBack6.backprop=true;
    SlideBack6.backprop_labels=true;
    SlideBack6.w3=true;


    SlideBack6.draw_init(netBack0);
    SlideBack6.drawCost();

    var w3all= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w3all.png"].texture);
    w3all.isSprite=true;
    w3all.x=arrowx;
    w3all.y=arrowy;

    var dctot_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dctot.png"].texture);
      //  dctot_small.scale.set(0.5)
        dctot_small.isSprite=true;
        dctot_small.x=backpropx_cost+220;
        dctot_small.y=layout.CY-200;

    var dcdw3= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcdw3.png"].texture);
    dcdw3.isSprite=true;
    dcdw3.scale.set(0.6)
    dcdw3.x=backpropx_cost;
    dcdw3.y=layout.CY-30;

    var textBackCalc3a = [
        w3all,
          dcdw3,    
          [ ["Using the calculus chain rule," +'\n'+"we multiply these values to get      "],[backpropx_cost,layout.CY-140] ],
          dctot_small,
          [ ["Now we can calculate "+'\n'+"each of these components."],[backpropx_cost+50,layout.CY+130] ],

      ];    
      SlideBack6.drawText(textBackCalc3a);

    //BACK 7
    SlideBack7.slideNet=netBack0;
    SlideBack7.backprop=true;
    SlideBack7.backprop_labels=true;
    SlideBack7.w3=true;


    SlideBack7.draw_init(netBack0);
    SlideBack7.drawCost();

    var dz21dw3_form= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dz21dw3_form.png"].texture);
    dz21dw3_form.isSprite=true;
    dz21dw3_form.scale.set(0.7)
    dz21dw3_form.x=backpropx_cost-20;
    dz21dw3_form.y=layout.CY-120;

    var b21= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/b21.png"].texture);
    b21.isSprite=true;
    b21.scale.set(0.6)
    b21.anchor.set(0.5)
    b21.x=backpropx_cost+115;
    b21.y=layout.CY-150;

    var w3toz= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w3toz.png"].texture);
    w3toz.isSprite=true;
    w3toz.x=arrowx;
    w3toz.y=arrowy;

    var textBackCalc4 = [
        [ ["       is the neuron's bias."],[backpropx_cost+100,layout.CY-160] ],

        w3toz,
        dz21dw3_form,
        b21,
    ];
    SlideBack7.drawText(textBackCalc4);

    //BACK 8
    SlideBack8.slideNet=netBack0;
    SlideBack8.backprop=true;
    SlideBack8.backprop_labels=true;
    SlideBack8.w3=true;


    SlideBack8.draw_init(netBack0);
    SlideBack8.drawCost();

    var ztoa= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/ztoa.png"].texture);
    ztoa.isSprite=true;
    ztoa.x=arrowx;
    ztoa.y=arrowy;

    var da21dz_form= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/da21dz_form.png"].texture);
    da21dz_form.isSprite=true;
    da21dz_form.scale.set(0.7)
    da21dz_form.x=backpropx_cost;
    da21dz_form.y=layout.CY-210;

    var textBackCalc5 = [
        da21dz_form,ztoa,
        [ ["Note: this formula changes"+'\n'+"depending on the activation function."],[backpropx_cost+20,layout.CY+160] ],
    ];
    SlideBack8.drawText(textBackCalc5);

    //BACK 9
    SlideBack9.slideNet=netBack0;
    SlideBack9.backprop=true;
    SlideBack9.backprop_labels=true;
    SlideBack9.w3=true;


    SlideBack9.draw_init(netBack0);
    SlideBack9.drawCost();


    var a21toc= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/a21toc.png"].texture);
    a21toc.isSprite=true;
    a21toc.x=arrowx;
    a21toc.y=arrowy;

    var dcda12_form= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda12_form.png"].texture);
    dcda12_form.isSprite=true;
    dcda12_form.scale.set(0.7)
    dcda12_form.x=backpropx_cost;
    dcda12_form.y=layout.CY-150;

    var textBackCalc6 = [
        a21toc,
        dcda12_form,
    ];
    SlideBack9.drawText(textBackCalc6);

    //BACK 10
    SlideBack10.slideNet=netBack0;
    SlideBack10.backprop=true;
    SlideBack10.backprop_labels=true;
    SlideBack10.w3=true;


    SlideBack10.draw_init(netBack0);
        SlideBack10.drawCost();
    //    SlideBack10.drawCost_steps();

    var dctotfinal_form= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dctotfinal_form.png"].texture);
    dctotfinal_form.isSprite=true;
    dctotfinal_form.scale.set(0.65)
    dctotfinal_form.x=backpropx_cost-10;
    dctotfinal_form.y=layout.CY-150;

    var w3all= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w3all.png"].texture);
    w3all.isSprite=true;
    w3all.x=arrowx;
    w3all.y=arrowy;


    var textBackCalc6a = [
        [ ["And so, all together: "],[backpropx_cost-10,layout.CY-170] ],

        dctotfinal_form, w3all,
        [ ["Next, we'll go through this example with numbers."],[backpropx_cost-30,layout.CY+170] ],
    ];
    SlideBack10.drawText(textBackCalc6a);
    

    //BACK 11
    var fakelearnbox = new PIXI.Sprite(loader.resources["/easyNN/images/boxes/learnbox.png"].texture);
    fakelearnbox.isSprite=true;
    fakelearnbox.x= layout.CX-200;
    fakelearnbox.y= layout.CY-50; 
    fakelearnbox.scale.set(1.2);

    fakelearnbox.addChild(new Button("fakestep",loader.resources["/easyNN/images/buttons/step.png"].texture,212.5,60,true));
    fakelearnbox.addChild(new Button("fakelearn",loader.resources["/easyNN/images/buttons/learn.png"].texture,125,60,true));
    fakelearnbox.addChild(new Button("fakereset",loader.resources["/easyNN/images/buttons/reset.png"].texture,38,60,true));        

    var learnboxarrow = new PIXI.Sprite(loader.resources["/easyNN/images/arrows/learnboxarrows.png"].texture);
    learnboxarrow.anchor.set(0.5);
    learnboxarrow.isSprite=true;
    learnboxarrow.x=layout.CX-30;
    learnboxarrow.y=layout.CY-115;


    var texteBackCalcInstruct = [
        fakelearnbox,
        [["On the next slide...",textstyles.large_bold], [layout.CX-350,layout.CY-130]],

        [["Click this button" +'\n'+ "to reset the net.",textstyles.medium], [layout.CX-350,layout.CY-40]],
        [["Click this button to"+'\n'+ "continuously backpropagate.",textstyles.medium], [layout.CX+150,layout.CY-60]],
        [["Click this button to"+'\n'+ " backpropagate 1 epoch.",textstyles.medium], [layout.CX+190,layout.CY+20]],
        learnboxarrow,
    ];
    SlideBack11.drawText(texteBackCalcInstruct);

    //BACK 12
    SlideBack12.slideNet=netBack0;
    SlideBack12.backprop=true;
    SlideBack12.backprop_steps=true;

    SlideBack12.w3=true;


    SlideBack12.draw_init(netBack0);
    SlideBack12.drawRateButtons();
    SlideBack12.drawCost();

    var textBackCalc7 = [
    ];

    SlideBack12.drawText(textBackCalc7);
    SlideBack12.layernum=1;
    SlideBack12.neuronnum=0;
    SlideBack12.weightsnum=0;
    SlideBack12.drawBackprop(1,0,0);
    SlideBack12.drawLearnButtons();
    SlideBack12.drawInteractive();


    //BACK 13
    SlideBack13.slideNet=netBack0;
    SlideBack13.backprop=true;
    SlideBack13.backprop_labels=true;
    SlideBack13.none=true;

    var ztoa= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/ztoa.png"].texture);
        ztoa.isSprite=true;
        ztoa.x=arrowx+10;
        ztoa.y=arrowy;

    var a21toc= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/a21toc.png"].texture);
        a21toc.isSprite=true;
        a21toc.x=arrowx;
        a21toc.y=arrowy;

    var biasarrow= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/biasarrow.png"].texture);
        biasarrow.isSprite=true;
        biasarrow.x=arrowx;
        biasarrow.y=arrowy;

    var dcdb= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcdb.png"].texture);
        dcdb.isSprite=true;
        dcdb.scale.set(0.5)
        dcdb.x=backpropx_cost;
        dcdb.y=layout.CY-140;

    var dcdb_final= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcdb_final.png"].texture);
        dcdb_final.isSprite=true;
        dcdb_final.scale.set(0.5)
        dcdb_final.x=backpropx_cost+20;
        dcdb_final.y=layout.CY+110;    

    var dzdb= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dzdb.png"].texture);
    dzdb.isSprite=true;
    dzdb.scale.set(0.5)
    dzdb.x=backpropx_cost+180;
    dzdb.y=layout.CY-33;    
        
    var textBackCalc7b_bias = [
        ztoa,a21toc,
        [ ["We also need to update the bias." +'\n'+"The overall formula is nearly the same."],[backpropx_cost,layout.CY-200] ],
        biasarrow,dcdb,
        [ ["However:                        "],[backpropx_cost+100,layout.CY] ],
        [ ["So, our final formula is: "],[backpropx_cost+20,layout.CY+80] ],

        dzdb,
        dcdb_final,

    ];

    SlideBack13.drawText(textBackCalc7b_bias);
    SlideBack13.draw_init(netBack0);
    SlideBack13.drawCost();


    // WEIGHT W1

    SlideBackCalc8.slideNet=netBack0;
    SlideBackCalc8.backprop=true;
    SlideBackCalc8.backprop_labels=true;
    SlideBackCalc8.w1=true;

    var w1 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w1_teal.png"].texture);
        w1.isSprite=true;
        w1.x=backpropx_cost+20;
        w1.y=layout.CY-203;

        var w3= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w3_teal.png"].texture);
        w3.isSprite=true;
        w3.x=backpropx_cost+335;
        w3.y=layout.CY-203;

    var dcdw1= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcdw1.png"].texture);
        dcdw1.isSprite=true;
        dcdw1.scale.set(0.6);
        dcdw1.x=backpropx_cost-10;
        dcdw1.y=layout.CY-140;


    var dz1dw1= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dz1dw1.png"].texture);
        dz1dw1.isSprite=true;
        dz1dw1.scale.set(0.5)
        dz1dw1.x=backpropx_cost+60;
        dz1dw1.y=layout.CY;

    var da1dz1= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/da1dz1.png"].texture);
    da1dz1.isSprite=true;
    da1dz1.scale.set(0.5)
    da1dz1.x=backpropx_cost+60;
    da1dz1.y=layout.CY+100;

    var w1all = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1all.png"].texture);
    w1all.isSprite=true;
    w1all.x=arrowx;
    w1all.y=arrowy;

    var textBackCalc8 = [
        dcdw1,
        dz1dw1,da1dz1, w1all,
        [ ["For        , the initial process is similar to        ."],[backpropx_cost,layout.CY-180] ],
        w1,w3,
    ];

    SlideBackCalc8.drawText(textBackCalc8);
    SlideBackCalc8.draw_init(netBack0);
    SlideBackCalc8.drawCost();







    //CALC 9
    SlideBackCalc9.slideNet=netBack0;
    SlideBackCalc9.backprop=true;
    SlideBackCalc9.backprop_labels=true;
    SlideBackCalc9.w1_all=true;

    var w1all = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1all.png"].texture);
        w1all.isSprite=true;
        w1all.x=0;
        w1all.y=50;

    var dcda1= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda11.png"].texture);
        dcda1.isSprite=true;
        dcda1.anchor.set(0.5);
        dcda1.scale.set(0.8);
        dcda1.x=backpropx_cost+170;
        dcda1.y=layout.CY-160;

    var a11 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/a11.png"].texture);
        a11.isSprite=true;
        a11.scale.set(0.6)
        a11.x=backpropx_cost+115;
        a11.y=layout.CY-130;

    var a21 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/a21.png"].texture);
        a21.isSprite=true;
        a21.scale.set(0.6)
        a21.x=backpropx_cost+265;
        a21.y=layout.CY-130;

    var a22 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/a22.png"].texture);
        a22.isSprite=true;
        a22.scale.set(0.6)
        a22.x=backpropx_cost+345;
        a22.y=layout.CY-130;

    var c1 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/c1.png"].texture);
        c1.isSprite=true;
        c1.scale.set(0.6)
        c1.x=backpropx_cost+110;
        c1.y=layout.CY-105;

    var c2 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/c2.png"].texture);
        c2.isSprite=true;
        c2.scale.set(0.6)
        c2.x=backpropx_cost+190;
        c2.y=layout.CY-105;

    var w1toc = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1toc2.png"].texture);
    w1toc.isSprite=true;
    w1toc.x=arrowx;
    w1toc.y=arrowy;

    var dcda1_form1= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda1_form1.png"].texture);
        dcda1_form1.isSprite=true;
        dcda1_form1.scale.set(0.5)
        dcda1_form1.x=backpropx_cost-70;
        dcda1_form1.y=layout.CY-20;


    var textBackCalc9 = [
       [ ["However, to find           , we need to break    "
            +'\n\n'+"it down, since         affects both        and     "
            +'\n\n'+"and therefore        and       ."],[backpropx_cost-10,layout.CY-170] ],
       dcda1_form1,w1toc,
        dcda1,a11,a21,a22,c1,c2,
    ];

    SlideBackCalc9.drawText(textBackCalc9);
    SlideBackCalc9.draw_init(netBack0);
    SlideBackCalc9.drawCost();

    //CALC 9b
    SlideBackCalc9b.slideNet=netBack0;
    SlideBackCalc9b.backprop=true;
    SlideBackCalc9b.backprop_labels=true;
    SlideBackCalc9b.w1_all=true;

    var w1toc_expand1 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1toc_expand1.png"].texture);
        w1toc_expand1.isSprite=true;
        w1toc_expand1.x=arrowx;
        w1toc_expand1.y=arrowy;

    var dcda_form2= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda_form2.png"].texture);
        dcda_form2.isSprite=true;
        dcda_form2.scale.set(0.35,0.38)
        dcda_form2.x=backpropx_cost-45;
        dcda_form2.y=layout.CY-200;



    var textBackCalc9b = [

      w1toc_expand1, 
      dcda_form2,
    ];

    SlideBackCalc9b.drawText(textBackCalc9b);
    SlideBackCalc9b.draw_init(netBack0);
    SlideBackCalc9b.drawCost();


    //CALC 9a
    SlideBackCalc9a.slideNet=netBack0;
    SlideBackCalc9a.backprop=true;
    SlideBackCalc9a.backprop_labels=true;
    SlideBackCalc9a.w1_all=true;

    var w1arrows_all = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/w1arrows_all.png"].texture);
    w1arrows_all.isSprite=true;
    w1arrows_all.x=arrowx;
    w1arrows_all.y=arrowy;

    var dcda1= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda1.png"].texture);
        dcda1.isSprite=true;
        dcda1.scale.set(0.45)
        dcda1.x=backpropx_cost-100;
        dcda1.y=20;

    var w1toc_expand2 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1toc_expand2.png"].texture);
    w1toc_expand2.isSprite=true;
    w1toc_expand2.x=arrowx;
    w1toc_expand2.y=arrowy;

    var dcda_form3= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dcda_form3.png"].texture);
    dcda_form3.isSprite=true;
    dcda_form3.scale.set(0.35,0.38)
    dcda_form3.x=backpropx_cost-45;
    dcda_form3.y=layout.CY-200;

    var dcda1_full= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/formulas/dcda1_full.png"].texture);
    dcda1_full.isSprite=true;
    dcda1_full.scale.set(0.33)
    dcda1_full.x=backpropx_cost-30;
    dcda1_full.y=layout.CY+100;

    var textBackCalc9a = [

     w1toc_expand2,
     dcda_form3,
     dcda1_full,
    ];

    SlideBackCalc9a.drawText(textBackCalc9a);
    SlideBackCalc9a.draw_init(netBack0);
    SlideBackCalc9a.drawCost();

    //CALC9a2
    SlideBackCalc9a2.slideNet=netBack0;
    SlideBackCalc9a2.backprop=true;
    SlideBackCalc9a2.backprop_labels=true;
    SlideBackCalc9a2.w1_all=true;
       
    
    var w1toc_expand2 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1toc_expand2.png"].texture);
    w1toc_expand2.isSprite=true;
    w1toc_expand2.x=arrowx;
    w1toc_expand2.y=arrowy;

    var dcda1_full2= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/formulas/dcda1_full2.png"].texture);
    dcda1_full2.isSprite=true;
    dcda1_full2.scale.set(0.38)
    dcda1_full2.x=backpropx_cost-100;
    dcda1_full2.y=layout.CY-200;

    var dadz21_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dadz21.png"].texture);
    dadz21_small.scale.set(0.7)
    dadz21_small.anchor.set(0.5)
    dadz21_small.isSprite=true;
    dadz21_small.x=backpropx_cost+220;
    dadz21_small.y=layout.CY+165;

    var dc1da21_small= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/dc1da21.png"].texture);
    dc1da21_small.scale.set(0.7)
    dc1da21_small.anchor.set(0.5)
    dc1da21_small.isSprite=true;
    dc1da21_small.x=backpropx_cost+310;
    dc1da21_small.y=layout.CY+165;
    
    var textBackCalc9a2 = [
        w1toc_expand2,
        dcda1_full2,
        [ ["Notice how we found           and           "+'\n\n'+"in the previous step."],[backpropx_cost,layout.CY+150] ],
        dadz21_small,dc1da21_small
    ];
        
    SlideBackCalc9a2.drawText(textBackCalc9a2);
    SlideBackCalc9a2.draw_init(netBack0);
    SlideBackCalc9a2.drawCost();

    //CALC9c
    SlideBackCalc9c.slideNet=netBack0;
    SlideBackCalc9c.backprop=true;
    SlideBackCalc9c.backprop_labels=true;
    SlideBackCalc9c.w1_all=true;
    

    var w1toc_expand3 = new PIXI.Sprite(loader.resources["/easyNN/images/backprop/arrows/w1toc_expand3.png"].texture);
    w1toc_expand3.isSprite=true;
    w1toc_expand3.x=arrowx;
    w1toc_expand3.y=arrowy;

    var dcdw1_full= new PIXI.Sprite(loader.resources["/easyNN/images/backprop/formulas/dcdw1_full.png"].texture);
    dcdw1_full.isSprite=true;
    dcdw1_full.scale.set(0.5)
    dcdw1_full.x=backpropx_cost-165;
    dcdw1_full.y=layout.CY-140;

        var textBackCalc9c = [
            w1toc_expand3,
            dcdw1_full,
            [ ["And so, all together:"],[backpropx_cost,layout.CY-200] ],
        ];
    
        SlideBackCalc9c.drawText(textBackCalc9c);
        SlideBackCalc9c.draw_init(netBack0);
        SlideBackCalc9c.drawCost();


    // INTERACTIVE
    // CALC10
   

    SlideBackCalc10.slideNet=netBack0;
    SlideBackCalc10.backprop=true;
    SlideBackCalc10.backprop_steps=true;

    SlideBackCalc10.w1_all=true;

    SlideBackCalc10.draw_init(netBack0);
    
    SlideBackCalc10.drawRateButtons();

    SlideBackCalc10.calc2sand=true;


    var textBackCalc10 = [

    ];
    SlideBackCalc10.drawText(textBackCalc10);
    SlideBackCalc10.layernum=0;
    SlideBackCalc10.neuronnum=0;
    SlideBackCalc10.weightsnum=0;
    SlideBackCalc10.drawBackprop(0,0,0);
    SlideBackCalc10.drawLearnButtons();
    SlideBackCalc10.drawCost();
    SlideBackCalc10.drawInteractive();







    /**----------------- SANDBOX-------------- */

    var netSand=new Net();
    SlideSandbox.sandbox=true;
    SlideSandbox.slideNet=netSand;
    netSand.setNetData(fruits);
    netSand.setOutLayer();
    netSand.update();

    netSand.getLayer(0).addNeuron();
    netSand.getLayer(0).addNeuron();

    netSand.update();

    layout.NEURON_LEFTLIM=layout.NEURON_LEFTLIM_SANDBOX;
    layout.NEURON_Y_DIF = 125;

    SlideSandbox.slideNet.setNetActFn(actFns.RELU);
    SlideSandbox.slideNet.update();

    SlideSandbox.slideNet.checkInit();
    SlideSandbox.slideNet.update();


    SlideSandbox.draw_init(netSand);

    var SlideNet2Graph = new Graph(netSand.data);
    SlideSandbox.graphContainer.addChild(SlideNet2Graph.getGraph());

    SlideSandbox.drawActFnButtons();
    SlideSandbox.drawLayerButtons();
    SlideSandbox.drawLearnButtons(SlideNet2Graph);
    SlideSandbox.drawRateButtons();

    SlideSandbox.buttonContainer.getChildByName("buttonNeuronAddContainer").getChildAt(0).visible=true;
    SlideSandbox.buttonContainer.getChildByName("buttonNeuronRemContainer").getChildAt(0).visible=true;

    SlideSandbox.drawCost();
    SlideSandbox.drawDataButtons(SlideNet2Graph);
}