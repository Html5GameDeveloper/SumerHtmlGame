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
/*
	var gameOverText = new LTextField();
	gameOverText.text = "GAME OVER";
	gameOverText.x = 300;
	gameOverText.y = 300;
	gameOverText.size = 40;
	gameOverText.color = "#fff";
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN, upLoadResult);
	
	backGroundLayer.addChild(gameOverText);
	*/
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
	
	

	backGroundLayer.addChild(upLoadResultLayer);
	backGroundLayer.addChild(yourScoreText);
	backGroundLayer.addChild(last_score);

	var buttonNew = new LSprite();
	buttonNew.graphics.drawRect(0, "#000", [380, 480, 120, 40], false);
	backGroundLayer.addChild(buttonNew);

  //返回首页
	var bitmapUp = new LBitmap(new LBitmapData(imglist["returnBg"],11,5,187,60));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["returnBg"],11,75,187,60));
	var buttonEnter = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	buttonEnter.x = 360;
	buttonEnter.y = 350;
	buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,loginIn);

}