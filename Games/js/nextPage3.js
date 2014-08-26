//游戏第二关跳第三关中间过渡场景

function nextPage3(){
	selfScore = 0;enemyScore = 0;
	SysSecondOne = parseInt(startTime);
	selfScore = 0;
	enemyScore = 0;
	window.clearInterval(t);
	//window.clearInterval(ai);
	window.clearInterval(clock_distance);
	window.clearInterval(getsecond);
	clock_distance_iswork=false;
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
    var backLayer1 = new LSprite();
	backLayer1 = new LBitmap(new LBitmapData(imglist["loginMan"]));
	//backLayer.graphics.drawRect(1, "#000", [0, 0, 900, 640], true, "#000");
	backGroundLayer.addChild(backLayer1);
		
	
    var neimaerMove = new LSprite();
	var neimaerMove1 = new LSprite();
	var neimaerMove2 = new LSprite();
	var neimaerMove3 = new LSprite();
	var neimaerMove4 = new LSprite();
	var list = LGlobal.divideCoordinate(167, 415, 5, 4);

	//var playerRandom = Math.floor(Math.random() * 4);
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player = neimaerMove = new LAnimationTimeline(data, list);
	player.setAction(4);
	player.speed = 5;
	neimaerMove.x = 420;
	neimaerMove.y = 0;
	backGroundLayer.addChild(neimaerMove);
	neimaerMove.addEventListener(LMouseEvent.MOUSE_UP, gameClear);
	
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player2 = neimaerMove1 = new LAnimationTimeline(data, list);
	player2.setAction(0);
	player2.speed = 5;
	neimaerMove1.x = 370;
	neimaerMove1.y = 0;
	backGroundLayer.addChild(neimaerMove1);
	neimaerMove1.addEventListener(LMouseEvent.MOUSE_UP, gameClear);
	
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player2 = neimaerMove2 = new LAnimationTimeline(data, list);
	player2.setAction(1);
	player2.speed = 5;
	neimaerMove2.x = 470;
	neimaerMove2.y = 0;
	backGroundLayer.addChild(neimaerMove2);
	neimaerMove2.addEventListener(LMouseEvent.MOUSE_UP, gameClear);
	
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player2 = neimaerMove3 = new LAnimationTimeline(data, list);
	player2.setAction(2);
	player2.speed = 5;
	neimaerMove3.x = 320;
	neimaerMove3.y = 0;
	backGroundLayer.addChild(neimaerMove3);
	neimaerMove3.addEventListener(LMouseEvent.MOUSE_UP, gameClear);
	
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player2 = neimaerMove4 = new LAnimationTimeline(data, list);
	player2.setAction(3);
	player2.speed = 5;
	neimaerMove4.x = 520;
	neimaerMove4.y = 0;
	backGroundLayer.addChild(neimaerMove4);
	neimaerMove4.addEventListener(LMouseEvent.MOUSE_UP, gameClear);
	
	setInterval(function(){
	if(neimaerMove.y <= 250){
	    neimaerMove.y += 5;
		neimaerMove1.y += 5;
		neimaerMove2.y += 5;
		neimaerMove3.y += 5;
		neimaerMove4.y += 5;
		}else{
		 window.clearInterval();
		}
	},50);
	//文字
	var next = new LTextField();
	next.text = "恭喜您通过了第三关";
	next.x = 320;
	next.y = 140;
	next.size = 20;
	next.color = "#945a4e";
	next.weight = "bold";
	next.font = "微软雅黑";
	backGroundLayer.addChild(next);
	next.speed = 20;
	next.addEventListener(LTextEvent.WIND_COMPLETE,windComplete);
	next.wind();
	
	var theTextField = new LTextField();
	theTextField.x = 300;
	theTextField.y = 330;
	backGroundLayer.addChild(theTextField);
	theTextField.text = "你击败了我们";
	theTextField.speed = 15;
	theTextField.size = 18;
	theTextField.font = "微软雅黑";
	theTextField.weight = "bold";
	theTextField.color = "#945a4e";
	theTextField.addEventListener(LTextEvent.WIND_COMPLETE,windComplete);
	theTextField.wind();
}
function windComplete(e){
  // trace("windComplete","e.currentTarget = " + e.currentTarget);
}
























