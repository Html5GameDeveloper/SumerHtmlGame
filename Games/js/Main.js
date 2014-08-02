
init(20,"gamePanel",900,640,main);
//显示时间变量
var t;

//self
var temp=0;
var clock = 0;
//var Xposition;
//var Yposition;
//得分变量
var selfScore=0,enemyScore=0;
//var clock=1000;
var buoyancyController;
var mouseJoint=null;
//enemy
var tempEn=1;
//-------游戏场景------
var backGroundLayer;//游戏背景
var loadingLayer;//载入图层
var imglist={};//图像列表对象
var imgData=[
	{name:"backGround",path:"img/backGround.png"},
    {name:"ground2",path:"img/backGround.png"},
    {name:"ground1",path:"img/backGround1.jpg"},
	{name:"neimaer",path:"img/neimaer.png"},
	{name:"meixi",path:"img/meixi.png"},
    {name:'ArgentinaFrag',path:'img/ArgentinaFrag.png'},
    {name:'BrazilFrag',path:'img/BrazilFrag.png'},
    {name:'GramanyFrag',path:'img/GramanyFrag.png'},
    {name:'HelanFrag',path:'img/HelanFrag.png'},
    {name:'football',path:'img/football.png'},
	{name:"whiteBtn2",path:"img/whiteBtn2.png"},
    {name:"backLayer1",path:"img/backLayer1.jpg"},
    {name:"backLayer2",path:"img/backLayer2.jpg"},
    {name:"backGroundTwo",path:"img/backGroundTwo.png"},
    {name:"luoyisi",path:"img/GramanySport.png"},
    {name:"fanpeixi",path:"img/helanSport.png"},


    {name:"enemyLoseMeixi",path:"img/enemyLoseMeixi.png"},
    {name:"enemyLoseNeimaer",path:"img/enemyLoseNeimaer.png"},
    {name:"enemyLoseRues",path:"img/enemyLoseRues.png"},
    {name:"enemyLoseVan",path:"img/enemyLoseVan.png"},
    {name:"enemyWinMeixi",path:"img/enemyWinMeixi.png"},
    {name:"enemyWinNeimaer",path:"img/enemyWinNeimaer.png"},
    {name:"enemyWinVan",path:"img/enemyWinVan.png"},
    {name:"enemyWinRues",path:"img/enemyWinRues.png"},


    {name:"selfLoseMeixi",path:"img/selfLoseMeixi.png"},
    {name:"selfLoseNeimaer",path:"img/selfLoseNeimaer.png"},
    {name:"selfLoseRues",path:"img/selfLoseRues.png"},
    {name:"selfLoseVan",path:"img/selfLoseVan.png"},
    {name:"selfWinMeixi",path:"img/selfWinMeixi.png"},
    {name:"selfWinNeimaer",path:"img/selfWinNeimaer.png"},
    {name:"selfWinReus",path:"img/selfWinReus.png"},
    {name:"selfWinVan",path:"img/selfWinVan.png"}


	
];

 var showList = new Array();
 var showSport = new Array();
 var Win = new Array();
 var Lose = new Array();

    var flagName=[
        {name:"阿根廷"},
        {name:"巴西"},
        {name:"德国"},
        {name:"荷兰"}
    ];
	
var showFlag=[];//游戏国旗面板
var sound;//音乐控制
var BoundTop;//游戏边界
//计分牌
var scoreNumberLeft;
var scoreNumberRight;
//足球
var ballLayer;
//得分
var resultScore;
//人与电脑
var selfBitmap,enemyBitmap;
var selfName,enemyName;



var RightDoor;
var LeftDoor;

//选择模式
var backLayer;
var backLayer1;
var backLayer2;

//时间
var cxtOne;
//定义初始时间
var startTime = 3;
//var SysSecondOne;
var SysSecondOne = parseInt(startTime);
cxtOne = new LTextField();

//---------主函数入口---------
function main(){
 LGlobal.webAudio = false;
sound = new LSound();
LGlobal.setDebug(true);
backGroundLayer=new LSprite()	;
backGroundLayer.graphics.drawRect(1,"#000",[0,0,900,640],true,"#000");
addChild(backGroundLayer);

loadingLayer=new LoadingSample1();
backGroundLayer.addChild(loadingLayer);
   
LLoadManage.load(
	imgData,
	function (progress){
	loadingLayer.setProgress(progress);
	},
	gameInit
);
    LGlobal.box2d =  new LBox2d();
}

//-----欢迎页面开始-----
function gameInit(result){
	imglist=result;
	backGroundLayer.removeChild(loadingLayer);
	loadingLayer=null;
	var title=new LTextField();
	
	title.x=170;
	title.y=100;
	title.size=55;
	title.color="white";
	title.text="欢迎进入游戏世界";
	backGroundLayer.addChild(title);
	
	backGroundLayer.graphics.drawRect(1,"#fff",[200,270,500,150]);
	var clickText=new LTextField();
    var clickInto= new LSprite();
    clickInto.graphics.drawRect(1,"#000",[200,270,500,150],false);
    backGroundLayer.addChild(clickInto);
	clickText.color="#fff";
	clickText.text="超级足球大战";
	clickText.size=45;
	clickText.x=270;
	clickText.y=315;
	clickInto.addChild(clickText);
    clickInto.addEventListener(LMouseEvent.MOUSE_DOWN,choisePage);

}
//-----欢迎页面结束-----



//进入选择页面
function choisePage(){
   window.clearInterval(t);
   
  //  backGroundLayer.removeChild(t);
    backGroundLayer.die();
    backGroundLayer.removeAllChild();
    backLayer = new LSprite();
    backLayer.graphics.drawRect(1,"#fff",[0,0,900,640],true,"#000");
    backGroundLayer.addChild(backLayer);

    backGroundLayer.removeChild(cxtOne);
    var chioceTitle=new LTextField();

    chioceTitle.x=240;
    chioceTitle.y=450;
    chioceTitle.size=55;
    chioceTitle.color="#0f0";
    chioceTitle.text="选择游戏模式";
    backLayer.addChild(chioceTitle);

    backLayer1 = new LSprite();
    backLayer1.x = 30;
    backLayer1.y = 100;
    backLayer.addChild(backLayer1);
    var  bitmap = new LBitmapData(imglist['backLayer1']);
    backLayer1.graphics.beginBitmapFill(bitmap);
    backLayer1.graphics.drawRect(1,"#000",[0,0,385,256],false);
    backLayer1.addEventListener(LMouseEvent.MOUSE_UP,ChoosePerson);

    var chioceSingle =new LTextField();
    chioceSingle.x=160;
    chioceSingle.y=370;
    chioceSingle.size=25;
    chioceSingle.color="white";
    chioceSingle.text="选择人物";
    backLayer.addChild(chioceSingle);

    backLayer2 = new LSprite();
    backLayer2.x = 475;
    backLayer2.y = 100;
    backLayer.addChild(backLayer2);
    var  bitmap = new LBitmapData(imglist['backLayer2']);
    backLayer2.graphics.beginBitmapFill(bitmap);
    backLayer2.graphics.drawRect(1,"#000",[0,0,385,256],false);
   backLayer2.addEventListener(LMouseEvent.MOUSE_UP,Billboard);

    var chioceMore =new LTextField();
    chioceMore.x=600;
    chioceMore.y=370;
    chioceMore.size=25;
    chioceMore.color="white";
    chioceMore.text="排行榜";
    backLayer.addChild(chioceMore);
    onup();
}
	//---国家比分-----
	function scoreText(){
		resultScore = new LSprite();
     	resultScore.graphics.drawRect(0,'#f80',[0,0,670,30],false,'#000');
     	resultScore.x = 100;
     	resultScore.y =45;
     	backGroundLayer.addChild(resultScore);
     	//------------记分牌------------
     	resultArgentina = new LTextField();
        scoreNumberLeft = new LTextField();
        scoreNumberLeft.text=selfScore;
        scoreNumberLeft.color="#FFF";
        scoreNumberLeft.size="18";
        scoreNumberLeft.x=317;
        scoreNumberLeft.y=7;

		if(temp==0){
		resultArgentina.text = '阿根廷';
		}
        if(temp==1){
		resultArgentina.text = '巴西';
		}
		 if(temp==2){
		resultArgentina.text = '德国';
		}
		 if(temp==3){
		resultArgentina.text = '荷兰';
		}
        resultArgentina.weight = 'bolder';
        resultArgentina.color = '#fff';
        resultArgentina.x = 20;
        resultArgentina.y = 10;
        resultScore.addChild(resultArgentina);
        resultScore.addChild(scoreNumberLeft);
     	
     	resultBrazil = new LTextField();
        scoreNumberRight = new LTextField();
        scoreNumberRight.text=enemyScore;
        scoreNumberRight.x=380;
        scoreNumberRight.y=7;
        scoreNumberRight.color="#FFF";
        scoreNumberRight.size="18";

		
		if(tempEn==0){
				resultBrazil.text = '阿根廷';
		}
		if(tempEn==1){
				resultBrazil.text = '巴西';
		}
		if(tempEn==2){
				resultBrazil.text = '德国';
		}
		if(tempEn==3){
				resultBrazil.text = '荷兰';
		}
     	resultBrazil.weight = 'bolder';
     	resultBrazil.color = '#fff';
     	resultBrazil.x = 600;
     	resultBrazil.y = 10;
     	resultScore.addChild(resultBrazil);
        resultScore.addChild(scoreNumberRight);
		//----------记分牌结束-------------
			//-----碰撞侦听事件------
		LGlobal.box2d.setEvent(LEvent.POST_SOLVE,postSolve);		
	}

//------------播放音乐-----------------
function onup(e){
   if(sound.length == 0){
        var url = './sound/2014Soccer.mp3';
        sound.load(url);
       sound.addEventListener(LEvent.COMPLETE,loadOver);
    }else if(sound.playing){
        sound.stop();
    }else{
        sound.play();
    }
}
function loadOver(e){
	sound.play();
}

//----------物体碰撞边界----------
function Bound(){
    BoundTop = new LSprite();
    backGroundLayer.addChild(BoundTop);
    var shapeArray = [
        [[65,80],[70,80],[70,600],[65,600]],
        [[65,80],[845,80],[845,85],[65,85]],
        [[845,80],[845,600],[840,600],[840,80]],
        [[65,600],[70,590],[845,590],[845,600]]
    ];
    BoundTop.addBodyVertices(shapeArray,0,0,0,.5,.4,.5);

    //-----------设置球门-------------
    ballDoor = new LSprite();
    backGroundLayer.addChild(ballDoor);
    ballDoor.graphics.drawRect(0,'#f00',[808,250,35,105],false);
    ballDoor.graphics.drawRect(0,'#f00',[67,248,35,105],false);
}

//-----侦听两个物体的碰撞------
function postSolve(contact,impulse){
	var objA = contact.GetFixtureA().GetBody().GetUserData();
	var objB = contact.GetFixtureB().GetBody().GetUserData();
	if(objA.type == "LSprite" && objB.type == "LSprite"){
		if((objA == ballLayer && objB == RightDoor) || 
			(objA == RightDoor && objB == ballLayer)) {
            //scoreNumberLeft.text = scoreNumberLeft.text + 1;
			selfScore += 1;
			scoreNumberLeft.text=selfScore;
			scoreNumberRight.text=enemyScore;
            //var backLayer = event.currentTarget,

         //   console.warn("足球目前的横坐标：" + ballLayer.x + " 足球目前的纵坐标：" + ballLayer.y);
           showSelfScore();
        }
	}
	
	if(objA.type == "LSprite" && objB.type == "LSprite"){
		if((objA == ballLayer && objB == LeftDoor) || 
			(objA == LeftDoor && objB == ballLayer)){
		//	alert("内马尔得分");
		//	scoreNumberRight.text = scoreNumberRight.text + 1;
			enemyScore += 1;
			scoreNumberRight.text=enemyScore;
			scoreNumberLeft.text=selfScore;
			showEnemyScore();
			
		}
	}
}

//------------选择球队页面函数-----------------
function ChoosePerson(){
    var ChoosePic = new LSprite();
    ChoosePic.graphics.drawRect(1,'#000',[0,0,900,640],true,'#000');
    backGroundLayer.addChild(ChoosePic);

    var ChooseFrag = new LTextField();
    ChooseFrag.text = '请选择你喜欢的球队:';
    ChooseFrag.color = '#fff';
    ChooseFrag.size = '28';
    ChooseFrag.x = 30;
    ChooseFrag.y = 50;
    ChoosePic.addChild(ChooseFrag);

    showList.push(new LBitmapData(imglist["ArgentinaFrag"]));
    showList.push(new LBitmapData(imglist["BrazilFrag"]));
    showList.push(new LBitmapData(imglist["GramanyFrag"]));
    showList.push(new LBitmapData(imglist["HelanFrag"]));

	 showSport.push(new LBitmapData(imglist["meixi"]));//0
	 showSport.push(new LBitmapData(imglist["neimaer"]));//1
	 showSport.push(new LBitmapData(imglist["luoyisi"]));//2
	 showSport.push(new LBitmapData(imglist["fanpeixi"]));//3
//	 showSport.push(new LBitmapData(imglist["meixiWin"]));

     showSport.push(new LBitmapData(imglist["enemyLoseMeixi"]));//4
    showSport.push(new LBitmapData(imglist["enemyLoseNeimaer"]));//5
    showSport.push(new LBitmapData(imglist["enemyLoseRues"]));//6
    showSport.push(new LBitmapData(imglist["enemyLoseVan"]));//7
    showSport.push(new LBitmapData(imglist["enemyWinMeixi"]));//8
    showSport.push(new LBitmapData(imglist["enemyWinNeimaer"]));//9
    showSport.push(new LBitmapData(imglist["enemyWinVan"]));//10
    showSport.push(new LBitmapData(imglist["enemyWinRues"]));//11

    showSport.push(new LBitmapData(imglist["selfLoseMeixi"]));//12
    showSport.push(new LBitmapData(imglist["selfLoseNeimaer"]));//13
    showSport.push(new LBitmapData(imglist["selfLoseRues"]));//14
    showSport.push(new LBitmapData(imglist["selfLoseVan"]));//15
    showSport.push(new LBitmapData(imglist["selfWinMeixi"]));//16
    showSport.push(new LBitmapData(imglist["selfWinNeimaier"]));//17
    showSport.push(new LBitmapData(imglist["selfWinReus"]));//18
    showSport.push(new LBitmapData(imglist["selfWinVan"]));//19

     var frag1 = new LSprite();
    frag1.graphics.drawRect(1,'#000',[110,110,128,140],true,'#000');
    ChoosePic.addChild(frag1);
    //----------显示国旗Argentina---------------
    var ArgentinaFrag = getButton('ArgentinaFrag');
    ArgentinaFrag.x =110;
    ArgentinaFrag.y = 110;
    frag1.addChild(ArgentinaFrag);

    var Argentina = new LTextField();
    Argentina.text = flagName[0].name;
    Argentina.color = '#fff';
    Argentina.size = '18';
    Argentina.x = 135;
    Argentina.y = 215;
    frag1.addChild(Argentina);
    ArgentinaFrag.addEventListener(LMouseEvent.MOUSE_UP,onclick);

    var frag2 = new LSprite();
    frag2.graphics.drawRect(1,'#000',[288,110,128,140],true,'#000');
    ChoosePic.addChild(frag2);
    //--------------显示国旗Brazil---------------
    var BrazilFrag =  getButton('BrazilFrag');
    BrazilFrag.x = 288;
    BrazilFrag.y = 110;
    frag2.addChild(BrazilFrag);

    var Brazil = new LTextField();
    Brazil.text = flagName[1].name;
    Brazil.color = '#fff';
    Brazil.size = '18';
    Brazil.x = 325;
    Brazil.y = 215;
    frag2.addChild(Brazil);
	 BrazilFrag.addEventListener(LMouseEvent.MOUSE_UP,onclick);

    var frag3 = new LSprite();
    frag3.graphics.drawRect(1,'#000',[466,110,128,140],true,'#000');
    ChoosePic.addChild(frag3);
	
    //-------------显示国旗Gramany--------------
    var GramanyFrag =  getButton('GramanyFrag');
    GramanyFrag.x =466;
    GramanyFrag.y = 110;
    frag3.addChild(GramanyFrag);

    var Gramany = new LTextField();
    Gramany.text = flagName[2].name;
    Gramany.color = '#fff';
    Gramany.size = '18';
    Gramany.x = 500;
    Gramany.y = 215;
    frag3.addChild(Gramany);
	 GramanyFrag.addEventListener(LMouseEvent.MOUSE_UP,onclick);

    var frag4 = new LSprite();
    frag4.graphics.drawRect(1,'#000',[644,110,128,140],true,'#000');
    ChoosePic.addChild(frag4);
   
   //-------------显示国旗Helan----------------
    var HelanFrag = getButton('HelanFrag');
    HelanFrag.x =644;
    HelanFrag.y = 110;
    frag4.addChild(HelanFrag);

    var Helan = new LTextField();
    Helan.text = flagName[3].name;
    Helan.color = '#fff';
    Helan.size = '18';
    Helan.x = 680;
    Helan.y = 215;
    frag4.addChild(Helan);
	 HelanFrag.addEventListener(LMouseEvent.MOUSE_UP,onclick);
	
			//---------------显示结果层---------------
			 var resultEnd = new LSprite();
			resultEnd.graphics.drawRect(1,'#000',[0,260,900,380],true,'#000');
			ChoosePic.addChild(resultEnd);
			
			//-----------显示国旗(self)---------------
			selfBitmap =  new LBitmap(showList[0]);
			selfBitmap.x =230;
			selfBitmap.y = 325;
			resultEnd.addChild(selfBitmap);
		   //-------------显示运动员----------------
			selfName =  new LBitmap(showSport[0]);
			selfName.x =240;
			selfName.y = 455;
			resultEnd.addChild(selfName);

			//--------------显示国旗(enemy)-------------
			enemyBitmap =  new LBitmap(showList[1]);
			enemyBitmap.x = 518;
			enemyBitmap.y = 325;
			resultEnd.addChild(enemyBitmap);

			//------------显示运动员-----------------
			enemyName =  new LBitmap(showSport[1]);
			enemyName.x =528;
			enemyName.y = 455;
			resultEnd.addChild(enemyName);

			var vs = new LTextField();
			vs.text = 'VS';
			vs.color = '#fff';
			vs.size = '48';
			vs.x = 398;
			vs.y = 335;
			resultEnd.addChild(vs);
			
	var buttonEnter= new LButtonSample1("开始游戏");
    buttonEnter.x =380;
    buttonEnter.y = 480;
	resultEnd.addChild(buttonEnter);
    buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,gamePageOne);

}
//-----------------ChoosePerson End-----------------

//-------------初始化球队按钮--------------------
function getButton(value){
 var btnUp = new LBitmap(new LBitmapData(imglist[value]));
	 btnUp.scaleX = 1;
	 btnUp.scaleY = 1;
    var btnOver = new LBitmap(new LBitmapData(imglist[value]));
	 btnOver.scaleX = 1;
	 btnOver.scaleY =1 ;

	 var btn = new LButton(btnUp,btnOver);
	 btn.name = value;
	 return btn;
}

//----------------点击并选择球队-------------------
function onclick(event,display){
       var selfValue,enemyValue;   
	   if(display.name == 'ArgentinaFrag'){
	           selfValue =0;
			   temp = 0;			
			  enemyValue = Math.floor(Math.random()*4);  
			  if(selfValue == enemyValue){
			  enemyValue += 1;
			  tempEn=enemyValue;
			  }
			  else{
				tempEn=enemyValue;
			  }
	
	   } if(display.name == 'BrazilFrag'){
	          selfValue =1;
			  temp = 1;
			   enemyValue = Math.floor(Math.random()*4);
			   if(selfValue == enemyValue){
			  enemyValue += 1;
			  tempEn=enemyValue;
			  }
			    else{
			  tempEn=enemyValue;
			  }
	   } if(display.name == 'GramanyFrag'){
	           selfValue =2;
			    temp = 2;
			    enemyValue = Math.floor(Math.random()*4);
				if(selfValue == enemyValue){
			  enemyValue += 1;
			  tempEn=enemyValue;
			  }
			    else{
			  tempEn=enemyValue;
			  }
	   } if(display.name == 'HelanFrag'){
	          selfValue = 3;
			   temp = 3;
			   enemyValue = Math.floor(Math.random()*4);
			   if(selfValue == enemyValue){
			  enemyValue = enemyValue - 3;
			  tempEn=enemyValue;
			  }
			    else{
			  tempEn=enemyValue;
			  }
	   }	
	   selfBitmap.bitmapData = showList[selfValue];
	   selfName.bitmapData = showSport[selfValue];
        enemyBitmap.bitmapData = showList[enemyValue];
       enemyName.bitmapData = showSport[enemyValue];
}
//----------------------选择球队页面函数End--------------------

//-----------------------排行榜界面开始--------------------
function Billboard(){
     var scoreChart = new LSprite();
	  scoreChart.graphics.drawRect(1,'#000',[0,0,900,640],true,'#000');
     backGroundLayer.addChild(scoreChart);
	 
	 var titleChart = new LTextField();
	 titleChart.text = '排行榜';
	 titleChart.color = '#f00';
	 titleChart.weight = 'bold';
	 titleChart.size = '30';
	 titleChart.x = 380;
	 titleChart.y = 40;
	 scoreChart.addChild(titleChart);
	 
	var buttonEnter= new LButtonSample1("返回首页");
    buttonEnter.x =780;
    buttonEnter.y = 5;
	scoreChart.addChild(buttonEnter);
    buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,choisePage);
}

//---------------------显示得分函数(self)------------------
function showSelfScore(){
backGroundLayer.removeChild(ballLayer);
      var resultChart = new LSprite();
	  resultChart.graphics.drawRect(1,'#000',[0,0,900,640],true,'#000');
     backGroundLayer.addChild(resultChart);
	 
	showList.push(new LBitmapData(imglist["ArgentinaFrag"]));
    showList.push(new LBitmapData(imglist["BrazilFrag"]));
    showList.push(new LBitmapData(imglist["GramanyFrag"]));
    showList.push(new LBitmapData(imglist["HelanFrag"]));


	 //------------------self得分----------------------
	 var selfWin = new LSprite();
	 selfWin.x = 30;
	 selfWin.y = 200;
	 resultChart.addChild(selfWin);
    if (temp == 0){
        var bitmap = new LBitmapData(imglist['selfWinMeixi']);
    }

    if (temp == 1){
        var bitmap = new LBitmapData(imglist['selfWinNeimaer']);
    }

    if (temp == 2){
        var bitmap = new LBitmapData(imglist['selfWinReus']);
    }

    if (temp == 3){
        var bitmap = new LBitmapData(imglist['selfWinVan']);
    }

	  selfWin.graphics.beginBitmapFill(bitmap);
	  selfWin.graphics.drawRect(1,'#000',[0,0,400,345],false);

	  //enemy失败
	 var enemyLose = new LSprite();
    enemyLose.x = 620;
    enemyLose.y = 200;
	 resultChart.addChild(enemyLose);


    if (tempEn == 0){
        var bitmap = new LBitmapData(imglist['enemyLoseMeixi']);

    }
    if (tempEn == 1){
        var bitmap = new LBitmapData(imglist['enemyLoseNeimaer']);

    }
    if (tempEn == 2){
        var bitmap = new LBitmapData(imglist['enemyLoseRues']);

    }
    if (tempEn == 3){
        var bitmap = new LBitmapData(imglist['enemyLoseVan']);

    }


    enemyLose.graphics.beginBitmapFill(bitmap);
    enemyLose.graphics.drawRect(1,'#000',[0,0,253,345],false);

     var showResult = new LTextField();
	 showResult.text = 'Congratulations!';
	 showResult.color = '#fff';
	 showResult.weight = 'bold';
	 showResult.size = '50';
	 showResult.x = 180;
	 showResult.y = 100;
	 resultChart.addChild(showResult);

        scoreNumberLeft = new LTextField();
        scoreNumberLeft.text=selfScore;
        scoreNumberLeft.color="#FFF";
        scoreNumberLeft.size="40";
        scoreNumberLeft.x=300;
        scoreNumberLeft.y=350;
		resultChart.addChild(scoreNumberLeft);
//	  resultChart.addChild(selfScore);

       scoreNumberMiddle = new LTextField();
        scoreNumberMiddle.text=':';
        scoreNumberMiddle.color="#FFF";
        scoreNumberMiddle.size="40";
        scoreNumberMiddle.x=420;
        scoreNumberMiddle.y=350;
		resultChart.addChild(scoreNumberMiddle);

        scoreNumberRight = new LTextField();
        scoreNumberRight.text=enemyScore;
        scoreNumberRight.x=520;
        scoreNumberRight.y=350;
        scoreNumberRight.color="#FFF";
        scoreNumberRight.size="40";
		resultChart.addChild(scoreNumberRight);
    //   resultChart.addChild(enemyScore);
		clock = 0;
	   if(clock == 0){
     window.clearInterval(t);
   }  
	    resultChart.addEventListener(LMouseEvent.MOUSE_UP,gamePageOne);
	
}

//显示得分函数(enemy)
function showEnemyScore(){
      backGroundLayer.removeChild(ballLayer);
      var resultChart = new LSprite();
	  resultChart.graphics.drawRect(1,'#000',[0,0,900,640],true,'#000');
     backGroundLayer.addChild(resultChart);

	 //self失败
	 var selfLose = new LSprite();
	 selfLose.x = 30;
	 selfLose.y = 200;
	 resultChart.addChild(selfLose);
    if (temp == 0){
        var bitmap = new LBitmapData(imglist['selfLoseMeixi']);
    }

    if (temp == 1){
        var bitmap = new LBitmapData(imglist['selfLoseNeimaer']);
    }

    if (temp == 2){
        var bitmap = new LBitmapData(imglist['selfLoseRues']);
    }

    if (temp == 3){
        var bitmap = new LBitmapData(imglist['selfLoseVan']);
    }
	 selfLose.graphics.beginBitmapFill(bitmap);
	 selfLose.graphics.drawRect(1,'#000',[0,0,400,345],false);
	  
	  //enemy得分
	 var enemyWin = new LSprite();
	 enemyWin.x = 620;
	 enemyWin.y = 200;
	 resultChart.addChild(enemyWin);
    if (tempEn == 0){
        var bitmap = new LBitmapData(imglist['enemyWinMeixi']);

    }
    if (tempEn == 1){
        var bitmap = new LBitmapData(imglist['enemyWinNeimaer']);

    }
    if (tempEn == 2){
        var bitmap = new LBitmapData(imglist['enemyWinRues']);

    }
    if (tempEn == 3){
        var bitmap = new LBitmapData(imglist['enemyWinVan']);

    }
	  enemyWin.graphics.beginBitmapFill(bitmap);
	  enemyWin.graphics.drawRect(1,'#000',[0,0,400,345],false);

   var showResult = new LTextField();
	 showResult.text = 'Cheer Up!';
	 showResult.color = '#fff';
	 showResult.weight = 'bold';
	 showResult.size = '50';
	 showResult.x = 180;
	 showResult.y = 100;
	 resultChart.addChild(showResult);

        scoreNumberLeft = new LTextField();
        scoreNumberLeft.text=selfScore;
        scoreNumberLeft.color="#FFF";
        scoreNumberLeft.size="40";
        scoreNumberLeft.x=300;
        scoreNumberLeft.y=350;
		resultChart.addChild(scoreNumberLeft);
//	  resultChart.addChild(selfScore);

       scoreNumberMiddle = new LTextField();
        scoreNumberMiddle.text=':';
        scoreNumberMiddle.color="#FFF";
        scoreNumberMiddle.size="40";
        scoreNumberMiddle.x=450;
        scoreNumberMiddle.y=350;
		resultChart.addChild(scoreNumberMiddle);

        scoreNumberRight = new LTextField();
        scoreNumberRight.text=enemyScore;
        scoreNumberRight.x=600;
        scoreNumberRight.y=350;
        scoreNumberRight.color="#FFF";
        scoreNumberRight.size="40";
		resultChart.addChild(scoreNumberRight);
    //   resultChart.addChild(enemyScore);
	clock = 0;
	   if(clock == 0){
     window.clearInterval(t);
   }  
		    resultChart.addEventListener(LMouseEvent.MOUSE_UP,gamePageOne);
			
	
}






