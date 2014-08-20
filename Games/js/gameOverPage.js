 function gamePageOver() {
	window.clearInterval(getsecond);
	window.clearInterval(clock_distance);
	window.clearInterval(ai);
	backGroundLayer.die();
	backGroundLayer.removeAllChild();

	var gameOverLayer = new LSprite();
	gameOverLayer = new LBitmap(new LBitmapData(imglist["backGround2"]));
	backGroundLayer.addChild(gameOverLayer);

	var gameOverText = new LTextField();
	gameOverText.text = "GAME OVER";
	gameOverText.x = 300;
	gameOverText.y = 300;
	gameOverText.size = 40;
	gameOverText.color = "#fff";
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN, upLoadResult);
	backGroundLayer.addChild(gameOverText);
}

//欢迎进入游戏世界效果调用
function windComplete(event) {}

function upLoadResult() {
	window.clearInterval(getsecond);
	window.clearInterval(clock_distance);
	window.clearInterval(ai);

	var upLoadResultLayer = new LSprite();
	upLoadResultLayer = new LBitmap(new LBitmapData(imglist["getScore"]));
	var upLoadResultSelf = new LTextField();
	var upLoadResultTitle = new LTextField();

	upLoadResultTitle = new LTextField();
	upLoadResultTitle.text = "您的最后得分为:" + selfScore;
	upLoadResultTitle.x = 180;
	upLoadResultTitle.y = 200;
	upLoadResultTitle.size = 45;
	upLoadResultTitle.color = "#FFF";
	upLoadResultTitle.stroke = true;
	upLoadResultTitle.lineWidth = 5;
	upLoadResultTitle.lineColor = "#0c8904";
	upLoadResultTitle.speed = 2;
	upLoadResultTitle.addEventListener(LTextEvent.WIND_COMPLETE, windComplete);
	upLoadResultTitle.wind();

	backGroundLayer.addChild(upLoadResultLayer);
	backGroundLayer.addChild(upLoadResultTitle);

	var buttonNew = new LSprite();
	buttonNew.graphics.drawRect(0, "#000", [380, 480, 120, 40], false);
	backGroundLayer.addChild(buttonNew);

  //返回首页
	var bitmapUp = new LBitmap(new LBitmapData(imglist["returnBg"],11,5,187,60));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["returnBg"],11,75,187,60));
	var buttonEnter = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	buttonEnter.x = 360;
	buttonEnter.y = 550;
	buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,loginIn);

}