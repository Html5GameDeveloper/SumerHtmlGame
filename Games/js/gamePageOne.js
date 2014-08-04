
function gamePageOne(){
 //SysSecondOne = parseInt(20);
     clock = 1;
	   if(clock == 1){
     timeOne();
	 //console.warn("clock"+clock);
     t = setInterval(timeOne, 1000);
	// clock = 0;
  }

   // LGlobal.box2d = new LBox2d();
    backGroundLayer.die();
    backGroundLayer.removeAllChild();
    backGroundPic = new LSprite();
    backGroundPic = new LBitmap(new LBitmapData(imglist["backGround"]));
    backGroundLayer.addChild(backGroundPic);

    backGroundLayer.addChild(cxtOne);

    //设置游戏边界函数
    Bound();
    onup();

    //浮力效果初始化
     buoyancyController = new LGlobal.box2d.b2BuoyancyController();
    buoyancyController.offset = -1/LGlobal.box2d.drawScale;
    buoyancyController.density = 3;
    buoyancyController.linearDrag = 10;
    buoyancyController.angularDrag = 6;
    LGlobal.box2d.world.AddController(buoyancyController);

    var buoyancyControllerLayer = new LSprite();
    buoyancyControllerLayer.graphics.drawRect(0,"#ffffff",[0,0, 900, 640],false);
    buoyancyControllerLayer.alpha = 0.2;
    backGroundLayer.addChild(buoyancyControllerLayer);

    //导入音乐播放按钮图片
    musicBtn = new LSprite();
    musicBtn.x = 715;
    musicBtn.y = 5;
    backGroundLayer.addChild(musicBtn);
    var bitmap = new LBitmapData(imglist['whiteBtn2']);
    musicBtn.graphics.beginBitmapFill(bitmap);
    musicBtn.graphics.drawRect(1,"#000",[0,0,41,29],false);
    musicBtn.addEventListener(LMouseEvent.MOUSE_UP,onup);

   //-----------玩家1出现------------

    selfName = new LSprite();
    var w=0;
    var h=0;
    selfName.x=(LGlobal.width - w) * 0.5;
    selfName.y=(LGlobal.height - h) * 0.5;


	if (temp==0){
		var bitmapMeixi= new LBitmapData(imglist["meixi"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
	if (temp==1){
		var bitmapMeixi= new LBitmapData(imglist["neimaer"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
	if (temp==2){
		var bitmapMeixi= new LBitmapData(imglist["luoyisi"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
	if (temp==3){
		var bitmapMeixi= new LBitmapData(imglist["fanpeixi"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
    
    selfName.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    selfName.addBodyCircle(40,40,40,1,3,0.2,0.9);
    selfName.setBodyMouseJoint(true);
    buoyancyController.AddBody(selfName.box2dBody);
    backGroundLayer.addChild(selfName);

    createMouseJoint(selfName.x, selfName.y);
    backGroundLayer.addEventListener(LMouseEvent.MOUSE_MOVE,onMouseMove);


    //-----玩家2出现-----
    enemyName=new LSprite();
    enemyName.x=500;
    enemyName.y=300;
    backGroundLayer.addChild(enemyName);
	
  if (tempEn==0){
		var bitmapNeimaer= new LBitmapData(imglist["meixi"]);
		 enemyName.graphics.beginBitmapFill(bitmapNeimaer);
  }
   if (tempEn==1){
		var bitmapNeimaer= new LBitmapData(imglist["neimaer"]);
		 enemyName.graphics.beginBitmapFill(bitmapNeimaer);
  }
   if (tempEn==2){
		var bitmapNeimaer= new LBitmapData(imglist["luoyisi"]);
		 enemyName.graphics.beginBitmapFill(bitmapNeimaer);
  }
   if (tempEn==3){
		var bitmapNeimaer= new LBitmapData(imglist["fanpeixi"]);
		 enemyName.graphics.beginBitmapFill(bitmapNeimaer);
  }
   
    enemyName.graphics.drawArc(1,"#000",[40,40,40,0,2*Math.PI],false);
    enemyName.addBodyCircle(40,40,40,1,3,0.2,0.9);
    //enemyName.setBodyMouseJoint(true);
   buoyancyController.AddBody(enemyName.box2dBody);
    //setBallLocation();
    //-----足球-----

    ballLayer = new LSprite();
    ballLayer.x=450;
    ballLayer.y=300;
    backGroundLayer.addChild(ballLayer);
    var bitmap = new LBitmapData(imglist["football"]);
    ballLayer.graphics.beginBitmapFill(bitmap);
    ballLayer.graphics.drawArc(1,"#000",[20,20,20,0,2*Math.PI],false);
    ballLayer.addBodyCircle(20,20,20,1,3,0.1,2.0);
    buoyancyController.AddBody(ballLayer.box2dBody);

    //显示国旗self
    selfBitmap.x = 65;
    selfBitmap.y = 40;
    selfBitmap.scaleX = 0.4;
    selfBitmap.scaleY = 0.4;
    backGroundLayer.addChild(selfBitmap);

    //显示国旗enemy
    enemyBitmap.x = 750;
    enemyBitmap.y = 40;
    enemyBitmap.scaleX = 0.4;
    enemyBitmap.scaleY = 0.4;
    backGroundLayer.addChild(enemyBitmap);
	//----------设置右边球门------------
    RightDoor=new LSprite();
    RightDoor.x=825;
    RightDoor.y=340;
    backGroundLayer.addChild(RightDoor);
    RightDoor.addBodyPolygon(35,105,0,1,3,0,1);


//-----设置左边球门-----
    LeftDoor=new LSprite();
    LeftDoor.x=80;
    LeftDoor.y=340;
    backGroundLayer.addChild(LeftDoor);
    LeftDoor.addBodyPolygon(35,105,0,1,3,0,1);
    scoreText();
    onup();
    Bound();
//退出游戏
	var buttonExit = new LButtonSample1("退出游戏");
    buttonExit.x =780;
    buttonExit.y = 5;
	backGroundLayer.addChild(buttonExit);
    buttonExit.addEventListener(LMouseEvent.MOUSE_DOWN,Exit);

}

	function Exit(){
		 SysSecondOne = parseInt(startTime);
	     choisePage();
        selfScore = 0;
        enemyScore = 0;
	}

//------------关节的设定----------------------
function createMouseJoint(x, y) {
    var b = selfName.box2dBody, scale = LGlobal.box2d.drawScale;
    var jointDef = new LGlobal.box2d.b2MouseJointDef();
    jointDef.bodyA = LGlobal.box2d.world.GetGroundBody();
    jointDef.bodyB = b;
    jointDef.collideConnected = true;
    jointDef.maxForce = 300000.0 * b.GetMass();
    jointDef.target.Set(x / scale+1.2, y / scale+1.2);
    mouseJoint = LGlobal.box2d.world.CreateJoint(jointDef);
    b.SetAwake(true);


}

function onMouseMove(event){
    var mX = event.offsetX / LGlobal.box2d.drawScale,
        mY = event.offsetY / LGlobal.box2d.drawScale;
    mouseJoint.SetTarget(new LGlobal.box2d.b2Vec2(mX, mY));

}



function timeOne() {
    if (SysSecondOne > 0) {
        SysSecondOne = SysSecondOne - 1;
        var second = Math.floor(SysSecondOne % 60);             // 计算秒
        var minite = Math.floor((SysSecondOne / 60) % 60);      //计算分
        var hour = Math.floor((SysSecondOne / 3600) % 24);      //计算小时
        var day = Math.floor((SysSecondOne / 3600) / 24);        //计算天

        cxtOne.size = '18';
        cxtOne.color = '#fff';
        cxtOne.x = 0;
        cxtOne.y = 0;
        //cxtOne.text = hour + ":" + minite + ":" + second + "";
        cxtOne.text = "距离游戏结束还有："+second + "秒";
    }
	
	
	if(SysSecondOne == 0)
		{//剩余时间小于或等于0的时候，就停止间隔函数
        window.clearInterval(cxtOne.timer);
        //console.warn("Game OVer");
        SysSecondOne = -1;
		 backGroundLayer.die();
        backGroundLayer.removeAllChild();
		gamePageOver();
		ocnsole.warn("run");
        
        //这里可以添加倒计时时间为0后需要执行的事件
    }
}

function gamePageOver(){
    //console.warn("gameOvePage");
    var gameOverLayer = new LSprite();
    var gameOverText = new LTextField();
    gameOverLayer.graphics.drawRect(1,"#000",[0,0,900,640],true,"#000");
    gameOverText.text = "GAME OVER";
    gameOverText.x = 300;
    gameOverText.y = 300;
    gameOverText.size = 40;
    gameOverText.color = "#fff";
	gameOverLayer.addEventListener(LMouseEvent.MOUSE_DOWN,upLoadResult);
    backGroundLayer.addChild(gameOverLayer);
    gameOverLayer.addChild(gameOverText);
	
	


}

function upLoadResult(){

	var upLoadResultLayer = new LSprite();
	var upLoadResultSelf = new LTextField();
	var upLoadResultTitle = new LTextField();
	
	upLoadResultLayer.graphics.drawRect(1,"#000",[0,0,900,640],true,"#000");
	upLoadResultTitle = new LTextField();
	upLoadResultTitle.text = "您的最后得分为"; 
	upLoadResultTitle.x = 280;
	upLoadResultTitle.y = 50;
	upLoadResultTitle.size = 55;
	upLoadResultTitle.color = "#FFF";
	
	
	upLoadResultSelf.text = selfScore;
	upLoadResultSelf.x = 100;
	upLoadResultSelf.y = 200;
	upLoadResultSelf.size = 40;
	upLoadResultSelf.color = "#fff";
	backGroundLayer.addChild(upLoadResultLayer);
	upLoadResultLayer.addChild(upLoadResultSelf);
	upLoadResultLayer.addChild(upLoadResultTitle);
	

}
