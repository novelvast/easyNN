// 组织了每个页面中的非共有元素
import { Slide } from "./Slide.js"
import { layout } from "./layout.js";
import { Net } from "../Model/net.js"
import { actFns } from "../Model/neuron.js";
import {fruits, fruits_single} from "../Model/data.js"
import {Graph} from "./Graph.js"
import {textstyles} from "./textstyles.js"
import { Button } from "./Button.js";
// import {viewst} from "../Controller.js"

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

    // INSTRUCT 1
    var textInstruct1 = [    
        [ ["欢迎来到easyNN！", textstyles.large_bold], [layout.TEXTSTART_X, layout.TEXTSTART_Y]],
        [ ["你玩过chatGPT吗？\n你用过识图软件吗？\n你用过语音识别吗？\n你用过……"], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 100]],
        [ ["欢如果你的答案是肯定的，那么恭喜你，你已经不知不觉中使用了神经网络来方便你的日常生活。" ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 270]],
        [ ["那么今天，我们就开始学会神经网络吧！" ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 330]],
        [ ["别担心，在接下来的介绍中我会尽量使用通俗的语言来讲解，帮助你从零开始搭建\n起一个神经网络并训练它，最终让它帮我们完成分类的任务。" ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 390]],
    ];    
    SlideInstruct1.drawText(textInstruct1);
    


    // INSTRUCT 2
    
    var arrow1 =new PIXI.Sprite(loader.resources["/images/arrows/arrow1.png"].texture);
        arrow1.isSprite=true;
        arrow1.scale.set(0.5);
        // arrow1.x = window.innerWidth-350;
        arrow1.y = 80;
    SlideInstruct2.arrowContainer.addChild(arrow1);

    var arrow2 =new PIXI.Sprite(loader.resources["/images/arrows/arrow1.png"].texture);
        arrow2.isSprite=true;
        arrow2.scale.set(0.5);
        // arrow2.x = window.innerWidth-750;
        arrow2.y = 70;
        arrow2.height = 110;
    SlideInstruct2.arrowContainer.addChild(arrow2);

    var sandbox =new PIXI.Sprite(loader.resources["/images/intro/sandbox.png"].texture);
        sandbox.isSprite=true;
        sandbox.anchor.set(0.5);
        sandbox.x = layout.CX+340;
        sandbox.y = 210;

    SlideInstruct2.SlideInstructLayers=true;
    var textInstruct2 = [    
        [ ["开始之前", textstyles.large_bold], [layout.TEXTSTART_X, layout.TEXTSTART_Y]],
        [ ["从现在开始，你将会进入一个神奇的世界，学习一种强大的机器学习技术——神经网络。" + "\n" +
        "神经网络不仅可以像人脑一样学习、思考、识别，还能够处理复杂的数据和模式，从而实现许多智能化的应用。"], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 100]],
        [ ["在我们的网站上，你将会通过互动式的学习方式，逐步掌握神经网络的基本原理、构造和应用，" + "\n" +
        "不断挑战自己的学习和创造能力。帮助你深入了解神经网络的工作方式和原理", ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 200]],
        [ ["无论你是第一次听说神经网络还是资深的机器学习爱好者，我们都欢迎你加入我们" + "\n" +
        "的大家庭，一起探索神经网络的奥妙和潜力，共同追求知识和技能的进步！", ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 300]],
        
    ];    
    SlideInstruct2.drawText(textInstruct2);
    




    /*  ------- INTRO --------*/ 

    // INTRO 1
    
    var sorter =new PIXI.Sprite(loader.resources["/images/intro/sorter.png"].texture);
        sorter.isSprite=true;
        sorter.anchor.set(0.5)
        sorter.x=layout.CX + 400;
        sorter.y=layout.CY;

    var textIntro1= [
        sorter,    
        [ ["作为人类，对于物体分类这项任务，我们有着得天独厚的优势"], [layout.TEXTSTART_X, layout.TEXTSTART_Y]],
        [ ["我们可以通过观察、思考和比较轻松地完成这个任务，但是对\n于计算机来说，这似乎是一项棘手的挑战。"], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 50]],
        [ ["幸好，我们有神经网络。" ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 150]],
        [ ["神经网络的运作方式和人类的大脑很相似，也能够学习、思考和识别。" ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 200]],
        [ ["有些神经网络就被训练来帮助我们完成识别和分类数据的任务，从而\n解决了人类难以解决的问题，例如在图像识别、自然语言处理等领域中的应用。" ], [layout.TEXTSTART_X, layout.TEXTSTART_Y + 250]],
    ];
    SlideIntro1.drawText(textIntro1);
    

    //INTRO 2
    
    var examples_labels=new PIXI.Sprite(loader.resources["/images/intro/examples_labels.png"].texture);
        examples_labels.isSprite=true;
        examples_labels.scale.set(0.75);
        examples_labels.anchor.set(0.5);
        examples_labels.x=layout.CX+400;
        examples_labels.y=layout.CY;

    var textIntro2 = [
        [["要训练我们自己的神经网络，首先需要准备一些\n样例让它练练手。可别以为神经网络是万能的，\n还是需要我们给它提供正确的分类结果，才能\n知道哪些数据应该被放在哪个盒子里。"], [layout.CX-500, layout.CY-200]],
        [["这些样例就像是小学生的作业一样，需要打上标\n注，才能让神经网络知道哪些是“老师说过的”，\n哪些是“自己瞎编的”。神经网络会通过这些样\n例进行学习，逐渐掌握如何把数据分类。" ], [layout.CX-500, layout.CY-30]],
        [["所以，让我们开始准备数据吧！让我们的神经网\n络也像小学生一样“好好学习天天向上”"],[layout.CX-500,layout.CY+150]],
        examples_labels
    ];
    

    SlideIntro2.drawText(textIntro2);

    //INTRO 3
    var captcha=new PIXI.Sprite(loader.resources["/images/intro/captcha.png"].texture);
        captcha.isSprite=true;
        captcha.scale.set(1.2);
        captcha.anchor.set(0.5)
        captcha.x=layout.CX-360;
        captcha.y=layout.CY;

    var textIntro3 = [
        captcha,
        [["如果你在上网冲浪的时候，不小心遇到了这样一个让人困惑\n的东西，恭喜你！你很可能已经在不知情的情况下，帮助\n神经网络训练提供了标注好的数据。"], [layout.CX+50, layout.TEXTSTART_Y]],
        [["这些神秘的东西就是我们常说的“验证码”。为了防止恶意程\n序和机器人在网站上乱搞，我们需要通过让用户输入验证\n码的方式进行验证。" ], [layout.CX+50, layout.TEXTSTART_Y + 150]],
        [["当你输入正确的验证码时，你就帮助了神经网络识别图像或\n声音中的内容，并为之提供了标注好的数据。这样，神经\n网络就可以通过大量的样本学习，不断提高自己的识别\n能力，从而更好地保护网站的安全。"],[layout.CX+50,layout.TEXTSTART_Y + 300]],
        [["所以，每当你遇到一个验证码，不妨多花点心思，认真输入\n正确的结果，为神经网络提供更准确的数据。说不定哪天\n这个神经网络就能够保护你的账户和个人信息呢！"], [layout.CX+50, layout.TEXTSTART_Y + 450]],
    ];

    SlideIntro3.drawText(textIntro3);
    SlideIntro3.drawTextButtons();


    //INTRO 4
    var percep_blank =new PIXI.Sprite(loader.resources["/images/intro/percep_blank1.png"].texture);
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
        // [["快点击图片，看看这个神奇的网络能\n否轻松地帮你解决这个“水果之争”！",textstyles.instruct], [layout.CX-450, layout.CY-20] ],
    ];


    var strawx= layout.CX-320;
    var strawy= layout.CY;

    var bluex= layout.CX-460;
    var bluey=layout.CY;

    var inx= percep_blank.x+3;
    var iny = percep_blank.y+110;

    var singleblue2 =new PIXI.Sprite(loader.resources["/images/intro/singleblue.png"].texture);
        singleblue2.x=inx;
        singleblue2.y=iny;
        singleblue2.visible=false;

    var singlestraw2 =new PIXI.Sprite(loader.resources["/images/intro/singlestraw.png"].texture);
        singlestraw2.x=inx;
        singlestraw2.y=iny;
        singlestraw2.visible=false;

    var singleblue =new PIXI.Sprite(loader.resources["/images/intro/singleblue.png"].texture);
        singleblue.isSprite=true;
        singleblue.x=bluex;
        singleblue.y=bluey;
        singleblue.interactive=true;
        singleblue.buttonMode=true;
        singleblue.on('click', async function(e){

            singleblue2.visible=true;
            singlestraw2.visible=false;


            await sleep(500);
           percep_blank.texture=loader.resources["/images/intro/percep_blue1.png"].texture;
           
        });

        singleblue.on('tap', async function(e){

            singleblue2.visible=true;
            singlestraw2.visible=false;


            await sleep(500);
           percep_blank.texture=loader.resources["/images/intro/percep_blue1.png"].texture;
           
        });


    var singlestraw =new PIXI.Sprite(loader.resources["/images/intro/singlestraw.png"].texture);
        singlestraw.isSprite=true;
        singlestraw.x=strawx;
        singlestraw.y=strawy;
        singlestraw.interactive=true;
        singlestraw.buttonMode=true;
        singlestraw.on('click', async function(e){

            singlestraw2.visible=true;
            singleblue2.visible=false;

            await sleep(500);
            percep_blank.texture=loader.resources["/images/intro/percep_straw1.png"].texture;
            
        });

        singlestraw.on('tap', async function(e){

            singlestraw2.visible=true;
            singleblue2.visible=false;

            await sleep(500);
            percep_blank.texture=loader.resources["/images/intro/percep_straw1.png"].texture;
            
        });

    SlideIntro4.drawText(textIntro1b);
    SlideIntro4.textContainer.addChild(singleblue,singleblue2,singlestraw,singlestraw2);
    SlideIntro4.drawInteractive();

    //INTRO 5
    var example_blue=new PIXI.Sprite(loader.resources["/images/intro/input_example.png"].texture);
        example_blue.isSprite=true;
        example_blue.scale.set(0.9);
        example_blue.anchor.set(0.5);
        example_blue.x= layout.CX+200;
        example_blue.y= layout.CY;

    var textIntro3a = [
        example_blue,
        [["首先，让我们来揭开一个谜团：怎样才能让电脑\n看懂图片呢？\n答案是——数字！"], [layout.CX-500, layout.TEXTSTART_Y]],
        [["没错，有些神经网络可以通过像素来识别图片。\n对于我们的神经网络而言，我们需要为数据分\n配一些关键属性，以便让网络来识别这些数据。" ], [layout.CX-500, layout.TEXTSTART_Y + 150]],
        [["比如，我们想让神经网络区分草莓和蓝莓。那么，\n我们可以给这些水果标上两个属性：长度和\n圆润程度。草莓通常比蓝莓长而尖，而蓝莓则\n更加短而圆润。把这些属性数字化之后，神经\n网络就能够通过这些数字来判断水果的种类了！"],[layout.CX-500,layout.TEXTSTART_Y + 300]],
        [["当然，属性的选择不是唯一的，可以根据实际情\n况选择更多更准确的属性来让网络进行分类识别。" ], [layout.CX-500, layout.TEXTSTART_Y + 500]],
    ];

    SlideIntro5.drawText(textIntro3a);

    //INTRO 6
    var SlideIntroGraph = new Graph(fruits);
    SlideIntro6.labelsContainer.addChild(SlideIntroGraph.getGraph());
    SlideIntro6.labelsContainer.getChildByName("axis").scale.set(1.2);

    SlideIntro6.labelsContainer.getChildByName("axis").x=layout.CX-460;
    SlideIntro6.labelsContainer.getChildByName("axis").y=layout.CY-130;

      var textIntro4a = [
        [["这张图包含了所有我们用来训练的数据",textstyles.large_bold], [layout.TEXTSTART_X,layout.TEXTSTART_Y]],
        [["图中有许多点，红点代表草莓，蓝点代表蓝莓。横坐标代表长度，纵坐标代表圆润程度",], [layout.TEXTSTART_X,layout.TEXTSTART_Y + 60]],
        [["因为在上一页中我们只为数据定义了这两个属性，\n所以我们可以把所有数据点画在一个二维平面上。"], [layout.CX-70,layout.CY-130]],
        [["训练神经网络的过程就像是在寻找一条线，这条线" + "\n" +
          "可以完美地来将数据点分成两个部分。如果我们有" + "\n" +
          "三个或更多属性，那么训练过程就像是在找寻一个" + "\n" +
          "“平面”，将所有的数据点分割开来。它们在本质上" + "\n" +
          "是一样的，只是维度增加了而已。"], [layout.CX-70,layout.CY-30]],
        [["现在，我们可以开始建立我们的神经网络了，让它帮我们处理这些数据吧", textstyles.large_bold], [layout.TEXTSTART_X,layout.CY+230]],

    ];
    SlideIntro6.drawText(textIntro4a);

    //INTRO 7
    var percep_labels =new PIXI.Sprite(loader.resources["/images/intro/percep_labels.png"].texture);
        percep_labels.isSprite=true;
        percep_labels.anchor.set(0.5);
        percep_labels.x=layout.CX-100;
        percep_labels.y=layout.CY;

    var textNeuronA = [
        [["就像我们的大脑一样，神经网络也由许多神经元组成"], [ layout.CX+150, layout.TEXTSTART_Y + 100]],
        [["这些神经元之间是通过权重(weight)连接起来的，类似\n于我们的大脑中神经元之间的连接。"], [ layout.CX+150, layout.TEXTSTART_Y + 200]],
        [["这些权重可以被看作是神经元之间的“力量”，影响着它\n们如何相互作用。所以，就像大脑中神经元的\n联系一样，神经网络中神经元之间的权重连接也至关重要！"], [ layout.CX+150, layout.TEXTSTART_Y + 300]],
        percep_labels,

    ];

    SlideIntro7.drawText(textNeuronA);
    SlideIntro7.drawTextButtons();

    //INTRO 8
    var percep_layers =new PIXI.Sprite(loader.resources["/images/intro/percep_layers.png"].texture);
        percep_layers.isSprite=true;
        percep_layers.anchor.set(0.5);
        percep_layers.x=layout.CX-150;
        percep_layers.y=layout.CY;

    var textNeuronA2 = [
        percep_layers,
        [["神经元被按照一定的顺序组织在一起，形成了所谓的"], ["“层(layer)”",textstyles.large_bold], [ layout.CX+50, layout.TEXTSTART_Y + 100]],
        [["最左边的一层就是“输入层”，它负责接收我们的输入" + "\n" +
          "最右边的一层则是“输出层”，它决定了我们最终的分类结果。" + "\n" +
          "而夹在中间的一些层，我们称之为“隐藏层”，它们的神秘性就" + "\n" +
          "如同蒙着一层神秘的面纱，不为人所知。不过这些隐藏层的存" + "\n" +
          "在，让我们的神经网络更加强大和高效。"],[layout.CX+50,layout.TEXTSTART_Y + 150]],

        [["复杂的计算过程就发生在“隐藏层”和“输出层”。在“隐藏层”和" + "\n" +
          "“输出层”中，神经元们的相互作用和加权计算会帮助我们得到最" + "\n" +
          "终的结果。这就好像我们的大脑通过各种神经元之间的连接，进" + "\n" +
          "行信息处理和决策一样。"],[layout.CX+50,layout.TEXTSTART_Y+300]],


        [["一个神经网络可以有许多个“隐藏层”，也可以没有隐藏层，但必" + "\n" +
        "须有而且只能有一个输入层和一个输出层。"],[layout.CX+50,layout.TEXTSTART_Y+450]]
    ];

    SlideIntro8.drawText(textNeuronA2);
    SlideIntro8.drawTextButtons();


    /*  ------- NEURON --------*/ 

    // NEURON 1
    var neuron_example3=new PIXI.Sprite(loader.resources["/images/intro/neuron_example3.png"].texture);
        neuron_example3.scale.set(0.65);
        neuron_example3.anchor.set(0.5);

        neuron_example3.isSprite=true;
        neuron_example3.x=layout.CX+80;
        neuron_example3.y=layout.CY;

    var textNeuron1b = [
        neuron_example3,
        [ ["你应该已经对神经网络有了一个大概的了解，接下来我们来具体看看神经元" ], [ layout.CX-470, layout.TEXTSTART_Y] ],
        [ ["这里有一个神经元. ", textstyles.large_bold], [ layout.CX-470, layout.CY-180]],
        [ ["一个神经元的计算过程是相当简单的：" + "\n" +
        "它接收一些输入(每个输入都是单个数字)，" + "\n" +
        "然后进行一些数学运算，" + "\n" +
        "最后输出一个结果，" + "\n" +
        "这个结果代表着神经网络对输入的理解和判断。" ], [ layout.CX+300, layout.CY+120] ],

    ];
    SlideNeuron1.drawText(textNeuron1b);

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
        labels: ["length", "roundness"],
        type: ["blueberry"]
    }

    SlideNeuron2.slideNet.setNetData(train_data2);
    SlideNeuron2.slideNet.setOutLayer();
    SlideNeuron2.slideNet.update();
    SlideNeuron2.draw_init_large(SlideNeuron2.slideNet);
    SlideNeuron2.slideNet.getLayer(0).getNeuron(0).bias=0.21;

    var neuron_large_over=new PIXI.Sprite(loader.resources["/images/net/neuronOver_large.png"].texture);
        neuron_large_over.isSprite=true;
        neuron_large_over.anchor.set(0.5);
        neuron_large_over.x=layout.NEURON_LEFTLIM_LARGE;
        neuron_large_over.y=layout.CY;

    var inputexample=new PIXI.Sprite(loader.resources["/images/intro/input_example.png"].texture);
        inputexample.isSprite=true;
        inputexample.scale.set(0.7);
        inputexample.x= layout.CX-380;
        inputexample.y= layout.CY-170;

    var textNeuron2 = [
        neuron_large_over,
        inputexample,
        [["我们每次给我们的网络提供一条训练数据"], [layout.CX-480,layout.CY-200]],
        [["用我们之前定义的长度和" + "\n" +
        "圆润程度作为我们的 "], ["输入", textstyles.large], [layout.CX-480,layout.CY+160]],
    ];

    SlideNeuron2.drawText(textNeuron2);
    SlideNeuron2.drawTextButtons();

    //NEURON 3
    SlideNeuron3.largenet=1;
    SlideNeuron3.slideNet=net_neuron;
    SlideNeuron3.slideNet.update();
    SlideNeuron3.draw_init_large(SlideNeuron3.slideNet);

    var neuron_large_actfncover=new PIXI.Sprite(loader.resources["/images/net/neuron_large_actfncover.png"].texture);
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

    var textNeuron2b = [neuron_large_actfncover
    //     [["还记得我们说过神经元之间由权重进行连接吗？"], [layout.TEXTSTART_X, layout.TEXTSTART_Y]],
    //     [neuron_large_actfncover,["每个输入都乘上一个"],[" 权重. ",textstyles.medium_bold], [layout.CX-470,layout.CY-200]],
    //     [["之后，再将乘以权重后的值求和 "], [layout.CX-470,layout.CY-145]],
    //    [["最后，把求和的结果再加上一个数，我们把这个数叫做——"], ["偏置(bias)", textstyles.medium_bold], [layout.CX-450,layout.CY-95]],
    //     [["如果你对某个输入的权重感到好奇，只需要把鼠标\n放在输入和神经元的连接线上，就可以看到对应的权重.",textstyles.instruct], [layout.CX-470,layout.CY-20]],
    //     [["橙色 ",orange], ["代表权重为负值"+'\n',med],
    //         ["蓝色 ",blue], ["代表权重为正值",med], [layout.CX-350,layout.CY+35]],
    //     [["线越粗代表权重越大，神经元中绿色的值就是我们的计算结果."],[layout.CX-440,layout.CY+130]],
    //     [["现在，修改一下权重，看看神经元的计算结果是怎么变化的吧！"],[layout.CX-440,layout.CY+170]],
    //     [["另外需要注意，当我们创建网络时，神经网络的权重是随机数，偏置为0"],[layout.CX-440,layout.CY+200]],


    
    ];

    SlideNeuron3.drawText(textNeuron2b);
    SlideNeuron3.drawTextButtons();
    SlideNeuron3.drawInteractive();


    //NEURON 4
    SlideNeuron4.largenet=1;

    SlideNeuron4.slideNet=net_neuron;
    SlideNeuron4.slideNet.update();
    SlideNeuron4.draw_init_large(SlideNeuron4.slideNet);

    var sigmoid=new PIXI.Sprite(loader.resources["/images/intro/sigmoid_graph.png"].texture);
    sigmoid.isSprite=true;
    sigmoid.scale.set(0.9)
    sigmoid.x=layout.CX-480;
    sigmoid.y=layout.CY-90;

    var textNeuron2c = [sigmoid,
        [ ["求出这个值之后还没有结束，我们还需要把它放到一个函数中，这个函数名叫 "+'\n'], ["激活函数(activation function)", textstyles.large_bold], [layout.CX-480,layout.CY-200]],   
        [ ["现在，我们使用的激活函数是sigmoid函数，它长这个样子: "], [layout.CX-480,layout.CY-120]],
        [ ["不仅看起来很有趣，它还能把我们的输出限制在0到1之间 "], [layout.CX-480,layout.CY+170]],
        [ ["看到图中的紫色数字了吗？那就是我们经过激活函数计算得到的结果"], [layout.CX-480,layout.CY+200]],

    ];
    SlideNeuron4.drawText(textNeuron2c);
    SlideNeuron4.drawTextButtons();  
    SlideNeuron4.drawInteractive();


    //NEURON 5
    SlideNeuron5.largenet=1;

    SlideNeuron5.slideNet=net_neuron;
    SlideNeuron5.slideNet.update();
    SlideNeuron5.draw_init_large(SlideNeuron5.slideNet);

    var relu=new PIXI.Sprite(loader.resources["/images/intro/relu_graph.png"].texture);
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
        [ ["激活函数非常重要，因为它可以让神经网络\n从简单的线性分类问题转向解决那些更为复杂的"],["非线性问题",textstyles.ital], [layout.CX-470,layout.CY-170]],
        [ ["简而言之，这允许我们对那些无法用一条线分割的数据进行分类"], [layout.CX-470,layout.CY-90]],   

        [ ["现在，让我们来尝试不同的激活函数，看看它们对神经网络的影响吧！"], [layout.CX-420,layout.CY-10]],   
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
        [["我们在应用激活函数" +'\n'+"之后得到的数值"+'\n'+"就是神经网络最终的输出 - "+'\n'],[layout.CX-450,layout.CY-190]],
       [["         也被叫做它的"], [" activation.  ", textstyles.large_bold],[layout.CX-450,layout.CY-105]],
       [["在这里，更活跃的神经元是明黄色.",textstyles.instruct], [layout.CX-465,layout.CY-50]],
       [["把鼠标悬停在神经元上" +'\n'+"来查看它的formula.",textstyles.instruct], [layout.CX-450,layout.CY]],

    
       /*  [["We can show a neuron's activation "+'\n'
        +"through its color - more active neurons" +'\n'+ "are a brighter yellow.", textstyles.instruct], [layout.CX-450,layout.CY]],
        [["Hover your mouse over the neuron" +'\n'+"to view its formula.",textstyles.instruct], [layout.CX-450,layout.CY+100]],
        */    
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


    var targetarrow=new PIXI.Sprite(loader.resources["/images/arrows/targetarrow.png"].texture);
    targetarrow.isSprite=true;
    targetarrow.scale.set(0.5)
    targetarrow.x=layout.CX-110;
    targetarrow.y=layout.CY-75;

    var textNet1 = [
        targetarrow,
        [["因为我们要分成两类,"+'\n'+ "所以在我们的输出层中需要两个最终的神经元. ", textstyles.large_bold], [layout.CX-470,layout.CY-170]],
        //[["Each output neuron corresponds to a different class."], [layout.LEFTBUFFER+500,170]],

        [["当我们的图片是一个"], [" 蓝莓", textstyles.default_blue], [", 我们希望: "], [layout.CX,layout.CY-80]],
        [["这个神经元的值为"], [" 0",textstyles.large_bold], [layout.CX+40,layout.CY-10]],
        [["这个神经元的值为"], [" 1",textstyles.large_bold], [layout.CX+40,layout.CY+40]],
        [[" 这是我们的"], [" 目标 ", textstyles.large_bold], ["值."], [layout.CX+20,layout.CY+100]],
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
        [["我们可以添加隐藏层..."], [layout.CX+25,layout.CY-150]],
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
        [["我们可以添加隐藏层..."], [layout.CX+25,layout.CY-150]],
        [["...也可以向每个隐藏层中添加神经元."], [layout.CX+100,layout.CY-100]],
        [["特别注意前一层的"], [" 输出 ",textstyles.large_bold], [layout.CX+120,layout.CY-50]],
        [["是怎么转变为下一层的"], [" 输入 ",textstyles.large_bold], ["的. "], [layout.CX+130,layout.CY]],
        [["这个从输入"+'\n'+ "到最终输出的过程被叫做 "],[layout.CX+140,layout.CY+100]],
        [["前向传播.",textstyles.large_bold], [layout.CX+140,layout.CY+160]],
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
    var textNet1d = [
        [["既然我们已经建立了我们的神经网络网络，我们可以开始着手训练它."], [layout.CX-250,layout.CY-120]],
        [["这是神经网络学习如何将数据分类的过程."], [layout.CX-350,layout.CY-70]],
        [["为了学习，我们的神经网络需要使用一种算法，叫做"], [" 反向传播.",textstyles.large_bold], [layout.CX-320,layout.CY-20]],

    ];
    SlideBackIntro1.drawText(textNet1d);
    SlideBackIntro1.drawTextButtons();

    //back2
    var percep_forward=new PIXI.Sprite(loader.resources["/images/cost/percep_forward.png"].texture);
    percep_forward.anchor.set(0.5);
    percep_forward.isSprite=true;
    percep_forward.scale.set(0.6)
    percep_forward.x=layout.CX+300;
    percep_forward.y=layout.CY-120;

    var percep_cost=new PIXI.Sprite(loader.resources["/images/cost/percep_cost.png"].texture);
    percep_cost.anchor.set(0.5);
    percep_cost.isSprite=true;
    percep_cost.scale.set(0.6)
    percep_cost.x=layout.CX+350;
    percep_cost.y=layout.CY+20;

    var percep_update=new PIXI.Sprite(loader.resources["/images/cost/percep_update.png"].texture);
    percep_update.anchor.set(0.5);
    percep_update.isSprite=true;    
    percep_update.scale.set(0.6)
    percep_update.x=layout.CX+320;
    percep_update.y=layout.CY+160;


    var textNet1d2 = [
        percep_forward,percep_cost,percep_update,
        [["反向传播有3个步骤:"], [layout.CX-450,layout.CY-180]],
        [["1. 前向传播                                           " +'\n', textstyles.large_bold],
         [     "就像我们之前做的那样 - 我们给网络一个输入，然后计算输出.  "], [layout.CX-420,layout.CY-120]],
        [["2. 误差计算                                                  " +'\n', textstyles.large_bold],
         [     "我的实际输出值与目标值相差多少？"], [layout.CX-420,layout.CY]],
        [["3. 更新                                                                    " +'\n', textstyles.large_bold],
         [     "调整权重和偏置来让结果更接近目标值. "], [layout.CX-420,layout.CY+120]],

    ];
    SlideBackIntro2.drawText(textNet1d2);
    SlideBackIntro2.drawTextButtons();



    //COST 1
    var costform = new PIXI.Sprite(loader.resources["/images/cost/costformwb2.png"].texture);
        costform.scale.set(0.8)
        costform.anchor.set(0.5)

        costform.isSprite=true;
        costform.x=layout.CX;
        costform.y=layout.CY-30;

        var ital_sm= new PIXI.TextStyle({
            fontFamily: 'Helvetica',
            fontWeight: 400,
            fontSize: 18,
            fontStyle: 'italic'
        
          });

    var textError1 = [
        costform,
        [["我们想知道我们网络的输出与目标值相差有多远."], [layout.CX-450,layout.CY-190]],
        [["为了做到这一点，我们需要使用"],[" 代价函数(cost function).",textstyles.large_bold], [layout.CX-350,layout.CY-140]],

        [[" n = 数据点的个数"+'\n'+" x = 对每个输出神经元 ",ital_sm], [layout.CX -300,layout.CY+40]],
        [["输出神经元的激活取决于网络的当前网络的权重和偏置."], [layout.CX-450,layout.CY+120]],
        [["所以，我们可以把代价函数看成是整个神经网络的权重和偏差的函数. "], [layout.CX-450,layout.CY+170]],
    ];
    SlideCost1.drawText(textError1);

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
        [ [" 这里有一个神经网络是如何计算代价的例子."],[layout.CX-470,layout.CY-180] ],
        [ [" 提示：点击权重可以更改它们，"+'\n'+ " 点击图片可以更换一个新的样例",textstyles.instruct],[layout.CX-450,layout.CY+120] ],
        [ [" Notice how                    "+'\n'],[" changing the"],[" weights ",textstyles.large_bold],[layout.NEURON_LEFTLIM+450,layout.CY-60] ],
        [ [" changes the"],[" output   ",textstyles.large_bold],[layout.NEURON_LEFTLIM+450,layout.CY] ],
        [ [" which changes the"],[" cost. ",textstyles.large_bold],[layout.NEURON_LEFTLIM+450,layout.CY+40] ],
    ];
   
    SlideCost2.drawText(textNet1e);
    SlideCost2.costSteps=true;
    SlideCost2.drawCost_steps();
    SlideCost2.drawInteractive();

    // layout.NEURON_UPPERLIM = window.innerHeight/2 -80;

    //COST 3
    var costgraph = new PIXI.Sprite(loader.resources["/images/cost/costgraph.png"].texture);
    costgraph.anchor.set(0.5)
    costgraph.isSprite=true;

    var costgraphx= layout.CX-230;
    var costgraphy= layout.CY+50;

    costgraph.x=costgraphx;
    costgraph.y=costgraphy;

    var textError3 = [
        costgraph,
        [["让我们看一下单个权重."], [layout.CX-450,layout.CY-200]],
        [["它与代价的关系看起来大概是这样的."], [layout.CX-450,layout.CY-150]],
        [["我们希望找到一个 w 的值"+'\n'+"这个w值会让代价最小.",textstyles.large_bold], [layout.CX+40,layout.CY-80]],
        [["虽然这个问题看起来很简单,"+'\n'+"但因为神经网络有多个权重和偏置," 
            +'\n'+"因此影响代价的因素不止一个   ", textstyles.medium], [layout.CX+40,layout.CY]],
        [["(We just quickly run out of dimensions to visualize it in.)", textstyles.medium], [layout.CX+40,layout.CY+90]],
    ];
    SlideCost3.drawText(textError3);

    //COST 4
    var costgraph_point = new PIXI.Sprite(loader.resources["/images/cost/costgraph_point.png"].texture);
    costgraph_point.anchor.set(0.5)
    costgraph_point.isSprite=true;
    costgraph_point.x=costgraphx;
    costgraph_point.y=costgraphy;

    var nablaC = new PIXI.Sprite(loader.resources["/images/cost/nablaC.png"].texture);
    nablaC.anchor.set(0.5)
    nablaC.scale.set(0.8)

    nablaC.isSprite=true;
    nablaC.x=layout.CX+70+185;
    nablaC.y=layout.CY+70+13;

    var textError4 = [
        costgraph_point,
        [["为了调整神经网络的权重和偏置来使代价最小化，我们使用了一种算法："+'\n'],["          梯度下降法.", textstyles.large_bold], [layout.CX-450,layout.CY-180]],
        [["首先，我们找到当前的权重和偏置."], [layout.CX+40,layout.CY-80]],
        [["接下来，我们求出这个点的斜率, 或者叫做"], [" 梯度 "+'\n',textstyles.large_bold], [layout.CX+40,layout.CY-20]],
        [["我们把它记作            "], [layout.CX+70,layout.CY+70]],
        nablaC,


    ];
    SlideCost4.drawText(textError4);

    //COST 5
    var costgraph_slope = new PIXI.Sprite(loader.resources["/images/cost/costgraph_slope1.png"].texture);
        costgraph_slope.anchor.set(0.5)
        costgraph_slope.isSprite=true;
        costgraph_slope.x=costgraphx;
        costgraph_slope.y=costgraphy;


        var minnablaC = new PIXI.Sprite(loader.resources["/images/cost/minnablaC.png"].texture);
            minnablaC.anchor.set(0.5)
            minnablaC.scale.set(0.8)

            minnablaC.isSprite=true;
            minnablaC.x=layout.CX+445;
            minnablaC.y=layout.CY-190+13;

        var minnablaC2 = new PIXI.Sprite(loader.resources["/images/cost/minnablaC.png"].texture);
            minnablaC2.anchor.set(0.5)
            minnablaC2.scale.set(0.8)

            minnablaC2.isSprite=true;
            minnablaC2.x=layout.CX+40+165;
            minnablaC2.y=layout.CY-95+13;

        var lr = new PIXI.Sprite(loader.resources["/images/cost/lr.png"].texture);
            lr.anchor.set(0.5)
            lr.scale.set(0.8)

            lr.isSprite=true;
            lr.x=layout.CX+195+165;
            lr.y=layout.CY-48+13

        var wnewform = new PIXI.Sprite(loader.resources["/images/cost/wnewform.png"].texture);
            wnewform.anchor.set(0.5)
            wnewform.scale.set(0.7)

            wnewform.isSprite=true;
            wnewform.x=layout.CX+220;
            wnewform.y=layout.CY+170;

    var textError5 = [
        costgraph_slope,

        [["我们想沿着下坡的方向移动，所以              "], [layout.CX,layout.CY-190]],
        minnablaC,

        [["We find the magnitude of change           "
            +'\n\n'+ "by multiplying"+'\n\n'+ "by a value called the learning rate"], [layout.CX+40,layout.CY-140]],
        minnablaC2,
        [["这是一个我们事先设定好的数字 -" +'\n'+"通常在 0 和 1 之间.",textstyles.medium], [layout.CX+60,layout.CY+5]],
        lr,
        [["我们最终用来更新权重的公式是:"], [layout.CX+40,layout.CY+80]],
        wnewform

    ];
    SlideCost5.drawText(textError5);

    //COST 6
    var costgraph_slope2 = new PIXI.Sprite(loader.resources["/images/cost/costgraph_slope2.png"].texture);
        costgraph_slope2.anchor.set(0.5)
        costgraph_slope2.isSprite=true;
        costgraph_slope2.x=costgraphx;
        costgraph_slope2.y=costgraphy;
    var textError6 = [
        costgraph_slope2,
        [["一直重复这些步骤，直到斜率变为0."], [layout.CX+20,layout.CY-60]],
        [["每次我们计算代价并更新我们的网络"+'\n'+" 被叫做一次"],[" ？？(epoch).", textstyles.large_bold], [layout.CX+20,layout.CY]],
    ];
    SlideCost6.drawText(textError6);

    //COST 7
    var costgraph_lrsmall = new PIXI.Sprite(loader.resources["/images/cost/costgraph_lrsmall.png"].texture);
        costgraph_lrsmall.anchor.set(0.5)
        costgraph_lrsmall.scale.set(0.8)
        costgraph_lrsmall.isSprite=true;
        costgraph_lrsmall.x=layout.CX-200;
        costgraph_lrsmall.y=layout.CY;

    var costgraph_lrlarge = new PIXI.Sprite(loader.resources["/images/cost/costgraph_lrlarge.png"].texture);
        costgraph_lrlarge.anchor.set(0.5);
        costgraph_lrlarge.scale.set(0.8);
        costgraph_lrlarge.isSprite=true;
        costgraph_lrlarge.x=layout.CX+200;
        costgraph_lrlarge.y=layout.CY;


    var textError6a = [
        costgraph_lrsmall,costgraph_lrlarge,
        [["学习率的大小是很重要的."], [layout.CX-450,layout.CY-180]],
        [["学习率太小，则需要 "+'\n'+ "很长时间才能到达最小值."], [layout.CX-350,layout.CY+150]],
        [["学习率太大，我们可能"+'\n'+ " 会跳过最小值."], [layout.CX+50,layout.CY+150]]
    ];
    SlideCost7.drawText(textError6a);


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
    var gotocalcarrow = new PIXI.Sprite(loader.resources["/images/arrows/gotocalcarrow.png"].texture);
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
    var gotocalc=new Button("gotocalc",loader.resources["/images/buttons/calculus.png"].texture, gotocalcx,gotocalcy,true);
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
    var fakelearnbox = new PIXI.Sprite(loader.resources["/images/boxes/learnbox.png"].texture);
        fakelearnbox.isSprite=true;
        fakelearnbox.x= layout.CX-200;
        fakelearnbox.y= layout.CY+75; 
        fakelearnbox.scale.set(1.2);

    fakelearnbox.addChild(new Button("fakestep",loader.resources["/images/buttons/step.png"].texture,212.5,60,true));
    fakelearnbox.addChild(new Button("fakelearn",loader.resources["/images/buttons/learn.png"].texture,125,60,true));
    fakelearnbox.addChild(new Button("fakereset",loader.resources["/images/buttons/reset.png"].texture,38,60,true));        

    var learnboxarrow = new PIXI.Sprite(loader.resources["/images/arrows/learnboxarrows.png"].texture);
    learnboxarrow.anchor.set(0.5);
    learnboxarrow.isSprite=true;
    learnboxarrow.x=layout.CX-30;
    learnboxarrow.y=layout.CY+10;

    var textError6b = [
    fakelearnbox,
    [["就是这样!",textstyles.large_bold],[" 神经网络的“学习”就是更新其权重和偏差"], [layout.CX-300,layout.CY-200]],
    [["以最小化代价的过程               "], [layout.CX-300,layout.CY-160]],

    [["你已经完成了教程!", textstyles.large_bold], [layout.CX-170,layout.CY-90]],
    [["下一页是沙盒模式 ———— 可以随意调整之前的神经网络。"], [layout.CX-350,layout.CY-40]],
    [["点击这个按钮" +'\n'+ "来重置网络.",textstyles.medium], [layout.CX-350,layout.CY+90]],
    [["点击这个按钮"+'\n'+ "来连续执行反向传播.",textstyles.medium], [layout.CX+150,layout.CY+70]],
    [["点击这个按钮"+'\n'+ " 来进行一次反向传播.",textstyles.medium], [layout.CX+190,layout.CY+150]],
    learnboxarrow,
    // [["On the next slide is sandbox mode. Click this button to backpropogate for one epoch."+'/n'+" Click this button to continueously backpropogate. Click this button to reset the weights and biases."], [layout.CX-460,layout.CY+40]],


    ];
    SlideCost10.drawText(textError6b);


    //Credit
        SlideCredit.slidecredit=true;
        var textCredit = [
            [["Created by Allison George", textstyles.large_bold], [layout.CX-150,layout.CY-150]],
            [["feel free to email me at aegeorge@udel.edu"+'\n'+
            " or send me a tweet at @aegeorge42 "], [layout.CX-180,layout.CY-100]],

            [["Huge thanks to:"], [layout.CX-180,layout.CY]],
            [["3blue1brown                                      " +'\n', textstyles.large_bold],
            [     "    3blue1brown.com/lessons/neural-networks  "], [layout.CX-180,layout.CY+50]],
            [["Michael Nielsen                                  " +'\n', textstyles.large_bold],
            [     "    neuralnetworksanddeeplearning.com  "], [layout.CX-180,layout.CY+125]],

    ];
    SlideCredit.drawText(textCredit);



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

    var a21example= new PIXI.Sprite(loader.resources["/images/backprop/a21.png"].texture);
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

    var yimg=new PIXI.Sprite(loader.resources["/images/backprop/y.png"].texture);
    yimg.isSprite=true;
    yimg.x=backpropx_cost-15;
    yimg.y=layout.CY-103;

    var C=new PIXI.Sprite(loader.resources["/images/backprop/C.png"].texture);
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

    var w3toc= new PIXI.Sprite(loader.resources["/images/backprop/arrows/w3toc.png"].texture);
        w3toc.isSprite=true;
        w3toc.x=arrowx;
        w3toc.y=arrowy;

    var dctot= new PIXI.Sprite(loader.resources["/images/backprop/dctot.png"].texture);
        dctot.isSprite=true;
        dctot.x=backpropx_cost+100;
        dctot.y=layout.CY+30;

    var w3= new PIXI.Sprite(loader.resources["/images/backprop/w3_teal.png"].texture);
        w3.isSprite=true;
        w3.x=backpropx_cost+190;
        w3.y=layout.CY-125;

    var w32= new PIXI.Sprite(loader.resources["/images/backprop/w3_teal.png"].texture);
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

    var w3toc= new PIXI.Sprite(loader.resources["/images/backprop/arrows/w3toc.png"].texture);
        w3toc.isSprite=true;
        w3toc.x=arrowx;
        w3toc.y=arrowy;

    var w3= new PIXI.Sprite(loader.resources["/images/backprop/w3_teal.png"].texture);
    w3.isSprite=true;
    w3.x=backpropx_cost+125;
    w3.y=layout.CY-225;

    var dctot= new PIXI.Sprite(loader.resources["/images/backprop/dctot.png"].texture);
    dctot.scale.set(0.7);
    dctot.isSprite=true;
    dctot.x=backpropx_cost+54;
    dctot.y=layout.CY-200;


    var nablaC = new PIXI.Sprite(loader.resources["/images/cost/nablaC.png"].texture);
    nablaC.anchor.set(0.5)
    nablaC.scale.set(0.8)

    nablaC.isSprite=true;
    nablaC.x=backpropx_cost+270
    nablaC.y=layout.CY-90;

    var nablaC2 = new PIXI.Sprite(loader.resources["/images/cost/nablaC.png"].texture);
    nablaC2.anchor.set(0.5)
    nablaC2.scale.set(0.7)

    nablaC2.isSprite=true;
    nablaC2.x=backpropx_cost+160
    nablaC2.y=layout.CY-40;

    var lr = new PIXI.Sprite(loader.resources["/images/cost/lr.png"].texture);
        lr.anchor.set(0.5)
        lr.scale.set(0.8)
        lr.isSprite=true;
        lr.x=backpropx_cost+385;
        lr.y=layout.CY-40;

    var w3new = new PIXI.Sprite(loader.resources["/images/backprop/w3new.png"].texture);
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

    var w3all= new PIXI.Sprite(loader.resources["/images/backprop/arrows/w3all.png"].texture);
    w3all.isSprite=true;
    w3all.x=arrowx;
    w3all.y=arrowy;

    var dctot_small= new PIXI.Sprite(loader.resources["/images/backprop/dctot.png"].texture);
        dctot_small.isSprite=true;
        dctot_small.x=backpropx_cost+90;
        dctot_small.y=layout.CY-200-55;

    var dzdw3_small= new PIXI.Sprite(loader.resources["/images/backprop/dxdy/dzdw3.png"].texture);
        dzdw3_small.scale.set(0.85)
        dzdw3_small.anchor.set(0.5)
        dzdw3_small.isSprite=true;
        dzdw3_small.x=backpropx_cost+70;
        dzdw3_small.y=layout.CY-100+40;

    var w3=new PIXI.Sprite(loader.resources["/images/backprop/w3_teal.png"].texture);
        w3.isSprite=true;
        w3.anchor.set(0.5)
        w3.scale.set(0.8);
        w3.x=backpropx_cost +270;
        w3.y=layout.CY-100+45;

    var z21=new PIXI.Sprite(loader.resources["/images/backprop/z21.png"].texture);
        z21.isSprite=true;
        z21.scale.set(0.6)
        z21.anchor.set(0.5)
        z21.x=backpropx_cost +355;
        z21.y=layout.CY-100+45;

    var dadz21_small= new PIXI.Sprite(loader.resources["/images/backprop/dadz21.png"].texture);
        dadz21_small.scale.set(0.85)
        dadz21_small.anchor.set(0.5)
        dadz21_small.isSprite=true;
        dadz21_small.x=backpropx_cost+70;
        dadz21_small.y=layout.CY+40;

    var a21=new PIXI.Sprite(loader.resources["/images/backprop/a21.png"].texture);
        a21.isSprite=true;
        a21.scale.set(0.6)
        a21.anchor.set(0.5)
        a21.x=backpropx_cost +355;
        a21.y=layout.CY+45;

    var z212=new PIXI.Sprite(loader.resources["/images/backprop/z21.png"].texture);
        z212.isSprite=true;
        z212.scale.set(0.6)
        z212.anchor.set(0.5)
        z212.x=backpropx_cost +270;
        z212.y=layout.CY+45;

    var dcda21_small= new PIXI.Sprite(loader.resources["/images/backprop/dcda21.png"].texture);
        dcda21_small.scale.set(0.85)
        dcda21_small.anchor.set(0.5)
        dcda21_small.isSprite=true;
        dcda21_small.x=backpropx_cost+70;
        dcda21_small.y=layout.CY+100+40;

        var a212=new PIXI.Sprite(loader.resources["/images/backprop/a21.png"].texture);
        a212.isSprite=true;
        a212.scale.set(0.6)
        a212.anchor.set(0.5)
        a212.x=backpropx_cost +270;
        a212.y=layout.CY+100+45;

        var ctot=new PIXI.Sprite(loader.resources["/images/backprop/ctot.png"].texture);
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

    var w3all= new PIXI.Sprite(loader.resources["/images/backprop/arrows/w3all.png"].texture);
    w3all.isSprite=true;
    w3all.x=arrowx;
    w3all.y=arrowy;

    var dctot_small= new PIXI.Sprite(loader.resources["/images/backprop/dctot.png"].texture);
      //  dctot_small.scale.set(0.5)
        dctot_small.isSprite=true;
        dctot_small.x=backpropx_cost+220;
        dctot_small.y=layout.CY-200;

    var dcdw3= new PIXI.Sprite(loader.resources["/images/backprop/dcdw3.png"].texture);
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

    var dz21dw3_form= new PIXI.Sprite(loader.resources["/images/backprop/dz21dw3_form.png"].texture);
    dz21dw3_form.isSprite=true;
    dz21dw3_form.scale.set(0.7)
    dz21dw3_form.x=backpropx_cost-20;
    dz21dw3_form.y=layout.CY-120;

    var b21= new PIXI.Sprite(loader.resources["/images/backprop/b21.png"].texture);
    b21.isSprite=true;
    b21.scale.set(0.6)
    b21.anchor.set(0.5)
    b21.x=backpropx_cost+115;
    b21.y=layout.CY-150;

    var w3toz= new PIXI.Sprite(loader.resources["/images/backprop/arrows/w3toz.png"].texture);
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

    var ztoa= new PIXI.Sprite(loader.resources["/images/backprop/arrows/ztoa.png"].texture);
    ztoa.isSprite=true;
    ztoa.x=arrowx;
    ztoa.y=arrowy;

    var da21dz_form= new PIXI.Sprite(loader.resources["/images/backprop/da21dz_form.png"].texture);
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


    var a21toc= new PIXI.Sprite(loader.resources["/images/backprop/arrows/a21toc.png"].texture);
    a21toc.isSprite=true;
    a21toc.x=arrowx;
    a21toc.y=arrowy;

    var dcda12_form= new PIXI.Sprite(loader.resources["/images/backprop/dcda12_form.png"].texture);
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

    var dctotfinal_form= new PIXI.Sprite(loader.resources["/images/backprop/dctotfinal_form.png"].texture);
    dctotfinal_form.isSprite=true;
    dctotfinal_form.scale.set(0.65)
    dctotfinal_form.x=backpropx_cost-10;
    dctotfinal_form.y=layout.CY-150;

    var w3all= new PIXI.Sprite(loader.resources["/images/backprop/arrows/w3all.png"].texture);
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
    var fakelearnbox = new PIXI.Sprite(loader.resources["/images/boxes/learnbox.png"].texture);
    fakelearnbox.isSprite=true;
    fakelearnbox.x= layout.CX-200;
    fakelearnbox.y= layout.CY-50; 
    fakelearnbox.scale.set(1.2);

    fakelearnbox.addChild(new Button("fakestep",loader.resources["/images/buttons/step.png"].texture,212.5,60,true));
    fakelearnbox.addChild(new Button("fakelearn",loader.resources["/images/buttons/learn.png"].texture,125,60,true));
    fakelearnbox.addChild(new Button("fakereset",loader.resources["/images/buttons/reset.png"].texture,38,60,true));        

    var learnboxarrow = new PIXI.Sprite(loader.resources["/images/arrows/learnboxarrows.png"].texture);
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

    var ztoa= new PIXI.Sprite(loader.resources["/images/backprop/arrows/ztoa.png"].texture);
        ztoa.isSprite=true;
        ztoa.x=arrowx+10;
        ztoa.y=arrowy;

    var a21toc= new PIXI.Sprite(loader.resources["/images/backprop/arrows/a21toc.png"].texture);
        a21toc.isSprite=true;
        a21toc.x=arrowx;
        a21toc.y=arrowy;

    var biasarrow= new PIXI.Sprite(loader.resources["/images/backprop/arrows/biasarrow.png"].texture);
        biasarrow.isSprite=true;
        biasarrow.x=arrowx;
        biasarrow.y=arrowy;

    var dcdb= new PIXI.Sprite(loader.resources["/images/backprop/dcdb.png"].texture);
        dcdb.isSprite=true;
        dcdb.scale.set(0.5)
        dcdb.x=backpropx_cost;
        dcdb.y=layout.CY-140;

    var dcdb_final= new PIXI.Sprite(loader.resources["/images/backprop/dcdb_final.png"].texture);
        dcdb_final.isSprite=true;
        dcdb_final.scale.set(0.5)
        dcdb_final.x=backpropx_cost+20;
        dcdb_final.y=layout.CY+110;    

    var dzdb= new PIXI.Sprite(loader.resources["/images/backprop/dzdb.png"].texture);
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

    var w1 = new PIXI.Sprite(loader.resources["/images/backprop/w1_teal.png"].texture);
        w1.isSprite=true;
        w1.x=backpropx_cost+20;
        w1.y=layout.CY-203;

        var w3= new PIXI.Sprite(loader.resources["/images/backprop/w3_teal.png"].texture);
        w3.isSprite=true;
        w3.x=backpropx_cost+335;
        w3.y=layout.CY-203;

    var dcdw1= new PIXI.Sprite(loader.resources["/images/backprop/dcdw1.png"].texture);
        dcdw1.isSprite=true;
        dcdw1.scale.set(0.6);
        dcdw1.x=backpropx_cost-10;
        dcdw1.y=layout.CY-140;


    var dz1dw1= new PIXI.Sprite(loader.resources["/images/backprop/dz1dw1.png"].texture);
        dz1dw1.isSprite=true;
        dz1dw1.scale.set(0.5)
        dz1dw1.x=backpropx_cost+60;
        dz1dw1.y=layout.CY;

    var da1dz1= new PIXI.Sprite(loader.resources["/images/backprop/da1dz1.png"].texture);
    da1dz1.isSprite=true;
    da1dz1.scale.set(0.5)
    da1dz1.x=backpropx_cost+60;
    da1dz1.y=layout.CY+100;

    var w1all = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1all.png"].texture);
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

    var w1all = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1all.png"].texture);
        w1all.isSprite=true;
        w1all.x=0;
        w1all.y=50;

    var dcda1= new PIXI.Sprite(loader.resources["/images/backprop/dcda11.png"].texture);
        dcda1.isSprite=true;
        dcda1.anchor.set(0.5);
        dcda1.scale.set(0.8);
        dcda1.x=backpropx_cost+170;
        dcda1.y=layout.CY-160;

    var a11 = new PIXI.Sprite(loader.resources["/images/backprop/a11.png"].texture);
        a11.isSprite=true;
        a11.scale.set(0.6)
        a11.x=backpropx_cost+115;
        a11.y=layout.CY-130;

    var a21 = new PIXI.Sprite(loader.resources["/images/backprop/a21.png"].texture);
        a21.isSprite=true;
        a21.scale.set(0.6)
        a21.x=backpropx_cost+265;
        a21.y=layout.CY-130;

    var a22 = new PIXI.Sprite(loader.resources["/images/backprop/a22.png"].texture);
        a22.isSprite=true;
        a22.scale.set(0.6)
        a22.x=backpropx_cost+345;
        a22.y=layout.CY-130;

    var c1 = new PIXI.Sprite(loader.resources["/images/backprop/c1.png"].texture);
        c1.isSprite=true;
        c1.scale.set(0.6)
        c1.x=backpropx_cost+110;
        c1.y=layout.CY-105;

    var c2 = new PIXI.Sprite(loader.resources["/images/backprop/c2.png"].texture);
        c2.isSprite=true;
        c2.scale.set(0.6)
        c2.x=backpropx_cost+190;
        c2.y=layout.CY-105;

    var w1toc = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1toc2.png"].texture);
    w1toc.isSprite=true;
    w1toc.x=arrowx;
    w1toc.y=arrowy;

    var dcda1_form1= new PIXI.Sprite(loader.resources["/images/backprop/dcda1_form1.png"].texture);
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

    var w1toc_expand1 = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1toc_expand1.png"].texture);
        w1toc_expand1.isSprite=true;
        w1toc_expand1.x=arrowx;
        w1toc_expand1.y=arrowy;

    var dcda_form2= new PIXI.Sprite(loader.resources["/images/backprop/dcda_form2.png"].texture);
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

    var w1arrows_all = new PIXI.Sprite(loader.resources["/images/backprop/w1arrows_all.png"].texture);
    w1arrows_all.isSprite=true;
    w1arrows_all.x=arrowx;
    w1arrows_all.y=arrowy;

    var dcda1= new PIXI.Sprite(loader.resources["/images/backprop/dcda1.png"].texture);
        dcda1.isSprite=true;
        dcda1.scale.set(0.45)
        dcda1.x=backpropx_cost-100;
        dcda1.y=20;

    var w1toc_expand2 = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1toc_expand2.png"].texture);
    w1toc_expand2.isSprite=true;
    w1toc_expand2.x=arrowx;
    w1toc_expand2.y=arrowy;

    var dcda_form3= new PIXI.Sprite(loader.resources["/images/backprop/dcda_form3.png"].texture);
    dcda_form3.isSprite=true;
    dcda_form3.scale.set(0.35,0.38)
    dcda_form3.x=backpropx_cost-45;
    dcda_form3.y=layout.CY-200;

    var dcda1_full= new PIXI.Sprite(loader.resources["/images/backprop/formulas/dcda1_full.png"].texture);
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
       
    
    var w1toc_expand2 = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1toc_expand2.png"].texture);
    w1toc_expand2.isSprite=true;
    w1toc_expand2.x=arrowx;
    w1toc_expand2.y=arrowy;

    var dcda1_full2= new PIXI.Sprite(loader.resources["/images/backprop/formulas/dcda1_full2.png"].texture);
    dcda1_full2.isSprite=true;
    dcda1_full2.scale.set(0.38)
    dcda1_full2.x=backpropx_cost-100;
    dcda1_full2.y=layout.CY-200;

    var dadz21_small= new PIXI.Sprite(loader.resources["/images/backprop/dadz21.png"].texture);
    dadz21_small.scale.set(0.7)
    dadz21_small.anchor.set(0.5)
    dadz21_small.isSprite=true;
    dadz21_small.x=backpropx_cost+220;
    dadz21_small.y=layout.CY+165;

    var dc1da21_small= new PIXI.Sprite(loader.resources["/images/backprop/dc1da21.png"].texture);
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
    

    var w1toc_expand3 = new PIXI.Sprite(loader.resources["/images/backprop/arrows/w1toc_expand3.png"].texture);
    w1toc_expand3.isSprite=true;
    w1toc_expand3.x=arrowx;
    w1toc_expand3.y=arrowy;

    var dcdw1_full= new PIXI.Sprite(loader.resources["/images/backprop/formulas/dcdw1_full.png"].texture);
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