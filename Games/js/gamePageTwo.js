
function gamePageTwo(){
    backGroundLayer.die();
    backGroundLayer.removeAllChild();
    var backGroundPic = new LSprite();
    backGroundPic=new LBitmap(new LBitmapData(imglist["backGroundTwo"]));
    backGroundLayer.addChild(backGroundPic);

    //设置游戏边界函数
    Bound();
    onup();

    //浮力效果初始化
    var buoyancyController = new LGlobal.box2d.b2BuoyancyController();
    buoyancyController.offset = -1/LGlobal.box2d.drawScale;
    buoyancyController.density = 3;
    buoyancyController.linearDrag = 10;
    buoyancyController.angularDrag = 6;
    LGlobal.box2d.world.AddController(buoyancyController);

    var buoyancyControllerLayer = new LSprite();
    buoyancyControllerLayer.graphics.drawRect(0,"#ffffff",[0,0, 900, 600],false);
    buoyancyControllerLayer.alpha = 0.2;
    backGroundLayer.addChild(buoyancyControllerLayer);

    //导入音乐播放按钮图片
    musicBtn = new LSprite();
    musicBtn.x = 850;
    musicBtn.y = 10;
    backGroundLayer.addChild(musicBtn);
    var bitmap = new LBitmapData(imglist['whiteBtn2']);
    musicBtn.graphics.beginBitmapFill(bitmap);
    musicBtn.graphics.drawRect(1,"#000",[0,0,41,29],false);
    //  addChild(musicBtn);

    musicBtn.addEventListener(LMouseEvent.MOUSE_UP,onup);

    //-----------玩家1出现（梅西）------------
    var firstPlayerLayer=new LSprite();
    firstPlayerLayer.x=200;
    firstPlayerLayer.y=300;
    backGroundLayer.addChild(firstPlayerLayer);
    var bitmapMeixi= new LBitmapData(imglist["meixi"]);
    firstPlayerLayer.graphics.beginBitmapFill(bitmapMeixi);
    firstPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    firstPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    firstPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(firstPlayerLayer.box2dBody);


    //-----------玩家1出现（梅西）------------
    var thirdPlayerLayer=new LSprite();
    thirdPlayerLayer.x=200;
    thirdPlayerLayer.y=500;
    backGroundLayer.addChild(thirdPlayerLayer);
    var bitmapLuomeiluo= new LBitmapData(imglist["luomeiluo"]);
    thirdPlayerLayer.graphics.beginBitmapFill(bitmapLuomeiluo);
    thirdPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    thirdPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    thirdPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(thirdPlayerLayer.box2dBody);


    //-----玩家2出现（内马尔）-----
    secondPlayerLayer=new LSprite();
    secondPlayerLayer.x=500;
    secondPlayerLayer.y=300;
    backGroundLayer.addChild(secondPlayerLayer);
    var bitmapNeimaer= new LBitmapData(imglist["neimaer"]);
    secondPlayerLayer.graphics.beginBitmapFill(bitmapNeimaer);
    secondPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    secondPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    secondPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(secondPlayerLayer.box2dBody);

    //-----玩家2出现（内马尔）-----
    fourPlayerLayer=new LSprite();
    fourPlayerLayer.x=500;
    fourPlayerLayer.y=400;
    backGroundLayer.addChild(fourPlayerLayer);
    var bitmapBrailman= new LBitmapData(imglist["Brailman"]);
    fourPlayerLayer.graphics.beginBitmapFill(bitmapBrailman);
    fourPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    fourPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    fourPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(fourPlayerLayer.box2dBody);



    //-----足球-----
    ballLayer = new LSprite();
    ballLayer.x=450;
    ballLayer.y=300;
    backGroundLayer.addChild(ballLayer);
    var bitmap = new LBitmapData(imglist["football"]);
    ballLayer.graphics.beginBitmapFill(bitmap);
    ballLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
    ballLayer.addBodyCircle(20,20,20,1,3,0.01,2.5);
    buoyancyController.AddBody(ballLayer.box2dBody);

    showFlag.push(new LBitmapData(imglist["Argentina"]));
    showFlag.push(new LBitmapData(imglist["Brazil"]));

    //显示国旗Argentina
    var Argentina = new LBitmap(showFlag[0]);
    Argentina.x =50;
    Argentina.y = 5;
    backGroundLayer.addChild(Argentina);

    //显示国旗Brazil
    var Brazil = new LBitmap(showFlag[1]);
    Brazil.x = 770;
    Brazil.y = 5;
    backGroundLayer.addChild(Brazil);

    RightDoor=new LSprite();
    RightDoor.x=825;
    RightDoor.y=300;
    backGroundLayer.addChild(RightDoor);
    RightDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(RightDoor.box2dBody);


//-----设置左边球门-----
    LeftDoor=new LSprite();
    LeftDoor.x=80;
    LeftDoor.y=300;
    backGroundLayer.addChild(LeftDoor);
    LeftDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(LeftDoor.box2dBody);

    scoreText();
    onup();
    Bound();
//退出游戏
    var buttonExit = new LButtonSample1("退出游戏");
    buttonExit.x =790;
    buttonExit.y = 567;
    backGroundLayer.addChild(buttonExit);
    buttonExit.addEventListener(LMouseEvent.MOUSE_DOWN,Exit);
}
function Exit(){
    choisePage();
}










//------------------------------------得分初始化场景---------------------------------------------
function scoreReset(){
    //backGroundLayer.die();
    backGroundLayer.removeChild(firstPlayerLayer);
    backGroundLayer.removeChild(secondPlayerLayer);



	console.log(scoreFirst);
	console.log(scoreSecond);
	
	
    backLayer = new LSprite();
    backLayer.graphics.drawRect(1,"#fff",[0,0,900,600],true,"#000");
    backGroundLayer.addChild(backLayer);

    var chioceTitle=new LTextField();

    chioceTitle.x=240;
    chioceTitle.y=450;
    chioceTitle.size=55;
    chioceTitle.color="#0f0";
    chioceTitle.text="恭喜您进球了";
    backLayer.addChild(chioceTitle);

    backLayer1 = new LSprite();
    backLayer1.x = 30;
    backLayer1.y = 100;
    backLayer.addChild(backLayer1);
    var  bitmap = new LBitmapData(imglist['backLayer1']);
    backLayer1.graphics.beginBitmapFill(bitmap);
    backLayer1.graphics.drawRect(1,"#000",[0,0,385,256],false);
    backLayer1.addEventListener(LMouseEvent.MOUSE_UP,gamePageOne);

	
	/*
    var chioceSingle =new LTextField();
    chioceSingle.x=160;
    chioceSingle.y=370;
    chioceSingle.size=25;
    chioceSingle.color="white";
    chioceSingle.text="单机模式";
    backLayer.addChild(chioceSingle);
	
	*/

    backLayer2 = new LSprite();
    backLayer2.x = 475;
    backLayer2.y = 100;
    backLayer.addChild(backLayer2);
    var  bitmap = new LBitmapData(imglist['backLayer2']);
    backLayer2.graphics.beginBitmapFill(bitmap);
    backLayer2.graphics.drawRect(1,"#000",[0,0,385,256],false);
    backLayer2.addEventListener(LMouseEvent.MOUSE_UP,gamePageThree);
	/*
    var chioceMore =new LTextField();
    chioceMore.x=600;
    chioceMore.y=370;
    chioceMore.size=25;
    chioceMore.color="white";
    chioceMore.text="多人对战";
    backLayer.addChild(chioceMore);
    onup();
	*/
}

function gamePageThree(){
    
    
	
	
	
    var backGroundPic = new LSprite();
    backGroundPic=new LBitmap(new LBitmapData(imglist["backGroundTwo"]));
    backGroundLayer.addChild(backGroundPic);

    //设置游戏边界函数
    Bound();
    onup();

    //浮力效果初始化
    var buoyancyController = new LGlobal.box2d.b2BuoyancyController();
    buoyancyController.offset = -1/LGlobal.box2d.drawScale;
    buoyancyController.density = 3;
    buoyancyController.linearDrag = 10;
    buoyancyController.angularDrag = 6;
    LGlobal.box2d.world.AddController(buoyancyController);

    var buoyancyControllerLayer = new LSprite();
    buoyancyControllerLayer.graphics.drawRect(0,"#ffffff",[0,0, 900, 600],false);
    buoyancyControllerLayer.alpha = 0.2;
    backGroundLayer.addChild(buoyancyControllerLayer);

    //导入音乐播放按钮图片
    musicBtn = new LSprite();
    musicBtn.x = 850;
    musicBtn.y = 10;
    backGroundLayer.addChild(musicBtn);
    var bitmap = new LBitmapData(imglist['whiteBtn2']);
    musicBtn.graphics.beginBitmapFill(bitmap);
    musicBtn.graphics.drawRect(1,"#000",[0,0,41,29],false);
    //  addChild(musicBtn);

    musicBtn.addEventListener(LMouseEvent.MOUSE_UP,onup);

    //-----------玩家1出现（梅西）------------
    var firstPlayerLayer=new LSprite();
    firstPlayerLayer.x=200;
    firstPlayerLayer.y=300;
    backGroundLayer.addChild(firstPlayerLayer);
    var bitmapMeixi= new LBitmapData(imglist["meixi"]);
    firstPlayerLayer.graphics.beginBitmapFill(bitmapMeixi);
    firstPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    firstPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    firstPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(firstPlayerLayer.box2dBody);


    //-----------玩家1出现（梅西）------------
    var thirdPlayerLayer=new LSprite();
    thirdPlayerLayer.x=200;
    thirdPlayerLayer.y=500;
    backGroundLayer.addChild(thirdPlayerLayer);
    var bitmapLuomeiluo= new LBitmapData(imglist["luomeiluo"]);
    thirdPlayerLayer.graphics.beginBitmapFill(bitmapLuomeiluo);
    thirdPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    thirdPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    thirdPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(thirdPlayerLayer.box2dBody);


    //-----玩家2出现（内马尔）-----
    secondPlayerLayer=new LSprite();
    secondPlayerLayer.x=500;
    secondPlayerLayer.y=300;
    backGroundLayer.addChild(secondPlayerLayer);
    var bitmapNeimaer= new LBitmapData(imglist["neimaer"]);
    secondPlayerLayer.graphics.beginBitmapFill(bitmapNeimaer);
    secondPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    secondPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    secondPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(secondPlayerLayer.box2dBody);

    //-----玩家2出现（内马尔）-----
    fourPlayerLayer=new LSprite();
    fourPlayerLayer.x=500;
    fourPlayerLayer.y=400;
    backGroundLayer.addChild(fourPlayerLayer);
    var bitmapBrailman= new LBitmapData(imglist["Brailman"]);
    fourPlayerLayer.graphics.beginBitmapFill(bitmapBrailman);
    fourPlayerLayer.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    fourPlayerLayer.addBodyCircle(40,40,40,1,3,0.2,0.9);
    fourPlayerLayer.setBodyMouseJoint(true);
    buoyancyController.AddBody(fourPlayerLayer.box2dBody);



    //-----足球-----
    ballLayer = new LSprite();
    ballLayer.x=450;
    ballLayer.y=300;
    backGroundLayer.addChild(ballLayer);
    var bitmap = new LBitmapData(imglist["football"]);
    ballLayer.graphics.beginBitmapFill(bitmap);
    ballLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
    ballLayer.addBodyCircle(20,20,20,1,3,0.01,2.5);
    buoyancyController.AddBody(ballLayer.box2dBody);

    showFlag.push(new LBitmapData(imglist["Argentina"]));
    showFlag.push(new LBitmapData(imglist["Brazil"]));

    //显示国旗Argentina
    var Argentina = new LBitmap(showFlag[0]);
    Argentina.x =50;
    Argentina.y = 5;
    backGroundLayer.addChild(Argentina);

    //显示国旗Brazil
    var Brazil = new LBitmap(showFlag[1]);
    Brazil.x = 770;
    Brazil.y = 5;
    backGroundLayer.addChild(Brazil);

    RightDoor=new LSprite();
    RightDoor.x=825;
    RightDoor.y=300;
    backGroundLayer.addChild(RightDoor);
    RightDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(RightDoor.box2dBody);


//-----设置左边球门-----
    LeftDoor=new LSprite();
    LeftDoor.x=80;
    LeftDoor.y=300;
    backGroundLayer.addChild(LeftDoor);
    LeftDoor.addBodyPolygon(35,105,0,1,3,0,1);//RightDoor.setBodyMouseJoint(true);
    //buoyancyController.AddBody(LeftDoor.box2dBody);

    scoreText();
    onup();
    Bound();
//退出游戏
    var buttonExit = new LButtonSample1("退出游戏");
    buttonExit.x =790;
    buttonExit.y = 567;
    backGroundLayer.addChild(buttonExit);
    buttonExit.addEventListener(LMouseEvent.MOUSE_DOWN,Exit);
}
function Exit(){
    choisePage();
}



//-----------------------------------------------end------------------------------------------------