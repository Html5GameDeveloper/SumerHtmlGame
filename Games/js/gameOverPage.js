 function gamePageOver() {
	clock_distance_iswork=false;
	window.clearInterval(getsecond);
	//window.clearInterval(clock_distance);
	window.clearInterval(ai);
	backGroundLayer.die();
	backGroundLayer.removeAllChild();

	var gameOverLayer = new LSprite();
	gameOverLayer = new LBitmap(new LBitmapData(imglist["backGround2"]));
	backGroundLayer.addChild(gameOverLayer);
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN, upLoadResult);

}

//欢迎进入游戏世界效果调用
function windComplete(event) {}

function upLoadResult() {
	window.clearInterval(getsecond);
	window.clearInterval(clock_distance);
	window.clearInterval(ai);

	var upLoadResultLayer = new LSprite();
	upLoadResultLayer = new LBitmap(new LBitmapData(imglist["yourScorePage"]));
	
	
	var yourScoreText = new LSprite();
	yourScoreText = new LBitmap(new LBitmapData(imglist["yourScoreText"]));
	yourScoreText.x=100;
	yourScoreText.y=200;
	
	var last_score=new LTextField();
	last_score.text=(selfScore-enemyScore)*1000;
	last_score.x=470;
	last_score.y=188;
	last_score.size=45;
	
	var clickNext = new LTextField();
	clickNext.text = "点此处进入下一关>>";
	clickNext.x = 650;
	clickNext.y = 520;
	clickNext.color = "#f00";
	clickNext.size = 20;
	
	var clickSprite = new LSprite();
	clickSprite.graphics.drawRect(0,"#000",[650,515,250,40],false);
	
	
	if(last_score.text <= 5000){
	clickSprite.addEventListener(LMouseEvent.MOUSE_DOWN, nextPage);
	}else{
	clickSprite.addEventListener(LMouseEvent.MOUSE_DOWN, notEnter);
	}
	
	backGroundLayer.addChild(upLoadResultLayer);
	backGroundLayer.addChild(clickSprite);
	backGroundLayer.addChild(yourScoreText);
	backGroundLayer.addChild(last_score);
	backGroundLayer.addChild(clickNext);

	var buttonNew = new LSprite();
	buttonNew.graphics.drawRect(0, "#000", [380, 480, 120, 40], false);
	backGroundLayer.addChild(buttonNew);

  //返回首页
	var bitmapUp = new LBitmap(new LBitmapData(imglist["returnBg"],0,0,124,41));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["returnBg"],0,47,124,41));
	var buttonEnter = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	buttonEnter.x = 750;
	buttonEnter.y = 560;
	buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,loginIn);

}

function notEnter(){
 alert("亲，第一关需获得5000分方可进入下一关哦！");
}