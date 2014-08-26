//敌人力量大小 初始化
var force = 600;
//定义初始时间
var startTime = 9;
//显示时间变量
var t;
var ai;
//self
var temp = 0;
var clock = 0;
var userNameArr = [];
var userNameTemp = [];
var userName;
var j;

//全局得分变量，所有结果均调用此变量
var selfScore = 0, enemyScore = 0;
//var clock=1000;
var buoyancyController;
var mouseJoint = null;
//enemy
var tempEn = 1;
//-------游戏场景------
var backGroundLayer; //游戏背景
var loadingLayer; //载入图层
var imglist = {}; //图像列表对象
var imgData = [{
		name : "backGround",
		path : "img/backGround.png"
	}, {
		name : "billBroad",
		path : "img/billBroad.png"
	}, {
		name : "vs",
		path : "img/vs.png"
	}, {
		name : "choosePlayer",
		path : "img/choosePlayer.png"
	}, {
		name : "GO",
		path : "img/GO.png"
	}, {
		name : "beginGame",
		path : "img/beginGame.png"
	}, {
		name : "returnBg",
		path : "img/returnBg.png"
	}, {
		name : "welcome1",
		path : "img/welcome2.jpg"
	}, {
		name : "loginIn",
		path : "img/login3.png"
	}, {
		name : "ground2",
		path : "img/backGround.png"
	}, {
		name : "backGround2",
		path : "img/backGround2.jpg"
	}, {
		name : "neimaer",
		path : "img/neimaer.png"
	}, {
		name : "meixi",
		path : "img/meixi.png"
	}, {
		name : 'ArgentinaFrag',
		path : 'img/ArgentinaFrag.png'
	}, {
		name : 'BrazilFrag',
		path : 'img/BrazilFrag.png'
	}, {
		name : 'GramanyFrag',
		path : 'img/GramanyFrag.png'
	}, {
		name : 'HelanFrag',
		path : 'img/HelanFrag.png'
	}, {
		name : 'football',
		path : 'img/football.png'
	}, {
		name : 'soccer',
		path : 'img/soccer.png'
	}, {
		name : "whiteBtn2",
		path : "img/whiteBtn2.png"
	}, {
		name : "luoyisi",
		path : "img/GramanySport.png"
	}, {
		name : "fanpeixi",
		path : "img/helanSport.png"
	}, {
		name : "enemyLoseMeixi",
		path : "img/enemyLoseMeixi.png"
	}, {
		name : "enemyLoseNeimaer",
		path : "img/enemyLoseNeimaer.png"
	}, {
		name : "enemyLoseRues",
		path : "img/enemyLoseRues.png"
	}, {
		name : "enemyLoseVan",
		path : "img/enemyLoseVan.png"
	}, {
		name : "enemyWinMeixi",
		path : "img/enemyWinMeixi.png"
	}, {
		name : "enemyWinNeimaer",
		path : "img/enemyWinNeimaer.png"
	}, {
		name : "enemyWinVan",
		path : "img/enemyWinVan.png"
	}, {
		name : "enemyWinRues",
		path : "img/enemyWinRues.png"
	}, {
		name : "selfLoseMeixi",
		path : "img/selfLoseMeixi.png"
	}, {
		name : "selfLoseNeimaer",
		path : "img/selfLoseNeimaer.png"
	}, {
		name : "selfLoseRues",
		path : "img/selfLoseRues.png"
	}, {
		name : "selfLoseVan",
		path : "img/selfLoseVan.png"
	}, {
		name : "selfWinMeixi",
		path : "img/selfWinMeixi.png"
	}, {
		name : "selfWinNeimaer",
		path : "img/selfWinNeimaer.png"
	}, {
		name : "selfWinReus",
		path : "img/selfWinReus.png"
	}, {
		name : "selfWinVan",
		path : "img/selfWinVan.png"
	}, {
		name : "getScore",
		path : "img/getScore.png"
	}, {
		name : "demobg",
		path : "img/demobg.png"
	}, {
		name : "neimaerMove",
		path : "img/neimaerMove.png"
	}, {
		name : "chooseTeam",
		path : "img/chooseTeam.png"
	}, {
		name : "ChoisePage",
		path : "img/choisePageBackGround.jpg"
	}, {
		name : "yourScoreText",
		path : "img/yourScore.png"
	}, {
		name : "yourScorePage",
		path : "img/yourScorePage.png"
	}, {
		name : "yourChoose",
		path : "img/yourChoose.png"
	}, {
		name : "computerChoose",
		path : "img/computerChoose.png"
	},{
	  name : "loginMan",
	  path : "img/loginMan.png"
	},{
	  name : "baluo",
	  path : "img/baluo.png"
	},{
	  name : "gameClear",
	  path : "img/gameClear.jpg"
	}

];

var showList = new Array();
var showSport = new Array();
var Win = new Array();
var Lose = new Array();

var flagName = [{
		name : "阿根廷"
	}, {
		name : "巴西"
	}, {
		name : "德国"
	}, {
		name : "葡萄牙"
	}
];
var pageIndex = 1;
var showFlag = []; //游戏国旗面板
var sound; //音乐控制
var BoundTop; //游戏边界
//计分牌
var scoreNumberLeft;
var scoreNumberRight;
//足球
var ballLayer;
//得分
var resultScore;
//人与电脑
var selfBitmap, enemyBitmap;
var selfName, enemyName, enemyNameTwo;

//球门设置
var RightDoor;
var LeftDoor;

//选择模式
var backLayer;
var backLayer1;
var backLayer2;

var theTextField;
var login;

//时间
var cxtOne;
var SysSecondOne = parseInt(startTime);
cxtOne = new LTextField();

var ballMoveX, ballMoveY;
var refresh = 5;
var ai;
var step = 1 / 30;
//鼠标位置
var mX, mY;
var distance_ballandplayer;
var tag_run;
var tag_position;
var enX = enemyName.box2dBody.GetPosition().x;
var enY = enemyName.box2dBody.GetPosition().y;
var footballMoveX, footballMoveY;