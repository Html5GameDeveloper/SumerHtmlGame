function gameClear(){

clock_distance_iswork=false;//是否实时获取球与人之间的距离
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
	window.clearInterval(getsecond);
     //清除敌人移动定时器
	window.clearInterval(ai);
    //清楚敌人门将移动定时器
    window.clearInterval(ai2);
	window.clearInterval(clock_distance);
	//window.clearInterval(ai3);
	isballLive=false;

    if(pageIndex==2||pageIndex==3){
        window.clearInterval(clock_distance_2);
    }


    var gameClear = new LSprite();
	gameClear = new LBitmap(new LBitmapData(imglist["gameClear"]));
	backGroundLayer.addChild(gameClear);
	//backGroundLayer.addEventListener(LMouseEvent.MOUSE_DOWN, upLoadResult);
	
	 var neimaerMove = new LSprite();
	var list = LGlobal.divideCoordinate(167, 498, 6, 4);

	//var playerRandom = Math.floor(Math.random() * 4);
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);
	player = neimaerMove = new LAnimationTimeline(data, list);
	player.setAction(5);
	player.speed = 10;
	neimaerMove.x = 550;
	neimaerMove.y = 350;
	backGroundLayer.addChild(neimaerMove);
}