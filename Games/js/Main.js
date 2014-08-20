document.write('<script src="js/value.js"></script>');
document.write('<script src="js/gamePageOne.js"></script>');
document.write('<script src="js/distance.js"></script>');
document.write('<script src="js/ChoosePerson.js"></script>');
document.write('<script src="js/showScore.js"></script>');
init(1000/60, "gamePanel", 900,640, main);
//ai射门力量
var force=600;

function test2(e){
    if(e.keyCode == 113){
        LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
        LGlobal.screen(LStage.FULL_SCREEN);
    }
}

//---------游戏入口---------
function main() {
	LGlobal.webAudio = false;
	sound = new LSound();
	LGlobal.setDebug(true);
	backGroundLayer = new LSprite();
	backGroundLayer.graphics.drawRect(1, "#000", [0, 0, 900, 640], true, "#000");
	addChild(backGroundLayer);

	loadingLayer = new LoadingSample4();
	backGroundLayer.addChild(loadingLayer);

	LLoadManage.load(
		imgData,
		function (progress) {
		loadingLayer.setProgress(progress);
	},
		gameInit);
	LGlobal.box2d = new LBox2d();
	LGlobal.stage.addEventListener(LKeyboardEvent.KEY_DOWN, test2);
}

//-----欢迎页面开始-----
function gameInit(result) {
	imglist = result;
	backGroundLayer.removeChild(loadingLayer);
	loadingLayer = null;

	LGlobal.setDebug(true);
	welcomePage();

}

var player;
    
function welcomePage(){

	var loginInPage = new LSprite();
	loginInPage = new LBitmap(new LBitmapData(imglist["loginIn"]));
	backGroundLayer.addChild(loginInPage);
	
	var neimaerMove=new LSprite();
	var list=LGlobal.divideCoordinate(167,332,4,4);

	
	
	var playerRandom = Math.floor(Math.random()*4);
	var data=new LBitmapData(imglist["neimaerMove"],0,0,42,83);
	player=neimaerMove = new LAnimationTimeline(data,list);
	player.setAction(playerRandom);
	player.speed=5;
	neimaerMove.x=440;
	neimaerMove.y=250;
	backGroundLayer.addChild(neimaerMove);

	


	var clickText = new LTextField();
	backGroundLayer.addChild(clickText);
	clickText.color = "#fff";
	clickText.size = 50;
	clickText.x = 250;
	clickText.y = 120;
	clickText.stroke = true;
	clickText.lineWidth = 2;
	clickText.lineColor = "#57a520";
	backGroundLayer.addChild(clickText);

	var login = new LSprite();
	login.graphics.drawRect(0, '#fff', [0, 0, 195, 34]);
	backGroundLayer.addChild(login);

	theTextField = new LTextField();
	theTextField.setType(LTextFieldType.INPUT, login);
	theTextField.x = 325;
	theTextField.y = 350;
	theTextField.color = '#000';
	backGroundLayer.addChild(theTextField);
	theTextField.addEventListener(LTextEvent.TEXT_INPUT, textInput);

	theTextField.addEventListener(LFocusEvent.FOCUS_IN, onfocus);
	theTextField.addEventListener(LFocusEvent.FOCUS_OUT, outfocus);
	
	
	
	//GO
	var bitmapUp = new LBitmap(new LBitmapData(imglist["GO"]));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["GO"]));
	var buttonEnter = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	buttonEnter.x = 537;
	buttonEnter.y = 350;
	buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,loginIn);

}


function Move(){
	player.onframe();
}

function enterCode(e) {
	loginIn();
}

function textInput(e) {
    
	if (e.keyCode != 13) {
		for (var i = 0; i < 1; i++) {
			userNameArr[i] = e.keyCode;
		}
		for (j = 0; j < userNameArr.length; j++) {
			userNameTemp[j] = String.fromCharCode(userNameArr[j]);
			userName += userNameTemp[j];
			console.warn(userName.toLowerCase().substring(9));
		}
	} else {
		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_DOWN, enterCode);
	}
}

//-----欢迎页面结束-----

//登录界面
function loginIn() {

	$("#gamePanel_InputTextBox").css('display', 'none');
	window.clearInterval(t);
	backGroundLayer.die();
	backGroundLayer.removeAllChild();

	SysSecondOne = parseInt(startTime);
	selfScore = 0;
	enemyScore = 0;
	var welcomePage = new LSprite();
	welcomePage = new LBitmap(new LBitmapData(imglist["welcome1"]));
	backGroundLayer.addChild(welcomePage);

	
	//选择人物按钮
	var bitmapUp = new LBitmap(new LBitmapData(imglist["choosePlayer"],11,5,187,60));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["choosePlayer"],11,75,187,60));
	var buttonEnter = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	buttonEnter.x = 200;
	buttonEnter.y = 500;
    buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN, ChoosePerson);
	
	//排行榜按钮
	var bitmapUp = new LBitmap(new LBitmapData(imglist["billBroad"],11,5,187,60));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["billBroad"],11,75,187,60));
	var gradeScore = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(gradeScore);
	gradeScore.x = 500;
	gradeScore.y = 500;
	gradeScore.addEventListener(LMouseEvent.MOUSE_DOWN,Billboard);	

}

function onfocus(e) {
	e.currentTarget.size = 15;
}
function outfocus(e) {
	e.currentTarget.size = 15;
}

//---国家比分-----
function scoreText() {
	resultScore = new LSprite();
	resultScore.graphics.drawRect(0, '#f80', [0, 0, 670, 30], false, '#000');
	resultScore.x = 100;
	resultScore.y = 45;
	backGroundLayer.addChild(resultScore);
	//------------记分牌------------
	resultArgentina = new LTextField();
	scoreNumberLeft = new LTextField();
	scoreNumberLeft.text = selfScore;
	scoreNumberLeft.color = "#FFF";
	scoreNumberLeft.size = "18";
	scoreNumberLeft.x = 317;
	scoreNumberLeft.y = 7;

	if (temp == 0) {
		resultArgentina.text = '阿根廷';
	}
	if (temp == 1) {
		resultArgentina.text = '巴西';
	}
	if (temp == 2) {
		resultArgentina.text = '德国';
	}
	if (temp == 3) {
		resultArgentina.text = '葡萄牙';
	}
	resultArgentina.weight = 'bolder';
	resultArgentina.color = '#fff';
	resultArgentina.x = 20;
	resultArgentina.y = 10;
	resultScore.addChild(resultArgentina);
	resultScore.addChild(scoreNumberLeft);

	resultBrazil = new LTextField();
	scoreNumberRight = new LTextField();
	scoreNumberRight.text = enemyScore;
	scoreNumberRight.x = 380;
	scoreNumberRight.y = 7;
	scoreNumberRight.color = "#FFF";
	scoreNumberRight.size = "18";

	if (tempEn == 0) {
		resultBrazil.text = '阿根廷';
	}
	if (tempEn == 1) {
		resultBrazil.text = '巴西';
	}
	if (tempEn == 2) {
		resultBrazil.text = '德国';
	}
	if (tempEn == 3) {
		resultBrazil.text = '葡萄牙';
	}
	resultBrazil.weight = 'bolder';
	resultBrazil.color = '#fff';
	resultBrazil.x = 600;
	resultBrazil.y = 10;
	resultScore.addChild(resultBrazil);
	resultScore.addChild(scoreNumberRight);
	//----------记分牌结束-------------
	//-----碰撞侦听事件------
	LGlobal.box2d.setEvent(LEvent.POST_SOLVE, postSolve);
}

//------------播放音乐-----------------
function onup(e) {
	if (sound.length == 0) {
		var url = './sound/2014Soccer.mp3';
		sound.load(url);
		sound.addEventListener(LEvent.COMPLETE, loadOver);
	} else if (sound.playing) {
		sound.stop();
	} else {
		sound.play();
	}
}
function loadOver(e) {
	sound.play();
}

//----------物体碰撞边界----------
function Bound() {
	BoundTop = new LSprite();
	backGroundLayer.addChild(BoundTop);
	var shapeArray = [
		[[65, 80], [70, 80], [70, 600], [65, 600]],
		[[65, 80], [845, 80], [845, 85], [65, 85]],
		[[845, 80], [845, 600], [840, 600], [840, 80]],
		[[65, 600], [70, 590], [845, 590], [845, 600]]
	];
	BoundTop.addBodyVertices(shapeArray, 0, 0, 0, .5, .4, .5);

	//-----------设置球门-------------
	ballDoor = new LSprite();
	backGroundLayer.addChild(ballDoor);
	ballDoor.graphics.drawRect(0, '#f00', [808, 250, 35, 105], false);
	ballDoor.graphics.drawRect(0, '#f00', [67, 248, 35, 105], false);
}

//-----侦听两个物体的碰撞------
function postSolve(contact, impulse) {
	var objA = contact.GetFixtureA().GetBody().GetUserData();
	var objB = contact.GetFixtureB().GetBody().GetUserData();
	if (objA.type == "LSprite" && objB.type == "LSprite") {
		if ((objA == ballLayer && objB == RightDoor) ||
			(objA == RightDoor && objB == ballLayer)) {
			selfScore += 1;
			scoreNumberLeft.text = selfScore;
			scoreNumberRight.text = enemyScore;

			showSelfScore();
		}
	}

	if (objA.type == "LSprite" && objB.type == "LSprite") {
		if ((objA == ballLayer && objB == LeftDoor) ||
			(objA == LeftDoor && objB == ballLayer)) {
			enemyScore += 1;
			scoreNumberRight.text = enemyScore;
			scoreNumberLeft.text = selfScore;
			showEnemyScore();

		}
	}
}

//给球施加力
function force_ball(){
	if(tag_run==false){
		if(enY<287/30){
			var vec = new LGlobal.box2d.b2Vec2(-force,force);
			ballLayer.box2dBody.ApplyForce(vec, ballLayer.box2dBody.GetWorldCenter());
		}
		if(enY>392/30){
			var vec = new LGlobal.box2d.b2Vec2(-force,-force);
			ballLayer.box2dBody.ApplyForce(vec, ballLayer.box2dBody.GetWorldCenter());
		}
		else{
			var vec = new LGlobal.box2d.b2Vec2(-force,0);
			ballLayer.box2dBody.ApplyForce(vec, ballLayer.box2dBody.GetWorldCenter());
		}	
	}	
}


//-----------------------排行榜界面开始--------------------
function Billboard() {

	backGroundLayer.die();
	backGroundLayer.removeAllChild();
	var scoreChart = new LSprite();
	scoreChart = new LBitmap(new LBitmapData(imglist["demobg"]));
	backGroundLayer.addChild(scoreChart);

	//返回首页
	var bitmapUp = new LBitmap(new LBitmapData(imglist["returnBg"],11,5,187,60));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["returnBg"],11,75,187,60));
	var buttonExit = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonExit);
	buttonExit.x = 690;
	buttonExit.y = 570;
	buttonExit.addEventListener(LMouseEvent.MOUSE_DOWN,loginIn);

}

		

