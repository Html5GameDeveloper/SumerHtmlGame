
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
	{name:"whiteBtn2",path:"img/whiteBtn2.png"},
    {name:"backLayer1",path:"img/backLayer1.jpg"},
    {name:"backLayer2",path:"img/backLayer2.jpg"},
    {name:"backGroundTwo",path:"img/backGroundTwo.jpg"},
    {name:"luomeiluo",path:"img/luomeiluo.png"},
    {name:"Brailman",path:"img/Brailman.png"}
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

//选择模式
var backLayer;
var backLayer1;
var backLayer2;


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
	clickText.text="超级足球大战";
	clickText.size=45;
	clickText.x=270;
	clickText.y=315;
	backGroundLayer.addChild(clickText);
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN,choisePage);

}
//-----欢迎页面结束-----


//进入选择页面
function choisePage(){
    backGroundLayer.die();
    backGroundLayer.removeAllChild();
    backLayer = new LSprite();
    backLayer.graphics.drawRect(1,"#fff",[0,0,900,600],true,"#000");
    backGroundLayer.addChild(backLayer);

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
    backLayer1.addEventListener(LMouseEvent.MOUSE_UP,gamePageOne);

    var chioceSingle =new LTextField();
    chioceSingle.x=160;
    chioceSingle.y=370;
    chioceSingle.size=25;
    chioceSingle.color="white";
    chioceSingle.text="单机模式";
    backLayer.addChild(chioceSingle);

    backLayer2 = new LSprite();
    backLayer2.x = 475;
    backLayer2.y = 100;
    backLayer.addChild(backLayer2);
    var  bitmap = new LBitmapData(imglist['backLayer2']);
    backLayer2.graphics.beginBitmapFill(bitmap);
    backLayer2.graphics.drawRect(1,"#000",[0,0,385,256],false);
    backLayer2.addEventListener(LMouseEvent.MOUSE_UP,gamePageTwo);

    var chioceMore =new LTextField();
    chioceMore.x=600;
    chioceMore.y=370;
    chioceMore.size=25;
    chioceMore.color="white";
    chioceMore.text="多人对战";
    backLayer.addChild(chioceMore);
    onup();

}
	//---国家比分-----
	function scoreText(){
		resultScore = new LSprite();
     	resultScore.graphics.drawRect(0,'#f80',[0,0,670,30],false,'#000');
     	resultScore.x = 100;
     	resultScore.y =5;
     	backGroundLayer.addChild(resultScore);
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


