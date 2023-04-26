// 每个页面的共有元素
// 通过loader与其它文件交互，将图片转为可用格式
//import { defaultInput } from "../Model/net.js";
import {Button} from "./Button.js"
import {layout} from "./layout.js"
import {SlideHome,
    SlideInstruct1,
    SlideInstruct2,

    SlideIntro1,
    SlideIntro2,
    SlideIntro3,
    SlideIntro4,
    SlideIntro5,
    SlideIntro6,
    SlideIntro7,
    SlideIntro8,

    SlideNeuron1,
    SlideNeuron2,
    SlideNeuron3,
    SlideNeuron4,
    SlideNeuron5,
    SlideNeuron6,
    SlideNeuron7,

    SlideNet1,
    SlideNet2,
    SlideNet3,
    SlideNet4,

    SlideBackIntro1,
    SlideBackIntro2,

    SlideCost1,
    SlideCost2,
    SlideCost3,
    SlideCost4,
    SlideCost5,
    SlideCost6,
    SlideCost7,


    SlideCost10,
    SlideCost8,
    SlideCost9,

    SlideBack1,
    SlideBack2,
    SlideBack3,
    SlideBack4,
    SlideBack5,
    SlideBack6,
    SlideBack7,
    SlideBack8,
    SlideBack9,
    SlideBack10,
    SlideBack11,
    SlideBack12,
    SlideBack13,
    SlideBackCalc8,
    SlideBackCalc9,
    SlideBackCalc9a,
    SlideBackCalc9a2,
    SlideBackCalc9b,
    SlideBackCalc9c,
    SlideBackCalc10,
    SlideSandbox,
    SlideCredit,
    makeSlides,
} from "./allSlides.js"
import { textstyles } from "./textstyles.js";

export var openerloader = PIXI.loader;
export var loader = PIXI.loader;

export class View{
    constructor(slide){
        
        var vst=this;
        const app = new PIXI.Application({
            autoResize: true,
            width: layout.CANVAS_WIDTH ,
            height: layout.CANVAS_HEIGHT ,
            backgroundColor: 0x666666,        // 0xf5f6ff
            resolution: 2,
            transparent: true
        });

        this.app=app;
        document.getElementById("canvascon").appendChild(this.app.view);
  

        var loading = new PIXI.Sprite(PIXI.Texture.from('/easyNN/images/loading.png'));
            loading.name="loading";
            loading.anchor.set(0.5);
            loading.x=layout.CANVAS_WIDTH/2;
            loading.y=layout.CANVAS_HEIGHT/2;
        this.app.stage.addChild(loading );

        //lol
        loader
            .add([
                //SLIDE /easyNN/images
                "/easyNN/images/interactive.png",
                "/easyNN/images/net/neuron.png",
                "/easyNN/images/net/overneuron2.png",
                "/easyNN/images/net/neuron_backprop.png",
                "/easyNN/images/net/neuron_large.png",
                "/easyNN/images/net/inputbase.png",
                "/easyNN/images/backprop/in1.png",
                "/easyNN/images/backprop/in2.png",
                "/easyNN/images/backprop/y1.png",
                "/easyNN/images/backprop/y2.png",
                "/easyNN/images/backprop/c1form.png",
                "/easyNN/images/backprop/c2form.png",
                "/easyNN/images/net/strawberrycard.png",
                "/easyNN/images/net/blueberrycard.png",
                "/easyNN/images/cost/cost1box.png",
                "/easyNN/images/cost/cost2box.png",
                "/easyNN/images/cost/costplus.png",
                "/easyNN/images/backprop/cplus2.png",

                //ALL SLIDES /easyNN/images
                //view buttons
                "/easyNN/images/buttons/back.png",
                "/easyNN/images/buttons/next.png",
                "/easyNN/images/buttons/start.png",
                "/easyNN/images/buttons/gotoneuron.png",
                "/easyNN/images/buttons/gotoforward.png",
                "/easyNN/images/buttons/gotobackprop.png",
                "/easyNN/images/buttons/gotocalc.png",
                "/easyNN/images/buttons/sand.png",
                "/easyNN/images/buttons/home.png",


                //slide buttons
                "/easyNN/images/boxes/learnbox.png",
                "/easyNN/images/boxes/actfnsbox.png",
                "/easyNN/images/boxes/layersbox.png",
                "/easyNN/images/boxes/epochbox.png",
                "/easyNN/images/boxes/ratebox.png",
                "/easyNN/images/boxes/databox.png",
                "/easyNN/images/boxes/cost.png",

                "/easyNN/images/buttons/step.png",
                "/easyNN/images/buttons/learn.png",
                "/easyNN/images/buttons/reset.png",
                "/easyNN/images/buttons/pause.png",
                "/easyNN/images/buttons/sigmoid.png",
                "/easyNN/images/buttons/relu.png",
                "/easyNN/images/buttons/button_layer.png",
                "/easyNN/images/buttons/button_removelayer.png",
                "/easyNN/images/buttons/button_addneuron.png",
                "/easyNN/images/buttons/button_removeneuron.png",
                "/easyNN/images/buttons/plus.png",
                "/easyNN/images/buttons/minus.png",
                "/easyNN/images/buttons/datalin.png",
                "/easyNN/images/buttons/datacircle.png",

                //graph
                "/easyNN/images/graph/axis.png",
                "/easyNN/images/graph/axis_neg.png",
                "/easyNN/images/graph/bgtest.png",
                "/easyNN/images/graph/point.png",
                "/easyNN/images/graph/graph.png",


                

                //intro
                "/easyNN/images/arrows/arrow1.png",

                "/easyNN/images/intro/sandbox.png",
                "/easyNN/images/intro/sorter.png",
                "/easyNN/images/intro/examples_labels.png",
                "/easyNN/images/intro/captcha.png",
                "/easyNN/images/intro/percep_blank1.png",
                "/easyNN/images/intro/singleblue.png",
                "/easyNN/images/intro/singlestraw.png",
                "/easyNN/images/intro/percep_blue1.png",
                "/easyNN/images/intro/percep_straw1.png",
                "/easyNN/images/intro/input_example.png",
                "/easyNN/images/intro/percep_labels.png",
                "/easyNN/images/intro/percep_layers.png",

                //neuron
                "/easyNN/images/intro/neuron_example3.png",
                "/easyNN/images/net/neuronOver_large.png",
                "/easyNN/images/net/neuron_large_actfncover.png",
                "/easyNN/images/intro/sigmoid_graph.png",
                "/easyNN/images/intro/relu_graph.png",
                "/easyNN/images/arrows/targetarrow.png",

                //cost
                "/easyNN/images/cost/percep_forward.png",
                "/easyNN/images/cost/percep_cost.png",
                "/easyNN/images/cost/percep_update.png",
                "/easyNN/images/cost/costformwb2.png",
                "/easyNN/images/cost/costgraph.png",
                "/easyNN/images/cost/costgraph_point.png",
                "/easyNN/images/cost/nablaC.png",
                "/easyNN/images/cost/costgraph_slope1.png",
                "/easyNN/images/cost/minnablaC.png",
                "/easyNN/images/cost/lr.png",
                "/easyNN/images/cost/wnewform.png",
                "/easyNN/images/cost/costgraph_slope2.png",
                "/easyNN/images/cost/costgraph_lrsmall.png",
                "/easyNN/images/cost/costgraph_lrlarge.png",
                "/easyNN/images/arrows/gotocalcarrow.png",
                "/easyNN/images/buttons/calculus.png",
                "/easyNN/images/arrows/learnboxarrows.png",
                "/easyNN/images/backprop/dxdy/dadz21.png",
                "/easyNN/images/backprop/dxdy/dcda21.png",
                "/easyNN/images/backprop/dxdy/dcdw3.png",
                "/easyNN/images/backprop/dxdy/w3_new.png",

                "/easyNN/images/backprop/dxdy/dzdw1.png",
                "/easyNN/images/backprop/dxdy/dadz11.png",
                "/easyNN/images/backprop/dxdy/dcda11.png",
                "/easyNN/images/backprop/dxdy/dcdw1.png",
                "/easyNN/images/backprop/dxdy/w1_new.png",

                //backprop
                "/easyNN/images/backprop/w2.png",
                "/easyNN/images/backprop/w4_teal.png",
                "/easyNN/images/backprop/a21.png",
                "/easyNN/images/backprop/y.png",
                "/easyNN/images/backprop/C.png",
                "/easyNN/images/backprop/arrows/w3toc.png",
                "/easyNN/images/backprop/dctot.png",
                "/easyNN/images/backprop/w3_teal.png",
                "/easyNN/images/backprop/w3new.png",
                "/easyNN/images/backprop/arrows/w3all.png",
                "/easyNN/images/backprop/dxdy/dzdw3.png",       
                "/easyNN/images/backprop/z21.png",
                "/easyNN/images/backprop/dadz21.png",
                "/easyNN/images/backprop/dcda21.png",
                "/easyNN/images/backprop/ctot.png",
                "/easyNN/images/backprop/dcdw3.png",
                "/easyNN/images/backprop/dz21dw3_form.png",
                "/easyNN/images/backprop/b21.png",
                "/easyNN/images/backprop/arrows/w3toz.png",
                "/easyNN/images/backprop/arrows/ztoa.png",
                "/easyNN/images/backprop/da21dz_form.png",
                "/easyNN/images/backprop/arrows/a21toc.png",
                "/easyNN/images/backprop/dcda12_form.png",
                "/easyNN/images/backprop/dctotfinal_form.png",

                "/easyNN/images/backprop/arrows/biasarrow.png",
                "/easyNN/images/backprop/dcdb.png",
                "/easyNN/images/backprop/dcdb_final.png",
                "/easyNN/images/backprop/dzdb.png",
                "/easyNN/images/backprop/w1_teal.png",
                "/easyNN/images/backprop/dcdw1.png",
                "/easyNN/images/backprop/dz1dw1.png",
                "/easyNN/images/backprop/da1dz1.png",
                "/easyNN/images/backprop/arrows/w1all.png",
                "/easyNN/images/backprop/dcda11.png",
                "/easyNN/images/backprop/a11.png",
                "/easyNN/images/backprop/z11.png",
                "/easyNN/images/backprop/a22.png",
                "/easyNN/images/backprop/z22.png",
                "/easyNN/images/backprop/c1.png",
                "/easyNN/images/backprop/c2.png",
                "/easyNN/images/backprop/arrows/w1toc2.png",
                "/easyNN/images/backprop/dcda1_form1.png",
                "/easyNN/images/backprop/arrows/w1toc_expand1.png",
                "/easyNN/images/backprop/dcda_form2.png",
                "/easyNN/images/backprop/w1arrows_all.png",
                "/easyNN/images/backprop/dcda1.png",
                "/easyNN/images/backprop/arrows/w1toc_expand2.png",
                "/easyNN/images/backprop/dcda_form3.png",
                "/easyNN/images/backprop/formulas/dcda1_full.png",
                "/easyNN/images/backprop/formulas/dcda1_full2.png",
                "/easyNN/images/backprop/dc1da21.png",
                "/easyNN/images/backprop/arrows/w1toc_expand3.png",
                "/easyNN/images/backprop/formulas/dcdw1_full.png",


            ])
        .load(setup);

        function setup() {
            vst.currentSlide=slide;
            makeSlides();

            vst.slideList = [];
            vst.slideList.push(SlideHome,SlideInstruct1, SlideInstruct2,

                SlideIntro1,SlideIntro2,SlideIntro3, SlideIntro4,
                SlideIntro5, SlideIntro6,SlideIntro7, SlideIntro8,
                
                SlideNeuron1,SlideNeuron2,SlideNeuron3,
                SlideNeuron4,SlideNeuron5,SlideNeuron6,SlideNeuron7,
                
                SlideNet1, SlideNet2, SlideNet3, SlideNet4, 
                
                SlideBackIntro1,SlideBackIntro2,
                
                SlideCost1,SlideCost2,SlideCost3,SlideCost4,SlideCost5,
                SlideCost6,SlideCost7,SlideCost8,SlideCost9,SlideCost10,
                
                SlideSandbox,SlideCredit,
                
                SlideBack1,SlideBack2,SlideBack3,SlideBack4,SlideBack5,
                SlideBack6,SlideBack7,SlideBack8,SlideBack9,SlideBack10,
                
                SlideBack11,
                SlideBack12,SlideBack13,SlideBackCalc8,SlideBackCalc9,SlideBackCalc9b,SlideBackCalc9a,SlideBackCalc9a2,SlideBackCalc9c,SlideBackCalc10,   
                );
            vst.drawSlide_init();



            app.stage.getChildByName("loading").visible=false;



        }

        window.addEventListener('resize', resize);


        this.startwidth = layout.CANVAS_WIDTH;
        this.startheight = layout.CANVAS_HEIGHT;
        this.startheight_nochange = layout.CANVAS_HEIGHT;
        this.startwidth_nochange = layout.CANVAS_WIDTH;

        var win = this;

        function resize(){
            app.renderer.resize(layout.CANVAS_WIDTH, layout.CANVAS_HEIGHT);
            var changeY=layout.CANVAS_HEIGHT-win.startheight;
            var changeX=layout.CANVAS_WIDTH-win.startwidth;

            app.stage.getChildByName("opener").x=layout.CANVAS_WIDTH/2;
            app.stage.getChildByName("opener").y=layout.CANVAS_HEIGHT/2;

            app.stage.getChildByName("header").width=layout.CANVAS_WIDTH;
            app.stage.getChildByName("footer").width=layout.CANVAS_WIDTH;
            app.stage.getChildByName("footer").y=changeY;

            app.stage.getChildByName("button_start").x=layout.CANVAS_WIDTH/2;
            app.stage.getChildByName("button_start").y=layout.CANVAS_HEIGHT/2 -20 +250,

            app.stage.getChildByName("button_nextslide").x=layout.CANVAS_WIDTH/2 +100;
            app.stage.getChildByName("button_nextslide").y=layout.CANVAS_HEIGHT-(75/2);

            app.stage.getChildByName("button_calc2sand").x=layout.CANVAS_WIDTH/2 +100;
            app.stage.getChildByName("button_calc2sand").y=layout.CANVAS_HEIGHT-(75/2);

            app.stage.getChildByName("button_prevslide").x=layout.CANVAS_WIDTH/2 -100;
            app.stage.getChildByName("button_prevslide").y=layout.CANVAS_HEIGHT-(75/2);

            app.stage.getChildByName("button_backfromcalc").x=layout.CANVAS_WIDTH/2 -100;
            app.stage.getChildByName("button_backfromcalc").y=layout.CANVAS_HEIGHT-(75/2);

            app.stage.getChildByName("text_calc2sand").x=layout.CANVAS_WIDTH/2 +100+100;
            app.stage.getChildByName("text_calc2sand").y=layout.CANVAS_HEIGHT-(75/2) -20;

            //GO TO BUTTONS
            app.stage.getChildByName("gotoneuron").x=layout.CANVAS_WIDTH-720;
            app.stage.getChildByName("gotoforward").x=layout.CANVAS_WIDTH-570;
            app.stage.getChildByName("gotobackprop").x=layout.CANVAS_WIDTH-420;
            app.stage.getChildByName("gotocalc").x=layout.CANVAS_WIDTH-270;
            app.stage.getChildByName("gotosand").x=layout.CANVAS_WIDTH-100;


            if(vst.currentSlide!=34){

                app.stage.getChildAt(0).x=changeX/2;
                app.stage.getChildAt(0).y=changeY/2;
                app.stage.getChildAt(0).getChildAt(4).x=changeX/2;



            } else {
                app.stage.getChildAt(0).y=changeY/2;

                app.stage.getChildAt(0).getChildAt(2).getChildByName("databox").x=layout.CANVAS_WIDTH-260;
                app.stage.getChildAt(0).getChildAt(2).getChildByName("databox").y=50 - changeY/2;

                app.stage.getChildAt(0).getChildAt(2).getChildByName("learnbox").y=50-changeY/2;
                app.stage.getChildAt(0).getChildAt(2).getChildByName("actfnsbox").y=155-changeY/2;
                app.stage.getChildAt(0).getChildAt(2).getChildByName("ratebox").y=315-changeY/2;



                app.stage.getChildAt(0).getChildAt(7).x=changeX;
                app.stage.getChildAt(0).getChildAt(7).y=-changeY/2 + changeY;

                app.stage.getChildAt(0).getChildAt(8).x=changeX;
                app.stage.getChildAt(0).getChildAt(8).y=-changeY/2+changeY;


                if(layout.CANVAS_WIDTH>1280) {
                    app.stage.getChildAt(0).getChildAt(0).x=(layout.CANVAS_WIDTH-1280)/2;
                    app.stage.getChildAt(0).getChildAt(1).x=(layout.CANVAS_WIDTH-1280)/2;
                    app.stage.getChildAt(0).getChildAt(3).x=(layout.CANVAS_WIDTH-1280)/2;
                    app.stage.getChildAt(0).getChildAt(6).x=(layout.CANVAS_WIDTH-1280)/2;

                    app.stage.getChildAt(0).getChildAt(2).getChildByName("buttonNeuronAddContainer").x=(layout.CANVAS_WIDTH-1280)/2;
                    app.stage.getChildAt(0).getChildAt(2).getChildByName("buttonNeuronRemContainer").x=(layout.CANVAS_WIDTH-1280)/2;
                
                }
            }   
        }
    }

    createButtons(){
        var vst=this;

        var startx=layout.CX;
        var starty=layout.CY+250;

        var button_nextslide = new Button("button_nextslide",loader.resources["/easyNN/images/buttons/next.png"].texture,layout.NEXTSLIDE_X,layout.NEXTSLIDE_Y,true);
        var button_prevslide = new Button("button_prevslide",loader.resources["/easyNN/images/buttons/back.png"].texture,layout.PREVSLIDE_X,layout.NEXTSLIDE_Y,true);
        var button_start = new Button("button_start",loader.resources["/easyNN/images/buttons/start.png"].texture,startx,starty,true);
  
        var button_backfromcalc = new Button("button_backfromcalc",loader.resources["/easyNN/images/buttons/back.png"].texture,layout.PREVSLIDE_X,layout.NEXTSLIDE_Y,true);
        var button_calc2sand = new Button("button_calc2sand",loader.resources["/easyNN/images/buttons/next.png"].texture,layout.NEXTSLIDE_X,layout.NEXTSLIDE_Y,true);
        var text_calc2sand = new PIXI.Text("Click next to go"+'\n'+ "to sandbox mode!", textstyles.default)
            text_calc2sand.name="text_calc2sand";
            text_calc2sand.x=layout.NEXTSLIDE_X+100;
            text_calc2sand.y=layout.NEXTSLIDE_Y-20;

        var homebutton = new Button("homebutton",loader.resources["/easyNN/images/buttons/home.png"].texture,30,layout.HEADER_HEIGHT/2,false)
        var gotoneuron = new Button("gotoneuron",loader.resources["/easyNN/images/buttons/gotoneuron.png"].texture,70,100,false)
        var gotoforward = new Button("gotoforward",loader.resources["/easyNN/images/buttons/gotoforward.png"].texture,70,150,false)
        var gotobackprop = new Button("gotobackprop",loader.resources["/easyNN/images/buttons/gotobackprop.png"].texture,70,200,false)
        var gotocalc = new Button("gotocalc",loader.resources["/easyNN/images/buttons/gotocalc.png"].texture,70,250,false)
        var gotosand = new Button("gotosand",loader.resources["/easyNN/images/buttons/sand.png"].texture,70,300,false,0xcdff94)



        this.app.stage.addChild(button_nextslide, button_prevslide, button_start, button_backfromcalc,button_calc2sand,
            text_calc2sand, homebutton,gotoneuron,gotoforward,gotobackprop,gotocalc,gotosand);

        this.app.stage.getChildByName("homebutton").on('click', function(e){ 
            vst.currentSlide=0;
            vst.drawSlide();
                    
        });

        this.app.stage.getChildByName("homebutton").on('tap', function(e){ 
            vst.currentSlide=0;
            vst.drawSlide();
                
        });

        this.app.stage.getChildByName("button_start").on('click', function(e){ 
            if(vst.currentSlide+1<vst.slideList.length){
                vst.currentSlide=vst.currentSlide+1;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("button_start").on('tap', function(e){ 
            if(vst.currentSlide+1<vst.slideList.length){
                vst.currentSlide=vst.currentSlide+1;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("button_nextslide").on('click', function(e){ 

            if(vst.currentSlide+1<vst.slideList.length){
                vst.currentSlide=vst.currentSlide+1;
                vst.drawSlide();
            }

            if(vst.slideList[vst.currentSlide].slideNet !== undefined && vst.slideList[vst.currentSlide].largenet==1  && !vst.slideList[vst.currentSlide].fakenet){//&& vst.currentSlide == 9){
                vst.slideList[vst.currentSlide].slideNet.update();
                vst.slideList[vst.currentSlide].draw_update_large(vst.slideList[vst.currentSlide].slideNet)
                vst.drawSlide();
            }

            if(vst.slideList[vst.currentSlide].slideNet !== undefined && vst.slideList[vst.currentSlide].largenet!=1 && !vst.slideList[vst.currentSlide].fakenet){//&& vst.currentSlide == 9){
                vst.slideList[vst.currentSlide].slideNet.update();
                vst.slideList[vst.currentSlide].draw_update(vst.slideList[vst.currentSlide].slideNet)
                vst.drawSlide();
            }
            
        });

        this.app.stage.getChildByName("button_nextslide").on('tap', function(e){ 

            if(vst.currentSlide+1<vst.slideList.length){
                vst.currentSlide=vst.currentSlide+1;
                vst.drawSlide();
            }

            if(vst.slideList[vst.currentSlide].slideNet !== undefined && vst.slideList[vst.currentSlide].largenet==1  && !vst.slideList[vst.currentSlide].fakenet){//&& vst.currentSlide == 9){
                vst.slideList[vst.currentSlide].slideNet.update();
                vst.slideList[vst.currentSlide].draw_update_large(vst.slideList[vst.currentSlide].slideNet)
                vst.drawSlide();
            }

            if(vst.slideList[vst.currentSlide].slideNet !== undefined && vst.slideList[vst.currentSlide].largenet!=1 && !vst.slideList[vst.currentSlide].fakenet){//&& vst.currentSlide == 9){
                vst.slideList[vst.currentSlide].slideNet.update();
                vst.slideList[vst.currentSlide].draw_update(vst.slideList[vst.currentSlide].slideNet)
                vst.drawSlide();
            }
            
        });

        this.app.stage.getChildByName("button_prevslide").on('click', function(e){ 
            if(vst.currentSlide>0){

                vst.currentSlide=vst.currentSlide-1;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("button_prevslide").on('tap', function(e){ 
            if(vst.currentSlide>0){

                vst.currentSlide=vst.currentSlide-1;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("button_backfromcalc").on('click', function(e){ 
            vst.currentSlide=32;
            vst.drawSlide();
        
        });

        this.app.stage.getChildByName("button_backfromcalc").on('tap', function(e){ 
            vst.currentSlide=32;
            vst.drawSlide();
        
        });

        this.app.stage.getChildByName("button_calc2sand").on('click', function(e){ 
            vst.currentSlide=34;
            vst.drawSlide();
        });

        this.app.stage.getChildByName("button_calc2sand").on('tap', function(e){ 
            vst.currentSlide=34;
            vst.drawSlide();
        });


        this.app.stage.getChildByName("gotoforward").on('click', function(e){ 
            if (vst.currentSlide!=18){
                vst.currentSlide=18;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotoforward").on('tap', function(e){ 
            if (vst.currentSlide!=18){
                vst.currentSlide=18;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotoneuron").on('click', function(e){ 
            if (vst.currentSlide!=11){
                vst.currentSlide=11;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotoneuron").on('tap', function(e){ 
            if (vst.currentSlide!=11){
                vst.currentSlide=11;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotobackprop").on('click', function(e){ 
            if (vst.currentSlide!=23){
                vst.currentSlide=23;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotobackprop").on('tap', function(e){ 
            if (vst.currentSlide!=23){
                vst.currentSlide=23;
                vst.drawSlide();
            }
        });


        this.app.stage.getChildByName("gotocalc").on('click', function(e){ 
            if (vst.currentSlide!=36){
                vst.currentSlide=36;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotocalc").on('tap', function(e){ 
            if (vst.currentSlide!=36){
                vst.currentSlide=36;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotosand").on('click', function(e){ 
            if (vst.currentSlide!=34){
                vst.currentSlide=34;
                vst.drawSlide();
            }
        });

        this.app.stage.getChildByName("gotosand").on('tap', function(e){ 
            if (vst.currentSlide!=34){
                vst.currentSlide=34;
                vst.drawSlide();
            }
        });
    }


    caveats(){    
        if (this.currentSlide==0){
           for(var i = 0; i<this.app.stage.children.length; i++){
                this.app.stage.getChildAt(i).visible=false;
            }    
        
            this.app.stage.getChildByName("button_start").visible=true;
            this.app.stage.getChildByName("opener").visible=true;

        } else {
            for(var i = 0; i<this.app.stage.children.length; i++){
                this.app.stage.getChildAt(i).visible=true;
            }                

            this.app.stage.getChildByName("button_start").visible=false;
            this.app.stage.getChildByName("opener").visible=false;
            this.app.stage.getChildByName("loading").visible=false;
            
            if(this.slideList[this.currentSlide].backfromcalc){
                this.app.stage.getChildByName("button_backfromcalc").visible=true;
            } else {
                this.app.stage.getChildByName("button_backfromcalc").visible=false;
            }

            if(this.slideList[this.currentSlide].calc2sand){
                this.app.stage.getChildByName("button_calc2sand").visible=true;
                this.app.stage.getChildByName("text_calc2sand").visible=true;
    
            } else {
                this.app.stage.getChildByName("button_calc2sand").visible=false;
                this.app.stage.getChildByName("text_calc2sand").visible=false;

    
            }
    
            if(this.slideList[this.currentSlide].slidecredit){
                this.app.stage.getChildByName("button_nextslide").visible=false;
            } else {
                this.app.stage.getChildByName("button_nextslide").visible=true;
            }

        }
    }  
    
    drawSlide_init(){
        this.app.stage.addChildAt(this.slideList[this.currentSlide].slideContainer,0);
    }

    drawSlide(){
        this.app.stage.removeChildAt(0);
        this.app.stage.addChildAt(this.slideList[this.currentSlide].slideContainer,0);
        this.caveats();
        this.resize2();
    }


    // when window is resized, gotta resize all the other slides
    // but only some stuff
    resize2(){

        layout.CX= layout.CANVAS_WIDTH/2;
        layout.CY= layout.CANVAS_HEIGHT/2 -50;

        var changeY=layout.CANVAS_HEIGHT-this.startheight_nochange;
        var changeX=layout.CANVAS_WIDTH-this.startwidth_nochange;

        this.app.stage.getChildByName("opener").x=layout.CANVAS_WIDTH/2;
        this.app.stage.getChildByName("opener").y=layout.CANVAS_HEIGHT/2;

        if(this.currentSlide!=34){

            this.app.stage.getChildAt(0).x=changeX/2;
            this.app.stage.getChildAt(0).y=changeY/2;
            this.app.stage.getChildAt(0).getChildAt(4).x=changeX/2;
        } else {
            this.app.stage.getChildAt(0).y=changeY/2;

            this.app.stage.getChildAt(0).getChildAt(2).getChildByName("databox").x=layout.CANVAS_WIDTH-260;
            this.app.stage.getChildAt(0).getChildAt(2).getChildByName("databox").y=50 - changeY/2;

            this.app.stage.getChildAt(0).getChildAt(2).getChildByName("learnbox").y=50-changeY/2;
            this.app.stage.getChildAt(0).getChildAt(2).getChildByName("actfnsbox").y=155-changeY/2;
            this.app.stage.getChildAt(0).getChildAt(2).getChildByName("ratebox").y=315-changeY/2;

            this.app.stage.getChildAt(0).getChildAt(7).x=changeX;
            this.app.stage.getChildAt(0).getChildAt(7).y=-changeY/2 + changeY;

            this.app.stage.getChildAt(0).getChildAt(8).x=changeX;
            this.app.stage.getChildAt(0).getChildAt(8).y=-changeY/2+changeY;

        }
    }

}