function nextPage(){
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
    var backLayer1 = new LSprite();
	backLayer1 = new LBitmap(new LBitmapData(imglist["loginMan"]));
	//backLayer.graphics.drawRect(1, "#000", [0, 0, 900, 640], true, "#000");
	backGroundLayer.addChild(backLayer1);
		
	
    var neimaerMove = new LSprite();
	var list = LGlobal.divideCoordinate(167, 415, 5, 4);

	//var playerRandom = Math.floor(Math.random() * 4);
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player = neimaerMove = new LAnimationTimeline(data, list);
	player.setAction(4);
	player.speed = 5;
	neimaerMove.x = 410;
	neimaerMove.y = 0;
	backGroundLayer.addChild(neimaerMove);
	
	setInterval(function(){
	if(neimaerMove.y <= 250){
	    neimaerMove.y += 5;
		}else{
		 window.clearInterval();
		}
	},50);
	
	var next = new LTextField();
	next.text = "恭喜你闯过第一关！";
	next.x = 320;
	next.y = 140;
	next.size = 20;
	next.color = "#945a4e";
	next.weight = "bold";
	backGroundLayer.addChild(next);
	next.speed = 20;
	next.addEventListener(LTextEvent.WIND_COMPLETE,windComplete);
	next.wind();
	
	
	
	var theTextField = new LTextField();
	theTextField.x = 310;
	theTextField.y = 330;
	backGroundLayer.addChild(theTextField);
	theTextField.text = "下一场该我上场啦！";
	theTextField.speed = 18;
	theTextField.size = 20;
	//theTextField.style = "微软雅黑";
	theTextField.weight = "bold";
	theTextField.color = "#945a4e"
	theTextField.addEventListener(LTextEvent.WIND_COMPLETE,windComplete);
	theTextField.wind();
}
function windComplete(e){
   trace("windComplete","e.currentTarget = " + e.currentTarget);
}
























