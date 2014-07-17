
init(50,"gamePanel",900,600,main);



//-------游戏场景------
var backGroundLayer;//游戏背景
var loadingLayer;//载入图层
var imglist={};//图像列表对象
var imgData=[
	{name:"backGround",path:"img/backGround.jpg"},
	{name:"neimaer",path:"img/neimaer.png"},
	{name:"meixi",path:"img/meixi.png"},
	{name:'Argentina',path:'img/Argentina.png'},
    {name:'Brazil',path:'img/Brazil.png'},
    {name:'football',path:'img/football.png'},
	{name:"whiteBtn2",path:"img/whiteBtn2.png"}
];
var showFlag=[];
var sound;
var BoundTop;
var Argentina;
var Brazil;
var resultScore;




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
    Bound();
LLoadManage.load(
	imgData,
	function (progress){
	loadingLayer.setProgress(progress);
	},
	gameInit
);

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
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN,changePage);
	
	
	
}
//-----欢迎页面结束-----


//-----游戏场景-----
function changePage(){
	LGlobal.box2d=new LBox2d();
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
	var backGroundPic=new LBitmap(new LBitmapData(imglist["backGround"]));
	backGroundLayer.addChild(backGroundPic);
 
    //导入按钮图片
    musicBtn = new LSprite();
    musicBtn.x = 850;
    musicBtn.y = 10;
    backGroundLayer.addChild(musicBtn);
    var bitmap = new LBitmapData(imglist['whiteBtn2']);
    musicBtn.graphics.beginBitmapFill(bitmap);
    musicBtn.graphics.drawRect(1,"#000",[0,0,41,29],false);
    addChild(musicBtn);
    musicBtn.addEventListener(LMouseEvent.MOUSE_UP,onup);
	Bound();

	//-----------玩家1出现（梅西）------------
	var firstPlayerLayer=new LSprite();
	firstPlayerLayer.x=100;
	firstPlayerLayer.y=300;
	backGroundLayer.addChild(firstPlayerLayer);
	var bitmap= new LBitmapData(imglist["meixi"]);
	firstPlayerLayer.graphics.beginBitmapFill(bitmap);
	firstPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	firstPlayerLayer.addBodyCircle(40,40,40,0,5,0.5,0.9);
	
	//-----玩家2出现（内马尔）-----
	var secondPlayerLayer=new LSprite();
	secondPlayerLayer.x=500;
	secondPlayerLayer.y=300;
	backGroundLayer.addChild(secondPlayerLayer);
	var bitmap= new LBitmapData(imglist["neimaer"]);
	secondPlayerLayer.graphics.beginBitmapFill(bitmap);
	secondPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
	secondPlayerLayer.addBodyCircle(40,40,40,1,5,0.5,0.9);
	secondPlayerLayer.setBodyMouseJoint(true);
	
	//-----足球-----
	var ballLayer = new LSprite();
	ballLayer.x=450;
	ballLayer.y=300;
	backGroundLayer.addChild(ballLayer);
	var bitmap = new LBitmapData(imglist["football"]);
	ballLayer.graphics.beginBitmapFill(bitmap);
	ballLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
	ballLayer.addBodyCircle(20,20,20,1,5,0.2,0.9);
	
	showFlag.push(new LBitmapData(imglist["Argentina"]));
	showFlag.push(new LBitmapData(imglist["Brazil"]));
	
	//显示国旗Argentina
        Argentina = new LBitmap(showFlag[0]);
     	Argentina.x =50;
     	Argentina.y = 5;
     	backGroundLayer.addChild(Argentina);
	
	//显示国旗Brazil
     	Brazil = new LBitmap(showFlag[1]);
     	Brazil.x = 770;
     	Brazil.y = 5;
     	backGroundLayer.addChild(Brazil);
		
		scoreText();

}

	//---国家比分-----
	function scoreText(){
		resultScore = new LSprite();
     	resultScore.graphics.drawRect(0,'#f80',[0,0,670,30],false,'#000');
     	resultScore.x = 100;
     	resultScore.y =5;
     	backGroundLayer.addChild(resultScore);
     	
     	resultArgentina = new LTextField();
     	resultArgentina.text = '阿根廷';
     	resultArgentina.weight = 'bolder';
     	resultArgentina.color = '#fff';
     	resultArgentina.x = 20;
     	resultArgentina.y = 10;
     	resultScore.addChild(resultArgentina);
     	
     	resultBrazil = new LTextField();
     	resultBrazil.text = '巴西';
     	resultBrazil.weight = 'bolder';
     	resultBrazil.color = '#fff';
     	resultBrazil.x = 610;
     	resultBrazil.y = 10;
     	resultScore.addChild(resultBrazil);
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
var BoundTop;

function Bound(){
    LGlobal.box2d =  new LBox2d();
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






