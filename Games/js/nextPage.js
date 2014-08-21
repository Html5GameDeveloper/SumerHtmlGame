function nextPage(){
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
    var backLayer1 = new LSprite();
	backLayer1 = new LBitmap(new LBitmapData(imglist["loginMan"]));
	//backLayer.graphics.drawRect(1, "#000", [0, 0, 900, 640], true, "#000");
	backGroundLayer.addChild(backLayer1);
		
	
	var next = new LTextField();
	next.text = "恭喜您通过第一关";
	next.x = 30;
	next.y = 40;
	next.color = "#f00";
	backGroundLayer.addChild(next);
	

}