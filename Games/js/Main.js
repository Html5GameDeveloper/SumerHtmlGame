﻿
init(20,"gamePanel",900,600,main);
//-------游戏场景------
var backGroundLayer;//游戏背景
var loadingLayer;//载入图层
var imglist={};//图像列表对象
var imgData=[
	{name:"backGround",path:"img/backGround.jpg"},
    {name:"ground2",path:"img/backGround.jpg"},
    {name:"ground1",path:"img/backGround1.jpg"},
	{name:"neimaer",path:"img/neimaer.png"},
	{name:"meixi",path:"img/meixi.png"},
	{name:'Argentina',path:'img/Argentina.png'},
    {name:'Brazil',path:'img/Brazil.png'},
    {name:'football',path:'img/football.png'},
	{name:"whiteBtn2",path:"img/whiteBtn2.png"}
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
//内马尔


var firstPlayerLayer;
var secondPlayerLayer;

var RightDoor;
var LeftDoor;




//---------主函数入口---------
function main(){
 LGlobal.webAudio = false;
sound = new LSound();
LGlobal.setDebug(true);
backGroundLayer=new LSprite()	;
backGroundLayer.graphics.drawRect(1,"#000",[0,0,900,600],true,"#000");
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
//console.warn("123");
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
	clickText.color="#fff";
	clickText.text="点击进入游戏";
	clickText.size=30;
	clickText.x=325;
	clickText.y=320;
	backGroundLayer.addChild(clickText);
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN,choisePage);
	

}
//-----欢迎页面结束-----

//进入选择页面
function choisePage(){
    backGroundLayer.die();
    backGroundLayer.removeAllChild();
    /*  back.graphics.drawRect(1,'#f00',[0,0,900,600],false);*/
    var backGroundPic=new LBitmap(new LBitmapData(imglist["ground1"]));
    backGroundLayer.addChild(backGroundPic);
    /*  backGroundLayer.addChild(back);*/
    onup();
    backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN,gamePage);
}

//-----游戏场景-----
function gamePage(){
 
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
	var backGroundPic=new LBitmap(new LBitmapData(imglist["backGround"]));
	backGroundLayer.addChild(backGroundPic);

    //设置游戏边界函数
    Bound();

    //浮力效果初始化
    var buoyancyController = new LGlobal.box2d.b2BuoyancyController();
    buoyancyController.offset = -1/LGlobal.box2d.drawScale;
    buoyancyController.density = 3;
    buoyancyController.linearDrag = 10;
    buoyancyController.angularDrag = 6;
    LGlobal.box2d.world.AddController(buoyancyController);

    var buoyancyControllerLayer = new LSprite();
    buoyancyControllerLayer.graphics.drawRect(0,"#ffffff",[0, 0, 900, 600],false);
    buoyancyControllerLayer.alpha = 0.2;
    backGroundLayer.addChild(buoyancyControllerLayer);

    //导入音乐播放按钮图片
    musicBtn = new LSprite();
    musicBtn.x = 850;
    musicBtn.y = 10;
    backGroundLayer.addChild(musicBtn);
    var bitmap = new LBitmapData(imglist['whiteBtn2']);
    musicBtn.graphics.beginBitmapFill(bitmap);
    musicBtn.graphics.drawRect(1,"#000",[0,0,41,29],false);
    addChild(musicBtn);

    musicBtn.addEventListener(LMouseEvent.MOUSE_UP,onup);

	//-----------玩家1出现（梅西）------------	
	 firstPlayerLayer=new LSprite();
	firstPlayerLayer.x=200;
	firstPlayerLayer.y=300;
	backGroundLayer.addChild(firstPlayerLayer);
	var bitmapMeixi= new LBitmapData(imglist["meixi"]);
	firstPlayerLayer.graphics.beginBitmapFill(bitmapMeixi);
	firstPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	firstPlayerLayer.addBodyCircle(40,40,40,1,3,0,1);
	//firstPlayerLayer.setBodyMouseJoint(true);
   buoyancyController.AddBody(firstPlayerLayer.box2dBody);
	
	//-----玩家2出现（内马尔）-----
	 secondPlayerLayer=new LSprite();
	secondPlayerLayer.x=500;
	secondPlayerLayer.y=300;
	backGroundLayer.addChild(secondPlayerLayer);
	var bitmapNeimaer= new LBitmapData(imglist["neimaer"]);
	secondPlayerLayer.graphics.beginBitmapFill(bitmapNeimaer);
	secondPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
//	 secondPlayerLayer.addEventListener(LMouseEvent.MOUSE_DOWN,move);
//    secondPlayerLayer.addEventListener(LMouseEvent.MOUSE_UP,move1);
	secondPlayerLayer.addBodyCircle(40,40,40,1,3,0,1);
	secondPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(secondPlayerLayer.box2dBody);
	

	
	//-----足球-----
	ballLayer = new LSprite();
	ballLayer.x=450;
	ballLayer.y=300;
	backGroundLayer.addChild(ballLayer);
	var bitmap = new LBitmapData(imglist["football"]);
	ballLayer.graphics.beginBitmapFill(bitmap);
	ballLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
	ballLayer.addBodyCircle(20,20,20,1,3,0.01,2.5);
    buoyancyController.AddBody(ballLayer.box2dBody);
	
	showFlag.push(new LBitmapData(imglist["Argentina"]));
	showFlag.push(new LBitmapData(imglist["Brazil"]));
	
	//显示国旗Argentina
        var Argentina = new LBitmap(showFlag[0]);
     	Argentina.x =50;
     	Argentina.y = 5;
     	backGroundLayer.addChild(Argentina);
	
	//显示国旗Brazil
        var Brazil = new LBitmap(showFlag[1]);
     	Brazil.x = 770;
     	Brazil.y = 5;
     	backGroundLayer.addChild(Brazil);
		
		scoreText();
		
		//-----设置右边球门-----
    RightDoor=new LSprite();
	RightDoor.x=825;
	RightDoor.y=300;
	backGroundLayer.addChild(RightDoor);
	RightDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(RightDoor.box2dBody);


//-----设置左边球门-----
    LeftDoor=new LSprite();
	LeftDoor.x=80;
	LeftDoor.y=300;
	backGroundLayer.addChild(LeftDoor);
	LeftDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(LeftDoor.box2dBody);
		
}
/*
	  function move(){
          secondPlayerLayer.addBodyCircle(40,40,40,1,3,0.5,0.9);
          secondPlayerLayer.setBodyMouseJoint(true);
      //    buoyancyController.AddBody(secondPlayerLayer.box2dBody)
    }
function move1(){
    secondPlayerLayer.setBodyMouseJoint(false);
}*/
	//---国家比分-----
	function scoreText(){
		resultScore = new LSprite();
     	resultScore.graphics.drawRect(0,'#f80',[0,0,670,30],false,'#000');
     	resultScore.x = 100;
     	resultScore.y =5;
     	backGroundLayer.addChild(resultScore);
       // var scoreNumberLeft;
       // var scoreNumberRight;
     	//记分牌
     	resultArgentina = new LTextField();
        scoreNumberLeft = new LTextField();
        scoreNumberLeft.text=0;
        scoreNumberLeft.color="#FFF";
        scoreNumberLeft.size="18";
        scoreNumberLeft.x=317;
        scoreNumberLeft.y=7;


     	resultArgentina.text = '阿根廷';
     	resultArgentina.weight = 'bolder';
     	resultArgentina.color = '#fff';
     	resultArgentina.x = 20;
     	resultArgentina.y = 10;
     	resultScore.addChild(resultArgentina);
        resultScore.addChild(scoreNumberLeft);
     	
     	resultBrazil = new LTextField();
        scoreNumberRight = new LTextField();
        scoreNumberRight.text=0;
        scoreNumberRight.x=380;
        scoreNumberRight.y=7;
        scoreNumberRight.color="#FFF";
        scoreNumberRight.size="18";

     	resultBrazil.text = '巴西';
     	resultBrazil.weight = 'bolder';
     	resultBrazil.color = '#fff';
     	resultBrazil.x = 610;
     	resultBrazil.y = 10;
     	resultScore.addChild(resultBrazil);
        resultScore.addChild(scoreNumberRight);

/*

        //得分条件
        if(ballLayer.x >ballDoor.x || ballLayer.y > ballDoor.y && ballLayer.y <ballDoor.y + 105){
            win+=1;
        }
        if(ballLayer.x <ballDoor.x || ballLayer.y > ballDoor.y && ballLayer.y <ballDoor.y + 105){
            loss+=1;
        }

        var win= 0,loss=0;
        scoreNumberRight.text=win;
        scoreNumberLeft.text = loss;
        */
		
			//-----碰撞侦听事件------
 LGlobal.box2d.setEvent(LEvent.POST_SOLVE,postSolve);
		
	}

//播放音乐
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

//物体碰撞边界
function Bound(){
 
    BoundTop = new LSprite();
    backGroundLayer.addChild(BoundTop);
    var shapeArray = [
        [[65,40],[70,40],[70,560],[65,560]],
        [[65,40],[845,40],[845,45],[65,45]],
        [[845,40],[845,560],[840,560],[840,40]],
        [[65,560],[70,550],[845,550],[845,560]]
    ];
    BoundTop.addBodyVertices(shapeArray,0,0,0,.5,.4,.5);

    //设置球门
    ballDoor = new LSprite();
    backGroundLayer.addChild(ballDoor);
    ballDoor.graphics.drawRect(0,'#f00',[808,250,35,105],false);
    ballDoor.graphics.drawRect(0,'#f00',[67,248,35,105],false);
}
/*
//-----设置右边球门-----
    RightDoor=new LSprite();
	RightDoor.x=808;
	RightDoor.y=250;
	backGroundLayer.addChild(RightDoor);
	RightDoor.addBodyRect(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    buoyancyController.AddBody(RightDoor.box2dBody);


//-----设置左边球门-----
    LeftDoor=new LSprite();
	LeftDoor.x=67;
	LeftDoor.y=248;
	backGroundLayer.addChild(LeftDoor);
	LeftDoor.addBodyRect(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    buoyancyController.AddBody(LeftDoor.box2dBody);
*/


//-----侦听两个物体的碰撞------
function postSolve(contact,impulse){
	var objA = contact.GetFixtureA().GetBody().GetUserData();
	var objB = contact.GetFixtureB().GetBody().GetUserData();
	if(objA.type == "LSprite" && objB.type == "LSprite"){
		if((objA == ballLayer && objB == RightDoor) || 
			(objA == RightDoor && objB == ballLayer)){
			scoreNumberLeft.text = scoreNumberLeft.text + 1;
			alert("梅西得分");
		}
	}
	
	if(objA.type == "LSprite" && objB.type == "LSprite"){
		if((objA == ballLayer && objB == LeftDoor) || 
			(objA == LeftDoor && objB == ballLayer)){
			alert("内马尔得分");
			scoreNumberRight.text = scoreNumberRight.text + 1;
		}
	}

}


